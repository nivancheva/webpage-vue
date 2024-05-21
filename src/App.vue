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

  <section class="first-sec container-fluid p-5 row justify-content-center">
    <img class="cover-photo" src='/cover.png'/>
    <div class="logo-section">
      <img src="/logo.png">
    </div>
    
    <div class="col-11 pb-5">
      <h1 class="text-uppercase mb-0">Molly</h1>
      <h3>Unuque 3D Metaverse Ready NFTs</h3>
    </div>
  </section>
  
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

.first-sec {
  position: relative;
  margin-inline: auto;
}

.first-sec .cover-photo {
  position:absolute;
  z-index: -1;

  width: 100%;
  max-width: 1200px;
  height: 100%;
}

.logo-section {
  display: grid;
  place-content: center;

  max-width: 488px;
  width: 100%;
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
}

@media (min-width: 769px) {
  .links {
    display: flex;
  }
}
</style>
