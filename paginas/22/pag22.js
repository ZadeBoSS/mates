import { mates } from '../mates.js';
const problemas = [
    {
        pregunta: "Queremos guardar 768 latas de atún en cajas de 24 latas cada una. ¿Cuántas cajas son necesarias?",
        respuesta: "32",
        pista: "Divide el total entre el número de recipientes o personas, revisando los restos si es necesario.",
        explicacion: "En divisiones exactas, el cociente es el número requerido. Si hay un resto, eso será el sobrante."
    },
    {
        pregunta: "María, Antonio y Ana coleccionan sellos. Su tío tiene 235 para repartir entre los tres.¿Cuántos puede dar a cada uno?",
        respuesta: "78",
        pista: "En divisiones exactas, el cociente es el número requerido. Si hay un resto, eso será el sobrante.",
        explicacion: "Exacto porque si divimos 235 ÷ 3 dara como resultado 78, aunque en este caso si que sobraria 1."
    },
    {
        tipo: "multiples-operaciones",
        titulo: "Operaciones Multiples",
        operaciones: [
            { pregunta: "49067 ÷ 31", respuesta: "1582 " },
            { pregunta: "34597 ÷ 475", respuesta: "72.86" }
        ],
        pista: "Resuelve cada operación por separado.",
        explicacion: "Se presentan las respuestas individuales."
    },
    {
        tipo: "multiples-operaciones",
        titulo: "Operaciones Multiples",
        operaciones: [
            { pregunta: "6 : (− 2)", respuesta: "-3" },
            { pregunta: "(–20) : (+10)", respuesta: "-2" },
            { pregunta: "(–30) : (-5)", respuesta: "6" },
            { pregunta: "(1 – 9 + 2) : (–3)", respuesta: "2" },
            { pregunta: "[(+7) · (-20)] : (+10)", respuesta: "-14" }
        ],
        pista: "Presta atención a las reglas de los signos en las divisiones y multiplicaciones.",
        explicacion: "Multiplica o divide los números en el orden correcto, aplicando las reglas de los signos."
    },
    {
        tipo: "multiples-operaciones",
        titulo: "Operaciones Multiples",
        operaciones: [
            { pregunta: "6 · (- 3) + 5 · (- 2) + (- 4) · (- 5)", respuesta: "" },
            { pregunta: "-2 · [ -3 + 4 · (-5 -2) ]", respuesta: "" },
            { pregunta: "2 – 3 · [(5 – 2) · (3 – 6 ) + 8 ]", respuesta: "" },
            { pregunta: "2 · (3 + 5 ) – (8 – 1) + (-1) · (3 + 1) – 8", respuesta: "" }
        ],
        pista: "Sigue el orden de operaciones: paréntesis, multiplicaciones y divisiones, y finalmente sumas o restas.",
        explicacion: "Resuelve paso a paso, respetando las reglas del orden de operaciones."
    }

];

mates(problemas);
