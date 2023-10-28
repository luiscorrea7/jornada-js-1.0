const footerq = document.getElementById('fooTerq');

const footerInsert = () => {
    const divFooter = document.createElement('div');
    divFooter.innerHTML = `<h2 class="d-flex justify-content-center text-light fw-bold">NUESTRAS REDES</h2>
    <div>
      <div class="social-icons-container justify-content-around">
        <a href="https://www.youtube.com/@rollingcode7175" target="_blank" class="social-icon"></a>
        <a href="https://www.instagram.com/rollingcodeschool/?hl=es-la" target="_blank" class="social-icon"></a>
        <a href="https://www.facebook.com/RollingCodeSchool/?locale=es_LA" target="_blank" class="social-icon"></a>
        <a href="https://twitter.com/rollingcodeok?lang=es" target="_blank" class="social-icon"></a>
      </div>
      <ul class="footer-menu-container px-3">
        <li class="menu-item text-light"><a href="">CONTACTO</a></li>
        <li class="menu-item text-light"><a href="acercadenosotros.html">ACERCA DE</a</li>
        <li class="menu-item text-light"><a href="404.html">SOPORTE</a</li>
      </ul>
      <hr class="text-light">
      <small class="text-light d-flex justify-content-center">&copy; 2023 | Desarrollado por <b> Los Busi - IT</b> | Todos los derechos reservados.</small>
    </div>`;
    footerq.appendChild(divFooter)
}

footerInsert();