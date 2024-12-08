/*
@@  Disclaimer: This is a One-Liner Code Editor made for Bootstrap Studio
@@  The component is free of charge for anyone who gets a hold of it.
@@  You may read, modify, and redistribute the code below as you wish.
@@
@@  (Originally) Made by Pedro Ribeiro (a.k.a Beyluta)
@@  Visit: https://www.pedroribeiro.site
@@  Please do not remove or modify this disclaimer.
*/

const $w = (w) => document.getElementById(w);
const editor = $w("code-editor");
const placeholder = $w("one-liner-placeholder");
editor.spellcheck = false;
editor.focus();
editor.blur();
const syntax = new Map([
  ["async", "#224DC9"],
  ["function", "#E74B38"],
  ["let", "#E74B38"],
  ["var", "#E74B38"],
  ["const", "#E74B38"],
  ["await", "#E74B38"],
  ["break", "#E74B38"],
  ["case", "#E74B38"],
  ["catch", "#E74B38"],
  ["class", "#E74B38"],
  ["continue", "#E74B38"],
  ["debugger", "#E74B38"],
  ["default", "#E74B38"],
  ["delete", "#E74B38"],
  ["do", "#E74B38"],
  ["else", "#E74B38"],
  ["enum", "#E74B38"],
  ["export", "#E74B38"],
  ["extends", "#E74B38"],
  ["false", "#E74B38"],
  ["finally", "#E74B38"],
  ["for", "#E74B38"],
  ["function", "#E74B38"],
  ["if", "#E74B38"],
  ["implements", "#E74B38"],
  ["import", "#E74B38"],
  ["in", "#E74B38"],
  ["instanceof", "#E74B38"],
  ["interface", "#E74B38"],
  ["new", "#E74B38"],
  ["null", "#E74B38"],
  ["package", "#E74B38"],
  ["private", "#E74B38"],
  ["protected", "#E74B38"],
  ["public", "#E74B38"],
  ["return", "#E74B38"],
  ["super", "#224DC9"],
  ["switch", "#E74B38"],
  ["static", "#E74B38"],
  ["this", "#224DC9"],
  ["throw", "#E74B38"],
  ["try", "#E74B38"],
  ["true", "#E74B38"],
  ["typeof", "#E74B38"],
  ["void", "#E74B38"],
  ["while", "#E74B38"],
  ["while", "#E74B38"],
  ["yield", "#E74B38"],
]);

const setCursorEndPos = function () {
  const selection = window.getSelection();
  const range = document.createRange();
  selection.removeAllRanges();
  range.selectNodeContents(editor);
  range.collapse(false);
  selection.addRange(range);
  editor.focus();
};
const highlight = function (words) {
  let str;
  for (let word of words) {
    if (syntax.has(word)) {
      str += `<span style="color: ${syntax.get(word)}">${word}</span>`;
    } else {
      str += word;
    }
    str += "&nbsp;";
  }
  return str.slice(9);
};

editor.onkeyup = function () {
  const text = editor.innerText;
  const words = text.split(/\s+/);
  const word = words[words.length - 1];

  if (syntax.has(word)) {
    editor.innerHTML = highlight(words);
    setCursorEndPos();
  }
};

editor.onclick = function () {
  placeholder.remove();
};
