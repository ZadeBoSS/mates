import {mates} from '../script.js';

const problemas = [
    {
        titulo: "¿Son directa o inversamente proporcionales?",
        pregunta: "La cantidad de árboles talados y los kilos de leña almacenados.",
        respuesta: "directamente",
        pista: "Escribe <strong>directamente</strong> o <strong>inversamente</strong> segun convenga.<br>
        explicacion: "aaa"
    },
    {
        titulo: "¿Son directa o inversamente proporcionales?",
        pregunta: "La velocidad del tren y el tiempo que tarda en llegar a su destino.",
        respuesta: "inversamente",
        pista: "Escribe <strong>directamente</strong> o <strong>inversamente</strong> segun convenga.<br>Divide el total entre el número de recipientes o personas, revisando los restos si es necesario.",
        explicacion: ""
    },
    {
        titulo: "¿Son directa o inversamente proporcionales?",
        pregunta: "El tamaño de la bolsa y la cantidad de bolsas necesarias para guardar la compra.",
        respuesta: "inversamente",
        pista: "Escribe <strong>directamente</strong> o <strong>inversamente</strong> segun convenga.<br>Divide el total entre el número de recipientes o personas, revisando los restos si es necesario.",
        explicacion: ""
    },
    {
        titulo: "¿Son directa o inversamente proporcionales?",
        pregunta: "La distancia que recorre un automóvil y la gasolina que gasta.",
        respuesta: "directamente",
        pista: "Escribe <strong>directamente</strong> o <strong>inversamente</strong> segun convenga.<br>Divide el total entre el número de recipientes o personas, revisando los restos si es necesario.",
        explicacion: ""
    },
    {
        titulo: "Calcula el % de rebaja que se ha aplicado",
        pregunta: "23,95 <strong>ANTES</strong> 15,95 <strong>DESPUES</strong>",
        respuesta: "33.41",
        pista: "",
        explicacion: ""
    },
    {
        tipo: "multiples-operaciones",
        titulo: "Calcula el cuarto término de las siguientes proporciones",
        operaciones: [
            { pregunta: "36/20 = 45/X", respuesta: "25" },
            { pregunta: "12,6/X = 0,2/0,5", respuesta: "31.5" },
            { pregunta: "1/0,25=X/3", respuesta: "12" },
            { pregunta: "X/2=35/5", respuesta: "14" }
        ],
        pista: "Resuelve cada operación por separado.",
        explicacion: "Se presentan las respuestas individuales."
    }
];

mates(problemas);
