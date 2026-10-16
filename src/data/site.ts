// Contenido editable del sitio. Los textos son marcadores de posición hasta cargar el contenido real.
export const site = {
  name: 'Iglesia Jesús es Rey',
  short: 'Jesús es Rey',
  city: 'San Martín de los Andes, Neuquén',
  tagline: 'Una familia que ama a Dios y a su gente',
  verse: { text: 'Y tiene en su vestidura y en su muslo escrito este nombre: Rey de reyes y Señor de señores.', ref: 'Apocalipsis 19:16' },
  address: 'Dirección a confirmar, San Martín de los Andes',
  phone: '+54 2972 000000',
  whatsapp: '542972000000',
  email: 'contacto@jesusesrey.com.ar',
  social: { instagram: '#', facebook: '#', youtube: '#' },
};

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/historia', label: 'Historia' },
  { href: '/linea-del-tiempo', label: 'Línea del tiempo' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/horarios', label: 'Horarios' },
  { href: '/ministerios', label: 'Ministerios' },
  { href: '/predicas', label: 'Prédicas' },
  { href: '/eventos', label: 'Eventos' },
  { href: '/galeria', label: 'Galería' },
  { href: '/contacto', label: 'Contacto' },
];

export interface Activity { day: string; time: string; name: string; desc: string; }
export const schedule: Activity[] = [
  { day: 'Domingo', time: '10:00', name: 'Reunión general', desc: 'Alabanza, Palabra y comunión para toda la familia.' },
  { day: 'Domingo', time: '10:00', name: 'Escuela dominical', desc: 'Niños y pre-adolescentes aprenden de Jesús.' },
  { day: 'Martes', time: '19:30', name: 'Oración', desc: 'Un tiempo para buscar a Dios juntos.' },
  { day: 'Miércoles', time: '19:30', name: 'Estudio bíblico', desc: 'Profundizamos en la Palabra de Dios.' },
  { day: 'Jueves', time: '19:30', name: 'Reunión de mujeres', desc: 'Comunión y crecimiento para mujeres.' },
  { day: 'Viernes', time: '20:00', name: 'Jóvenes', desc: 'Adoración, amistad y propósito.' },
  { day: 'Sábado', time: '18:00', name: 'Grupos en casas', desc: 'Pequeños grupos en distintos barrios.' },
];
export const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

export const ministries = [
  { icon: '🕊️', name: 'Alabanza y adoración', desc: 'Levantamos un sonido de gratitud a Dios.' },
  { icon: '🧒', name: 'Niños', desc: 'Enseñanza bíblica creativa para los más chicos.' },
  { icon: '🔥', name: 'Jóvenes', desc: 'Una generación que vive para Jesús.' },
  { icon: '🌷', name: 'Mujeres', desc: 'Un espacio de encuentro, fe y apoyo.' },
  { icon: '🛡️', name: 'Hombres', desc: 'Hombres que crecen en fe y carácter.' },
  { icon: '🤝', name: 'Acción social', desc: 'Amor en acción para nuestra ciudad.' },
  { icon: '🌍', name: 'Misiones', desc: 'Llevamos el evangelio más allá de nuestras paredes.' },
  { icon: '📖', name: 'Discipulado', desc: 'Acompañamos a cada persona a crecer en Cristo.' },
];

export const beliefs = [
  { name: 'Las Sagradas Escrituras', desc: 'La Biblia es la Palabra de Dios, inspirada y suficiente.' },
  { name: 'Un solo Dios', desc: 'Creemos en Dios Padre, Hijo y Espíritu Santo.' },
  { name: 'Jesucristo', desc: 'Murió por nuestros pecados, resucitó y volverá.' },
  { name: 'Salvación por gracia', desc: 'Somos salvos por la fe en Jesús, no por obras.' },
  { name: 'El Espíritu Santo', desc: 'Nos guía, consuela y empodera para vivir en santidad.' },
  { name: 'La Iglesia', desc: 'Una familia de creyentes llamada a amar y servir.' },
];

export const timeline = [
  { year: 'Los inicios', title: 'Una semilla de fe', desc: 'Aquí contaremos cómo comenzó la iglesia en San Martín de los Andes.' },
  { year: 'Crecimiento', title: 'Una familia que crece', desc: 'Los primeros años, las primeras reuniones y las primeras historias.' },
  { year: 'Hoy', title: 'Mirando al futuro', desc: 'Lo que Dios está haciendo hoy en nuestra congregación.' },
];

export const events = [
  { date: 'Próximamente', name: 'Evento especial', desc: 'Los próximos eventos de la iglesia se publicarán aquí.' },
  { date: 'Próximamente', name: 'Conferencia', desc: 'Anunciaremos fechas e invitados.' },
  { date: 'Próximamente', name: 'Campamento', desc: 'Un tiempo de comunión y descanso en la Patagonia.' },
];

export const sermons = [
  { title: 'Prédica de ejemplo', speaker: 'Pastor', date: 'Próximamente', ref: 'Juan 3:16' },
  { title: 'Prédica de ejemplo', speaker: 'Pastor', date: 'Próximamente', ref: 'Salmo 23' },
  { title: 'Prédica de ejemplo', speaker: 'Pastor', date: 'Próximamente', ref: 'Romanos 8' },
];
