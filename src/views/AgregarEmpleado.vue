<script></script>
<template>
  <div id="app4">
      <div class="form4 justify-content-center">
        
        <div class="login">
          <h1>
            AGREGAR EMPLEADO
            <hr />
          </h1>

          <h2>C.I. MINAS LA AURORA S.A.S.</h2>
          <br />
          <h3>DATOS</h3>

          
          <section>
            <div class="form-group">
              <input type="name" v-model="name" placeholder="" />
              <label class="form-label">Nombre Empleado</label>
            </div>
            <div class="form-group">
              <input type="post" v-model="post" placeholder="" />
              <label class="form-label">Cargo del Empleado</label>
            </div>
            <div class="form-group">
              <input type="etiqueta" v-model="etiqueta" placeholder="" />
              <label class="form-label">Etiqueta del Equipo</label>
            </div>
            <div class="form-group">
              <input type="descripcion" v-model="descripcion" placeholder="" />
              <label class="form-label">Descripción del Equipo</label>
            </div>
            <div class="form-group">
              <input type="marca" v-model="marca" placeholder="" />
              <label class="form-label">Marca del Equipo</label>
            </div>
            <div class="form-group">
              <input type="serie" v-model="serie" placeholder="" />
              <label class="form-label">Serie del Equipo</label>
            </div>
            <div class="form-group">
              <input type="Nserial" v-model="Nserial" placeholder="" />
              <label class="form-label">Número serial del Equipo</label>
            </div>
            <div class="form-group">
              <input type="disco" v-model="disco" placeholder="" />
              <label class="form-label">Disco del Equipo</label>
            </div>
            <div class="form-group">
              <input type="ram" v-model="ram" placeholder="" />
              <label class="form-label">Ram del Equipo</label>
            </div>
            <div class="form-group">
              <input type="estado" v-model="estado" placeholder="" />
              <label class="form-label">Estado del Equipo</label>
            </div>
            <div class="form-group">
              <input type="observacion" v-model="observacion" placeholder="" />
              <label class="form-label">Observacion del Equipo</label>
            </div>

          </section>

          <button class="btn btn-primary">Agregar</button>
          
        </div>
      </div>
    
    <footer class="footer d-flex w-100 justify-content-center">
      <img src="../../public/img/logo-mla.png" alt="Logo MLA" />
    </footer> 
</div>
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

#app4 {
  width: 100%;
  background-color: #F6F6F6;
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

.form4 {
  width: 350px;
  color: black;
  background-color: #ffffff;
  justify-content: center;
  padding: 40px 20px;
  border-radius: 10px;
  margin-top: 100px;
  margin-bottom: 110px;
}

.form4 img {
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-indent: 5rem;
  margin-bottom: 20px;
}

.form4 button {
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

.footer {
  background: linear-gradient(to bottom, #432a88, #5132aa);
  align-items: center;
  height: 64px;
  width: 100%;
  text-align: center;
}

.footer img {
  background-color: transparent;
  align-items: center;
  cursor: pointer;
  margin-top: 15px;
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
</style> -->
