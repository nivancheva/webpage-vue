<script setup>

</script>

<template>
  <header class="header d-flex align-items-center justify-content-between">
    <div>
      <img src="/headerLogo.svg">
    </div>
    <div class="d-flex icons-container">
      <span class="icon icon-discord"></span>
      <span class="icon icon-instagram"></span>
      <span class="icon icon-twitter"></span>
      <span class="icon icon-opensea"></span>

      <div class="d-flex align-items-center border">
        <span class="icon icon-wallet"></span>
        <span class="text-uppercase ps-2">Staking</span>   
      </div>
    </div>
  </header>
  
</template>

<style scoped>
.header {
  background-color: black;
}

.icons-container {
  gap: .75rem
}
</style>
