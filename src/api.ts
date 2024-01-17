import type {Task, Certificate, Person} from "./types";

const api = {
  italy: {
    tasks: (): Task[] => {
      return buildItalyTasks();
    },
  },
  famiy_tree: (): Person[] => {
    return buildFamilyTree();
  },
  // algo: {
  //   otro: async (): Promise<T> => {
  //     return fetch("www.google.com").then((res) => res.text());
  //   },
  // },
};

function buildCertificates(defuncion = true): Certificate[] {
  const LEGALIZACION = {title: "Legalizacion", checked: false};
  const APOSTILLADO = {title: "Apostillado", checked: false};
  const TRADUCCION = {title: "Traducción", checked: false};
  const VERIFICACION_CONSULAR = {title: "Verificación consular de traducción", checked: false};

  const steps = [LEGALIZACION, APOSTILLADO, TRADUCCION, VERIFICACION_CONSULAR];
  const actas = ["Nacimiento", "Matrimonio", "Defunción"];

  const filteredActas = defuncion ? actas : actas.filter((acta) => acta !== "Defunción");
  const certificates = filteredActas.map((acta) => {
    return {title: acta, steps: steps};
  });

  return certificates;
}

function buildFamilyTree(): Person[] {
  const MYSELF = {
    title: "Yo",
    descendant: null,
    key: "MYSELF",
    certificates: buildCertificates(false),
  };
  const PARENT = {
    title: "Madre/Padre",
    descendant: MYSELF,
    key: "PARENT",
    certificates: buildCertificates(),
  };
  const GRANDPARENT = {
    title: "Abuelo/a",
    descendant: PARENT,
    key: "GRANDPARENT",
    certificates: buildCertificates(),
  };
  const GREAT_GRANDPARENT = {
    title: "Bisabuelo/a",
    descendant: GRANDPARENT,
    key: "GREAT_GRANDPARENT",
    certificates: buildCertificates(),
  };
  const GREAT_GREAT_GRANDPARENT = {
    title: "TataraAbuelo/a",
    descendant: GREAT_GRANDPARENT,
    key: "GREAT_GREAT_GRANDPARENT",
    certificates: buildCertificates(),
  };
  const GREAT_GREAT_GREAT_GRANDPARENT = {
    title: "TrasTataraAbuelo/a",
    descendant: GREAT_GREAT_GRANDPARENT,
    key: "GREAT_GREAT_GREAT_GRANDPARENT",
    certificates: buildCertificates(),
  };

  return [
    GREAT_GREAT_GREAT_GRANDPARENT,
    GREAT_GREAT_GRANDPARENT,
    GREAT_GRANDPARENT,
    GRANDPARENT,
    PARENT,
    MYSELF,
  ];
}

function buildItalyTasks(): Task[] {
  const ITALIAN_TASKS = [
    "Codice Fiscale",
    "Declaracion de presencia",
    "Presentacion de la solicitud de residencia",
    "Paso del vigile",
    "Residencia Fijada",
    "Presentacion de carpeta",
    "Respuesta PECs",
    "Carta d'Identita",
    "Pasaporte",
    "Tessera Sanitaria",
    "Inscripcion AIRE",
    "Conversion Lic. Conducir",
  ];

  const tasks: Task[] = [];

  ITALIAN_TASKS.forEach((task) => {
    tasks.push({title: task, checked: false});
  });

  return tasks;
}

export default api;
