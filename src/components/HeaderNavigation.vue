<script setup>

</script>

<template>
  <nav id="home" class="navbar p-5 navbar-expand-lg navbar-light pt-2 pb-0">
    <div class="nav-container container-fluid d-flex justify-content-between align-items-center mx-5 my-3">

      <img src="/images/headerLogo.svg">

      <div class="links align-items-center">

        <ul class="align-items-center icons-container m-0">
          <li>
            <a class="btn social-links">
              <span class="icon icon-discord"></span>
            </a>
          </li>

          <li>
            <a class="btn social-links">
            <span class="icon icon-instagram"></span>
          </a>
          </li>

          <li>
            <a class="btn social-links">
            <span class="icon icon-twitter"></span>
          </a>
          </li>

          <li>
            <a class="btn social-links">
            <span class="icon icon-opensea"></span>
            </a>
          </li>
        </ul>

        <a class="d-flex align-items-center btn-connect">
          <span class="icon icon-wallet"></span>
          <span class="text-uppercase ps-2">Staking</span>   
        </a>

      </div>
    </div>
  </nav>   
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

.icons-container {
  display: flex;
}

.social-links:hover,
.btn-connect:hover {
  box-shadow: rgba(228, 152, 239, 0.3) 0px 0px 20px 10px;
}

.page-content {
  position:relative;

  overflow-x: hidden;
}

@media (max-width: 768px) {
  .icons-container {
    display: block;
    text-align: center;
    position: fixed;
    right: 1rem;
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