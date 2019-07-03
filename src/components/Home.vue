<template>
	<div class="page">
    <h2 class="article-title" v-html="title"></h2>
		<img class="article-img" :src="img">
    <div class="conteudo" v-html="content"></div>
	</div>
</template>

<script>
  import Comentarios from './Comentarios.vue'
  export default {
    name: 'home',
    data() {
      return {
        title: '',
        img: 'http://lorempixel.com/400/400/nightlife/',
        content: ''
      }
    },
    methods: {
      async listar() {
        var res = await fetch('https://engetec-api.herokuapp.com/home', {
          method: 'GET',
          mode: 'cors'
        })
        res = await res.json()
        console.log(res)
        this.title = res[0].title
        this.content = res[0].content
      }
    },
    mounted() {
      this.listar()
    },
    components: {
      Comentarios
    }
}
</script>

<style>
  .page {
    min-height: 400px;
    margin-bottom: 50px;
  }
  .conteudo {
    line-height: 160%;
  }
  @media (max-width: 490px) {
    .article-img {
      width: 100%;
    }
  }
</style>
