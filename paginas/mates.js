    export function mates(problemas){
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

let problemaActual = 0;
let problemasResueltos = new Array(problemas.length).fill(false);
let tiempoInicio;
let tiempoProblemaActual;

// Función para inicializar el carrusel
function inicializarCarrusel() {
    const carouselContainer = document.querySelector('.carousel-container');

    // Crear tarjetas de problemas
    problemas.forEach((problema, index) => {
        const card = document.createElement('div');
        card.className = `problem-card ${index === 0 ? 'active' : ''}`;

        if (problema.tipo === "multiples-operaciones") {
            card.innerHTML = `
                    <h2>${problema.titulo}</h2>
                    <div class="operaciones">
                    ${problema.operaciones.map((op, idx) => `
                        <div class="operation">
                            <p>${op.pregunta}</p>
                            <input type="number" id="multiInput${index}-${idx}" class="answer-input" placeholder="Respuesta">
                        </div>
                    `).join('')}
                    </div>
                    <button class="nav-btn check-btn multi">Verificar Respuestas</button>
                    <div class="feedback"></div>
                `;
        } else {
            card.innerHTML = `
                    <h2>Problema ${index + 1}</h2>
                    <p>${problema.pregunta}</p>
                    <div class="answer-section">
                        <input type="number" id="input${index + 1}" step="0.01" class="answer-input" placeholder="Escribe tu respuesta aquí">
                        <button class="nav-btn check-btn">Verificar Respuesta</button>
                        <div class="hints-section">
                            <button class="hint-btn">Ver Pista</button>
                            <div class="hint-content">${problema.pista}</div>
                        </div>
                        <div class="feedback"></div>
                    </div>
                `;
        }

        carouselContainer.appendChild(card);
    });




    // Agregar botones de navegación
    const navigation = document.createElement('div');
    navigation.className = 'navigation';
    navigation.innerHTML = `
                    <button id="next" class="nav-btn prev-btn" disabled><svg class="icono-back" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path fill="#2563eb" d="M21.125 0H4.875A4.874 4.874 0 0 0 0 4.875v16.25A4.874 4.874 0 0 0 4.875 26h16.25A4.874 4.874 0 0 0 26 21.125V4.875A4.874 4.874 0 0 0 21.125 0M17.66 13.857l-6.229 4.949a.98.98 0 0 1-.951-.04a.97.97 0 0 1-.48-.816V8.051c0-.334.19-.644.479-.817a.99.99 0 0 1 .952-.039l6.229 4.948c.336.297.537.494.537.857s-.236.575-.537.857"/></svg></button>
                    <button id="next" class="nav-btn next-btn" disabled><svg class="icono-next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path fill="#2563eb" d="M21.125 0H4.875A4.874 4.874 0 0 0 0 4.875v16.25A4.874 4.874 0 0 0 4.875 26h16.25A4.874 4.874 0 0 0 26 21.125V4.875A4.874 4.874 0 0 0 21.125 0M17.66 13.857l-6.229 4.949a.98.98 0 0 1-.951-.04a.97.97 0 0 1-.48-.816V8.051c0-.334.19-.644.479-.817a.99.99 0 0 1 .952-.039l6.229 4.948c.336.297.537.494.537.857s-.236.575-.537.857"/></svg></button>
                `;
    carouselContainer.appendChild(navigation);

    // Inicializar componentes
    inicializarEventos();
    inicializarCalculadora();
    inicializarConversor();
    inicializarEventosTactiles();
    inicializarPizarra();
    iniciarTemporizador();
    actualizarBarraProgreso();
}

function inicializarEventos() {
    // Toggle del sidebar
    const toggleBtn = document.querySelector('.toggle-btn');
    const divSidebar = document.querySelector('.div-sidebar');
    const sidebar = document.querySelector('.sidebar');
    toggleBtn.addEventListener('click', () => {
        divSidebar.classList.toggle('active');
        sidebar.classList.toggle('active');
    });

    document.querySelectorAll('.accordeon h3').forEach((btn) => {
        btn.addEventListener('click', () => accordeon(btn));
    });

    // Botones de navegación
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    prevBtn.addEventListener('click', () => navegarA(problemaActual - 1));
    nextBtn.addEventListener('click', () => navegarA(problemaActual + 1));

    /*     // Botones de verificación y pistas
        document.querySelectorAll('.check-btn').forEach((btn, index) => {
            btn.addEventListener('click', () => verificarRespuesta(index));
        }); */

    document.querySelectorAll('.check-btn').forEach((btn, index) => {
        if (btn.className.split(" ").includes("multi")) {
            btn.addEventListener('click', () => verificarMultiples(index));
        } else {
            btn.addEventListener('click', () => verificarRespuesta(index));
        }
    });

    document.querySelectorAll('.hint-btn').forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            const hintContent = e.target.nextElementSibling;
            hintContent.style.display = hintContent.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Bloc de notas
    const notePad = document.getElementById('notePad');
    notePad.value = localStorage.getItem('mathNotes') || '';
    notePad.addEventListener('input', () => {
        localStorage.setItem('mathNotes', notePad.value);
    });
}

function accordeon(btn) {
    if (btn.className.split(" ").includes("abierto")) {
        btn.classList.remove('abierto');
    } else {
        btn.classList.add('abierto');
    }
}

function inicializarCalculadora() {
    const calculator = document.getElementById('calculator');
    const display = document.getElementById('calculatorDisplay');
    const botones = [
        '7', '8', '9', '÷',
        '4', '5', '6', '×',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C', '(', ')', '^',
        '√', 'sin', 'cos', 'tan'
    ];


    let valorActual = '';
    let i = 0;
    botones.forEach(btn => {
        const button = document.createElement('button');
        button.className = 'calc-btn';
        button.textContent = btn;

        /* cambiarFondoSiContieneOperadores(button); */
        button.addEventListener('click', () => {
            switch (btn) {
                case '=':
                    try {
                        valorActual = valorActual
                            .replace('×', '*')
                            .replace('÷', '/')
                            .replace('^', '**')
                            .replace('√', 'Math.sqrt')
                            .replace('sin', 'Math.sin')
                            .replace('cos', 'Math.cos')
                            .replace('tan', 'Math.tan');
                        valorActual = eval(valorActual).toString();
                        display.textContent = valorActual;
                    } catch (e) {
                        display.textContent = 'Error';
                        valorActual = '';
                    }
                    break;
                case 'C':
                    valorActual = '';
                    display.textContent = '';
                    break;
                default:
                    valorActual += btn;
                    display.textContent = valorActual;
            }
        });
        calculator.appendChild(button);
        if (btn.includes('÷') || btn.includes('×') || btn.includes('+') || btn.includes('-')) {
            // Cambia el fondo de los operadores
            button.style.background = '#000';
        }
    });
}

function inicializarConversor() {
    const unitTypes = {
        length: {
            units: ['metros', 'kilómetros', 'centímetros', 'milímetros'],
            conversions: {
                metros: 1,
                kilómetros: 1000,
                centímetros: 0.01,
                milímetros: 0.001
            }
        },
        mass: {
            units: ['gramos', 'kilogramos', 'miligramos'],
            conversions: {
                gramos: 1,
                kilogramos: 1000,
                miligramos: 0.001
            }
        },
        volume: {
            units: ['litros', 'mililitros', 'centímetros cúbicos'],
            conversions: {
                litros: 1,
                mililitros: 0.001,
                'centímetros cúbicos': 0.001
            }
        }
    };

    const unitType = document.getElementById('unitType');
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    const unitInput = document.getElementById('unitInput');
    const result = document.getElementById('conversionResult');

    function actualizarUnidades() {
        const tipo = unitType.value;
        const unidades = unitTypes[tipo].units;

        fromUnit.innerHTML = '';
        toUnit.innerHTML = '';

        unidades.forEach(unit => {
            fromUnit.add(new Option(unit, unit));
            toUnit.add(new Option(unit, unit));
        });
    }

    function convertir() {
        const tipo = unitType.value;
        const valor = parseFloat(unitInput.value);
        const desde = fromUnit.value;
        const hasta = toUnit.value;

        if (isNaN(valor)) {
            result.textContent = 'Por favor ingresa un número válido';
            return;
        }

        const conversiones = unitTypes[tipo].conversions;
        const resultado = valor * conversiones[desde] / conversiones[hasta];

        result.textContent = `${valor} ${desde} = ${resultado.toFixed(3)} ${hasta}`;
    }

    unitType.addEventListener('change', actualizarUnidades);
    fromUnit.addEventListener('change', convertir);
    toUnit.addEventListener('change', convertir);
    unitInput.addEventListener('input', convertir);

    actualizarUnidades();
}

function inicializarEventosTactiles() {
    const carouselContainer = document.querySelector('.carousel-container');
    let startX = 0;
    let endX = 0;

    // Detectar inicio del toque
    carouselContainer.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    // Detectar final del toque
    carouselContainer.addEventListener('touchend', (event) => {
        endX = event.changedTouches[0].clientX;

        const diffX = startX - endX;

        // Determinar dirección del deslizamiento
        if (Math.abs(diffX) > 50) { // Umbral para evitar gestos involuntarios
            if (diffX > 0) {
                // Deslizar a la izquierda: siguiente problema
                navegarA(problemaActual + 1);
            } else {
                // Deslizar a la derecha: problema anterior
                navegarA(problemaActual - 1);
            }
        }
    });
}
 
function inicializarPizarra() {
    // Crear el botón que abrirá el pop-up
    const botonAbrirPizarra = document.createElement('button');
    botonAbrirPizarra.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="m15.989 4l-1.503 1.5H5.25l-.144.006A1.75 1.75 0 0 0 3.5 7.25v2.24l2.61-1.64a2.25 2.25 0 0 1 3.008.569l.095.139a2.25 2.25 0 0 1 .163 2.082l-.079.166l-1.208 2.286a.75.75 0 0 0 .933 1.05l.098-.046l1.76-.993a.75.75 0 0 1 .826 1.247l-.085.057l-1.765.996a2.25 2.25 0 0 1-3.163-2.867l.07-.145l1.208-2.286a.75.75 0 0 0-.964-1.037l-.098.052L3.5 11.262v5.493c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75V9.443L22 7.946v8.809a3.25 3.25 0 0 1-3.25 3.25H5.25A3.25 3.25 0 0 1 2 16.755V7.25a3.25 3.25 0 0 1 3.066-3.245L5.25 4zm5.186-.455l.13.12l.121.13a2.27 2.27 0 0 1-.121 3.08l-4.281 4.273a2.25 2.25 0 0 1-.943.562l-2.327.7a1 1 0 0 1-1.24-1.265l.739-2.295c.11-.34.299-.65.552-.903l4.29-4.283a2.27 2.27 0 0 1 3.08-.12m-2.02 1.18l-4.29 4.284a.75.75 0 0 0-.184.3l-.447 1.39l1.416-.425a.75.75 0 0 0 .314-.188l4.28-4.273l.075-.086a.769.769 0 0 0-1.163-1.002"/></svg>`;
    botonAbrirPizarra.id = 'boton-pizarra';
    botonAbrirPizarra.classList.add('toggle-btn');
    const actividad = document.getElementById('actividad');
    actividad.appendChild(botonAbrirPizarra);

    // Crear el contenedor del pop-up
    const overlay = document.createElement('div');
    const popup = document.createElement('div');

    overlay.classList.add('overlay');
    popup.classList.add('popup');

    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    // Crear el botón para cerrar el pop-up
    const closeBtn = document.createElement('div');
    closeBtn.textContent = 'X';
    closeBtn.classList.add('boton-cerrar');
    popup.appendChild(closeBtn);

    // Crear el canvas dentro del pop-up
    const canvas = document.createElement('canvas');
    canvas.id = 'pizarra';
    popup.appendChild(canvas);

    // Crear el botón para borrar el canvas
    const clearBtn = document.createElement('div');
    clearBtn.id = 'clearCanvas';

    clearBtn.style.width = 'max-content';
    clearBtn.style.height = 'max-content';
    clearBtn.style.aspectRatio = '1/1';
    clearBtn.style.display = 'flex';
    clearBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" viewBox="0 0 24 24"><path fill="#ffffff" fill-rule="evenodd" d="M12 2a1 1 0 1 0 0 2a8 8 0 1 1-6.924 3.99l1.217 1.217A1 1 0 0 0 8 8.5v-4a1 1 0 0 0-1-1H3a1 1 0 0 0-.707 1.707l1.33 1.33A9.96 9.96 0 0 0 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2" clip-rule="evenodd"/></svg>
        `;
    clearBtn.classList.add('boton-reiniciar');

    popup.appendChild(clearBtn);


    // Evento para abrir el pop-up
    botonAbrirPizarra.addEventListener('click', () => {
        overlay.style.display = 'block';
        popup.style.display = 'block';
    });

    // Evento para cerrar el pop-up
    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    });

    // Inicializar la pizarra (canvas)
    const ctx = canvas.getContext('2d');
    let dibujando = false;

    function empezarDibujo(e) {
        dibujando = true;
        dibujar(e);
    }

    function terminarDibujo() {
        dibujando = false;
        ctx.beginPath();
    }

    function dibujar(e) {
        if (!dibujando) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineTo(x, y);
        ctx.strokeStyle = '#fff';
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    // Función para ajustar el tamaño del canvas
    function ajustarTamañoCanvas() {
        canvas.width = window.innerWidth * 0.9;  // 90% del ancho de la ventana
        canvas.height = window.innerHeight * 0.9; // 90% de la altura de la ventana
    }

    // Llamar a la función para ajustar el tamaño inicialmente
    ajustarTamañoCanvas();

    // Escuchar cambios en el tamaño de la ventana
    window.addEventListener('resize', ajustarTamañoCanvas);

    canvas.addEventListener('mousedown', empezarDibujo);
    canvas.addEventListener('mousemove', dibujar);
    canvas.addEventListener('mouseup', terminarDibujo);
    canvas.addEventListener('mouseout', terminarDibujo);

    clearBtn.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
}

