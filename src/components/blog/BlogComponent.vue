<script setup>
const props = defineProps({
  Items: Array,
  Mark: String,
  Folder: String,
  Id: String
});
</script>
<style scoped>
.img-product {
  height: 400px;
  width: 400px;
  object-fit: scale-down;
}
</style>
<template>
  <div :id="Id" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
      <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px">
        <h5 class="fw-bold text-primary text-uppercase">Nuestros Productos {{ Mark }}</h5>
        <!-- <h1 class="mb-0">A continuacion se muestran nuestros productos mas vendidos.</h1> -->
      </div>
      <div class="row g-5">
        <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s" v-for="item in Items">
          <div class="blog-item bg-light rounded overflow-hidden">
            <div class="blog-img position-relative overflow-hidden">
              <img class="img-fluid img-product" :src="`../../src/assets/img/marks/products/${Folder}/${item.Image}`"
                alt="" />
              <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" :href="item.URL"
                target="_blank">{{ Mark }}</a>
            </div>
            <div class="p-4">
              <div class="d-flex mb-3 d-none">
                <small class="me-3"><i class="far fa-user text-primary me-2"></i>Inventario</small>
                <small><i class="far fa-dollar-sign text-primary me-2">$</i>Precio</small>
              </div>
              <h4 class="mb-3">{{ item.Model }}</h4>
              <p>
                <!-- Descripcion del producto -->
              </p>
              <a class="text-uppercase" :href="item.URL" target="_blank">Ver mas <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>