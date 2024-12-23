const dataFlowers = [
  {
    id: 1,
    name: "Herzensgruß",
    category: "Blumensträuße",
    title: "Ein opulenter Strauß aus Rosen, Dahlien und Hortensien, der das Herz höher schlagen lässt.",
    price: 38,
    img: "https://images.unsplash.com/photo-1652346107876-58d7354ce9b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4MHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    id: 2,
    name: "Hoffnung",
    category: "Blumensträuße",
    title: "Zarte Pfingstrosen und Lisianthus in sanften Rosétönen für besondere Momente der Freude.",
    price: 45,
    img: "https://images.unsplash.com/photo-1613279060119-2053dc14f8d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyNXx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    id: 3,
    name: "Glanzstück",
    category: "Blumensträuße",
    title: "Leuchtende Tulpen, Hyazinthen und Narzissen in frischen Frühlingsfarben.",
    price: 49,
    img: "https://images.unsplash.com/photo-1709099158463-cae636593236?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg2fHx8ZW58MHx8fHx8"
  },

  {
    id: 4,
    name: "Wunschtraum",
    category: "Blumensträuße",
    title: "Ein glamouröser Strauß aus weißen Lilien und Rosen mit zartem Schleierkraut.",
    price: 36,
    img: "https://images.unsplash.com/photo-1592309487290-2cf1e17b4623?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
  },

  {
    id: 5,
    name: "Frühlingshauch",
    category: "Blumensträuße",
    title: "Romantische Kombination aus tiefroten Rosen und pinkfarbenem Alstroemeria.",
    price: 52,
    img: "https://images.unsplash.com/photo-1523693916903-027d144a2b7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
  },

  {
    id: 6,
    name: "Sommerwiese",
    category: "Blumensträuße",
    title: "Strahlende Gerbera und gelbe Freesien für einen Hauch von Sonnenschein.",
    price: 48,
    img: "https://images.unsplash.com/photo-1622658641558-235f26dd270b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
  },

  {
    id: 7,
    name: "Blütenmeer",
    category: "Blumensträuße",
    title: "Verzaubernde Orchideen und Anthurien in kräftigen, mystischen Farben.",
    price: 52,
    img: "https://images.unsplash.com/photo-1533793241176-a270e75ef2ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxOHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    id: 8,
    name: "Liebesflair",
    category: "Blumensträuße",
    title: "Wildblumen und Gräser wie Kamille, Lavendel und Eukalyptus für eine natürliche Note.",
    price: 38,
    img: "https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8"
  },

  {
    id: 9,
    name: "Strahlen",
    category: "Blumensträuße",
    title: "Exotische Protea, Sonnenblumen und orangefarbene Rosen für leuchtende Akzente.",
    price: 36,
    img: "https://images.unsplash.com/photo-1644248422971-e7e83cb0d3d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8"
  },

  {
    id: 10,
    name: "Seelenfrieden",
    category: "Blumensträuße",
    title: "Ein sanfter Mix aus weißen und grünen Blumen wie Hortensien, Nelken und Eukalyptus.",
    price: 57,
    img: "https://images.unsplash.com/photo-1572454591674-2739f30d8c40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU4fHx8ZW58MHx8fHx8"
  },

  {
    id: 11,
    name: "Farbenspiel",
    category: "Blumensträuße",
    title: "Tiefviolette Iris und dunkelrote Amaryllis für einen Hauch von Dramatik und Eleganz.",
    price: 45,
    img: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk2fHx8ZW58MHx8fHx8"
  },

  {
    id: 12,
    name: "Zauber",
    category: "Blumensträuße",
    title: "Frische Margeriten und blaue Kornblumen in zarten Pastelltönen, die an Morgentau erinnern.",
    price: 53,
    img: "https://images.unsplash.com/photo-1497276236755-0f85ba99a126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ymx1bWVuc3RyYXUlQzMlOUZ8ZW58MHx8MHx8fDA%3D"
  },

  {
    id: 13,
    name: "Lebensfreude",
    category: "Zimmerpflanzen",
    title: "Eine elegante Areca-Palme, die durch ihre dichten, fächerartigen Blätter ein beruhigendes, natürliches Ambiente schafft.",
    price: 22,
    img: "https://images.unsplash.com/photo-1600411832986-5a4477b64a1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcwfHx6aW1tZXJwZmxhbnplfGVufDB8fDB8fHww"
  },

  {
    id: 14,
    name: "Ewigkeit",
    category: "Zimmerpflanzen",
    title: "Eine majestätische Fiddle-Leaf-Ficus, deren imposante Blätter das Licht perfekt einfangen und jedem Raum Höhe und Struktur verleihen.",
    price: 25,
    img: "https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHx6aW1tZXJwZmxhbnplfGVufDB8fDB8fHww"
  },

  {
    id: 15,
    name: "Morgennebel",
    category: "Zimmerpflanzen",
    title: "Eine Calathea mit sanft gemusterten Blättern, deren weiche Farben an Nebel im Morgengrauen erinnern – perfekt für eine ruhige, entspannende Umgebung.",
    price: 29,
    img: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHx6aW1tZXJwZmxhbnplfGVufDB8fDB8fHww"
  },

  {
    id: 16,
    name: "Smaragd",
    category: "Zimmerpflanzen",
    title: "Eine farbenfrohe Bromelie mit leuchtenden Blüten, die positive Energie und ein exotisches Flair in den Raum bringt.",
    price: 19,
    img: "https://images.unsplash.com/photo-1620127807580-990c3ecebd14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHx6aW1tZXJwZmxhbnplfGVufDB8fDB8fHww"
  },

  {
    id: 17,
    name: "Oase",
    category: "Zimmerpflanzen",
    title: "Eine prachtvolle Monstera mit großen, tiefgrünen Blättern, die an die Edelsteine des Dschungels erinnert und jedes Zimmer bereichert.",
    price: 25,
    img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHx6aW1tZXJwZmxhbnplfGVufDB8fDB8fHww"
  },

  {
    id: 18,
    name: "Zenith",
    category: "Zimmerpflanzen",
    title: "Eine robuste, langlebige Zamioculcas (Glücksfeder) mit glänzend grünen Blättern, die für Beständigkeit und zeitlose Schönheit steht.",
    price: 26,
    img: "https://images.unsplash.com/photo-1612363148951-15f16817648f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHx6aW1tZXJwZmxhbnplfGVufDB8fDB8fHww"
  },

  {
    id: 19,
    name: "Aurora",
    category: "Vasen",
    title: "Eine handgemalte Keramikvase, die durch ihre kunstvolle Bemalung in lebendigen Mustern eine kreative und einzigartige Atmosphäre schafft.",
    price: 120,
    img: "https://images.unsplash.com/photo-1723779230854-1d951c3f788d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyMXx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    id: 20,
    name: "Essenz",
    category: "Vasen",
    title: "Eine weiße Keramikvase, schlicht und elegant, die mit ihrem minimalistischen Design die Schönheit jeder Blume perfekt zur Geltung bringt.",
    price: 270,
    img: "https://images.unsplash.com/photo-1633000116322-d7f5cb7d3ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
  },

  {
    id: 21,
    name: "Opulenz",
    category: "Vasen",
    title: "Eine markante Keramikvase, die in zwei Varianten – intensives Rot oder beruhigendes Blau – erhältlich ist und durch ihre kräftigen Farben Akzente setzt.",
    price: 176,
    img: "https://images.unsplash.com/photo-1529139760315-66f8562cb1c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
  },

  {
    id: 22,
    name: "Harmonie",
    category: "Vasen",
    title: "Eine weiße Keramikvase, die durch ihre klare Form und sanfte Oberfläche Ruhe und Ausgewogenheit ausstrahlt.",
    price: 216,
    img: "https://images.unsplash.com/photo-1598271174562-9fc1a9ba18ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8"
  },

  {
    id: 23,
    name: "Mystique",
    category: "Vasen",
    title: "Eine geometrische graue Keramikvase, die mit ihren klaren Linien und facettierten Formen eine moderne, kunstvolle Ausstrahlung bietet.",
    price: 309,
    img: "https://images.unsplash.com/photo-1626207170377-7c09e522323c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8"
  },

  {
    id: 24,
    name: "Elysium",
    category: "Vasen",
    title: "Eine handgemalte Keramikvase, die mit feinen, detailreichen Motiven und sanften Farben für eine romantische und raffinierte Wirkung sorgt.",
    price: 284,
    img: "https://images.unsplash.com/photo-1723779233298-c17f782c641f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5N3x8fGVufDB8fHx8fA%3D%3D"
  },

  {
    id: 25,
    name: "Levant",
    category: "Kerzen",
    title: "Eine zarte Kerze in sanften, erdigen Tönen, die den Raum mit einem warmen, natürlichen Duft erfüllt und eine beruhigende Atmosphäre schafft.",
    price: 27,
    img: "https://images.unsplash.com/photo-1616172890963-a45e7da8de31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGtlcnplfGVufDB8fDB8fHww"
  },

  {
    id: 26,
    name: "Mondlicht",
    category: "Kerzen",
    title: "Eine elegante Kerze in Silber oder Weiß, die mit einem sanften Duft nach Jasmin und Vanille die stille Schönheit des Mondes widerspiegelt.",
    price: 32,
    img: "https://images.unsplash.com/photo-1602607203588-d6d0eda790e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
  },

  {
    id: 27,
    name: "Einklang",
    category: "Kerzen",
    title: "Eine harmonische Duftkerze in sanften Farben, die mit Noten von Lavendel und Bergamot für Entspannung und Ruhe sorgt.",
    price: 24,
    img: "https://images.unsplash.com/photo-1595055212857-7dc2146fb0ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"
  },

  {
    id: 28,
    name: "Nordwind",
    category: "Kerzen",
    title: "Eine kräftige Kerze mit einem kühlen, frischen Duft nach Zedernholz und Minze, die den Raum mit einer klaren, belebenden Frische erfüllt.",
    price: 24,
    img: "https://images.unsplash.com/photo-1653919198272-44e5149e3bbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8"
  },

  {
    id: 29,
    name: "Sonnenherz",
    category: "Kerzen",
    title: "Eine leuchtende Kerze in goldenen oder orangen Tönen, die mit einem warmen Zitrusduft den Raum mit einer einladenden, sonnigen Atmosphäre erfüllt.",
    price: 32,
    img: "https://images.unsplash.com/photo-1692734829612-336e5aad8560?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
  },

  {
    id: 30,
    name: "Sinfonie",
    category: "Kerzen",
    title: "Eine elegante Kerze in tiefem Rot oder Blau, die mit einem komplexen Duft aus Sandelholz und Rose für eine luxuriöse und sinnliche Atmosphäre sorgt.",
    price: 26,
    img: "https://images.unsplash.com/photo-1707839568431-c2648f6d5184?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8"
  },

  {
    id: 31,
    name: "Blütenkuss",
    category: "Geschenke",
    title: "Eine zarte Geschenkbox, gefüllt mit einer Auswahl an romantischen Rosen und zarten Lisianthus-Blüten, die für einen liebevollen und eleganten Moment sorgen.",
    price: 67,
    img: "https://images.unsplash.com/photo-1660885900184-fe13ca69392c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
  },

  {
    id: 32,
    name: "Herzstück",
    category: "Geschenke",
    title: "Ein besonderes Geschenk, das eine Kombination aus Pfingstrosen und Freesien enthält – eine wahre Ode an die Schönheit der Liebe und Freundschaft.",
    price: 73,
    img: "https://images.unsplash.com/photo-1660885900178-5dde86ded857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
  },

  {
    id: 33,
    name: "Lichtblick",
    category: "Geschenke",
    title: "Eine leuchtende Box voller gelber Tulpen und Freesien, die für einen sonnigen Akzent im Raum sorgt und Freude verbreitet.",
    price: 74,
    img: "https://images.unsplash.com/photo-1660549077247-8c4f7d78ac43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
  },

  {
    id: 34,
    name: "Freudenmoment",
    category: "Geschenke",
    title: "Eine exklusive Geschenkbox, die mit einer Mischung aus wilden Blumen wie Lavendel und Margeriten für einen unvergesslichen, frischen Duft sorgt.",
    price: 47,
    img: "https://images.unsplash.com/photo-1660549071014-415f7e8ce61a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8"
  }
]

export default dataFlowers;