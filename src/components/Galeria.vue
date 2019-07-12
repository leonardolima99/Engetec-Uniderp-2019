<template>
  <div class="galeria">
    <h2>Galeria</h2>
    <div class="imagens">
      <div class="img-galeria" v-for="img of imagens">
        <img :src="img.imagem">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'galeria',
  data() {
    return {
      imagens: []
    }
  },
  methods: {
    async listar() {
      let res = await fetch('https://engetec-api.herokuapp.com/galeria', {
        method: 'GET',
        mode: 'cors'
      })
      this.imagens = await res.json()
    }
  },
  mounted() {
    this.listar()
  }
}
</script>

<style>
  .imagens {
    column-count: 4;
    column-gap: 1em;
    display: inline-block;
    margin-top: 15px;
  }
  .img-galeria img {
    background-color: #eee;
    margin: 0 auto 1em;
    width: 100%;
  }
  @media (max-width: 369.98px) {
    .imagens {
      column-count: 1;
    }
  }
  @media (min-width: 370px) and (max-width: 575.98px) {
    .imagens {
      column-count: 1;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .imagens {
      column-count: 2;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .imagens {
      column-count: 3;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .imagens {
      column-count: 4;
    }
  }
  @media (min-width: 1200px) {
    .imagens {
      column-count: 4;
    }
  }
</style>