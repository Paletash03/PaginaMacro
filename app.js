function calcularPuntoEquilibrio() {
    //pa obtener los valores que el usuario escribió
    const costosFijos = parseFloat(document.getElementById('costos-fijos').value);
    const precioVenta = parseFloat(document.getElementById('precio-venta').value);
    const costoVariable = parseFloat(document.getElementById('costo-variable').value);

    const divResultado = document.getElementById('resultado-calculadora');

    // pa validar que no haya campos vacíos
    if (isNaN(costosFijos) || isNaN(precioVenta) || isNaN(costoVariable)) {
        divResultado.innerHTML = "⚠️ Por favor, ingresa todos los valores.";
        divResultado.style.backgroundColor = "#ffebee";
        divResultado.style.color = "#c62828";
        return;
    }

    // pa validar que el precio de venta sea mayor al costo variable (para que haya ganancia)
    if (precioVenta <= costoVariable) {
        divResultado.innerHTML = "⚠️ Error: El precio de venta debe ser mayor al costo variable.";
        divResultado.style.backgroundColor = "#ffebee";
        divResultado.style.color = "#c62828";
        return;
    }

    // pa aplicar la fórmula
    const margenContribucion = precioVenta - costoVariable;
    const puntoEquilibrioUnidades = costosFijos / margenContribucion;
    const puntoEquilibrioIngresos = puntoEquilibrioUnidades * precioVenta;

    // pa mostrar el resultado en pantalla
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
}