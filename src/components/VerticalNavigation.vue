<script setup>

import { ref } from "vue";
const openNav = ref(false);
const selectedLink = ref(false);

function navToggle() {
   openNav.value = !openNav.value;
}

function addClassActive(title) {
  selectedLink.value = title;
}

</script>

<template>

<nav :class='["cd-vertical-nav", openNav ? "open" : ""]'>

    <ul class="text-center p-0 text-uppercase">

    <li class="nav1">
        <a href="#home" :class="{activeNav: 'Home' === selectedLink}" @click="addClassActive('Home')">
        <span class="label">Home</span>
        </a>
    </li>

    <li class="nav2">
        <a href="#about" :class="{activeNav: 'About' === selectedLink}" @click="addClassActive('About')">
        <span class="label">About</span>
        </a>
    </li>

    <li class="nav3">
        <a href="#vision" :class="{activeNav: 'Vision' === selectedLink}" @click="addClassActive('Vision')">
        <span class="label">Vision</span>
        </a>
    </li>

    <li class="nav4" >
        <a href="#success" :class="{activeNav: 'Success' === selectedLink}" @click="addClassActive('Success')">
        <span class="label">Success</span>
        </a>
    </li>

    <li class="nav5">
        <a href="#utilities" :class="{activeNav: 'Benefits' === selectedLink}" @click="addClassActive('Benefits')">
        <span class="label">Benefits</span>
        </a>
    </li>

    <li class="nav6">
        <a href="#road" :class="{activeNav: 'Road' === selectedLink}" @click="addClassActive('Road')">
        <span class="label">Road</span>
        </a>
    </li>

    <li class="nav7">
        <a href="#team" :class="{activeNav: 'Team' === selectedLink}" @click="addClassActive('Team')">
        <span class="label">Team</span>
        </a>
    </li>

    </ul>

</nav>

<button @click="navToggle" class="cd-nav-trigger cd-image-replace">
    Open navigation
    <span v-if="openNav" class="bi bi-x-lg"></span>
    <span v-else class="bi bi-three-dots-vertical"></span>
</button>   

</template>

<style scoped>

.cd-image-replace {
  display: inline-block;
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  color: transparent
}

.cd-nav-trigger {
  display: block;
  position: fixed;
  z-index: 5;
  bottom: 30px;
  right: 30px;
  height: 60px;
  width: 60px;
  background: rgba(0,0,0,.9);
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: none;
  outline: none;
  border-radius: 100%;
  box-shadow: 0 0 20px 10px rgba(228,152,239,.3);
  -moz-box-shadow: 0 0 20px 10px rgba(228,152,239,.3);
  -webkit-box-shadow: 0 0 20px 10px rgba(228,152,239,.3)
}

.cd-vertical-nav {
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
  background-color: rgba(0,0,0,.9)
}

.cd-vertical-nav a {
  display: block;
  padding: 1em;
  color: #fff;
  font-weight: 700;
}

.cd-vertical-nav a.activeNav {
  color: rgba(228,152,239,.8);
}

.cd-vertical-nav.open {
  transform: scale(1);
  box-shadow: 0 0 20px 10px rgba(228,152,239,.3);
}

.cd-nav-trigger span {
  position: absolute;
  left: -55%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 2rem;
}


@media (min-width: 800px) {
.cd-nav-trigger {
  display:none;
}

.cd-vertical-nav {
  right:0;
  top: 0;
  bottom: auto;
  height: 100dvh;
  width: 90px;
  max-width: none;
  max-height: none;
  transform: scale(1);
  background-color: transparent;
  display: table
}

.cd-vertical-nav:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.8);
  transform: translateX(100%);
  transition: transform .4s
}

.cd-vertical-nav ul {
  display: table-cell;
  vertical-align: middle;
}

.cd-vertical-nav a {
  position: relative;
  padding: 3.5em 0 0;
  margin: 1.4em auto;
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase
}

.cd-vertical-nav a:after,
.cd-vertical-nav a:before {
  content: "";
  position: absolute;
  left: 50%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0)
}

.cd-vertical-nav a:before {
  top: 0;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid rgba(228,152,239,.4);
  box-sizing: border-box;
  box-shadow: 0 0 20px 5px rgba(228,152,239,.4);
  transform: translateX(-50%) scale(.25);
  transition: transform .4s,background-color .2s
}

