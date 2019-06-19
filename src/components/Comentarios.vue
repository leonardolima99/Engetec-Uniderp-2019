<template>
  <div class="comentarios">
    <h2> Comentários </h2>
    <div class="user">
      <img class="user-img1" src="https://placekitten.com/50/50" width="50">
      <div class="comentario-post">
        
        <!-- <span class="placeholder" v-show="visible">Comentário...</span> -->

        <div class="comentario-texto" contenteditable="true">
          <p>
            
          </p>
        </div>
        <div class="actions">
          <button class="btn" @click="postar">Comentar</button>
        </div>
      </div>
    </div>
    <hr>
    <div class="comentario-container" v-for="(comentario, index) of comentarios" :key="index">
      <img class="user-img2" src="https://placekitten.com/50/50" width="50">
      <div class="comentario-group">
        <span class="comentario-nome">{{ comentario.user_name }}</span> | 
        <small>{{ new Date(comentario.date).toLocaleString() }}</small>
        <p class="comentario-texto">
          {{ comentario.texto }}
        </p>
        <div class="comentario-acao">
          <button>Curtir</button>
          <button>Comentar</button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Comentarios',
    data() {
      return {
        visible: false,
        comentarios: [],
        comentario: {
          user_name: '',
          date: '',
          texto: ''
        }
      }
    },
    methods: {
      postar() {
        this.comentario = {
          user_name: 'Leonardo Lima',
          date: new Date(),
          texto: document.querySelector('div.comentario-texto').innerText
        }
        this.comentarios.push(this.comentario)
        localStorage.setItem('comentarios', JSON.stringify(this.comentarios))
        this.listar()
      },
      listar() {
        var comentariosStorage = JSON.parse(localStorage.getItem('comentarios'))
        if (comentariosStorage) {
          this.comentarios = comentariosStorage
        }
      },
      placeholderBlur() {
        var comentario = document.querySelector('div.comentario-texto').innerText
        if (comentario == "") {
          this.visible = true
        } else {
          this.visible = false
        }
      },
      placeholderFocus() {
        var comentario = document.querySelector('div.comentario-texto')
        this.visible = false
        comentario.focus
      }
    },
    mounted() {
      this.listar()
    }
  }
</script>

<style scoped>
  .comentarios {
    max-width: 1000px;
    margin: 15px auto;
    padding: 15px 30px;
  }
  .comentario-container {
    margin: 10px 0;
  }
  /*.placeholder {
    margin: 10px;
    position: fix;
    color: #c2c9d4;
    background-color: #fff;
    user-select: none;
    cursor: text;
    z-index: 1;
  }*/
  .user-img1, .user-img2 {
    float: left;
    border-radius: 7px;
  }
  .user-img2 {
    margin: 0 10px 10px 0;
    display: block;
    height: 100%;
  }
  .comentario-post {
    width: calc(100% - 60px);
    align-items: center;
    margin: 20px 60px;
    border: 2px solid #c2c9d4;
    border-radius: 7px;
    background-color: #fff;
  }
  .comentario-group {
    display: block;
    margin-left: 60px; 
  }
  div.comentario-texto {
    width: 100%;
    display: block;
    min-height: 50px;
    max-height: 200px;
    padding: 10px;
    background-color: transparent;
    border-bottom: 2px solid #c2c9d4;
    border-radius: 7px 7px 0 0;
    overflow: auto;
    z-index: 2;
  }
  .actions {
    position: relative;
    width: 100%;
    height: 36.3px;
    background-color: #f6f8f9;
    border-radius: 0 0 7px 7px;
    display: flex;
    text-align: right;
  }
  .btn {
    position: absolute;
    top: -1.9px;
    right: -2px;
    border: 2px solid #fc9a22;
    border-radius: 0 0 7px;
    background-color: #fc9a22;
    padding: 0 16px;
    height: 40px;
    font-size: 15px;
    color: #f9f9f9;
    cursor: pointer;
    line-height: 36px;
  }
  .btn:active {
    border: 2px solid #e3891c;
    background-color: #e3891c;
  }
</style>