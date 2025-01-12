import {mates} from '../script.js';

const problemas = [
    {
        tipo: 'multiples-operaciones',
        titulo: "Resuelve el Problema",
        enunciado: "La madre de Álvaro tiene el triple de la edad de su hijo, y éste tiene 30 años menos que su madre. ¿Cuántos años tienen cada uno?",
        operaciones: [
            { pregunta: 'Edad Alvaro', respuesta: '15' },
            { pregunta: 'Edad Madre Alvaro', respuesta: '45' },
        ],
        pista: "",
        explicacion: "Álvaro tiene 15 años, y su madre tiene 3 × 15 = 45 3×15=45 años."
    },
    {
        tipo: 'multiples-operaciones',
        titulo: "Resuelve el Problema",
        enunciado: "Hemos comprado 8 libros iguales y hemos pagado con un billete de 50 €. Si nos han devuelto 10 €, ¿cuánto costaba cada libro?",
        operaciones: [
            { pregunta: '', respuesta: '5' }
        ],
        pista: "",
        explicacion: "Cada libro costaba 5 €"
    },
    {
        tipo: "multiples-operaciones",
        titulo: "Resuelve el problema",
        enunciado: 'La madre de Juan tiene el doble de la edad de este más 5 años. La suma de sus edades es 38 años. La ecuación que planteamos para saber sus edades es, ¿cuál es la correcta? resuélvela:<br><br>a) x + 2x + 5 = 38<br>b) x + 5 = 2x<br>c) x + 2x = 38',
        operaciones: [
            { pregunta: "", respuesta: "a" }
        ],
        pista: "",
        explicacion: "Juan tiene 11 años, y su madre tiene  2 × 11 + 5 = 27 2×11+5=27 años."
    }
];
mates(problemas);
