export const slug = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export interface Story { title: string; ref: string; text: string; }
export interface Person { name: string; role: string; }
export interface Era { id: string; icon: string; title: string; dates: string; summary: string; people: Person[]; stories: Story[]; }

// Fechas aproximadas (c. = circa), con fines pedagógicos.
export const eras: Era[] = [
  {
    id: 'creacion', icon: '🌍', title: 'La Creación', dates: 'Al principio',
    summary: 'Dios crea los cielos, la tierra y a la humanidad a su imagen. La caída trae el pecado, pero también la primera promesa de redención.',
    people: [
      { name: 'Adán', role: 'El primer hombre' }, { name: 'Eva', role: 'La primera mujer' }, { name: 'Caín', role: 'El primer agricultor' },
      { name: 'Abel', role: 'El pastor justo' }, { name: 'Enoc', role: 'El que caminó con Dios' }, { name: 'Noé', role: 'El constructor del arca' },
    ],
    stories: [
      { title: 'Los seis días de la creación', ref: 'Génesis 1–2', text: 'Dios habla y todo cobra existencia. Al crear al ser humano, lo declara «muy bueno» y le encarga cuidar la tierra.' },
      { title: 'La caída', ref: 'Génesis 3', text: 'Adán y Eva desobedecen y se rompe la comunión con Dios, pero Él anuncia desde el inicio que vendrá un Redentor.' },
      { title: 'Caín y Abel', ref: 'Génesis 4', text: 'La envidia lleva a Caín a quitarle la vida a su hermano Abel. Dios le advierte que el pecado está a la puerta, pero hay que dominarlo.' },
      { title: 'El diluvio y el arca', ref: 'Génesis 6–9', text: 'Noé obedece, construye el arca y su familia se salva. Dios sella un pacto con el arcoíris como señal.' },
      { title: 'La torre de Babel', ref: 'Génesis 11', text: 'Los hombres quieren hacerse famosos levantando una torre hasta el cielo; Dios confunde sus lenguas y los dispersa por la tierra.' },
    ],
  },
  {
    id: 'patriarcas', icon: '⭐', title: 'Los patriarcas', dates: 'c. 2000 – 1700 a. C.',
    summary: 'Dios llama a Abraham y le promete una tierra, una descendencia y bendición para todas las naciones. La promesa pasa a Isaac, Jacob y José.',
    people: [
      { name: 'Abraham', role: 'El padre de la fe' }, { name: 'Sara', role: 'La madre de la promesa' }, { name: 'Isaac', role: 'El hijo de la promesa' },
      { name: 'Rebeca', role: 'La que dio de beber' }, { name: 'Jacob', role: 'Israel' }, { name: 'Raquel', role: 'La pastora amada' }, { name: 'José', role: 'El soñador' },
    ],
    stories: [
      { title: 'El llamado de Abraham', ref: 'Génesis 12', text: 'Abraham deja su tierra sin saber a dónde va, confiando solamente en la palabra de Dios.' },
      { title: 'Un hijo en la vejez', ref: 'Génesis 18 y 21', text: 'Sara ríe al oír que tendrá un hijo a los 90 años, pero Dios cumple su promesa: nace Isaac, «el que ríe».' },
      { title: 'Isaac en el monte', ref: 'Génesis 22', text: 'Dios prueba la fe de Abraham y provee un cordero en lugar de su hijo. Una imagen de lo que haría Jesús.' },
      { title: 'La escalera de Jacob', ref: 'Génesis 28 y 32', text: 'Jacob sueña con una escalera entre la tierra y el cielo; años después lucha con Dios y recibe el nombre de Israel.' },
      { title: 'José, de esclavo a gobernador', ref: 'Génesis 37–50', text: 'Vendido por sus hermanos, José llega a ser autoridad en Egipto y los perdona: «Ustedes pensaron mal, pero Dios lo encaminó a bien».' },
    ],
  },
  {
    id: 'exodo', icon: '🔥', title: 'El éxodo y la ley', dates: 'c. 1446 a. C.',
    summary: 'Dios libera a su pueblo de la esclavitud en Egipto, abre el mar y le entrega la ley en el Sinaí. Después de 40 años en el desierto, llegan a la tierra prometida.',
    people: [
      { name: 'Moisés', role: 'El libertador' }, { name: 'Aarón', role: 'El primer sumo sacerdote' }, { name: 'Miriam', role: 'La profetisa que cantó' },
      { name: 'Josué', role: 'El que conquistó Jericó' }, { name: 'Caleb', role: 'El espía fiel' }, { name: 'Rahab', role: 'La que escondió a los espías' },
    ],
    stories: [
      { title: 'La zarza ardiente', ref: 'Éxodo 3', text: 'Dios llama a Moisés desde una zarza que ardía sin consumirse y lo envía a liberar a su pueblo.' },
      { title: 'Las diez plagas y el mar Rojo', ref: 'Éxodo 7–14', text: 'Tras la Pascua, Israel sale de Egipto. Dios abre el mar y el pueblo pasa en seco; Miriam lidera el canto de alabanza.' },
      { title: 'Los diez mandamientos', ref: 'Éxodo 20', text: 'En el monte Sinaí Dios entrega su ley y hace un pacto con su pueblo.' },
      { title: 'Los doce espías', ref: 'Números 13–14', text: 'Diez espías sienten miedo, pero Josué y Caleb confían en Dios. Por su fe, ellos entrarán a la tierra prometida.' },
      { title: 'La caída de Jericó', ref: 'Josué 2 y 6', text: 'Rahab esconde a los espías y es salvada. Con obediencia y fe, las murallas caen después de siete vueltas.' },
    ],
  },
  {
    id: 'jueces', icon: '🛡️', title: 'Los jueces', dates: 'c. 1380 – 1050 a. C.',
    summary: 'Un ciclo repetido: el pueblo se aparta, sufre, clama a Dios, y Él levanta un libertador. Termina con el pedido de un rey.',
    people: [
      { name: 'Débora', role: 'Jueza y profetisa' }, { name: 'Gedeón', role: 'El valiente de los 300' }, { name: 'Sansón', role: 'El nazareo fuerte' },
      { name: 'Rut', role: 'La fiel moabita' }, { name: 'Noemí', role: 'La suegra de Rut' }, { name: 'Elí', role: 'El sacerdote de Silo' },
      { name: 'Ana', role: 'La madre de Samuel' }, { name: 'Samuel', role: 'Profeta y juez' },
    ],
    stories: [
      { title: 'Débora bajo la palmera', ref: 'Jueces 4–5', text: 'Débora juzga a Israel y anima a Barac a pelear. Dios da la victoria y ella canta: «¡Despierta, Débora, despierta!».' },
      { title: 'Gedeón y los 300', ref: 'Jueces 6–7', text: 'Dios reduce el ejército para que quede claro que la victoria viene de Él, no de la fuerza humana.' },
      { title: 'Sansón', ref: 'Jueces 13–16', text: 'Consagrado a Dios desde su nacimiento, Sansón tiene una fuerza extraordinaria; al final, humillado, clama a Dios y vuelve a depender de Él.' },
      { title: 'Rut y Noemí', ref: 'Libro de Rut', text: '«Tu pueblo será mi pueblo, y tu Dios, mi Dios». La lealtad de Rut la lleva a ser antepasada del rey David y de Jesús.' },
      { title: 'Ana y Samuel', ref: '1 Samuel 1–3', text: 'Ana ora por un hijo y se lo dedica a Dios. De niño, Samuel oye su nombre en la noche y responde: «Habla, que tu siervo escucha».' },
    ],
  },
  {
    id: 'reino', icon: '👑', title: 'El reino unido', dates: 'c. 1050 – 930 a. C.',
    summary: 'Israel pide un rey. Saúl, David y Salomón gobiernan una nación unida; David trae la adoración y Salomón construye el templo en Jerusalén.',
    people: [
      { name: 'Saúl', role: 'El primer rey' }, { name: 'David', role: 'El rey adorador' }, { name: 'Jonatán', role: 'El amigo leal' },
      { name: 'Natán', role: 'El profeta que se atrevió' }, { name: 'Betsabé', role: 'La madre de Salomón' }, { name: 'Salomón', role: 'El rey sabio' },
    ],
    stories: [
      { title: 'Saúl es ungido rey', ref: '1 Samuel 9–10', text: 'Samuel unge a Saúl como el primer rey de Israel. Empieza humilde, pero más tarde desobedece a Dios y pierde el trono.' },
      { title: 'David y Goliat', ref: '1 Samuel 17', text: 'Un joven pastor vence al gigante con una honda y confianza en Dios: «La batalla es del Señor».' },
      { title: 'David y Jonatán', ref: '1 Samuel 18–20', text: 'Aunque Saúl persigue a David, Jonatán lo protege y sellan un pacto de amistad leal.' },
      { title: 'Los salmos de David', ref: 'Salmos', text: 'David escribió canciones de alabanza, arrepentimiento y esperanza que seguimos cantando hoy. Cuando falló, Natán lo confrontó y David se arrepintió (Salmo 51).' },
      { title: 'La sabiduría de Salomón y el templo', ref: '1 Reyes 3–8', text: 'Salomón pide sabiduría en lugar de riquezas y construye el templo donde habitaría la presencia de Dios.' },
    ],
  },
  {
    id: 'profetas', icon: '📜', title: 'El reino dividido y los profetas', dates: 'c. 930 – 586 a. C.',
    summary: 'El reino se parte en Israel y Judá. Dios envía profetas que llaman a volver a Él, advierten del juicio y anuncian al Mesías.',
    people: [
      { name: 'Elías', role: 'El profeta de fuego' }, { name: 'Eliseo', role: 'Doble porción' }, { name: 'Jonás', role: 'El profeta del gran pez' },
      { name: 'Amós', role: 'El pastor profeta' }, { name: 'Isaías', role: 'El profeta del Mesías' }, { name: 'Ezequías', role: 'El rey que oró' },
      { name: 'Josías', role: 'El joven rey reformador' }, { name: 'Jeremías', role: 'El profeta llorón' },
    ],
    stories: [
      { title: 'Elías en el monte Carmelo', ref: '1 Reyes 18', text: 'Frente al pueblo, Elías ora y cae fuego del cielo: «¡El Señor es Dios!».' },
      { title: 'El manto de Elías', ref: '2 Reyes 2', text: 'Elías sube al cielo en un carro de fuego y su manto cae sobre Eliseo, que continúa su ministerio con una doble porción del Espíritu.' },
      { title: 'Jonás y el gran pez', ref: 'Jonás 1–4', text: 'Jonás huye del llamado de Dios, pero tras tres días en el pez obedece y toda la ciudad de Nínive se arrepiente.' },
      { title: 'Isaías ve al Señor', ref: 'Isaías 6 y 53', text: 'En el templo Isaías responde al llamado: «Aquí estoy, envíame a mí». Siglos antes de Jesús describe a un siervo que cargaría con nuestros pecados.' },
      { title: 'Jeremías y el nuevo pacto', ref: 'Jeremías 31', text: 'Jeremías llora por su pueblo, pero anuncia que Dios hará un pacto nuevo y escribirá su ley en el corazón.' },
    ],
  },
  {
    id: 'exilio', icon: '🏛️', title: 'El exilio y el regreso', dates: '586 – 400 a. C.',
    summary: 'Babilonia destruye Jerusalén y lleva al pueblo cautivo. Aun lejos de casa, Dios cuida a los suyos y finalmente los trae de regreso a reconstruir.',
    people: [
      { name: 'Ezequiel', role: 'El profeta de las visiones' }, { name: 'Daniel', role: 'Fiel en el foso' }, { name: 'Ester', role: 'La reina valiente' },
      { name: 'Mardoqueo', role: 'El tío de Ester' }, { name: 'Zorobabel', role: 'El que volvió a edificar' }, { name: 'Esdras', role: 'El escriba' },
      { name: 'Nehemías', role: 'El reconstructor' },
    ],
    stories: [
      { title: 'Los huesos secos', ref: 'Ezequiel 37', text: 'En el exilio Dios muestra a Ezequiel un valle de huesos secos que vuelven a vivir: una promesa de restauración para su pueblo.' },
      { title: 'El horno de fuego', ref: 'Daniel 3', text: 'Sadrac, Mesac y Abed-nego no se inclinan ante la estatua del rey y Dios los acompaña en medio de las llamas.' },
      { title: 'Daniel en el foso de los leones', ref: 'Daniel 6', text: 'Daniel sigue orando a pesar de la prohibición. Dios cierra la boca de los leones.' },
      { title: 'Ester ante el rey', ref: 'Libro de Ester', text: 'Ester arriesga su vida para salvar a su pueblo, animada por Mardoqueo: «¿Quién sabe si para esta hora has llegado al reino?».' },
      { title: 'El regreso y el muro', ref: 'Esdras 1–6 · Nehemías 2–6', text: 'Zorobabel reconstruye el templo, Esdras enseña la ley y, con oración y trabajo en equipo, Nehemías levanta el muro de Jerusalén en solo 52 días.' },
    ],
  },
  {
    id: 'silencio', icon: '🕯️', title: 'Los 400 años de silencio', dates: 'c. 400 – 5 a. C.',
    summary: 'No hay profetas nuevos, pero Dios prepara el escenario: un mundo unido por un idioma, caminos romanos y un pueblo esperando al Mesías.',
    people: [
      { name: 'Matatías', role: 'El sacerdote que dijo no' }, { name: 'Judas Macabeo', role: 'El que purificó el templo' },
      { name: 'Simeón', role: 'El que esperaba al Mesías' }, { name: 'Ana la profetisa', role: 'La que servía en el templo' },
    ],
    stories: [
      { title: 'Un mundo que se prepara', ref: 'Gálatas 4:4', text: 'Persas, griegos y romanos unifican el mundo: un idioma común, buenos caminos y la Escritura traducida al griego. «Cuando llegó el cumplimiento del tiempo, Dios envió a su Hijo».' },
      { title: 'Los macabeos y Hanuká', ref: '1 Macabeos 2–4 · Juan 10:22', text: 'Cuando se prohíbe la ley de Dios, Matatías y su hijo Judas se levantan, recuperan el templo y lo dedican de nuevo: la fiesta de las luces.' },
      { title: 'Los que esperaban', ref: 'Lucas 2:25–38', text: 'Aun en el silencio hubo corazones fieles: Simeón y Ana esperaron toda su vida y vieron con sus ojos al Mesías.' },
    ],
  },
  {
    id: 'jesus', icon: '✝️', title: 'La vida de Jesús', dates: 'c. 5 a. C. – 30 d. C.',
    summary: 'Dios se hace hombre. Jesús enseña, sana, muere en la cruz por nuestros pecados y resucita al tercer día.',
    people: [
      { name: 'María', role: 'La madre de Jesús' }, { name: 'José de Nazaret', role: 'El carpintero justo' }, { name: 'Juan el Bautista', role: 'El que preparó el camino' },
      { name: 'Jesús', role: 'El Rey de reyes' }, { name: 'Pedro', role: 'La roca' }, { name: 'Juan', role: 'El discípulo amado' },
      { name: 'Mateo', role: 'El cobrador que lo dejó todo' }, { name: 'María Magdalena', role: 'La primera testigo' },
    ],
    stories: [
      { title: 'El nacimiento en Belén', ref: 'Lucas 2', text: 'María da a luz al Salvador en un pesebre. Pastores y sabios vienen a adorarlo.' },
      { title: 'El bautismo y las tentaciones', ref: 'Mateo 3–4', text: 'Juan bautiza a Jesús en el Jordán y el Padre dice: «Este es mi Hijo amado». Luego Jesús vence las tentaciones en el desierto.' },
      { title: 'El Sermón del Monte', ref: 'Mateo 5–7', text: 'Jesús enseña las bienaventuranzas y cómo vivir en el reino de Dios.' },
      { title: 'Milagros y parábolas', ref: 'Juan 6 · Lucas 15', text: 'Jesús alimenta a cinco mil, calma la tormenta, sana enfermos y cuenta la parábola del hijo pródigo: el amor del Padre es para todos.' },
      { title: 'La cruz y la resurrección', ref: 'Juan 19–20', text: 'Jesús da su vida por todos y vence a la muerte. María Magdalena es la primera en ver la tumba vacía: la esperanza de nuestra fe.' },
    ],
  },
  {
    id: 'iglesia', icon: '🕊️', title: 'La iglesia primitiva', dates: 'c. 30 – 100 d. C.',
    summary: 'El Espíritu Santo desciende en Pentecostés y el evangelio se extiende de Jerusalén hasta los confines de la tierra.',
    people: [
      { name: 'Pedro', role: 'La roca' }, { name: 'Juan', role: 'El discípulo amado' }, { name: 'Esteban', role: 'El primer mártir' },
      { name: 'Pablo', role: 'El apóstol de las naciones' }, { name: 'Bernabé', role: 'El hijo de consolación' }, { name: 'Timoteo', role: 'El discípulo joven' },
      { name: 'Lidia', role: 'La vendedora de púrpura' }, { name: 'Priscila', role: 'Hacedora de tiendas y maestra' },
    ],
    stories: [
      { title: 'Pentecostés', ref: 'Hechos 2', text: 'El Espíritu Santo llena a los discípulos y 3.000 personas creen en un solo día.' },
      { title: 'Esteban, el primer mártir', ref: 'Hechos 6–7', text: 'Esteban da testimonio de Jesús y, mientras lo apedrean, ora por sus enemigos: «Señor, no les tomes en cuenta este pecado».' },
      { title: 'La conversión de Pablo', ref: 'Hechos 9', text: 'Una luz en el camino a Damasco transforma a un perseguidor en el gran misionero de la iglesia; Bernabé lo acoge.' },
      { title: 'El evangelio llega a Europa', ref: 'Hechos 16–18', text: 'Pablo viaja con Timoteo; en Filipos Lidia abre su casa y en Corinto lo hospedan Priscila y Aquila.' },
      { title: 'Las cartas y el Apocalipsis', ref: 'Romanos – Apocalipsis', text: 'Pablo, Pedro y Juan escriben a las iglesias y cierran la Biblia con la promesa del regreso de Cristo.' },
    ],
  },
];
