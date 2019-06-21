<template>
  <div id="app">
    <section class="header">
      <div class="container-navbar">
        <div class="nav-title">ENGETEC-UNIDERP</div>
        <nav class="navbar" :class="{ active }">
          <ul class="nav-list" @click="toggle()">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Início</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/inscricao">Increva-se</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/galeria">Galeria</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/eventos">Eventos</router-link>
            </li>
          </ul>
        </nav>
        <div class="menu-toggle" @click="toggle()" :class="{ active }">
          <i class="burger-icon" aria-hidden="true"></i>
        </div>  
      </div>
      <div class="title" :class="{ active }">
        <h1 class="title-h1">ENGETEC-UNIDERP</h1>
        <p class="subtitle-p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. 
        </p>
      </div>
    </section>
    <section class="main" :class="{ none: active }">
      <router-view />
    </section>
    <section class="footer">
      <Comentarios></Comentarios>
    </section>
  </div>
</template>

<script>
  import Comentarios from './components/Comentarios.vue'
  export default {
    data() {
      return {
        active: false
      }
    },
    methods: {
      toggle() {
        this.active = !this.active
      } ,
      scrollNavbar() {
        var prevScrollpos = window.pageYOffset
      }
    },
    components: {
      Comentarios
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Quicksand:300,400,700&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
  }
  .navbar {
    position: fixed;
    z-index: 9999;
    height: 50px;
    width: 100%;
    background: #33333320;
    box-shadow: 0 2px 5px #33333380;
    transition: top .2s;
  }
  .nav-title {
    display: none;
  }
  .nav-list {
    max-width: 1000px;
    display: flex;
    list-style: none;
    margin: 0 auto;
  }
  .nav-item {
  }
  .nav-link {
    text-decoration: none;
    display: block;
    color: #fff;
    padding: 11.5px;
    border: 4px solid transparent;
    transition: .2s;
  }
  .nav-link:hover {
    border-bottom: 4px solid #fc9a2280;
  }
  .router-link-exact-active {
    border-bottom: 4px solid #fc9a22 !important;
    color: #fc9a22;
  }
  .header {
    background: linear-gradient(rgba(0,0,0, 0.2), rgba(0,0,0, 0.2)), url("assets/fundo.jpeg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    user-select: none;
    position: absolute;
    top: 0;
  }
  .main {
    position: relative;
    max-width: 1000px;
    min-height: 600px;
    left: 50%;
    transform: translateX(-50%);
    margin-right: 30px;
    padding: 30px;
    background-color: #fff;
    margin-top: 450px;
    border-radius: 5px;
    box-shadow: 0 0 10px 2px #33333370;
  }
  .title {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15px 15px 15px;
    top: 150px;
    text-align: center;
    text-shadow: 0 0 15px #000000;
  }
  .title-h1 {
    color: #fff;
    font-family: sans-serif;
    font-size: 50px;
  }
  .subtitle-p {
    color: #ffffff;
    font-size: 20px;
    font-style: italic;
    max-width: 650px;
  }
  .menu-toggle {
    position: absolute;
    display: none;
    color: #fff;
    right: 0;
    top: 50px;
    width: 35px;
    height: 25px;
    cursor: pointer;
  }
  .page {
  }
  .article-title {
    margin-bottom: 20px;
  }
  .hr-title {
    margin-bottom: 10px;
    color: #000;
    margin: 10px 0 20px;
    border: 1px solid #88888880;
  }
  .article-img {
    float: left;
    margin: 5px 25px 20px 0;
  }
  .article-text {
    text-align: justify;
    line-height: 160%;
    margin-bottom: 15px;
  }
  @media (max-width: 991.98px) {
    .menu-toggle {
      display: block;
      margin-right: 15px;
      margin-top: -37px;
      padding: 10px;
      cursor: pointer;
    }
    /* Burger Icon start */
    .burger-icon,
    .burger-icon:before,
    .burger-icon:after {
      position: relative;
      content: '';
      border-radius: 1px;
      height: 5px;
      width: 35px;
      margin-left: -10px;
      background-color: rgba(255,255,255, 0.95);
      display: block;
      position: absolute;
      cursor: pointer;
      transition: .4s;
    }
    .burger-icon:before {
      margin-left: 0;
      top: -10px;
    }
    .burger-icon:after {
      margin-left: 0;
      bottom: -10px;
    }
    .menu-toggle.active .burger-icon {
      background-color: transparent;
    }
    .menu-toggle.active .burger-icon:before,
    .menu-toggle.active .burger-icon:after {
      top: 0;
      bottom: 0;
    }
    .menu-toggle.active .burger-icon:before {
      transform: rotate(45deg);
    }
    .menu-toggle.active .burger-icon:after {
      transform: rotate(135deg);
    }
    /* Burger Icon end */
    .title {
      margin-top: -100px !important;
    }
    .title.active {
      display: none;
    }
    .container-navbar {
      background: #33333320;
    box-shadow: 0 2px 5px #33333380;
    }
    .navbar {
      position: absolute;
      background: #33333320;
      box-shadow: 0 0 0 transparent;
      width: 100%;
      height: 100%;
      left: -100%;
      transition: .4s;
    }
    .navbar.active {
      left: 0;
    }
    .nav-title {
      display: block;
      color: #fff;
      height: 50px;
      line-height: 50px;
      font-size: 25px;
      padding: 0 15px;
    }
    .nav-list {
      display: block;
    }
    .nav-item {
      width: 100%;
    }
    .nav-link:hover {
      border-left: 4px solid #fc9a2280;
      border-bottom: transparent !important;
    }
    .router-link-exact-active {
      border-left: 4px solid #fc9a22 !important;
      border-bottom: transparent !important;
      color: #fc9a22;
    }
    .main.none {
      visibility: hidden;
    }
    .main {
      margin-top: 360px;
    }
  }
</style>
