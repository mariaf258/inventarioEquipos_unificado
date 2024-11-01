<script>
</script>

<template>
  <!-- <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
    rel="stylesheet"
  /> -->
  <div id="app2">
    <button class="btn btn-primary"><router-link to="/">Inicio</router-link></button>

      <div class="form2 justify-content-center">
        
        <div class="login">
          <h1>
            CREAR DEPARTAMENTO
            <hr />
          </h1>

          <h2>C.I. MINAS LA AURORA S.A.S.</h2>
          <br />
          <h3>DATOS</h3>

          <section>
            <div class="form-group">
              <input type="name" v-model="name" placeholder="" />
              <label class="form-label">Nombre departamento</label>
            </div>
            <div class="form-group">
              <input type="shortName" v-model="shortName" placeholder="" />
              <label class="form-label">Nombre corto</label>
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
@import '/src/assets/crearDepartamento.css'
</style> 
