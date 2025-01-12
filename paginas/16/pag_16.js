import {mates} from '../script.js';
const problemas = [
    {
        tipo: "multiples-operaciones",
        titulo: "Realiza las operaciones",
        enunciado:'Calcula el resultado',
        operaciones: [
            { pregunta: "( - 5 ) – ( + 7 )", respuesta: "-12" },
            { pregunta: "( + 4 ) – ( - 6 )", respuesta: "10" },
            { pregunta: "( - 3 ) – ( - 7 )", respuesta: "4" },
            { pregunta: "( +4 ) – ( +2 )", respuesta: "2" },
            { pregunta: "( +4 ) – ( +6 )", respuesta: "-2" }
        ],
        pista: "Recuerda las reglas de los signos en las restas.",
        explicacion: "Se presentan las respuestas individuales después de resolver cada operación."
    },
    {
        tipo: "multiples-operaciones",
        titulo: "Realiza las operaciones",
        enunciado:'Calcula el resultado',
        operaciones: [
            { pregunta: "12 + 5", respuesta: "17" },
            { pregunta: "12 + (-5)", respuesta: "7" },
            { pregunta: "-12 + 5", respuesta: "-7" },
            { pregunta: "-12 + (-5)", respuesta: "-17" }
        ],
        pista: "Suma los números positivos y negativos correctamente.",
        explicacion: "Recuerda sumar o restar los valores dependiendo de su signo."
    },
    {
        tipo: "multiples-operaciones",
        titulo: "Realiza las operaciones",
        enunciado:'Calcula el resultado',
        operaciones: [
            { pregunta: "(+6) – (-2) + (-5) – (+4)", respuesta: "-1" },
            { pregunta: "(-5) – (-5) – (+7) + (-6)", respuesta: "-13" },
            { pregunta: "(-1) – (-10) + (+5) – (+7)", respuesta: "7" },
            { pregunta: "14 - (12 + 2)", respuesta: "0" },
            { pregunta: "-1 – (2 – 5) + (7 – 4)", respuesta: "5" }
        ],
        pista: "Resuelve las operaciones en el orden correcto.",
        explicacion: "Aplica las reglas de los paréntesis y los signos correctamente."
    }
];

mates(problemas);