function iniciarTemporizador() {
    tiempoInicio = Date.now();
    tiempoProblemaActual = Date.now();

    function actualizarTiempo() {
        const tiempoTotal = Math.floor((Date.now() - tiempoInicio) / 1000);
        const minutos = Math.floor(tiempoTotal / 60);
        const segundos = tiempoTotal % 60;
        document.querySelector('.timer').textContent =
            `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }

    setInterval(actualizarTiempo, 1000);
}

function actualizarBarraProgreso() {
    const progreso = (problemasResueltos.filter(Boolean).length / problemas.length) * 100;
    document.querySelector('.progress').style.width = `${progreso}%`;
}

function navegarA(index) {
    const cards = document.querySelectorAll('.problem-card');
    cards[problemaActual].classList.remove('active');
    problemaActual = index;
    cards[problemaActual].classList.add('active');

    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    prevBtn.disabled = problemaActual === 0;
    nextBtn.disabled = !problemasResueltos[problemaActual] || problemaActual === problemas.length - 1;
    tiempoProblemaActual = Date.now();
    actualizarBarraProgreso();
}

function verificarRespuesta(index) {
    const idInput = document.getElementById(`input${index + 1}`);
    const respuestaUsuario = parseFloat(idInput.value);  // Cambia parseInt por parseFloat
    const feedback = document.querySelectorAll('.feedback')[index];

    // Comparación estricta para números enteros o con tolerancia para flotantes
    const diferencia = Math.abs(respuestaUsuario - problemas[index].respuesta);
    const tolerancia = problemas[index].respuesta % 1 === 0 ? 0 : 0.1;

    if (diferencia <= tolerancia) {
        feedback.textContent = `¡Correcto! ${problemas[index].explicacion}`;
        feedback.className = "feedback correct";
        problemasResueltos[index] = true;

        const nextBtn = document.querySelector('.next-btn');
        if (index < problemas.length - 1) {
            nextBtn.disabled = false;
        }
    } else {
        feedback.textContent = "Incorrecto. Intenta de nuevo.";
        feedback.className = "feedback incorrect";
    }

    actualizarBarraProgreso();
}

function verificarMultiples(index) {
    const problema = problemas[index];
    console.log(problema);

    let todasCorrectas = true;

    problema.operaciones.forEach((op, idx) => {
        const input = document.getElementById(`multiInput${index}-${idx}`);
        const respuestaUsuario = parseFloat(input.value);
        console.log(respuestaUsuario);
        if (respuestaUsuario !== op.respuesta) {
            todasCorrectas = false;
        }
    });

    const feedback = document.querySelectorAll('.feedback')[index];
    if (todasCorrectas) {
        feedback.textContent = "¡Todas las respuestas son correctas!";
        feedback.className = "feedback correct";
        problemasResueltos[index] = true;
    } else {
        feedback.textContent = "Algunas respuestas son incorrectas. Intenta de nuevo.";
        feedback.className = "feedback incorrect";
    }

    actualizarBarraProgreso();
}


// Inicializar la aplicación
window.onload = inicializarCarrusel;

    
    }
