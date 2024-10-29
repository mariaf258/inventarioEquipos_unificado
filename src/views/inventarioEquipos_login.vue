<script setup lang="ts">
import inventarioEquipos from '@/views/inventarioEquipos.vue'
import inventarioEquipos_departamentos from '@/views/inventarioEquipos_departamentos.vue'

import { ref } from 'vue'
import app from '@/utils/firebase.ts'
import { getFirestore, getDocs, addDoc, collection } from 'firebase/firestore'

app.use(inventarioEquipos)
app.use(inventarioEquipos_departamentos)

app.mount('#app')

const email = ref('')
const password = ref('')
const showPassword = ref(false)

function togglePassword() {
  const passwordField = document.getElementById('password') as HTMLInputElement | null

  if (passwordField) {
    if (passwordField.type === 'password') {
      passwordField.type = 'text'
    } else {
      passwordField.type = 'password'
    }
  }
}
</script>

<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <div id="app">
    <div class="sidebar justify-content-center">
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
body,
html {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 100%;
  height: 90vh;
  background-color: #f5f5f5;
  align-items: center;
  display: grid;
  place-items: center;
}

.login {
  text-align: center;
}

.login h1 {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-top: 0;
  padding-top: 0;
}

.login hr {
  color: black;
  width: 80%;
  align-items: center;
  margin: 10px auto;
  opacity: none;
  margin-top: none;
  font-weight: bold;
}

.separator {
  width: 70%;
  align-items: center;
}

.login h2 {
  text-align: center;
  font-size: 16px;
  color: #595959;
}

.login h3 {
  text-align: center;
  font-size: 16px;
  color: black;
}

section {
  display: flex;
  align-items: center;
  width: 100%;
  flex-flow: column;
}

.form-group {
  position: relative;
  margin: 12px 0;
}

.form-group input {
  padding: 6px 18px;
  font-size: 16px;
  border-radius: 5px;
  border: 2px solid #eeeeee;
  background-color: #eeeeee;
  color: black;
  transition: 0.15s all ease;
}

.form-group input:focus {
  border-color: white;
  outline: none;
  box-shadow: 0 0 0 2px #9f9f9f;
}

.form-group input::placeholder {
  color: #9f9f9f;
}

.form-group .form-label {
  position: absolute;
  top: 9px;
  left: 0;
  font-size: 16px;
  padding: 0 10px;
  color: #595959;
  pointer-events: none;
  transition: 0.15s all ease;
}

.form-group input:focus + .form-label,
.form-group input:not(:placeholder-shown) + .form-label {
  transform: translate(5px, -22px);
  background-color: white;
  font-size: 14px;
  color: black;
}

.sidebar {
  width: 350px;
  color: black;
  background-color: #ffffff;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
}

.sidebar img {
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-indent: 5rem;
  margin-bottom: 20px;
}

.sidebar button {
  cursor: pointer;
  background-color: #432a88;
  text-align: center;
  color: white;
  align-items: center;
  border-radius: 3px;
  margin-bottom: 0 !important;
  height: 37px;
}

.btn-primary {
  color: #432a88;
  background-color: white;
  border: 2px solid #432a88;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  color: #432a88;
  background-color: white;
  border: 2px solid #432a88;
  transition: all 0.3s ease;
  border-color: #5132aa;
}

.btn-primary:active {
  color: #5132aa;
  border-color: #5132aa;
  background-color: white;
}

.img-login {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.img-login img {
  width: 20px;
  height: 20px;
  margin-top: 20px;
  transition:
    filter 0.3s ease,
    transform 0.3s ease;
}

.img-login img:hover {
  filter: brightness(1.5);
  transform: scale(1.1);
}

.img-login img[alt='facebook']:hover {
  filter: invert(31%) sepia(72%) saturate(5350%) hue-rotate(203deg) brightness(92%) contrast(103%);
}

.img-login img[alt='instagram']:hover {
  filter: invert(45%) sepia(100%) saturate(3230%) hue-rotate(326deg) brightness(90%) contrast(103%);
}

.img-login img[alt='linkedin']:hover {
  filter: invert(36%) sepia(84%) saturate(4657%) hue-rotate(170deg) brightness(88%) contrast(105%);
}

.img-login img[alt='global line']:hover {
  filter: invert(71%) sepia(31%) saturate(1347%) hue-rotate(146deg) brightness(94%) contrast(96%);
}

.footer {
  background: linear-gradient(to bottom, #432a88, #5132aa);
  align-items: center;
  height: 64px;
}
.footer img {
  background-color: transparent;
  align-items: center;
  cursor: pointer;
}

@media screen and (max-width: 1200px) {
  #app {
    height: 100%;
  }

  .sidebar {
    width: 300px;
    margin-top: 100px;
    margin-bottom: 170px;
  }

  footer {
    margin-top: -45px;
  }
}

@media screen and (max-width: 1050px) {
  #app {
    height: 100%;
  }

  .sidebar {
    width: 300px;
    margin-top: 100px;
    margin-bottom: 170px;
  }

  footer {
    margin-top: -45px;
  }
}

@media screen and (max-width: 1030px) {
  #app {
    height: 120%;
  }

  .sidebar {
    width: 300px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  footer {
    margin-top: 10px;
  }
}

@media screen and (max-width: 640px) {
  #app {
    height: 100%;
  }

  .sidebar {
    width: 300px;
    margin-top: 100px;
    margin-bottom: 170px;
  }

  footer {
    margin-top: -45px;
  }
}

@media screen and (max-width: 480px) {
  #app {
    height: 100%;
  }

  .sidebar {
    width: 300px;
    margin-top: 100px;
    margin-bottom: 170px;
  }

  footer {
    margin-top: -45px;
  }
}

@media screen and (max-width: 320px) {
  .sidebar {
    width: 300px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 70vh;
  }

  .sidebar img {
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    text-indent: 5rem;
    margin-bottom: 20px;
    display: flex;
    flex: 1;
  }

  .img-login {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .img-login img {
    width: 20px;
    height: 20px;
    margin-top: 20px;
    transition:
      filter 0.3s ease,
      transform 0.3s ease;
  }

  footer {
    margin-top: 10px;
  }
}

@media screen and (max-width: 319px) {
  .sidebar {
    width: 300px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 70vh;
  }

  .sidebar img {
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    text-indent: 5rem;
    margin-bottom: 20px;
    display: flex;
    flex: 1;
  }

  .img-login {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .img-login img {
    width: 20px;
    height: 20px;
    margin-top: 20px;
    transition:
      filter 0.3s ease,
      transform 0.3s ease;
  }

  footer {
    margin-top: 10px;
  }
}

@media screen and (max-width: 230px) {
  .sidebar {
    width: 300px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 70vh;
  }

  .sidebar img {
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    text-indent: 5rem;
    margin-bottom: 20px;
    display: flex;
    flex: 1;
  }

  .img-login {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .img-login img {
    width: 20px;
    height: 20px;
    margin-top: 20px;
    transition:
      filter 0.3s ease,
      transform 0.3s ease;
  }

  footer {
    margin-top: 10px;
  }
}
</style>
