require("dotenv").config();
const express = require("express");
const app = express();
const mongodb = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

const uri =
  "mongodb+srv://" +
  process.env.DB_USER +
  ":" +
  process.env.DB_PASS +
  "@" +
  process.env.DB_HOST;

const client = new mongodb.MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let collection = null;

client
  .connect()
  .then(() => {
    return client.db("GTWFinApp").collection("Users");
  })
  .then((__collection) => {
    collection = __collection;
    return collection
      .find({ _id: ObjectId("6147f85cd90f4c042137e74b") })
      .toArray();
  })
  .then(console.log);

app.get("/", checkAuthenticated, (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/login", checkNotAuthenticated, (req, res) => {
  res.sendFile(__dirname + "/build/login.html");
});

app.get("/dashboard", checkAuthenticated, (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/register", checkNotAuthenticated, (req, res) => {
  res.sendFile(__dirname + "/build/register.html");
});

const authUser = async (username, password, next) => {
  let user = await collection.find({ username: username }).toArray();
  user = user[0];
  if (user === undefined) {
    return next(null, false, {
      message: "The username and password combination is wrong",
    });
  }

  if (password === user.password) {
    return next(null, user);
  } else {
    return next(null, false, {
      message: "The username and password combination is wrong",
    });
  }
};

let getUserbyId = async (id) => {
  if (collection !== null) {
    let users = await collection.find({ _id: id }).toArray();
    return users[0];
  } else {
    return null;
  }
};

let getIdByUsername = async (username) => {
  if (collection !== null) {
    let user = await collection.find({ username: username }).toArray();
    if (user[0] === undefined) {
      return "";
    }
    return user[0]._id;
  } else {
    null;
  }
};

passport.use(new LocalStrategy({}, authUser));
passport.serializeUser((user, next) => next(null, user._id));
passport.deserializeUser((id, next) => {
  next(null, getUserbyId(id));
});

app.post("/login", checkNotAuthenticated, async (req, res, next) => {
  let userID = await getIdByUsername(req.body.username);
  passport.authenticate("local", {
    successRedirect: "/dashboard?userID=" + userID,
    failureRedirect: "/login",
    failureFlash: true,
  })(req, res, next);
});

app.get("/loginMessage", (req, res) => {
  let errorArray = req.flash().error;
  if (errorArray !== undefined) {
    res.json(errorArray.pop());
    res.end();
  }
});

app.delete("/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
});

app.post("/signUp", async (req, res) => {
  if (collection === null) {
    alert("Failed to connect to the database!");
    return res.redirect("/register");
  }

  try {
    collection.insertOne({
      username: req.body.username,
      password: req.body.password,
      entries: [
        [], // Jan
        [], // Feb
        [], // Mar
        [], // Apr
        [], // May
        [], // Jun
        [], // Jul
        [], // Aug
        [], // Sep
        [], // Oct
        [], // Nov
        [], // Dec
      ],
      categories: [],
    });
    return res.redirect("/");
  } catch (e) {
    alert("Failed to register the user: " + e.message);
    return res.redirect("/register");
  }
});

app.get("/getUsers", async (req, res) => {
  if (collection === null) {
    alert("Failed to connect to database!");
    return res.redirect("/register");
  }
  let users = await collection.find({}).toArray();
  let usernameList = [];
  users.forEach((element) => {
    usernameList.push(element.username);
  });
  res.json(usernameList);
  res.end();
});

app.get("/getUserData", async (req, res) => {
  let userID = req.query.id;
  let users = await collection.find({ _id: ObjectId(userID) }).toArray();
  let userData = users[0];
  delete userData["password"];
  delete userData["_id"];
  console.log(userData);
  let prev_sum = 0;
  for (let i = 0; i < userData["entries"].length; i++) {
    let arr = userData["entries"][i];
    prev_sum += arr.reduce((acc, a) => acc + parseInt(a["amount"]), 0);
    arr.unshift({
      balance: prev_sum,
    });
  }
  res.json(userData);
  res.end();
});

app.post("/addEntry", async (req, res) => {
  let users = await collection.find({ _id: ObjectId(req.body.id) }).toArray();
  let m = new Date(Date.parse(req.body.month + "1, 2022")).getMonth();
  let userEntries = users[0].entries;
  let d = new Date(Date.parse(req.body.date));
  d =
    (d.getDate() + 1 < 10 ? "0" + (d.getDate() + 1) : d.getDate() + 1) +
    "/" +
    (d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) +
    "/" +
    d.getFullYear();
  userEntries[m].push({
    date: d,
    from: req.body.from,
    amount: req.body.expense ? "-" + req.body.amount : req.body.amount,
    category: req.body.category,
  });
  try {
    collection.updateOne(
      { _id: ObjectId(req.body.id) },
      { $set: { entries: userEntries } }
    );
    return res.redirect("/dashboard?userID=" + req.body.id);
  } catch (e) {
    alert("Failed to add a transaction: " + e.message);
    return;
  }
});

app.post("/removeEntry", async (req, res) => {
  console.log(
    req.query.id,
    req.query.date,
    req.query.from,
    req.query.amount,
    req.query.category
  );
  let users = await collection.find({ _id: ObjectId(req.query.id) }).toArray();
  let m = new Date(Date.parse(req.query.month + "1, 2022")).getMonth();
  let userEntries = users[0].entries;
  let entry = {
    date: req.query.date,
    from: req.query.from,
    amount: req.query.amount,
    category: req.query.category,
  };
  let index = userEntries[m].findIndex((e) => {
    return (
      e.date === entry.date &&
      e.from === entry.from &&
      e.amount === entry.amount &&
      e.category === entry.category
    );
  });
  userEntries[m].splice(index, 1);
  try {
    collection.updateOne(
      { _id: ObjectId(req.query.id) },
      { $set: { entries: userEntries } }
    );
    res.json("Deleted!");
    res.end();
  } catch (e) {
    alert("Failed to remove an entry: " + e.message);
  }
});

app.post("/addCategory", async (req, res) => {
  let users = await collection.find({ _id: ObjectId(req.body.id) }).toArray();
  let userCategories = users[0].categories;
  let category = capitalize(req.body.addCategory);
  userCategories[category] = req.body.categoryColor;
  try {
    collection.updateOne(
      { _id: ObjectId(req.body.id) },
      { $set: { categories: userCategories } }
    );
    return res.redirect("/dashboard?userID=" + req.body.id);
  } catch (e) {
    alert("Failed to add a transaction: " + e.message);
    return;
  }
});

async function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

function capitalize(str) {
  let lower = str.toLowerCase();
  let upper = str.charAt(0).toUpperCase();
  return upper + lower.slice(1);
}

app.use(express.static("build"));

app.listen(process.env.PORT || 3000);
