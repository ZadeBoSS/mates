import {mates} from '../script.js';

const problemas = [
    {
        tipo: 'multiples-operaciones',
        titulo: "Expresa estas frases en lenguaje algebraico",
        enunciado: "El doble de un número más su triple",
        operaciones: [
            { pregunta: '', respuesta: '2x+3x' }
        ],
        pista: "",
        explicacion: "El doble de un número más su triple 2x + 3x = 5x"
    },
    {
        tipo: 'multiples-operaciones',
        titulo: "Expresa estas frases en lenguaje algebraico",
        enunciado: "La edad de una persona dentro de 7 años",
        operaciones: [
            { pregunta: '', respuesta: 'x+7' }
        ],
        pista: "",
        explicacion: "Si la edad actual es x, dentro de 7 años será: x+7"

    },
    {
        tipo: 'multiples-operaciones',
        titulo: "Expresa estas frases en lenguaje algebraico",
        enunciado: "La quinta parte de un número",
        operaciones: [
            { pregunta: '', respuesta: 'x/5' }
        ],
        pista: "",
        explicacion: "Si el número es x, su quinta parte es: x/5"

    },
    {
        tipo: 'multiples-operaciones',
        titulo: "Expresa estas frases en lenguaje algebraico",
        enunciado: "La diferencia entre dos números",
        operaciones: [
            { pregunta: '', respuesta: 'x-y' }
        ],
        pista: "",
        explicacion: "Si los números son x e y, la diferencia es: x-y"

    },
    {
        tipo: 'multiples-operaciones',
        titulo: 'Calcula el valor numérico de los estos polinomios',
        enunciado: '',
        operaciones: [
            {
                pregunta: '2x + 3y para x = 3, y = 2', respuesta: '12'
            }
        ],
        pista: '',
        explicacion: '2(3)+3(2)=6+6=12'
    },
    {
        tipo: 'multiples-operaciones',
        titulo: 'Calcula el valor numérico de los estos polinomios',
        enunciado: '',
        operaciones: [
            {
                pregunta: '6 – a para a = –5', respuesta: '11'
            }
        ],
        pista: '',
        explicacion: '6−(−5)=6+5=11'
    },
    {
        tipo: 'multiples-operaciones',
        titulo: 'Calcula el valor numérico de los estos polinomios',
        enunciado: '',
        operaciones: [
            {
                pregunta: '3a + 4b – c para b = –1, a = –1 y c = +2', respuesta: '-9'
            }
        ],
        pista: '',
        explicacion: '3(−1)+4(−1)−2=−3−4−2=−9'
    },
    {
        tipo: 'multiples-operaciones',
        titulo: "Resuelve las siguientes ecuaciones",
        enunciado: "Despeja X, resolviendo asi la ecuación",
        operaciones: [
            { pregunta: '3x - 5 = 2x - 7', respuesta: '-2' },
            { pregunta: '6x + 8 = 3x - 4', respuesta: '-4' },
            { pregunta: '5x + 2 = 12', respuesta: '2' },
            { pregunta: '4x - 7 = 3x -7', respuesta: '0' },
        ],
        pista: "",
        explicacion: ""

    }
];

mates(problemas);
