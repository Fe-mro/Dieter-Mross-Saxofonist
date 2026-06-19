(function () {
  var thumb = document.getElementById('videoThumb');

  thumb.onerror = function () {
    this.src = 'https://img.youtube.com/vi/fogb0ZEgv3A/hqdefault.jpg';
  };

  var toggle = document.querySelector('.header__toggle');
  var nav = document.querySelector('.header__nav');

  toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
    var expanded = nav.classList.contains('open');
    toggle.setAttribute('aria-label', expanded ? 'Menü schließen' : 'Menü öffnen');
  });

  document.querySelectorAll('.header__link').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-label', 'Menü öffnen');
    });
  });
})();
