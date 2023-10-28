const footerq = document.getElementById('fooTerq');

const footerInsert = () => {
    const divFooter = document.createElement('div');
    divFooter.innerHTML = `<div class="text-center m-0 p-0">
    <div class="text-light">
      -Rolling Conference-
    </div>
    <hr class="text-light">
  <h2 class="d-flex justify-content-center text-light fw-bold">NUESTRAS REDES</h2>
<div>
  <div class="social-icons-container justify-content-around">
    <a href="https://www.youtube.com/@rollingcode7175" target="_blank" class="social-icon"></a>
    <a href="https://www.instagram.com/rollingcodeschool/?hl=es-la" target="_blank" class="social-icon"></a>
    <a href="https://www.facebook.com/RollingCodeSchool/?locale=es_LA" target="_blank" class="social-icon"></a>
    <a href="https://twitter.com/rollingcodeok?lang=es" target="_blank" class="social-icon"></a>
  </div>
  <hr class="text-light">
  <div class="footerMobile">
    <h2 class="d-flex justify-content-center text-light fw-bold">¡VISITANOS!</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28479.879418283464!2d-65.19849810046387!3d-26.840431707756412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1698508457792!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <hr class="text-light hrMobile">
  <small class="text-light d-flex justify-content-center container">&copy; 2023 | Desarrollado por - <b>Los Busi-IT</b> - | Todos los derechos reservados.</small>
</div>`;
    footerq.appendChild(divFooter)
}

footerInsert();