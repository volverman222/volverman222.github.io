// Botón ES / EN: abre la página actual traducida al inglés con Google Translate.
// (Solo funciona cuando la web está publicada en internet, no abriendo el archivo en local.)
document.querySelectorAll('.translation-button').forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (!/^https?:/.test(location.protocol)) { alert('La traducción funciona cuando la web está publicada online.'); return; }
    window.open('https://translate.google.com/translate?sl=es&tl=en&u=' + encodeURIComponent(location.href), '_blank', 'noopener');
  });
});
