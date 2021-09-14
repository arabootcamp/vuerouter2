<template>
  <div>
    <header class="masthead" style="background-image: url('/assets/img/chevrolet-blazer.jpg');">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="post-heading">
              <h1><strong>{{title}}</strong></h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'Administrador',
    props: ['typeAdmin'],
    computed: {
      title() {
        let type = this.typeAdmin.toLowerCase();
        console.log(`props typeAdmin: ${this.typeAdmin}`)
        if (type == 'simple')
          return `Bienvenido a la página de Administración.`;
        else if (type == 'avanzado')
          return `Esta página de administración está en construcción. Intente como administrador simple.`;
        else
          return `La ruta no existe.`;

      }
    }
  }
</script>