<script lang="ts">
import { defineComponent } from 'vue'
import { iniciarSesion } from '@/router'
function togglePassword() {
  const passwordField = document.getElementById('password')
  if (passwordField.type === 'password') {
    passwordField.type = 'text'
  } else {
    passwordField.type = 'password'
  }
}

// const validCredentials: Record<string, string> = {
//   'practicanteSena': 'sena1234',
// };

// export default defineComponent ({
//   name: 'LoginView',
//   data() {
//     return {
//       username: '',
//       password: '',
//       rememberCredentials: false,
//     };
//   },

//   mounted() {
//     if (localStorage.getItem('rememberCredentials') === 'true') {
//       this.username = localStorage.getItem('savedUsername') || '';
//       this.password = localStorage.getItem('savedPassword') || '';
//       this.rememberCredentials = true;
//     }
//   },

//   methods: {
//     login() {
//       const username = this.username;
//       const password = this.password;

//       if (validCredentials[username] === password) {
//         if (this.rememberCredentials) {
//           localStorage.setItem('savedUsername', this.username);
//           localStorage.setItem('savedPassword', this.password);
//           localStorage.setItem('rememberCredentials', 'true');
//         } else {
//           localStorage.removeItem('savedUsername');
//           localStorage.removeItem('savedPassword');
//           localStorage.removeItem('rememberCredentials');
//         }
//         iniciarSesion();
//         this.$router.replace('/');
//       } else {
//         alert('Usuario o contraseña incorrectos');
//       }
//     }
//   }
// });
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
              <input type="username" v-model="username" placeholder="" />
              <label class="form-label">Usuario</label>
            </div>
            <div class="form-group">
              <input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="" />
              <label class="form-label">Contraseña</label>
              <span class="toggle-password" @click="showPassword = !showPassword">
                <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
              </span>
            </div>
            <div class="forget">
              <label for=""><input type="checkbox" v-model="rememberCredentials">Recordar</label>
              <a href="#">Olvidé la Contraseña</a>
            </div>
          </form>
  </section>

        <button class="btn btn-primary">INICIAR SESIÓN</button>
        <!-- <div class="img-login">
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
        </div> -->
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
