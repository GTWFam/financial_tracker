// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body {\n  overflow: hidden;\n}\n\n.whole-page {\n  height: 100vh;\n  max-width: 100vw;\n}\n\n#logout-btn {\n  position: absolute;\n  right: 4%;\n  top: 7%;\n}\n\n#login-error.active {\n  text-align: center;\n  border: 1px solid;\n  padding: 3%;\n  margin-bottom: 2%;\n  color: #d8000c;\n  background-color: #ffbaba;\n}\n\n#addEntryOverlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #f3f3f3;\n  transition: all 1s ease-in-out;\n}\n\n#addEntryOverlay.closed {\n  transform: translateY(-100%);\n  opacity: 0;\n}\n\n#addEntryOverlay.opened {\n  transform: translateY(0%);\n  opacity: 1;\n}\n\n.success {\n  background-color: #d1e7dd;\n}\n\n.danger {\n  background-color: #f8d7da;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}