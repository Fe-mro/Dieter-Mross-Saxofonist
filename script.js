(function () {
  var thumb = document.getElementById('videoThumb');
  if (thumb) {
    thumb.onerror = function () {
      this.src = 'https://img.youtube.com/vi/fogb0ZEgv3A/hqdefault.jpg';
    };
  }

  var currentLang = localStorage.getItem('lang') || 'de';

  var translations = {
    de: {
      'logo': 'Dieter Mross – Saxofonist & Sänger',
      'nav-video': 'Video',
      'nav-about': 'Über mich',
      'nav-formats': 'Formate',
      'nav-benefits': 'Vorteile',
      'nav-contact': 'Kontakt',
      'hero-subtitle': 'Saxophonist · Baden-Württemberg',
      'hero-title': 'Dieter Mross –<br>Professioneller Saxophonist<br>für Ihre Veranstaltung',
      'hero-text': 'Exzellente Saxophon-Unterhaltung für jeden Anlass: Von intimen Abendveranstaltungen bis hin zu großen Hochzeiten und Geburtstagen. Flexibles Repertoire, professionelle Auftritte und musikalische Vielseitigkeit.',
      'hero-btn': 'Unverbindlich anfragen',
      'video-title': 'Eindrücke & Livemitschnitte',
      'video-subtitle': 'Verschaffen Sie sich einen ersten Eindruck von Dieter Mross\' Saxophon-Spiel.',
      'video-alt': 'Video Vorschau',
      'video-aria': 'Video auf YouTube öffnen',
      'about-title': 'Über Dieter Mross: Saxophonist mit Leidenschaft',
      'about-p1': 'Dieter Mross ist ein professioneller Saxophonist mit Sitz im Raum Sigmaringen/Mengen (Bad Saulgau) und ist im gesamten süddeutschen Raum, Berlin und auf Teneriffa aktiv. Er zählt zu den erfahrenen Jazz- und Blues-Musikern der Region. Mit seinem einfallsreichen, melodischen Spiel bereichert er seit vielen Jahren Veranstaltungen unterschiedlichster Art – von kunstvollen Vernissagen über stimmungsvolle Weihnachtsmärkte bis hin zu Open-Air-Konzerten vor historischen Kulissen wie dem Gammertinger Schloss.',
      'about-p2': 'Sein musikalisches Spektrum ist enorm breit gefächert: Von klassischem <strong>Swing</strong> und <strong>Latin</strong> über <strong>Bossa Nova</strong> und <strong>Blues</strong> bis hin zu modernen Pop-Arrangements und Filmmusik. Ob als Solokünstler, im Duo oder mit voller Band – Dieter Mross passt sein Repertoire flexibel an den Anlass und die gewünschte Stimmung an.',
      'formats-title': 'Musikalische Formate & Repertoire',
      'formats-subtitle': 'Dieter Mross bietet verschiedene musikalische Konfigurationen an, um genau auf die Bedürfnisse Ihrer Veranstaltung einzugehen.',
      'card1-title': 'Solo-Performance mit Playalongs',
      'card1-text': 'Gefühlvolles Saxophon-Solo, unterstützt mit über <strong>400 hochwertigen Playalongs</strong> aus den Bereichen Pop, Jazz, Samba, Latin und Filmmusik. Perfekt für Cocktail-Partys, Hintergrundmusik bei Empfängen oder gastronomische Umgebungen.',
      'card2-title': 'Das Duo',
      'card2-text': 'Die Duo-Besetzung mit Klavier oder Gitarre ist ideal für Geburtstage, Hochzeiten, Vernissagen oder kleinere Feiern, wo eine persönliche, unverkrampfte Atmosphäre gewünscht ist.',
      'card3-title': 'Die volle Band',
      'card3-text': 'Für Events, die richtig "grooven" dürfen. Mit Schlagzeug, Bass, Gesang und Gitarre/Klavier entsteht ein volles Klangbild, das jede Party zum Highlight macht.',
      'audio-title': 'Duo hören',
      'audio-subtitle': 'Duo mit Felix Mross (piano) und Dieter Mross (saxofon, vocals).',
      'audio-wrapper-aria': 'Audio-Player für das Duo',
      'audio-seek-aria': 'Position im Song',
      'audio-play': 'Abspielen',
      'audio-pause': 'Pausieren',
      'benefits-title': 'Ihr Vorteil bei der Buchung von Dieter Mross',
      'benefit1-title': 'Vielseitiges Repertoire',
      'benefit1-text': 'Ob klassischer Jazz, erdiger Blues, lateinamerikanische Rhythmen oder moderne Pop-Hits – es wird jeden Geschmack treffen.',
      'benefit2-title': 'Flexible Besetzung',
      'benefit2-text': 'Wählen Sie die passende Formation für Ihr Event: Solo, Duo oder volle Band mit Gesang.',
      'benefit3-title': 'Erfahrung bei verschiedenen Anlässen',
      'benefit3-text': 'Spezialist für <strong>Hochzeitsmusik</strong>, Firmenfeiern, Galaveranstaltungen, Vernissagen, Weihnachtsmärkte, Open-Air-Konzerte und private Feiern.',
      'benefit4-title': 'Professioneller Auftritt',
      'benefit4-text': 'Zuverlässig, sympathisch und stets auf das Publikum abgestimmt.',
      'contact-title': 'Saxophonist buchen – Jetzt Kontakt aufnehmen',
      'contact-subtitle': 'Sie möchten Dieter Mross für Ihre nächste Veranstaltung, Hochzeit oder Ihr Event buchen?',
      'contact-text': 'Kontaktieren Sie mich gerne für ein <strong>unverbindliches Angebot</strong>. Gemeinsam finden wir die passende musikalische Lösung für Ihren Anlass.',
      'footer': '© 2026 Dieter Mross'
    },
    en: {
      'logo': 'Dieter Mross – Saxophonist & Singer',
      'nav-video': 'Video',
      'nav-about': 'About',
      'nav-formats': 'Formats',
      'nav-benefits': 'Benefits',
      'nav-contact': 'Contact',
      'hero-subtitle': 'Saxophonist · Baden-Württemberg',
      'hero-title': 'Dieter Mross –<br>Professional Saxophonist<br>for Your Event',
      'hero-text': 'Excellent saxophone entertainment for any occasion: from intimate evening events to large weddings and birthdays. Flexible repertoire, professional performances, and musical versatility.',
      'hero-btn': 'Inquire now',
      'video-title': 'Impressions & Live Recordings',
      'video-subtitle': 'Get a first impression of Dieter Mross\' saxophone playing.',
      'video-alt': 'Video Preview',
      'video-aria': 'Open video on YouTube',
      'about-title': 'About Dieter Mross: Saxophonist with Passion',
      'about-p1': 'Dieter Mross is a professional saxophonist based in the Sigmaringen/Mengen (Bad Saulgau) area and is active throughout southern Germany, Berlin, and Tenerife. He is one of the region\'s most experienced jazz and blues musicians. With his inventive, melodic playing, he has enriched a wide variety of events for many years – from artful vernissages and atmospheric Christmas markets to open-air concerts at historic venues such as Gammertingen Castle.',
      'about-p2': 'His musical spectrum is broad: from classic <strong>Swing</strong> and <strong>Latin</strong> to <strong>Bossa Nova</strong> and <strong>Blues</strong>, as well as modern pop arrangements and film music. Whether as a solo artist, in a duo, or with a full band – Dieter Mross adapts his repertoire flexibly to suit the occasion and desired atmosphere.',
      'formats-title': 'Musical Formats & Repertoire',
      'formats-subtitle': 'Dieter Mross offers various musical configurations to perfectly match the needs of your event.',
      'card1-title': 'Solo Performance with Playalongs',
      'card1-text': 'Soulful saxophone solo, supported by over <strong>400 high-quality playalongs</strong> from pop, jazz, samba, Latin, and film music. Perfect for cocktail parties, background music at receptions, or restaurant settings.',
      'card2-title': 'The Duo',
      'card2-text': 'The duo line-up with piano or guitar is ideal for birthdays, weddings, vernissages, or smaller celebrations where a personal, relaxed atmosphere is desired.',
      'card3-title': 'The Full Band',
      'card3-text': 'For events that are meant to groove. With drums, bass, vocals, and guitar/piano, a rich sound is created that turns any party into a highlight.',
      'audio-title': 'Listen to the Duo',
      'audio-subtitle': 'Duo with Felix Mross (piano) and Dieter Mross (saxophone, vocals).',
      'audio-wrapper-aria': 'Audio player for the duo',
      'audio-seek-aria': 'Song position',
      'audio-play': 'Play',
      'audio-pause': 'Pause',
      'benefits-title': 'Your Advantage When Booking Dieter Mross',
      'benefit1-title': 'Versatile Repertoire',
      'benefit1-text': 'Whether classic jazz, earthy blues, Latin American rhythms, or modern pop hits – it will suit every taste.',
      'benefit2-title': 'Flexible Lineup',
      'benefit2-text': 'Choose the right formation for your event: Solo, Duo, or full band with vocals.',
      'benefit3-title': 'Experience with Various Occasions',
      'benefit3-text': 'Specialist for <strong>wedding music</strong>, corporate events, galas, vernissages, Christmas markets, open-air concerts, and private celebrations.',
      'benefit4-title': 'Professional Performance',
      'benefit4-text': 'Reliable, personable, and always in tune with the audience.',
      'contact-title': 'Book a Saxophonist – Get in Touch Now',
      'contact-subtitle': 'Would you like to book Dieter Mross for your next event, wedding, or celebration?',
      'contact-text': 'Feel free to contact me for a <strong>no-obligation quote</strong>. Together we will find the perfect musical solution for your occasion.',
      'footer': '© 2026 Dieter Mross'
    },
    es: {
      'logo': 'Dieter Mross – saxofonista & cantante',
      'nav-video': 'Video',
      'nav-about': 'Sobre mí',
      'nav-formats': 'Formatos',
      'nav-benefits': 'Beneficios',
      'nav-contact': 'Contacto',
      'hero-subtitle': 'Saxofonista · Baden-Württemberg',
      'hero-title': 'Dieter Mross –<br>saxofonista profesional<br>para su evento',
      'hero-text': 'Excelente entretenimiento con saxofón para cualquier ocasión: desde eventos íntimos por la noche hasta grandes bodas y cumpleaños. Repertorio flexible, actuaciones profesionales y versatilidad musical.',
      'hero-btn': 'Consultar ahora',
      'video-title': 'Impresiones y grabaciones en vivo',
      'video-subtitle': 'Obtenga una primera impresión del toque de saxofón de Dieter Mross.',
      'video-alt': 'Vista previa del video',
      'video-aria': 'Abrir video en YouTube',
      'about-title': 'Sobre Dieter Mross: saxofonista con pasión',
      'about-p1': 'Dieter Mross es un saxofonista profesional con sede en el área de Sigmaringen/Mengen (Bad Saulgau) y activo en todo el sur de Alemania, Berlín y Tenerife. Es uno de los músicos de jazz y blues más experimentados de la región. Con su inventivo y melódico estilo, ha enriquecido durante muchos años eventos de todo tipo – desde sofisticadas inauguraciones de galerías y mercados navideños hasta conciertos al aire libre en escenarios históricos como el Castillo de Gammertingen.',
      'about-p2': 'Su espectro musical es amplio: desde el <strong>Swing</strong> clásico y el <strong>Latin</strong> hasta la <strong>Bossa Nova</strong> y el <strong>Blues</strong>, pasando por arreglos pop modernos y música de cine. Ya sea como solista, en dúo o con banda completa – Dieter Mross adapta su repertorio flexiblemente a la ocasión y al ambiente deseado.',
      'formats-title': 'Formatos musicales y repertorio',
      'formats-subtitle': 'Dieter Mross ofrece varias configuraciones musicales para satisfacer las necesidades de su evento.',
      'card1-title': 'Actuación en solitario con pistas',
      'card1-text': 'Solo de saxofón lleno de sentimiento, apoyado por más de <strong>400 pistas de acompañamiento de alta calidad</strong> de pop, jazz, samba, latín y música de cine. Perfecto para cócteles, música ambiental en recepciones o entornos gastronómicos.',
      'card2-title': 'El dúo',
      'card2-text': 'La formación de dúo con piano o guitarra es ideal para cumpleaños, bodas, inauguraciones o celebraciones pequeñas donde se desea un ambiente personal y relajado.',
      'card3-title': 'La banda completa',
      'card3-text': 'Para eventos que deben "groovear". Con batería, bajo, voz y guitarra/piano se crea un sonido completo que convierte cualquier fiesta en un punto culminante.',
      'audio-title': 'Escuchar el dúo',
      'audio-subtitle': 'Dúo con Felix Mross (piano) y Dieter Mross (saxofón, voces).',
      'audio-wrapper-aria': 'Reproductor de audio para el dúo',
      'audio-seek-aria': 'Posición de la canción',
      'audio-play': 'Reproducir',
      'audio-pause': 'Pausar',
      'benefits-title': 'Su ventaja al contratar a Dieter Mross',
      'benefit1-title': 'Repertorio versátil',
      'benefit1-text': 'Ya sea jazz clásico, blues terroso, ritmos latinoamericanos o éxitos pop modernos – se adaptará a todos los gustos.',
      'benefit2-title': 'Formación flexible',
      'benefit2-text': 'Elija la formación adecuada para su evento: Solo, Dúo o banda completa con voz.',
      'benefit3-title': 'Experiencia en diversas ocasiones',
      'benefit3-text': 'Especialista en <strong>música para bodas</strong>, eventos corporativos, galas, inauguraciones, mercados navideños, conciertos al aire libre y celebraciones privadas.',
      'benefit4-title': 'Actuación profesional',
      'benefit4-text': 'Confiable, simpático y siempre en sintonía con el público.',
      'contact-title': 'Contratar saxofonista – contactar ahora',
      'contact-subtitle': '¿Desea contratar a Dieter Mross para su próximo evento, boda o celebración?',
      'contact-text': 'No dude en contactarme para un <strong>presupuesto sin compromiso</strong>. Juntos encontraremos la solución musical adecuada para su ocasión.',
      'footer': '© 2026 Dieter Mross'
    }
  };

  var metaTitle = {
    de: 'Dieter Mross | Saxophonist | Booking',
    en: 'Dieter Mross | Saxophonist | Booking',
    es: 'Dieter Mross | Saxofonista | Reservas'
  };

  var metaDesc = {
    de: 'Dieter Mross – Professioneller Saxophonist für Hochzeiten, Geburtstage, Events & Galas. Vielseitiges Repertoire: Jazz, Blues, Latin, Pop. Jetzt unverbindlich anfragen',
    en: 'Dieter Mross – Professional saxophonist for weddings, birthdays, events & galas. Versatile repertoire: Jazz, Blues, Latin, Pop. Inquire now without obligation.',
    es: 'Dieter Mross – Saxofonista profesional para bodas, cumpleaños, eventos y galas. Repertorio versátil: Jazz, Blues, Latin, Pop. Consulte ahora sin compromiso.'
  };

  function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    document.documentElement.lang = lang;
    document.title = metaTitle[lang];
    document.querySelector('meta[name="description"]').setAttribute('content', metaDesc[lang]);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('alt', translations[lang][key]);
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('aria-label', translations[lang][key]);
      }
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('lang-btn--active', btn.getAttribute('data-lang') === lang);
    });
  }

  var audio = document.getElementById('duoAudio');
  var audioButton = document.getElementById('audioToggle');
  var audioLabel = document.getElementById('audioStateLabel');
  var audioTime = document.getElementById('audioTime');
  var audioDuration = document.getElementById('audioDuration');
  var audioSeek = document.getElementById('audioSeek');

  function formatTime(seconds) {
    if (!isFinite(seconds) || seconds < 0) return '0:00';
    var mins = Math.floor(seconds / 60);
    var secs = Math.floor(seconds % 60);
    return mins + ':' + String(secs).padStart(2, '0');
  }

  function syncAudioUI() {
    if (!audio || !audioButton || !audioLabel) return;
    var playing = !audio.paused;
    audioButton.classList.toggle('is-playing', playing);
    var label = playing ? translations[currentLang]['audio-pause'] : translations[currentLang]['audio-play'];
    audioLabel.textContent = label;
    audioButton.setAttribute('aria-label', label);
  }

  function syncSeekUI() {
    if (!audioSeek || !audio || !audio.duration) return;
    var percent = (audio.currentTime / audio.duration) * 100;
    var fill = 'linear-gradient(90deg, var(--gold) 0%, var(--gold-light) ' + percent + '%, rgba(196, 148, 61, 0.18) ' + percent + '%, rgba(196, 148, 61, 0.18) 100%)';
    audioSeek.style.background = fill;
    audioSeek.value = String(Math.round(percent * 10));
  }

  if (audio && audioButton) {
    audioButton.addEventListener('click', function () {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });

    audio.addEventListener('loadedmetadata', function () {
      audioDuration.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', function () {
      audioTime.textContent = formatTime(audio.currentTime);
      syncSeekUI();
    });

    if (audioSeek) {
      audioSeek.addEventListener('input', function () {
        if (!audio.duration) return;
        var percent = Number(audioSeek.value) / 10;
        audio.currentTime = (percent / 100) * audio.duration;
        syncSeekUI();
      });
    }

    audio.addEventListener('play', syncAudioUI);
    audio.addEventListener('pause', syncAudioUI);
    audio.addEventListener('ended', function () {
      audio.currentTime = 0;
      syncAudioUI();
    });
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      switchLang(this.getAttribute('data-lang'));
    });
  });

  switchLang(currentLang);
  syncAudioUI();
  syncSeekUI();

  var toggle = document.querySelector('.header__toggle');
  var nav = document.querySelector('.header__nav');

  if (toggle && nav) {
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
  }
})();
