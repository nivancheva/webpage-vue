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
  
    <div class="vertical-nav-wrapper">
      <nav class="vertical-nav">
        <ul class="nav-list">
          <li>
            <a href="#" class="active">
              <span class="label">Home</span>
            </a>
          </li>
          <li>
            <a href="#" class="active">
              <span class="label">About</span>
            </a>
          </li>
          <li>
            <a href="#" class="active">
              <span class="label">Vision</span>
            </a>
          </li>
          <li>
            <a href="#" class="active">
              <span class="label">Benefits</span>
            </a>
          </li>
          <li>
            <a href="#" class="active">
              <span class="label">Road</span>
            </a>
          </li>
          <li>
            <a href="#" class="active">
              <span class="label">Team</span>
            </a>
          </li>
          <span class="circle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8"/></svg></span>
        </ul>
      </nav>
    </div>

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

    <section class="mt-5">
      <div class="container-fluid">
        <h2 class="text-uppercase text-center">Core Team</h2>
      
        <div class="row team-wrapper">
          <div class="col-11 col-md-6 col-lg-4">
            <div class="p-5 h-100">
              <div class="d-flex justify-content-center">
                <img class="team-img" src="/team/simbiot.png">
              </div>
              <h5 class="text-center text-uppercase mt-3">Simbiot</h5>
              <p class="text-center">Front end developer and designer</p>
            </div>
          </div>

          <div class="col-11 col-md-6 col-lg-4">
            <div class="p-5 h-100">
              <div class="d-flex justify-content-center">
                <img class="team-img" src="/team/kris.png">
              </div>
              <h5 class="text-center text-uppercase mt-3">Kris</h5>
              <p class="text-center">Backend Developer and solidity developer</p>
            </div>
          </div>

          <div class="col-11 col-md-6 col-lg-4">
            <div class="p-5 h-100">
              <div class="d-flex justify-content-center">
                <img class="team-img" src="/team/emmy.png">
              </div>
              <h5 class="text-center text-uppercase mt-3">Emmy aka Catwoman</h5>
              <p class="text-center">Project Manager Assistant </p>
            </div>
          </div>

          <div class="col-11 col-md-6 col-lg-4">
            <div class="p-5 h-100">
              <div class="d-flex justify-content-center">
                <img class="team-img" src="/team/johnny.png">
              </div>
              <h5 class="text-center text-uppercase mt-3">Johnny - Mr. Stark </h5>
              <p class="text-center">Community Manager</p>
            </div>
          </div>

          <div class="col-11 col-md-6 col-lg-4">
            <div class="p-5 h-100">
              <div class="d-flex justify-content-center">
                <img class="team-img" src="/team/hulk.png">
              </div>
              <h5 class="text-center text-uppercase mt-3">Hulk </h5>
              <p class="text-center">Social Media Manager</p>
            </div>
          </div>

          <div class="col-11 col-md-6 col-lg-4">
            <div class="p-5 h-100">
              <div class="d-flex justify-content-center">
                <img class="team-img" src="/team/needfornfts.png">
              </div>
              <h5 class="text-center text-uppercase mt-3">Needfornfts</h5>
              <p class="text-center">Collaboration Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer pt-5 mt-5">
      <div class="footer-img logo-section mx-auto">
        <img class="mx-auto" src="/logo.png">
      </div>
      <div class="footer-links links align-items-center justify-content-center px-0 pt-3 pb-5">
        <ul class="align-items-center icons-container m-0 ps-0">
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
      </div>
      <div class="text-center py-5">
        <p>Copyright © Molly NFT</p>
      </div>
    </footer>

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

.vertical-nav-wrapper {
  background: transparent;
  height: 100vh;
  width: 7rem;
  top: 0;
  right: 0;
  position: fixed;
}

.vertical-nav {
  position: fixed;
  right: 2rem;
  bottom: 50%;
  transform: translate(0, 50%);
}

.circle:hover {
  color: rgba(228, 152, 239, .4);
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

.team-wrapper {
  background-image: url('./team-bg.png');
  background-repeat: no-repeat;
  background-position: top center;
}

.team-img {
  border: 2px solid rgba(228, 152, 239, .8);
  border-radius: 50%;
  padding: 2px;
}

.footer .social-links {
  width: 55px;
  height: 55px;
}

.footer .social-links span {
  font-size: 1.5rem;
}

.footer-img  img{
  width: 40%;
}

.footer-links { 
  box-shadow: 2px 1px rgba(228, 152, 239, .4);
  font-size: 2rem;
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
