<script setup>

</script>

<template>
  <div class="container-fluid position-relative p-0">
    <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
      <a href="/" class="navbar-brand p-0">
        <!-- <h1 class="m-0"><i class="fa fa-user-tie me-2"></i>Nombre</h1> -->
        <img class="vami-logo" src="../../assets/img/logo.png">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="fa fa-bars"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto py-0">
          <a href="#Toshiba" :class="$route.hash === '#Toshiba' ? 'nav-item nav-link active' : 'nav-item nav-link'">TOSHIBA</a>
          <a href="#Eaton" :class="$route.hash === '#Eaton' ? 'nav-item nav-link active' : 'nav-item nav-link'">EATON</a>
          <a href="#Sick" :class="$route.hash === '#Sick' ? 'nav-item nav-link active' : 'nav-item nav-link'">SICK</a>
          <a href="#Contrinex" :class="$route.hash === '#Contrinex' ? 'nav-item nav-link active' : 'nav-item nav-link'">CONTRINEX</a>
          <a href="#Pepperl" :class="$route.hash === '#Pepperl' ? 'nav-item nav-link active' : 'nav-item nav-link'">PEPPERL</a>
          <!-- <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  >Seccion 4</a
                >
                <div class="dropdown-menu m-0">
                  <a href="" class="dropdown-item">Seccion </a>
                  <a href="" class="dropdown-item">Seccion </a>
                </div>
              </div>
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  >Seccion 5</a
                >
                <div class="dropdown-menu m-0">
                  <a href="" class="dropdown-item">Seccion </a>
                  <a href="" class="dropdown-item">Seccion </a>
                  <a href="" class="dropdown-item">Seccion </a>
                  <a href="" class="dropdown-item"
                    >Seccion </a
                  >
                  <a href="" class="dropdown-item">Seccion </a>
                </div>
              </div> -->
          <a href="#Contacto" class="nav-item nav-link">CONTACTO</a>
        </div>
        <!-- <button
              type="button"
              class="btn text-primary ms-3"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
              ><i class="fa fa-search"></i
            ></button> -->
      </div>
    </nav>

    <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="w-100" src="../../assets/img/carousel-1.jpg" alt="Image" />
          <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div class="p-3" style="max-width: 900px">
              <p>
                <img class="mark-logo" src="../../assets/img/marks/toshiba-logo.png">
              </p>
              <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">VARIADORES</a>
              <a href="" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">MOTORES</a>
            </div>
          </div>
        </div>
        <!-- <div class="carousel-item">
              <img class="w-100" src="src/assets/img/carousel-2.jpg" alt="Image" />
              <div
                class="carousel-caption d-flex flex-column align-items-center justify-content-center"
              >
              <div class="p-3" style="max-width: 900px">
                  <h5
                    class="text-white text-uppercase mb-3 animated slideInDown"
                  >
                    Titulo 1
                  </h5>
                  <h1 class="display-1 text-white mb-md-4 animated zoomIn">
                    Subtitulo 1
                  </h1>
                  <a
                    href="quote.html"
                    class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >Opcion 1</a
                  >
                  <a
                    href=""
                    class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                    >Opcion 2</a
                  >
                </div>
              </div>
            </div> -->
      </div>
      <!-- <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button> -->
    </div>
  </div>
</template>

<style scoped>
.vami-logo {
  width: 200px;
}

.mark-logo {
  max-width: 50%;
  margin-bottom: 3rem;
  filter: blur(1px);
}
</style>
