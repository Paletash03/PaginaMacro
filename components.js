

const headerHTML = `
<header>
    <nav>
        <div class="logo">IPN</div>
        <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="unidad1.html">I. Macroeconomía</a></li>
            <li><a href="unidad2.html">II. Cuentas Nacionales</a></li>
            <li><a href="unidad3.html">III. Demanda y Oferta</a></li>
            <li><a href="unidad4.html">IV. Modelos</a></li>
            <li><a href="unidad5.html">V. Crisis</a></li>
            <li><a href="quizzes.html">📝 Retroalimentación</a></li>
        </ul>
    </nav>
</header>`;

const footerHTML = `
<footer>
    <p>Proyecto Final - Licenciatura en Negocios Digitales | ESCA Santo Tomás</p>
</footer>`;

// Inyectar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Header
    const headerEl = document.getElementById('site-header');
    if (headerEl) headerEl.innerHTML = headerHTML;

    // Footer
    const footerEl = document.getElementById('site-footer');
    if (footerEl) footerEl.innerHTML = footerHTML;

    // Marcar enlace activo según la página actual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav ul li a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});