.cd-vertical-nav a.activeNav:before, .cd-vertical-nav a:hover:before {
  background: rgba(228, 152, 239, .4);
}

.cd-vertical-nav a :after {
  opacity: 0;
  top: 8px;
  height: 16px;
  width: 16px;
  transform: translateX(-50%) scale(0);
  transition: transform .4s 0s,opacity .1s .3s
}

.cd-vertical-nav a:hover:before {
  background: rgba(228,152,239,.4);
  box-shadow: 0 0 30px 10px rgba(228,152,239,.6)
}

.cd-vertical-nav .nav1 a:after {
  content: "\ED76";
  background-position: 0 -64px;
  transform: translateX(-50%) translateY(7.5em) scale(.01)
}

.cd-vertical-nav .nav1 a:before {
  transform: translateX(-50%) translateY(7.5em) scale(.25)
}

.cd-vertical-nav .nav2 a:after {
  content: "\EADB";
  background-position: 0 -48px;
  transform: translateX(-50%) translateY(4.5em) scale(.01)
}

.cd-vertical-nav .nav2 a:before {
  transform: translateX(-50%) translateY(4.5em) scale(.25)
}

.cd-vertical-nav .nav3 a:after {
  content: "\EC90";
  background-position: 0 -32px;
  transform: translateX(-50%) translateY(1.5em) scale(.01)
}

.cd-vertical-nav .nav3 a:before {
  transform: translateX(-50%) translateY(1.5em) scale(.25)
}

.cd-vertical-nav .nav4 a:after {
  content: "\EBD3";
  background-position: 0 -16px;
  transform: translateX(-50%) translateY(-1.5em) scale(.01)
}

.cd-vertical-nav .nav4 a:before {
  transform: translateX(-50%) translateY(-1.5em) scale(.25)
}

.cd-vertical-nav .nav5 a:after {
  content: "\EF51";
  background-position: 0 0;
  transform: translateX(-50%) translateY(-4.5em) scale(.01)
}

.cd-vertical-nav .nav5 a:before {
  transform: translateX(-50%) translateY(-4.5em) scale(.25)
}

.cd-vertical-nav .nav6 a:after {
  content: "\EECE";
  background-position: 0 16px;
  transform: translateX(-50%) translateY(-7.5em) scale(.01)
}

.cd-vertical-nav .nav6 a:before {
  transform: translateX(-50%) translateY(-7.5em) scale(.25)
}

.cd-vertical-nav .nav7 a:after {
  content: "\EE50";
  background-position: 0 32px;
  transform: translateX(-50%) translateY(-7.5em) scale(.01)
}

.cd-vertical-nav .nav7 a:before {
  transform: translateX(-50%) translateY(-10.5em) scale(.25)
}

.cd-vertical-nav .label {
    display: block;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0);
    transform: translateX(100%);
    transition: transform .4s
    }
}

@media only screen and (min-width: 800px) {
  .cd-vertical-nav:hover:before {
    transform:translateX(0);
    color: #e498ef
  }

  .cd-vertical-nav:hover a {
    font-family: icomoon!important;
    speak: never;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transform: translateX(0)
  }

  .cd-vertical-nav:hover a .label {
    font-family: Roboto,sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    line-height: 25px;
    transform: translateX(0)
  }

  .cd-vertical-nav:hover a:after,.cd-vertical-nav:hover a:before {
    transform: translateX(-50%) scale(1);
    -moz-transform: translateX(-50%) scale(1) rotate(.02deg)
  }

  .cd-vertical-nav:hover a:before {
    background: transparent
  }

  .cd-vertical-nav:hover a.activeNav:hover:before {
    background: rgba(228,152,239,.4);
  }

   .cd-vertical-nav a.activeNav:hover {
    color: rgba(228,152,239,.4);
   }

  .cd-vertical-nav:hover label.activeNav:hover {
    color: rgba(228,152,239,.4)
  }

  .cd-vertical-nav:hover a:after {
    top: 12px;
    font-size: 20px;
    opacity: 1;
    transition: transform .4s,opacity 0s;
    color: #e498ef
  }
}

</style>