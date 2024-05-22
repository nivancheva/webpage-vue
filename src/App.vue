<script setup>

</script>

<template>
  <nav class="navbar p-5 navbar-expand-lg navbar-light pt-2 pb-0">
    <div class="nav-container container-fluid d-flex justify-content-between align-items-center mx-5 my-3">
      <div>
        <img src="/headerLogo.svg">
      </div>
      <div class="links align-items-center">
        <ul class="align-items-center icons-container m-0">
          <li>
            <a class="btn social-links">
              <span class="icon icon-discord"></span>
            </a>
          </li>
          <li><a class="btn social-links">
            <span class="icon icon-instagram"></span>
          </a></li>
          <li><a class="btn social-links">
            <span class="icon icon-twitter"></span>
          </a></li>
          <li><a class="btn social-links">
            <span class="icon icon-opensea"></span>
          </a></li>
        </ul>
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
        <span class="icon icon-person-dots-from-line"></span>
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

.vertical-nav {
  position: fixed;
  right: 2rem;
  vertical-align: middle;
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
  

}
</style>
