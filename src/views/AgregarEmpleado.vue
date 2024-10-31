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

          
          <section class="section">
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
    
    <footer class="footer4 d-flex w-100 justify-content-center">
      <img src="../../public/img/logo-mla.png" alt="Logo MLA" />
    </footer> 
</div>
</template>

<style>
@import '/src/assets/agregarEmpleado.css'
</style> 
