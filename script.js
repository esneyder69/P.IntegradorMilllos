// Función reutilizable para activar la animación del giro de 360 grados por 2 segundos
function animarFigura(idFigura) {
    const figura = document.getElementById(idFigura); // Obtiene la referencia del elemento visual en el DOM según su ID
    figura.classList.remove('girar'); // Remueve la clase 'girar' por si ya había sido ejecutada previamente
    void figura.offsetWidth; // Truco de JavaScript para forzar al navegador a recalcular el estilo e ir al estado inicial
    figura.classList.add('girar'); // Vuelve a agregar la clase 'girar' para reiniciar la animación de giro
}

// 1. CUADRADO
function calcularCuadrado() {
    const lado = parseFloat(document.getElementById('lado-cuadrado').value); // Captura el texto del input del lado y lo convierte a número decimal
    const res = document.getElementById('res-cuadrado'); // Obtiene la caja HTML donde se imprimirán los resultados

    if (isNaN(lado) || lado <= 0) { // Valida si el valor no es un número o si es menor/igual a cero
        res.innerHTML = "<span style='color:#ff5555;'>⚠️ Ingrese un valor válido</span>"; // Imprime un mensaje de error si la validación falla
        return; // Detiene la ejecución de la función para que no realice cálculos incorrectos
    }

    const area = lado * lado; // Calcula el área utilizando la fórmula: Lado × Lado
    const perimetro = 4 * lado; // Calcula el perímetro sumando sus 4 lados (4 × Lado)

    // Inserta en el HTML el resultado formateado a 2 decimales usando toFixed(2)
    res.innerHTML = `<div><strong>Área:</strong> ${area.toFixed(2)} cm²</div><div><strong>Perímetro:</strong> ${perimetro.toFixed(2)} cm</div>`; 
    animarFigura('shape-cuadrado'); // Llama a la función de animación para hacer girar la figura del cuadrado
}

// 2. TRIÁNGULO (Equilátero)
function calcularTriangulo() {
    const base = parseFloat(document.getElementById('base-triangulo').value); // Convierte a decimal la base ingresada
    const altura = parseFloat(document.getElementById('altura-triangulo').value); // Convierte a decimal la altura ingresada
    const res = document.getElementById('res-triangulo'); // Obtiene el elemento donde se muestran los resultados

    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) { // Comprueba que ninguno de los dos datos sea inválido o menor a cero
        res.innerHTML = "<span style='color:#ff5555;'>⚠️ Ingrese valores válidos</span>"; // Despliega la advertencia en rojo
        return; // Interrumpe el flujo si hay errores
    }

    const area = (base * altura) / 2; // Fórmula clásica del área: (Base × Altura) / 2
    const perimetro = base * 3; // Asume un triángulo equilátero para calcular el perímetro: Base × 3

    // Muestra los datos calculados en pantalla formateados
    res.innerHTML = `<div><strong>Área:</strong> ${area.toFixed(2)} cm²</div><div><strong>Perímetro:</strong> ${perimetro.toFixed(2)} cm</div>`; 
    animarFigura('shape-triangulo'); // Inicia el giro animado en la figura visual del triángulo
}

// 3. CÍRCULO
function calcularCirculo() {
    const radio = parseFloat(document.getElementById('radio-circulo').value); // Obtiene el valor numérico del radio
    const res = document.getElementById('res-circulo'); // Obtiene el contenedor de salida para el círculo

    if (isNaN(radio) || radio <= 0) { // Verifica si el radio es un número válido y mayor a cero
        res.innerHTML = "<span style='color:#ff5555;'>⚠️ Ingrese un radio válido</span>"; // Imprime la alerta si el input es incorrecto
        return; // Cancela el cálculo
    }

    const area = Math.PI * Math.pow(radio, 2); // Calcula el área usando la constante Math.PI multiplicada por el Radio al cuadrado
    const perimetro = 2 * Math.PI * radio; // Calcula la longitud o circunferencia con la fórmula: 2 × π × Radio

    // Escribe la respuesta calculada dentro del div de resultados
    res.innerHTML = `<div><strong>Área:</strong> ${area.toFixed(2)} cm²</div><div><strong>Perímetro:</strong> ${perimetro.toFixed(2)} cm</div>`; 
    animarFigura('shape-circulo'); // Ejecuta la animación de rotación del círculo
}

// 4. RECTÁNGULO
function calcularRectangulo() {
    const base = parseFloat(document.getElementById('base-rectangulo').value); // Obtiene el número decimal ingresado en el campo base
    const altura = parseFloat(document.getElementById('altura-rectangulo').value); // Obtiene el valor decimal del campo altura
    const res = document.getElementById('res-rectangulo'); // Obtiene la sección de resultados del rectángulo

    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) { // Valida que ambos campos sean números válidos mayores a cero
        res.innerHTML = "<span style='color:#ff5555;'>⚠️ Ingrese valores válidos</span>"; // Imprime el error si no pasa el test
        return; // Aborta la función
    }

    const area = base * altura; // Fórmula para el área del rectángulo: Base × Altura
    const perimetro = 2 * (base + altura); // Fórmula del perímetro: 2 × (Base + Altura)

    // Renderiza la respuesta en el DOM con dos cifras decimales
    res.innerHTML = `<div><strong>Área:</strong> ${area.toFixed(2)} cm²</div><div><strong>Perímetro:</strong> ${perimetro.toFixed(2)} cm</div>`; 
    animarFigura('shape-rectangulo'); // Dispara el efecto de rotación de la figura
}
