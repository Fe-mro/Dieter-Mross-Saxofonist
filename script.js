(function () {
  var currentLang = localStorage.getItem('lang') || 'de';
  var thumb = document.getElementById('videoThumb');

  if (thumb) {
    thumb.onerror = function () {
      this.src = 'https://img.youtube.com/vi/fogb0ZEgv3A/hqdefault.jpg';
    };
  }

  var translations = {
    de: {
      logo: 'Dieter Mross – Saxofonist & Sänger',
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
      'about-p2': 'Sein musikalisches Spektrum ist breit gefächert: Von klassischem <strong>Swing</strong> und <strong>Latin</strong> über <strong>Bossa Nova</strong> und <strong>Blues</strong> bis hin zu modernen Pop-Arrangements und Filmmusik. Ob als Solokünstler, im Duo oder mit voller Band – Dieter Mross passt sein Repertoire flexibel an den Anlass und die gewünschte Stimmung an.',
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
      'imprint-summary': 'Impressum',
      'privacy-summary': 'Datenschutz',
      footer: '© 2026 Dieter Mross'
    },
    en: {
      logo: 'Dieter Mross – Saxophonist & Singer',
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
      'imprint-summary': 'Imprint',
      'privacy-summary': 'Privacy',
      footer: '© 2026 Dieter Mross'
    },
    es: {
      logo: 'Dieter Mross – saxofonista & cantante',
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
      'imprint-summary': 'Aviso legal',
      'privacy-summary': 'Protección de datos',
      footer: '© 2026 Dieter Mross'
    }
  };

  var legalContent = {
    de: {
      imprint: `<h3>IMPRESSUM</h3><p>Angaben gemäß § 5 TMG</p><p><strong>Dieter Mross</strong><br>Weidenstraße 29<br>88512 Mengen</p><p><strong>Kontakt</strong><br>Telefon: 075721763<br>E-Mail: Dieter_Mross@gmx.de</p>`,
      privacy: `<h3>DATENSCHUTZERKLÄRUNG</h3><p>Mit dieser Datenschutzerklärung möchten wir Sie über den Umgang mit personenbezogenen Daten auf dieser Webseite informieren.</p><p><strong>Verantwortlicher:</strong> Dieter Mross<br><strong>Anschrift:</strong> Weidenstraße 29, 88512 Mengen<br><strong>Email:</strong> Dieter_Mross@gmx.de</p><p><strong>Arten der verarbeiteten Daten:</strong></p><ul><li>Kontaktdaten</li><li>Nutzungsdaten</li><li>Meta-/Kommunikationsdaten</li></ul><p><strong>Stand:</strong> 22.6.2026</p><h4>1. Rechtsgrundlagen</h4><p>Die Verarbeitung erfolgt je nach Zweck auf Grundlage von Art. 6 Abs. 1 lit. b, a, f und c DSGVO.</p><h4>2. Änderungen und Aktualisierungen</h4><p>Bitte informieren Sie sich regelmäßig über den Inhalt unserer Datenschutzerklärung.</p><h4>3. Sicherheitsmaßnahmen</h4><p>Wir treffen geeignete technische und organisatorische Maßnahmen.</p><h4>4. Kooperation mit Dritten</h4><p>Gewähren wir Dritten Zugriff auf Daten, geschieht dies nur auf gesetzlicher Grundlage.</p><h4>5. Übermittlung in Drittländer</h4><p>Eine Verarbeitung in Drittländern erfolgt nur bei Vorliegen der Voraussetzungen gemäß Art. 44 ff. DSGVO.</p><h4>6. Rechte der betroffenen Personen</h4><p>Sie haben u. a. Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Beschwerde.</p><h4>7. Widerrufsrecht</h4><p>Erteilte Einwilligungen können Sie mit Wirkung für die Zukunft widerrufen.</p><h4>8. Widerspruchsrecht</h4><p>Sie können der künftigen Verarbeitung jederzeit widersprechen.</p><h4>9. Cookies</h4><p>Wir verwenden Cookies und ähnliche Technologien.</p><h4>10. Löschung von Daten</h4><p>Daten werden gelöscht, sobald sie nicht mehr erforderlich sind und keine Aufbewahrungspflichten entgegenstehen.</p><h4>11. Erbringung vertraglicher Leistungen</h4><p>Wir verarbeiten Daten zur Erfüllung vertraglicher Verpflichtungen und Serviceleistungen.</p><h4>12. Kontaktaufnahme</h4><p>Bei Kontaktaufnahme verarbeiten wir die Angaben zur Bearbeitung der Anfrage.</p><h4>13. Zugriffsdaten und Logfiles</h4><p>Wir erheben Zugriffsdaten auf unseren Server auf Grundlage unseres berechtigten Interesses.</p><h4>14. Dienste und Inhalte Dritter</h4><p>Wir nutzen Inhalte Dritter wie Videos oder Schriftarten auf Grundlage unserer berechtigten Interessen.</p>`,
    },
    en: {
      imprint: `<h3>IMPRINT</h3><p>Information in accordance with § 5 TMG (Telemedia Act)</p><p><strong>Dieter Mross</strong><br>Weidenstraße 29<br>88512 Mengen</p><p><strong>Contact</strong><br>Phone: +49 7572 1763<br>Email: Dieter_Mross@gmx.de</p>`,
      privacy: `<h3>DATA PROTECTION DECLARATION</h3><p>We would like to inform you about the handling of personal data on this website.</p><p><strong>Responsible Party:</strong> Dieter Mross<br><strong>Address:</strong> Weidenstraße 29, 88512 Mengen<br><strong>Email:</strong> Dieter_Mross@gmx.de</p><p><strong>Types of processed data:</strong></p><ul><li>Contact data</li><li>Usage data</li><li>Meta/communication data</li></ul><p><strong>Status:</strong> 22.6.2026</p><h4>1. Legal bases</h4><p>Processing is based on Art. 6 Para. 1 lit. b, a, f, and c GDPR depending on the purpose.</p><h4>2. Changes and updates</h4><p>Please check our privacy notice regularly.</p><h4>3. Security measures</h4><p>We take suitable technical and organizational measures.</p><h4>4. Cooperation with third parties</h4><p>Third-party access is granted only on a legal basis.</p><h4>5. Transfer to third countries</h4><p>Processing in third countries occurs only under the conditions of Art. 44 ff. GDPR.</p><h4>6. Rights of the data subject</h4><p>You have rights of access, rectification, erasure, restriction, portability, and complaint.</p><h4>7. Right of revocation</h4><p>Consent can be revoked for the future.</p><h4>8. Right of objection</h4><p>You may object to future processing at any time.</p><h4>9. Cookies</h4><p>We use cookies and similar technologies.</p><h4>10. Deletion of data</h4><p>Data is deleted once it is no longer required and no retention obligations apply.</p><h4>11. Provision of contractual services</h4><p>We process data to fulfill contractual obligations and service services.</p><h4>12. Contact</h4><p>When contacting us, the details are processed to handle the inquiry.</p><h4>13. Access data and log files</h4><p>We collect access data to our server on the basis of our legitimate interest.</p><h4>14. Third-party content</h4><p>We use third-party content such as videos or fonts on the basis of our legitimate interests.</p>`,
    },
    es: {
      imprint: `<h3>AVISO LEGAL</h3><p>Información de acuerdo con § 5 TMG (Ley de Medios Telemáticos)</p><p><strong>Dieter Mross</strong><br>Weidenstraße 29<br>88512 Mengen</p><p><strong>Contacto</strong><br>Teléfono: +49 7572 1763<br>Correo electrónico: Dieter_Mross@gmx.de</p>`,
      privacy: `<h3>DECLARACIÓN DE PROTECCIÓN DE DATOS</h3><p>Queremos informarle sobre el tratamiento de datos personales en este sitio web.</p><p><strong>Responsable:</strong> Dieter Mross<br><strong>Dirección:</strong> Weidenstraße 29, 88512 Mengen<br><strong>Correo electrónico:</strong> Dieter_Mross@gmx.de</p><p><strong>Tipos de datos procesados:</strong></p><ul><li>Datos de contacto</li><li>Datos de uso</li><li>Datos meta/comunicación</li></ul><p><strong>Estado:</strong> 22.6.2026</p><h4>1. Bases legales</h4><p>El tratamiento se basa en el Art. 6 Párr. 1 lit. b, a, f y c RGPD según el propósito.</p><h4>2. Cambios y actualizaciones</h4><p>Revise nuestra política de privacidad con regularidad.</p><h4>3. Medidas de seguridad</h4><p>Tomamos medidas técnicas y organizativas adecuadas.</p><h4>4. Cooperación con terceros</h4><p>El acceso de terceros solo se concede sobre una base legal.</p><h4>5. Transferencia a terceros países</h4><p>El tratamiento en terceros países solo ocurre bajo las condiciones del Art. 44 ss. RGPD.</p><h4>6. Derechos del interesado</h4><p>Tiene derechos de acceso, rectificación, eliminación, restricción, portabilidad y reclamación.</p><h4>7. Derecho de revocación</h4><p>El consentimiento puede revocarse para el futuro.</p><h4>8. Derecho de oposición</h4><p>Puede oponerse al tratamiento futuro en cualquier momento.</p><h4>9. Cookies</h4><p>Utilizamos cookies y tecnologías similares.</p><h4>10. Eliminación de datos</h4><p>Los datos se eliminan cuando ya no son necesarios y no existen obligaciones de conservación.</p><h4>11. Prestación de servicios contractuales</h4><p>Tratamos datos para cumplir obligaciones contractuales y servicios.</p><h4>12. Contacto</h4><p>Al contactarnos, los datos se procesan para gestionar la consulta.</p><h4>13. Datos de acceso y registros</h4><p>Recopilamos datos de acceso a nuestro servidor sobre la base de nuestro interés legítimo.</p><h4>14. Contenido de terceros</h4><p>Utilizamos contenido de terceros como videos o fuentes sobre la base de nuestros intereses legítimos.</p>`,
    }
  };

  var metaTitle = {
    de: 'Dieter Mross | Saxophonist in Baden-Württemberg | Booking',
    en: 'Dieter Mross | Saxophonist in Baden-Württemberg | Booking',
    es: 'Dieter Mross | Saxofonista en Baden-Württemberg | Reservas'
  };

  var metaDesc = {
    de: 'Dieter Mross – Professioneller Saxophonist für Hochzeiten, Geburtstage, Events & Galas. Vielseitiges Repertoire: Jazz, Blues, Latin, Pop. Jetzt unverbindlich anfragen',
    en: 'Dieter Mross – Professional saxophonist for weddings, birthdays, events & galas. Versatile repertoire: Jazz, Blues, Latin, Pop. Inquire now without obligation.',
    es: 'Dieter Mross – Saxofonista profesional para bodas, cumpleaños, eventos y galas. Repertorio versátil: Jazz, Blues, Latin, Pop. Consulte ahora sin compromiso.'
  };

  function formatTime(seconds) {
    if (!isFinite(seconds) || seconds < 0) return '0:00';
    var mins = Math.floor(seconds / 60);
    var secs = Math.floor(seconds % 60);
    return mins + ':' + String(secs).padStart(2, '0');
  }

  function syncAudioUI() {
    var audio = document.getElementById('duoAudio');
    var button = document.getElementById('audioToggle');
    var label = document.getElementById('audioStateLabel');
    if (!audio || !button || !label) return;
    var playing = !audio.paused;
    button.classList.toggle('is-playing', playing);
    var text = playing ? translations[currentLang]['audio-pause'] : translations[currentLang]['audio-play'];
    label.textContent = text;
    button.setAttribute('aria-label', text);
  }

  function syncSeekUI() {
    var audio = document.getElementById('duoAudio');
    var seek = document.getElementById('audioSeek');
    if (!audio || !seek || !audio.duration) return;
    var percent = (audio.currentTime / audio.duration) * 100;
    seek.style.background = 'linear-gradient(90deg, var(--gold) 0%, var(--gold-light) ' + percent + '%, rgba(196, 148, 61, 0.18) ' + percent + '%, rgba(196, 148, 61, 0.18) 100%)';
    seek.value = String(Math.round(percent * 10));
  }

  function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    document.documentElement.lang = lang;
    document.title = metaTitle[lang];
    document.querySelector('meta[name="description"]').setAttribute('content', metaDesc[lang]);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) el.innerHTML = translations[lang][key];
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (translations[lang] && translations[lang][key]) el.setAttribute('alt', translations[lang][key]);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (translations[lang] && translations[lang][key]) el.setAttribute('aria-label', translations[lang][key]);
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('lang-btn--active', btn.getAttribute('data-lang') === lang);
    });

    var imprint = document.getElementById('imprintContent');
    var privacy = document.getElementById('privacyContent');
    if (imprint) imprint.innerHTML = legalContent[lang].imprint;
    if (privacy) privacy.innerHTML = legalContent[lang].privacy;

    syncAudioUI();
    syncSeekUI();
  }

  var audio = document.getElementById('duoAudio');
  var audioButton = document.getElementById('audioToggle');
  var audioSeek = document.getElementById('audioSeek');
  var audioTime = document.getElementById('audioTime');
  var audioDuration = document.getElementById('audioDuration');

  if (audio && audioButton) {
    audioButton.addEventListener('click', function () {
      if (audio.paused) audio.play(); else audio.pause();
    });

    audio.addEventListener('loadedmetadata', function () {
      if (audioDuration) audioDuration.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', function () {
      if (audioTime) audioTime.textContent = formatTime(audio.currentTime);
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

  switchLang(currentLang);
})();
