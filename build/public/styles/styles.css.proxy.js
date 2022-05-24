// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body {\n  overflow: hidden;\n}\n\n.whole-page {\n  height: 100vh;\n  max-width: 100vw;\n}\n\n.last-row {\n  border-top: solid 2px #000 !important;\n}\n\n#logout-btn {\n  position: absolute;\n  right: 4%;\n  top: 7%;\n}\n\n#login-error.active {\n  text-align: center;\n  border: 1px solid;\n  padding: 3%;\n  margin-bottom: 2%;\n  color: #d8000c;\n  background-color: #ffbaba;\n}\n\n#addEntryOverlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #f3f3f3;\n  transition: all 1s ease-in-out;\n}\n\n#addEntryOverlay.closed {\n  transform: translateY(-100%);\n  opacity: 0;\n}\n\n#addEntryOverlay.opened {\n  transform: translateY(0%);\n  opacity: 1;\n}\n\n.hidden {\n  display: none;\n}\n\n.success,\n.danger {\n  background-position: center;\n  background-size: cover;\n}\n\n.success {\n  background-image: url(/public/img/dollar-bill.png);\n}\n\n.danger {\n  background-image: url(/public/img/dollar-bill-red.png);\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.dropdown-menu {\n  height: 50vh;\n  overflow-y: scroll;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}