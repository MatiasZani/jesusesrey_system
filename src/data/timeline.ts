export const slug = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export interface Story { title: string; ref: string; text: string; }
export interface Person { name: string; role: string; }
export interface Era { id: string; icon: string; title: string; dates: string; summary: string; people: Person[]; stories: Story[]; }

// Fechas aproximadas, con fines pedagógicos.
export const eras: Era[] = [
  {
    id: 'creacion', icon: '🌍', title: 'La Creación', dates: 'Al principio',
    summary: 'Dios crea los cielos, la tierra y a la humanidad a su imagen. La caída trae el pecado, pero también la primera promesa de redención.',
    people: [{ name: 'Adán', role: 'El primer hombre' }, { name: 'Eva', role: 'La primera mujer' }, { name: 'Noé', role: 'El constructor del arca' }],
    stories: [
      { title: 'Los seis días de la creación', ref: 'Génesis 1–2', text: 'Dios habla y todo cobra existencia. Al crear al ser humano, lo declara «muy bueno» y le encarga cuidar la tierra.' },
      { title: 'La caída', ref: 'Génesis 3', text: 'Adán y Eva desobedecen y se rompe la comunión con Dios, pero Él anuncia desde el inicio que vendrá un Redentor.' },
      { title: 'El diluvio y el arca', ref: 'Génesis 6–9', text: 'Noé obedece, construye el arca y su familia se salva. Dios sella un pacto con el arcoíris como señal.' },
    ],
  },
  {
    id: 'patriarcas', icon: '⭐', title: 'Los patriarcas', dates: 'c. 2000 – 1700 a. C.',
    summary: 'Dios llama a Abraham y le promete una tierra, una descendencia y bendición para todas las naciones. La promesa pasa a Isaac, Jacob y José.',
    people: [{ name: 'Abraham', role: 'El padre de la fe' }, { name: 'Isaac', role: 'El hijo de la promesa' }, { name: 'Jacob', role: 'Israel' }, { name: 'José', role: 'El soñador' }],
    stories: [
      { title: 'El llamado de Abraham', ref: 'Génesis 12', text: 'Abraham deja su tierra sin saber a dónde va, confiando solamente en la palabra de Dios.' },
      { title: 'Isaac en el monte', ref: 'Génesis 22', text: 'Dios prueba la fe de Abraham y provee un cordero en lugar de su hijo. Una imagen de lo que haría Jesús.' },
      { title: 'José, de esclavo a gobernador', ref: 'Génesis 37–50', text: 'Vendido por sus hermanos, José llega a ser autoridad en Egipto y los perdona: «Ustedes pensaron mal, pero Dios lo encaminó a bien».' },
    ],
  },
  {
    id: 'exodo', icon: '🔥', title: 'El éxodo y la ley', dates: 'c. 1446 a. C.',
    summary: 'Dios libera a su pueblo de la esclavitud en Egipto, abre el mar y le entrega la ley en el Sinaí. Después de 40 años en el desierto, llegan a la tierra prometida.',
    people: [{ name: 'Moisés', role: 'El libertador' }, { name: 'Aarón', role: 'El primer sumo sacerdote' }, { name: 'Josué', role: 'El que conquistó Jericó' }],
    stories: [
      { title: 'La zarza ardiente', ref: 'Éxodo 3', text: 'Dios llama a Moisés desde una zarza que ardía sin consumirse y lo envía a liberar a su pueblo.' },
      { title: 'Las diez plagas y el mar Rojo', ref: 'Éxodo 7–14', text: 'Tras la Pascua, Israel sale de Egipto. Dios abre el mar y el pueblo pasa en seco.' },
      { title: 'Los diez mandamientos', ref: 'Éxodo 20', text: 'En el monte Sinaí Dios entrega su ley y hace un pacto con su pueblo.' },
      { title: 'La caída de Jericó', ref: 'Josué 6', text: 'Con obediencia y fe, las murallas caen después de siete vueltas, abriendo la entrada a la tierra prometida.' },
    ],
  },
  {
    id: 'jueces', icon: '🛡️', title: 'Los jueces', dates: 'c. 1380 – 1050 a. C.',
    summary: 'Un ciclo repetido: el pueblo se aparta, sufre, clama a Dios, y Él levanta un libertador. Termina con el pedido de un rey.',
    people: [{ name: 'Débora', role: 'Jueza y profetisa' }, { name: 'Gedeón', role: 'El valiente de los 300' }, { name: 'Sansón', role: 'El nazareo fuerte' }, { name: 'Rut', role: 'La fiel moabita' }, { name: 'Samuel', role: 'Profeta y juez' }],
    stories: [
      { title: 'Gedeón y los 300', ref: 'Jueces 6–7', text: 'Dios reduce el ejército para que quede claro que la victoria viene de Él, no de la fuerza humana.' },
      { title: 'Rut y Noemí', ref: 'Libro de Rut', text: '«Tu pueblo será mi pueblo, y tu Dios, mi Dios». La lealtad de Rut la lleva a ser antepasada del rey David y de Jesús.' },
      { title: 'Samuel escucha a Dios', ref: '1 Samuel 3', text: 'De niño, Samuel oye su nombre en la noche y responde: «Habla, que tu siervo escucha».' },
    ],
  },
  {
    id: 'reino', icon: '👑', title: 'El reino unido', dates: 'c. 1050 – 930 a. C.',
    summary: 'Israel pide un rey. Saúl, David y Salomón gobiernan una nación unida; David trae la adoración y Salomón construye el templo en Jerusalén.',
    people: [{ name: 'Saúl', role: 'El primer rey' }, { name: 'David', role: 'El rey adorador' }, { name: 'Salomón', role: 'El rey sabio' }],
    stories: [
      { title: 'David y Goliat', ref: '1 Samuel 17', text: 'Un joven pastor vence al gigante con una honda y confianza en Dios: «La batalla es del Señor».' },
      { title: 'Los salmos de David', ref: 'Salmos', text: 'David escribió canciones de alabanza, arrepentimiento y esperanza que seguimos cantando hoy.' },
      { title: 'La sabiduría de Salomón y el templo', ref: '1 Reyes 3–8', text: 'Salomón pide sabiduría en lugar de riquezas y construye el templo donde habitaría la presencia de Dios.' },
    ],
  },
  {
    id: 'profetas', icon: '📜', title: 'El reino dividido y los profetas', dates: 'c. 930 – 586 a. C.',
    summary: 'El reino se parte en Israel y Judá. Dios envía profetas que llaman a volver a Él, advierten del juicio y anuncian al Mesías.',
    people: [{ name: 'Elías', role: 'El profeta de fuego' }, { name: 'Eliseo', role: 'Doble porción' }, { name: 'Isaías', role: 'El profeta del Mesías' }, { name: 'Jeremías', role: 'El profeta llorón' }],
    stories: [
      { title: 'Elías en el monte Carmelo', ref: '1 Reyes 18', text: 'Frente al pueblo, Elías ora y cae fuego del cielo: «¡El Señor es Dios!».' },
      { title: 'Isaías ve al Señor', ref: 'Isaías 6', text: 'En una visión del templo, Isaías responde al llamado: «Aquí estoy, envíame a mí».' },
      { title: 'La profecía del siervo', ref: 'Isaías 53', text: 'Siglos antes de Jesús, Isaías describe a un siervo que cargaría con nuestros pecados.' },
    ],
  },
  {
    id: 'exilio', icon: '🏛️', title: 'El exilio y el regreso', dates: '586 – 400 a. C.',
    summary: 'Babilonia destruye Jerusalén y lleva al pueblo cautivo. Aun lejos de casa, Dios cuida a los suyos y finalmente los trae de regreso a reconstruir.',
    people: [{ name: 'Daniel', role: 'Fiel en el foso' }, { name: 'Ester', role: 'La reina valiente' }, { name: 'Nehemías', role: 'El reconstructor' }, { name: 'Esdras', role: 'El escriba' }],
    stories: [
      { title: 'Daniel en el foso de los leones', ref: 'Daniel 6', text: 'Daniel sigue orando a pesar de la prohibición. Dios cierra la boca de los leones.' },
      { title: 'Ester ante el rey', ref: 'Libro de Ester', text: 'Ester arriesga su vida para salvar a su pueblo: «¿Quién sabe si para esta hora has llegado al reino?».' },
      { title: 'Nehemías reconstruye el muro', ref: 'Nehemías 2–6', text: 'Con oración y trabajo en equipo, el muro de Jerusalén se levanta en solo 52 días.' },
    ],
  },
  {
    id: 'silencio', icon: '🕯️', title: 'Los 400 años de silencio', dates: 'c. 400 – 5 a. C.',
    summary: 'No hay profetas nuevos, pero Dios prepara el escenario: un mundo unido por un idioma, caminos romanos y un pueblo esperando al Mesías.',
    people: [{ name: 'Los macabeos', role: 'Defensores de la fe' }],
    stories: [
      { title: 'Preparando el camino', ref: 'Gálatas 4:4', text: '«Cuando llegó el cumplimiento del tiempo, Dios envió a su Hijo». Todo estaba listo para la llegada de Jesús.' },
    ],
  },
  {
    id: 'jesus', icon: '✝️', title: 'La vida de Jesús', dates: 'c. 5 a. C. – 30 d. C.',
    summary: 'Dios se hace hombre. Jesús enseña, sana, muere en la cruz por nuestros pecados y resucita al tercer día.',
    people: [{ name: 'María', role: 'La madre de Jesús' }, { name: 'Juan el Bautista', role: 'El que preparó el camino' }, { name: 'Pedro', role: 'La roca' }, { name: 'Jesús', role: 'El Rey de reyes' }],
    stories: [
      { title: 'El nacimiento en Belén', ref: 'Lucas 2', text: 'María da a luz al Salvador en un pesebre. Pastores y sabios vienen a adorarlo.' },
      { title: 'El Sermón del Monte', ref: 'Mateo 5–7', text: 'Jesús enseña las bienaventuranzas y cómo vivir en el reino de Dios.' },
      { title: 'La cruz y la resurrección', ref: 'Juan 19–20', text: 'Jesús da su vida por todos y vence a la muerte. La tumba vacía es la esperanza de nuestra fe.' },
    ],
  },
  {
    id: 'iglesia', icon: '🕊️', title: 'La iglesia primitiva', dates: 'c. 30 – 100 d. C.',
    summary: 'El Espíritu Santo desciende en Pentecostés y el evangelio se extiende de Jerusalén hasta los confines de la tierra.',
    people: [{ name: 'Pedro', role: 'La roca' }, { name: 'Pablo', role: 'El apóstol de las naciones' }, { name: 'Juan', role: 'El discípulo amado' }],
    stories: [
      { title: 'Pentecostés', ref: 'Hechos 2', text: 'El Espíritu Santo llena a los discípulos y 3.000 personas creen en un solo día.' },
      { title: 'La conversión de Pablo', ref: 'Hechos 9', text: 'Una luz en el camino a Damasco transforma a un perseguidor en el gran misionero de la iglesia.' },
      { title: 'Las cartas y el Apocalipsis', ref: 'Romanos – Apocalipsis', text: 'Pablo, Pedro y Juan escriben a las iglesias y cierran la Biblia con la promesa del regreso de Cristo.' },
    ],
  },
];
