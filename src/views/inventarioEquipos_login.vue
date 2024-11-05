<script setup lang="ts">
import { ref } from 'vue'
function togglePassword() {
  const passwordField = document.getElementById('password')
  if (passwordField.type === 'password') {
    passwordField.type = 'text'
  } else {
    passwordField.type = 'password'
  }
}
</script>

<template>
  <!-- <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
    rel="stylesheet"
  /> -->
  <div id="app3">
    <div class="form3 justify-content-center">
      <div class="d-flex w-100 justify-content-center">
        <img src="../../public/img/user.png" alt="user" />
      </div>
      <div class="login">
        <h1>
          INVENTARIO DE EQUIPOS
          <hr />
        </h1>

        <h2>C.I. MINAS LA AURORA S.A.S.</h2>
        <br />
        <h3>Iniciar Sesión</h3>

        <section>
          <form class="form-3" @submit.prevent="crearEmpleado()">
            <div class="form-group">
              <input type="email" v-model="email" placeholder="" />
              <label class="form-label">Correo Electrónico</label>
            </div>
            <div class="form-group">
              <input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="" />
              <label class="form-label">Contraseña</label>
              <span class="toggle-password" @click="showPassword = !showPassword">
                <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
              </span>
            </div>
          </form>
  </section>

        <button class="btn btn-primary">INICIAR SESIÓN</button>
        <div class="img-login">
          <a href="" target="_blank">
            <img src="../../public/img/facebook-circle.png" alt="facebook" />
          </a>
          <a href="" target="_blank">
            <img src="../../public/img/instagram.png" alt="instagram"
          /></a>
          <a href="" target="_blank"> <img src="../../public/img/linkedin.png" alt="linkedin" /></a>
          <a href="" target="_blank">
            <img src="../../public/img/global-line.png" alt="global line"
          /></a>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer d-flex w-100 justify-content-center">
    <img src="../../public/img/logo-mla.png" alt="Logo MLA" />
  </footer>
</template>

<style>
@import '/src/assets/inventarioEquipos_login.css'
</style>
