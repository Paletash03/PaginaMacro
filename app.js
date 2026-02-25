function calcularPuntoEquilibrio() {
    // 1. Obtener los valores que el usuario escribió
    const costosFijos = parseFloat(document.getElementById('costos-fijos').value);
    const precioVenta = parseFloat(document.getElementById('precio-venta').value);
    const costoVariable = parseFloat(document.getElementById('costo-variable').value);

    const divResultado = document.getElementById('resultado-calculadora');

    // 2. Validar que no haya campos vacíos
    if (isNaN(costosFijos) || isNaN(precioVenta) || isNaN(costoVariable)) {
        divResultado.innerHTML = "⚠️ Por favor, ingresa todos los valores.";
        divResultado.style.backgroundColor = "#ffebee";
        divResultado.style.color = "#c62828";
        return;
    }

    // 3. Validar que el precio de venta sea mayor al costo variable (para que haya ganancia)
    if (precioVenta <= costoVariable) {
        divResultado.innerHTML = "⚠️ Error: El precio de venta debe ser mayor al costo variable.";
        divResultado.style.backgroundColor = "#ffebee";
        divResultado.style.color = "#c62828";
        return;
    }

    // 4. Aplicar la fórmula
    const margenContribucion = precioVenta - costoVariable;
    const puntoEquilibrioUnidades = costosFijos / margenContribucion;
    const puntoEquilibrioIngresos = puntoEquilibrioUnidades * precioVenta;

    // 5. Mostrar el resultado en pantalla
    divResultado.style.backgroundColor = "#e8f5e9";
    divResultado.style.color = "#2e7d32";
    divResultado.innerHTML = `
         Punto de Equilibrio: <strong>${Math.ceil(puntoEquilibrioUnidades)} unidades</strong> <br><br>
         Ingresos necesarios: <strong>$${puntoEquilibrioIngresos.toLocaleString('es-MX', {minimumFractionDigits: 2})}</strong>
    `;
    function simularFlujo() {
    const ingreso = parseFloat(document.getElementById('ingreso-total').value);
    const pmc = parseFloat(document.getElementById('propension-consumo').value);
    const divResultadoFlujo = document.getElementById('resultado-flujo');

    if (isNaN(ingreso) || isNaN(pmc) || pmc <= 0 || pmc >= 1) {
        divResultadoFlujo.innerHTML = "⚠️ Por favor, ingresa un ingreso válido y una PMC entre 0.01 y 0.99.";
        divResultadoFlujo.style.backgroundColor = "#ffebee";
        divResultadoFlujo.style.color = "#c62828";
        return;
    }

    const consumo = ingreso * pmc;
    const ahorro = ingreso - consumo;
    const multiplicador = 1 / (1 - pmc);

    divResultadoFlujo.style.backgroundColor = "#e3f2fd";
    divResultadoFlujo.style.color = "#1565c0";
    divResultadoFlujo.innerHTML = `
        🔄 <strong>Flujo hacia Empresas (Consumo):</strong> $${consumo.toLocaleString('es-MX', {minimumFractionDigits: 2})}<br><br>
        🏦 <strong>Fuga al Sector Financiero (Ahorro):</strong> $${ahorro.toLocaleString('es-MX', {minimumFractionDigits: 2})}<br><br>
        📈 <strong>Multiplicador de la Inversión:</strong> ${multiplicador.toFixed(2)}
    `;
}
// Función para cargar componentes (Header y Footer)
document.addEventListener("DOMContentLoaded", function() {
    // Cargar el Header
    fetch("components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        });

    // Cargar el Footer
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        });
});
}