<template>
  <div id="Contacto" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-7">
          <div class="section-title position-relative pb-3 mb-5">
            <h5 class="fw-bold text-primary text-uppercase">
              Solicitar contacto
            </h5>
            <h1 class="mb-0">
              ¿Necesitas informacion especializada?
            </h1>
          </div>
          <div class="row gx-3">
            <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
              <h5 class="mb-4">
                <i class="fa fa-reply text-primary me-3"></i>Respuesta dentro de 24 horas.
              </h5>
            </div>
            <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
              <h5 class="mb-4">
                <i class="fa fa-phone-alt text-primary me-3"></i>Soporte telefonico 24 horas.
              </h5>
            </div>
          </div>
          <p class="mb-4">
            <!-- Texto descriptivo de las ventajas de utilizar esta seccion -->
          </p>
          <div class="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
            <div class="bg-primary d-flex align-items-center justify-content-center rounded"
              style="width: 60px; height: 60px">
              <i class="fa fa-phone-alt text-white"></i>
            </div>
            <div class="ps-4">
              <h5 class="mb-2">Contactanos para resolver tus dudas.</h5>
              <h4 class="text-primary mb-0">+012 345 6789</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
            <form>
              <div class="row g-3">
                <div class="col-xl-12">
                  <input type="text" class="form-control bg-light border-0" placeholder="Tu nombre"
                    style="height: 55px" />
                </div>
                <div class="col-12">
                  <input type="email" class="form-control bg-light border-0" placeholder="Tu correo"
                    style="height: 55px" />
                </div>
                <div class="col-12">
                  <input type="text" class="form-control bg-light border-0" placeholder="Motivo de tu mensaje"
                    style="height: 55px" />
                </div>
                <div class="col-12">
                  <textarea class="form-control bg-light border-0" rows="3" placeholder="Describe tu duda"></textarea>
                </div>
                <div class="col-12">
                  <button class="btn btn-dark w-100 py-3" type="submit">
                    Contactar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>