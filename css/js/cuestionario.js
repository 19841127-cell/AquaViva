```javascript
function calificar() {

    const respuestasCorrectas = {
        p1: "c",
        p2: "b",
        p3: "a",
        p4: "b",
        p5: "a",
        p6: "a",
        p7: "a",
        p8: "a",
        p9: "a",
        p10: "a"
    };

    let puntos = 0;

    for (let pregunta in respuestasCorrectas) {

        const respuesta = document.querySelector(
            `input[name="${pregunta}"]:checked`
        );

        if (respuesta && respuesta.value === respuestasCorrectas[pregunta]) {
            puntos++;
        }
    }

    const resultado = document.querySelector("#resultado");

    let mensaje = "";

    if (puntos === 10) {
        mensaje = " ¡Excelente! Dominas los temas del proyecto.";
    } 
    else if (puntos >= 7) {
        mensaje = " ¡Muy bien! Tienes un buen conocimiento.";
    } 
    else if (puntos >= 5) {
        mensaje = " Buen trabajo. Puedes repasar las páginas informativas.";
    } 
    else {
        mensaje = "Te recomendamos volver a estudiar las páginas del proyecto.";
    }

    resultado.innerHTML = `
        Obtuviste ${puntos} de 10 puntos.<br><br>
        ${mensaje}
    `;

    resultado.style.backgroundColor = "#E8F5E9";
    resultado.style.color = "#1565C0";
}
```
