import {mates} from '../script.js';
const problemas = [
    {
        tipo: "multiples-operaciones",
        titulo: "Factor Común",
        enunciado:'Calcula el factor común',
        operaciones: [
            { pregunta: "3·b + 5·b – 2·b", respuesta: "6·b" },
            { pregunta: "7·a - 3·a + 5·a", respuesta: "9·a" },
            { pregunta: "6·a + 6·b", respuesta: "6·(a + b)" },
            { pregunta: "2·a + 2·c", respuesta: "2·(a + c)" }
        ],
        pista: "Identifica los factores comunes y agrúpalos.",
        explicacion: "El factor común es el término que se repite en cada suma."
    },
    {
        tipo: "multiples-operaciones",
        titulo: "Multiplicaciones",
        enunciado:'Resuelve las multiplicaciones',
        operaciones: [
            { pregunta: "2306 x 305", respuesta: "703330" },
            { pregunta: "(-2) · (-5) · (-9)", respuesta: "-90" },
            { pregunta: "4 · (-5) · 2", respuesta: "-40" },
            { pregunta: "3 · (-3) + 4 · (-2) + (-4) · (-5)", respuesta: "5" }
        ],
        pista: "Ten cuidado con los signos en las multiplicaciones.",
        explicacion: "Recuerda que multiplicar números negativos sigue reglas específicas."
    },
    {
        tipo: "multiples-operaciones",
        titulo: "Propiedades",
        enunciado:'Escribe el nombre de la propiedad que corresponda',
        operaciones: [
            { pregunta: "55 + 23 + 15 = 55 + 15 + 23", respuesta: "Conmutativa" },
            { pregunta: "7 · 25 · 4 = 7 · (25 · 4)", respuesta: "Asociativa" },
            { pregunta: "5 · (8 + 18) = 5 · 8 + 5 · 18", respuesta: "Distributiva" },
            { pregunta: "87 − 23 = 84 − 20 = 64", respuesta: "Ninguna" }
        ],
        pista: "Identifica cómo cambian el orden o la agrupación.<br>Recuerda los tipos de propiedades:(Conmutativa, Asociativa y Distributiva o Ninguna)",
        explicacion: "Las propiedades indican cómo operar los números manteniendo el resultado."
    }
];

mates(problemas);
