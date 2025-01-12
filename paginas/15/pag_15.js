import {mates} from 'mates.js';

const problemas = [
         {
            pregunta: "En una tienda, un libro cuesta $250. Si hay un descuento del 20%, ¿cuál es el precio final del libro?",
            respuesta: 200,
            pista: "Recuerda: Para calcular un descuento, primero calcula el porcentaje y luego resta del precio original.",
            explicacion: "El 20% de 250 es 50, por lo tanto 250 - 50 = 200"
        },
        {
            pregunta: "Un triángulo tiene una base de 8 metros y una altura de 6 metros. ¿Cuál es su área?",
            respuesta: 24,
            pista: "El área de un triángulo se calcula con la fórmula: (base × altura) ÷ 2",
            explicacion: "Aplicando la fórmula: (8 × 6) ÷ 2 = 48 ÷ 2 = 24"
        },
        {
            pregunta: "Si tienes una circunferencia con radio 5cm, ¿cuál es su perímetro? (usa 3.14 como valor de π)",
            respuesta: 31.4,
            pista: "El perímetro de una circunferencia es 2πr",
            explicacion: "2 × 3.14 × 5 = 31.4"
        },
        {
            tipo: "multiples-operaciones",
            titulo: "Realiza las siguientes operaciones básicas",
            operaciones: [
                { pregunta: "5 + 3", respuesta: 8 },
                { pregunta: "12 ÷ 4", respuesta: 3 },
                { pregunta: "7 × 6", respuesta: 42 },
                { pregunta: "15 - 9", respuesta: 6 },
                { pregunta: "9²", respuesta: 81 }
            ],
            pista: "Resuelve cada operación por separado.",
            explicacion: "Se presentan las respuestas individuales."
        }
    ];

mates(problemas);
