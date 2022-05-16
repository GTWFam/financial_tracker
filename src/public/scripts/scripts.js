export function contrastFont(color) {
  let red = 0;
  let green = 0;
  let blue = 0;

  color = color.substring(1);
  red = parseInt(color.substring(0, 2), 16);
  green = parseInt(color.substring(2, 4), 16);
  blue = parseInt(color.substring(4), 16);

  let luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;

  if (luminance > 0.5) {
    return "#000";
  } else {
    return "#FFF";
  }
}
