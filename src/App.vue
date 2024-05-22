<script setup>

</script>

<template>
  <nav class="navbar p-5 navbar-expand-lg navbar-light pt-2 pb-0">
    <div class="nav-container container-fluid d-flex justify-content-between align-items-center mx-5 my-3">
      <div>
        <img src="/headerLogo.svg">
      </div>
      <div class="links">
        <div class="align-items-center icons-container">
          <a class="btn social-links">
            <span class="icon icon-discord"></span>
          </a>
          <a class="btn social-links">
            <span class="icon icon-instagram"></span>
          </a>
          <a class="btn social-links">
            <span class="icon icon-twitter"></span>
          </a>
          <a class="btn social-links">
            <span class="icon icon-opensea"></span>
          </a>
        </div>
        <a class="d-flex align-items-center btn btn-sm btn-connect">
          <span class="icon icon-wallet"></span>
          <span class="text-uppercase ps-2">Staking</span>   
        </a>
      </div>
    </div>
  </nav>

  <div class="page-content">
  
    <nav class="vertical-nav">
      <ul class="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Vision</li>
        <li>Benefits</li>
        <li>Road</li>
        <li>Team</li>
      </ul>
    </nav>

    <section class="first-sec">
      <div class="container-fluid row p-5 justify-content-center">
        <div class="logo-section">
          <img src="/logo.png">
        </div>
        
        <div class=" title">
          <h1 class="text-uppercase mb-0">Molly</h1>
          <h3>Unuque 3D Metaverse Ready NFTs</h3>
        </div>
      </div>
    </section>

  </div>
  
</template>

<style scoped>
.navbar {
  background-color: black;
}

.social-links {
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: .5rem;

  border: 2px solid rgba(228, 152, 239, .4);
  overflow: hidden;
  transition: all 1s ease;
  box-shadow: rgba(228, 152, 239, 0.25) 0px 0px 20px 5px;
}

.btn-connect {
  border-radius: 10rem;
  padding: .4375rem 1.25rem .3125rem;
  color: inherit;

  border: 2px solid rgba(228, 152, 239, .4);
  overflow: hidden;
  transition: all 1s ease;
  box-shadow: rgba(228, 152, 239, 0.25) 0px 0px 20px 5px;
}

.icons-container {
  display: flex;
}

.social-links:hover,
.btn-connect:hover {
  box-shadow: rgba(228, 152, 239, 0.3) 0px 0px 20px 10px;
}

.page-content {
  position:relative
}

.first-sec {
  position: relative;
  margin-inline: auto;
  min-height: 100vh;

  background-image: url('./cover.png');
  background-position:top center;
  background-repeat: no-repeat;
  background-size: contain;
}

.logo-section {
  display: grid;
  place-content: center;

  max-width: 450px;
  width: 100%;

  position: relative;
}

.title {
  position: absolute;
  bottom: 0;
  left: 5rem
}

.vertical-nav {
  position: fixed;
  z-index: 9;
  right: 100px;
  bottom: 30px;
  width: 65%;
  max-width: 300px;
  max-height: 90%;
  overflow-y: auto;
  transform: scale(0);
  transform-origin: right bottom;
  transition: transform .2s;
  border-radius: .25em;
  background-color: rgba(0, 0, 0, .9);
}

.nav-list {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    list-style-type: none;
    text-transform: uppercase;
}

.vertical-nav a {
    display: block;
    padding: 1em;
    color: #fff!important;
    font-weight: 700
}

.vertical-nav a.active {
    color: rgba(228,152,239,.8)!important
}

.ertical-nav.open {
    transform: scale(1);
    -webkit-overflow-scrolling: touch;
    box-shadow: 0 0 20px 10px rgba(228,152,239,.3)!important;
    -moz-box-shadow: 0 0 20px 10px rgba(228,152,239,.3)!important;
    -webkit-box-shadow: 0 0 20px 10px rgba(228,152,239,.3)!important
}

@media (max-width: 768px) {
  .icons-container {
    display: block;
    text-align: center;
    position: fixed;
    right: 3rem;
    top: 6rem;
    z-index: 10;
  }

  .social-links {
    margin-bottom: .5rem;
  }

  .title {
    text-align: center;
    left: 0;
  }
}

@media (min-width: 769px) {
  .links {
    display: flex;
  }

  .vertical-nav {
    right: 0;
    top: 0;
    bottom: auto;
    height: 100vh;
    width: 90px;
    max-width: none;
    max-height: none;
    transform: scale(1);
    background-color: transparent;
    display: table;
  }

  .vertical-nav:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .8);
    transform: translateX(100%);
    transition: transform .4s;
  }

  

}
</style>
