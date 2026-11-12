// Adds a "copy to clipboard" button to every highlighted code block.
// Copies only the code lines (.cl), so line numbers are left out.
(function () {
  if (!navigator.clipboard) return;

  document.querySelectorAll('div.highlight').forEach(function (block) {
    var pre = block.querySelector('pre');
    if (!pre) return;

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'code-copy-btn';
    button.title = 'Copy to clipboard';
    button.setAttribute('aria-label', 'Copy to clipboard');
    button.innerHTML = '<i class="fa-solid fa-copy" aria-hidden="true"></i>';

    button.addEventListener('click', function () {
      var lines = pre.querySelectorAll('.cl');
      var text = lines.length
        ? Array.prototype.map.call(lines, function (l) { return l.textContent; }).join('')
        : pre.textContent;

      navigator.clipboard.writeText(text.replace(/\n$/, '')).then(function () {
        button.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i>';
        button.classList.add('copied');
        setTimeout(function () {
          button.innerHTML = '<i class="fa-solid fa-copy" aria-hidden="true"></i>';
          button.classList.remove('copied');
        }, 1500);
      });
    });

    block.appendChild(button);
  });
})();
