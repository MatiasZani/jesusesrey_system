export interface Figure { name: string; role: string; desc: string; robe: string; skin: string; hair: string; beard?: boolean; head?: 'crown' | 'veil' | 'none'; item: string; }

export const figures: Figure[] = [
  { name: 'Noé', role: 'El constructor del arca', desc: 'Obedeció a Dios cuando nadie más lo hacía y salvó a su familia del diluvio.', robe: '#8a6a43', skin: '#e0ac84', hair: '#d9d9d9', beard: true, item: 'ark' },
  { name: 'Abraham', role: 'El padre de la fe', desc: 'Dejó su tierra por una promesa y creyó que Dios le daría una descendencia como las estrellas.', robe: '#c9b28a', skin: '#d9a273', hair: '#eeeeee', beard: true, item: 'stars' },
  { name: 'José', role: 'El soñador', desc: 'Vendido por sus hermanos, terminó salvando a su pueblo con perdón y sabiduría.', robe: '#d9534f', skin: '#d9a273', hair: '#3b2a1e', item: 'coat' },
  { name: 'Moisés', role: 'El libertador', desc: 'Guió al pueblo fuera de Egipto y recibió los diez mandamientos en el monte Sinaí.', robe: '#4c6fa5', skin: '#d9a273', hair: '#cfcfcf', beard: true, item: 'tablets' },
  { name: 'David', role: 'El rey adorador', desc: 'De pastor a rey: venció a Goliat con fe y escribió salmos de alabanza.', robe: '#7a3f9d', skin: '#e0ac84', hair: '#8a4b1f', head: 'crown', item: 'harp' },
  { name: 'Elías', role: 'El profeta de fuego', desc: 'Valiente voz de Dios que hizo descender fuego del cielo en el monte Carmelo.', robe: '#a0522d', skin: '#d9a273', hair: '#4a3626', beard: true, item: 'flame' },
  { name: 'Ester', role: 'La reina valiente', desc: 'Arriesgó su vida para salvar a su pueblo. Fue puesta «para un tiempo como este».', robe: '#c2418a', skin: '#e8b996', hair: '#2d1e16', head: 'crown', item: 'scepter' },
  { name: 'Daniel', role: 'Fiel en el foso', desc: 'Siguió orando a Dios aun bajo amenaza y fue protegido en el foso de los leones.', robe: '#2f7f79', skin: '#d9a273', hair: '#2d1e16', item: 'scroll' },
  { name: 'María', role: 'La madre de Jesús', desc: 'Dijo «sí» a Dios con humildad y crió al Salvador del mundo.', robe: '#3b7fc4', skin: '#e8b996', hair: '#3b2a1e', head: 'veil', item: 'heart' },
  { name: 'Pedro', role: 'La roca', desc: 'Pescador que siguió a Jesús, cayó, se levantó y lideró a la primera iglesia.', robe: '#5b7f52', skin: '#d9a273', hair: '#9a9a9a', beard: true, item: 'keys' },
  { name: 'Pablo', role: 'El apóstol de las naciones', desc: 'Perseguidor convertido en misionero: llevó el evangelio por todo el mundo conocido.', robe: '#6b4a3a', skin: '#d9a273', hair: '#3b2a1e', beard: true, item: 'letter' },
];
