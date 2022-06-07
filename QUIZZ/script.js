const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");
alert("BIENVENIDO  AL QUIZ ");
const preguntas = [
  {
    pregunta: "1.Aproxima el número 58 a la decena. ",
    respuestas: {
      a: "50",
      b: "60",
      c: "55",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "2.Cual es el numero anterior a 1000",
    respuestas: {
      a: "1001",
      b: "990",
      c: "999",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "3.¿Que numero resulta si divides 56 entre 7 ? ",
    respuestas: {
      a: "9",
      b: "8",
      c: "7",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "4.Expresa 7kg y 670 g en gramos",
    respuestas: {
      a: "70670",
      b: "7670",
      c: "767",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "5.¿Cual es el reusltado de multiplicar 7x9? ",
    respuestas: {
      a: "58",
      b: "72",
      c: "63",
    },
    respuestaCorrecta: "c",
  },
  //SECUNDARIA 
  {
    pregunta: "6. Que formula es esta (S =π x R²)",
    respuestas: {
      a: "Diametro  de un circulo ",
      b: "Superficie de un circulo",
      c: "Volumen de un cilindro",
      d:"Superficie de paralelogramos",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "7.Que expresa esta formula (e = mc²) ",
    respuestas: {
      a: "Circunferencia del circulo",
      b: "La teoría de la probabilidad",
      c: "La equivalencia entre masa y energía",
      d:"volumen de un cubo",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "8. ¿Cuánto es la cuarta parte de la tercera parte?",
    respuestas: {
      a: "un doceavo ",
      b: "un septimo ",
      c: "tres cuartas partes ",
      d:"4/6",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "9.¿Cómo se llama a un poliedro de 20 caras? ",
    respuestas: {
      a: "icosaedro",
      b: "dodecaedro ",
      c: "tetracaedro",
      d:"tetraedro",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "10.El monstruo del lago Ness mide 80 metros más la mitad de lo que mide, ¿cuánto mide el monstruo del lago Ness? ",
    respuestas: {
      a: "160",
      b: "120",
      c: "80",
      d:"140",
    },
    respuestaCorrecta: "a",
  },
  //PREPARTATORIA 
  {
    pregunta: "11.Alberto benjamin y carlota hicieron un total de 20 sandwiches  Benjamin hizo 3 veces mas que alberto y carlota hizo el doble que benjamin ¿cuantos sandwiches hizo alberto ",
    respuestas: {
      a: "2",
      b: "4",
      c: "5",
      d:"6",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "12.Deriva F(x)=-2  ",
    respuestas: {
      a: "f`(x)= -2 ",
      b: " f`(x)= 1 ",
      c: " f`(x)= 2 ",
      d:" f`(x)= -4 ",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "13.Realiza la suma: (3x + 4y) + (2x-2y) verticalmente ",
    respuestas: {
      a: "-5x-2y ",
      b: " 5x-2y ",
      c: "9x+2 ",
      d:"5x+2y",
    },
    respuestaCorrecta: "d",
  }
];


function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest.innerHTML =
    "Usted ha acertado " +
    respuestasCorrectas +
    " preguntas de un total de " +
    preguntas.length;
}

botonRes.addEventListener("click", mostrarResultado);
