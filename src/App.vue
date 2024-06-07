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
  <nav id="home" class="navbar p-5 navbar-expand-lg navbar-light pt-2 pb-0">
    <div class="nav-container container-fluid d-flex justify-content-between align-items-center mx-5 my-3">

      <img src="/headerLogo.svg">

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

  <div class="page-content">

    <nav :class='["cd-vertical-nav", openNav ? "open" : ""]'>

      <ul class="text-center p-0 text-uppercase">

        <li class="nav1">
          <a href="#home" :class="{active: 'Home' === selectedLink}" @click="addClassActive('Home')">
            <span class="label">Home</span>
          </a>
        </li>

        <li class="nav2">
          <a href="#about" :class="{active: 'About' === selectedLink}" @click="addClassActive('About')">
            <span class="label">About</span>
          </a>
        </li>

        <li class="nav3">
          <a href="#vision" :class="{active: 'Vision' === selectedLink}" @click="addClassActive('Vision')">
            <span class="label">Vision</span>
          </a>
        </li>

        <li class="nav4" >
          <a href="#success" :class="{active: 'Success' === selectedLink}" @click="addClassActive('Success')">
            <span class="label">Success</span>
          </a>
        </li>

        <li class="nav5">
          <a href="#utilities" :class="{active: 'Benefits' === selectedLink}" @click="addClassActive('Benefits')">
            <span class="label">Benefits</span>
          </a>
        </li>

        <li class="nav6">
          <a href="#road" :class="{active: 'Road' === selectedLink}" @click="addClassActive('Road')">
            <span class="label">Road</span>
          </a>
        </li>

        <li class="nav7">
          <a href="#team" :class="{active: 'Team' === selectedLink}" @click="addClassActive('Team')">
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

    <section class="home-section">

      <div class="container-fluid px-5">

        <div class="row justify-content-center">

          <div class="col-11 col-sm-9 col-md-8 col-lg-6 p-0 d-flex justify-content-center">
            <img src="/logo2.png">
          </div>
          
          <div class="col-11 pb-5 header-title">
            <div class="d-xs-flex justify-content-center align-items-center">
              <div class="text-center text-md-start mb-3">
                <h1 class="text-uppercase mb-0">Molly</h1>
                <h3>Unuque 3D Metaverse Ready NFTs</h3>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>

    <section class="collection-wrapper">
      
      <div class="container-fluid py-5">

        <div class="row align-items-center justify-content-center px-sm-1">
          <div class="col-12 col-xl-6 p-0">
            <div class="row-sm d-flex align-items-center">
              <img class="collection-molly-left" src="/moly_one.png"/>
              <div class="col-12">
                <p class="text-muted ps-2 h3 fw-light">than...</p>
                <h2 class="mb-0 ps-2">1st Collection</h2>
                <div class="mb-2">
                  <img class="img-fluid molly-img " src="/rectangle.png"/>
                </div>
                <span class="badge ms-2">Sold Out</span>
              </div>
            </div>
          </div>

          <div class="col-12 col-xl-6 p-0 mt-5 mt-md-0">
            <div class="d-flex align-items-center justify-content-end">  
              <div class="text-end">
                <p class="text-muted pe-2 h3 fw-light">...now</p>
                <h2 class="mb-0 pe-2">Secret Collection</h2>
                <div class="mb-2">
                  <img class="img-fluid molly-img" src="/rectangle.png"/>
                </div>
                <span class="badge me-2">Comming soon</span>
              </div>
              <img class="collection-molly-right" src="/moly_two.png"/>
            </div>
          </div>
        </div>

      </div>

    </section>

    <section id="about" class="about-section">

      <div class="container py-5">
        <div class="row">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div>
              <h2 class="display-6 color-accent">4444 Unique NFTs</h2>
              <p>We are M.O.L.L.Y! We are the new creative moment revalorizing 3D NFT art. We have one simple, yet ambitious goal-create the largest decentralized community & alpha group of high-end art collectors & artists.</p>
              <div class="d-flex align-items-center">
                <a class="d-flex align-items-center btn-connect me-2 mb-2">
                  <span class="icon icon-discord"></span>
                  <span class="text-uppercase ps-2">Discord</span>   
                </a>
                <a class="d-flex align-items-center btn-connect mb-2">
                  <span class="icon icon-opensea"></span>
                  <span class="text-uppercase ps-2">Opensea</span>   
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid">

        <div class="row pb-5">

          <div id="uniqueCarosel" ref='cards' class="owl-carousel owl-theme">

            <div class="item px-2">
              <img class="unique-img img-fluid" src="/about/nft1.jpg"/>
            </div>

            <div class="item px-2">
              <img class="unique-img img-fluid" src="/about/nft2.jpg"/>
            </div>

            <div class="item px-2">
              <img class="unique-img img-fluid" src="/about/nft3.jpg"/>
            </div>

            <div class="item px-2">
              <img class="unique-img img-fluid" src="/about/nft4.jpg"/>
            </div>

            <div class="item px-2">
              <img class="unique-img img-fluid" src="/about/nft5.jpg"/>
            </div>

            <div class="item px-2">
              <img class="unique-img img-fluid" src="/about/nft6.jpg"/>
            </div>

            <div class="item px-2">
              <img class="unique-img img-fluid" src="/about/nft7.jpg"/>
            </div>

            <div class="item px-2">
              <img class="unique-img img-fluid" src="/about/nft8.jpg"/>
            </div>

          </div>

        </div>

      </div>
    </section>

    <section id="vision">

      <div class="container-fluid">

        <div class="vision-wrapper">

          <h2 class="title text-center text-uppercase display-5 fw-bold my-5">
            VISION & VALUES
            <span class="title-big">VISION & VALUES</span>
          </h2>

          <div class="row">

            <div class="col-12 col-md-8 col-lg-5 mx-auto mb-5 pb-5 text-center">
              <p class="text-start">We are here to create the difference. We don’t settle for mediocre ART. We are true perfectionists in every aspect of our doings. When we create art, we focus on the detail, as this is what distinguishes GOOD art from WORLDCLASS art! There is no room for error! We give 100% and make the best. Are you ready to join us?</p>
              <p class="text-start mb-5">Our vision is to create the largest & most profitable, decentralized community & alpha group of high-end art collectors & artists! </p>
              <a class="btn-connect mt-5">
                <span class="text-uppercase">Staking</span>   
              </a>
            </div>

            <div class="col-12 my-5 d-flex justify-content-center">
              <img src="/vision/trip.png"/>
            </div>

            <div class="col-12 d-flex justify-content-center py-5 utilities-border">
              <img src="/vision/BTP-in-Paradise.png"/>
            </div>

          </div>

        </div>

      </div>

    </section>

    <section id="success" class="success-section">

      <div class="container-fluid pt-5 px-0">

        <div>
          <h2 class="title text-center text-uppercase display-5 fw-bold mt-5">
            Our three Piller
            <span class="title-big">Our three Pillers</span>
          </h2>
          <h2 class="title text-center text-uppercase display-5 fw-bold mb-5 mt-3">
            to success
            <span class="title-big">to success</span>
          </h2>
        </div>

        <div class="row">

          <div class="col-12">
            <div id="success1" class="fixed-bg">
              <div class="container-lg">
                <div class="row justify-content-center justify-content-md-start">
                  <div class="col-12 col-md-7 col-lg-5 px-1">
                    <div class="fixed-content">
                      <p class="display-1 fw-bold color-accent">1</p>
                      <h3 class="title">Community Driven</h3>
                      <p>We are fully dedicated to becoming entirely community driven project. As such, the first 2222 whitelisted members get chance to MINT FOR FREE 1111 NFTs, just pay the gas fees! The initial 1111 holders will decide the presale and public sale price!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="success2" class="fixed-bg">
              <div class="container-lg">
                <div class="row justify-content-center justify-content-md-start">
                  <div class="col-12 col-md-7 col-lg-5 px-1">
                    <div class="fixed-content">
                      <p class="display-1 fw-bold color-accent">2</p>
                      <h3 class="title">Utility Driven</h3>
                      <p> What is an NFT without utility? No matter how amazing the art is, you need to have the utility to make the project worth it! Owning a Molly will provide you with access to our Alpha group of high-end art collectors & artists!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="success3" class="fixed-bg">
              <div class="container-lg">
                <div class="row justify-content-center justify-content-md-start">
                  <div class="col-12 col-md-7 col-lg-5 px-1">
                    <div class="fixed-content">
                      <p class="display-1 fw-bold color-accent">3</p>
                      <h3 class="title">Trust and Transparency</h3>
                      <p> The decision-making process is entirely up to the community. The core team will just give suggestions and advice. Even we left the most important decision about the pricing of the project in the hands of the community!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </section>

    <section id="utilities">

      <div class="container-fluid pt-5">

        <h2 class="title text-center text-uppercase display-5 fw-bold my-5">
          Utilities
          <span class="title-big">Utilities</span>
        </h2>

        <div class="mx-1 mx-md-5 p-md-5 utilities-wrapper">
          <img class="util-bg-img" src='/team-bg.png'/>
          <div class="row justify-content-center">
            <div class="col-12 col-md-6 col-xl-3">
              <div class="utilities-card p-4 mb-5">
                <h5 class="title text-uppercase d-flex align-items-center">
                  <span class="icon icon-chess-queen icon-util"></span>
                  Alpha Group
                </h5>
                <p>We are building an alpha group for the influencer industry! <br>We strongly believe that a lot of famous influencer & celebrities will make their own NFT collection, and we want to be the first alpha group that that will provide insights, knowledge, connections and opportunities!</p>
              </div>

              <div class="utilities-card p-4 mb-5">
                <h5 class="title text-uppercase d-flex align-items-center">
                  <span class="icon icon-gift icon-util"></span>
                  Giveaways & Rewards
                </h5>
                <p> We plan to organise regular giveaways, raffles and fun incentives for our members with the rewards being invitations to parties, merch, free nft, whitelist, crypto and luxury goods!</p>
              </div>
            </div>

            <div class="col-12 col-md-6 col-xl-3">
              <div class="utilities-card p-4 mb-5">
                <h5 class="title text-uppercase d-flex align-items-center">
                  <span class="icon icon-cube icon-util"></span>
                  High end 3D models & rendering
                </h5>
                <p>Holders can enjoy high quality rendering implying that Molly NFTs can be used in the Mataverse or in games! </p>
              </div>

              <div class="utilities-card p-4 mb-5">
                <h5 class="title text-uppercase d-flex align-items-center">
                  <span class="icon icon-wallet icon-util"></span>
                  Community Wallet
                </h5>
                <p>We will create a Community Wallet with the intention of redistributing 30% of the Royalty Fees income from the secondary market back into the Community Wallet. The community can vote what we will use the funds for and ensure that we keep growing the project! </p>
              </div>
            </div>

            <div class="col-12 col-md-6 col-xl-3">
              <div class="utilities-card p-4 mb-5">
                <h5 class="title text-uppercase d-flex align-items-center">
                  <span class="icon icon-ticket icon-util"></span>
                  Mint Pass
                </h5>
                <p>Molly NFT acts as a mint pass for all future drops & influencer collections, meaning that holders will get early access & better price for upcoming collections! </p>
              </div>

              <div class="utilities-card p-4 mb-5">
                <h5 class="title text-uppercase d-flex align-items-center">
                  <span class="icon icon-calendar-check icon-util"></span>
                  Real life events
                </h5>
                <p>Exclusive parties with the best influencers & celebrities! Networking events with artists, creators, influencers and investors! The path to success is building a network!</p>
              </div>
            </div>

            <div class="col-12 col-md-6 col-xl-3">
              <div class="utilities-card p-4 mb-5">
                <h5 class="title text-uppercase d-flex align-items-center">
                  <span class="icon icon-mask icon-util"></span>
                  Metaverse
                </h5>
                <p>We plan to purchase land in the metaverse creating a virtual member space for holders to collaborate as their unique Molly avatars. <br>Our metaverse space is planned to be as the Molly Headquarters that NFT holders can access. Here influencers, collections, artists and investors can hang out together and create amazing projects!</p>
              </div>

              <div class="utilities-card p-4 mb-5">
                <h5 class="title text-uppercase d-flex align-items-center">
                  <span class="icon icon-flask-vial icon-util"></span>
                  Serum mutations
                </h5>
                <p>We plan to make a second collection where holders can use serums to mutate their NFT and increase its value! </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>

    <section id="road" class="roadmap-section">

      <div class="container-fluid pt-5">
        <h2 class="title text-center text-uppercase display-5 fw-bold my-5">
          Roadmap
          <span class="title-big">Roadmap</span>
        </h2>

        <nav class="d-flex justify-content-center mb-5 pb-5">
          <div id="nav-tab" role="tablist" class="nav nav-tabs">
           <button class="nav-link nav-item active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
              Part I.
            </button>
            <button class="nav-link nav-item" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
              Part II.
            </button>
          </div>
        </nav>
        
      </div>

      <div class="roadmap mb-5 pb-5">
        <div class="container-fluid">
          <div class="row px-md-5 mx-md-5">
            <div class="col-12">
              <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <div class="roadmapCarosel owl-carousel owl-roadmap owl-loaded owl-drag">
                  <div class="item mx-md-3">
                    <div>
                      <div class="d-flex justify-content-center align-items-center color-accent">
                        <span class="icon-roadmap icon-circle-check icon-util me-2"></span>
                        <span class="fw-bold">COMPLETED</span>
                      </div>
                      <h5 class="text-center text-uppercase font-weight-light">Stage 1</h5>
                        <div class="d-flex justify-content-center">  
                          <img class="img-fluid roadmap-point" src="/roadmap-point.png"/>
                        </div>
                        <div class="roadmap-box p-4">
                          <h4 class="text-center color-accent mb-3 mt-2">
                            It all starts with our Art.
                          </h4>
                          <p>
                            We will create the most high-quality 3D art that you have seen! Our artistic team will ensure that our holders get the best quality and render of their NFTs! We aim for perfection! 
                          </p>
                          <p>
                            Therefore, the art will be mind-blowing, and you will want to show it off! We will grab the attention of NFT communities towards our high quality!
                          </p>
                        </div>
                      </div>
                    </div>


                  <div class="item mx-md-3">
                    <div>
                      <div class="d-flex justify-content-center align-items-center color-accent">
                        <span class="icon-roadmap icon-circle-check icon-util me-2"></span>
                        <span class="fw-bold">COMPLETED</span>
                      </div>
                      <h5 class="text-center text-uppercase font-weight-light">Stage 2</h5>
                      <div class="d-flex justify-content-center">  
                        <img class="img-fluid roadmap-point" src="/roadmap-point.png"/>
                      </div>
                      <div class="roadmap-box p-4">
                        <h4 class="text-center color-accent mb-3 mt-2">		
                          Molly FREE Minting! 
                        </h4>
                        <p>
                          We are community driven project! As such, we believe that the community will help us steer the direction! We are willing to invest in order to build a stronger community which is more engaged in the process of creating the greatest NFT project!
                        </p>
                        <p>
                          Therefore, the very first presale will be FREE to MINT! Whitelisted community members, who have contributed to the development of the project by being active and inviting members will gain the opportunity to mint absolutely for FREE! That’s right! Only pay gas fees!
                        </p>
                        <p>
                          There will be 1111 NFTs available and 2222 available whitelist spots!
                        </p>
                      </div>

                    </div>
                  </div>

                  <div class="item mx-md-3">
                    <div>
                      <div class="d-flex justify-content-center align-items-center color-accent">
                        <span class="icon-roadmap icon-circle-check icon-util me-2"></span>
                        <span class="fw-bold">COMPLETED</span>
                      </div>
                      <h5 class="text-center text-uppercase font-weight-light">Stage 3</h5>
                      <div class="d-flex justify-content-center">  
                        <img class="img-fluid roadmap-point" src="/roadmap-point.png"/>
                      </div>
                      <div class="roadmap-box p-4">
                        <h4 class="text-center color-accent mb-3 mt-2">
                          Molly Public Mint 
                        </h4>
                        <p>
                          Here we will sell the rest of 3333 pieces!
                        </p>
                        <p>
                          We are going to employ a Dutch Style Auction, where the price will drop until it reaches 0.02 ETH!
                        </p>
                        <p>
                          The starting price of the Dutch Auction will be voted by all presale holders.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="item mx-md-3">
                    <div>
                      <div class="d-flex justify-content-center align-items-center color-accent">
                        <span class="icon-roadmap icon-circle-check icon-util me-2"></span>
                        <span class="fw-bold">COMPLETED</span>
                      </div>
                      <h5 class="text-center text-uppercase font-weight-light">Stage 4</h5>
                      <div class="d-flex justify-content-center">  
                        <img class="img-fluid roadmap-point" src="/roadmap-point.png"/>
                      </div>
                      <div class="roadmap-box p-4">
                        <h4 class="text-center color-accent mb-3 mt-2">
                          The reveal 
                        </h4>
                        <p>
                          After collection is fully sold out we will reveal all NFTs!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="item mx-md-3">
                    <div>
                     <div class="d-flex justify-content-center align-items-center color-accent">
                        <span class="icon-roadmap icon-circle-check icon-util me-2"></span>
                        <span class="fw-bold">COMPLETED</span>
                      </div>
                      <h5 class="text-center text-uppercase font-weight-light">Stage 5</h5>
                      <div class="d-flex justify-content-center">  
                        <img class="img-fluid roadmap-point" src="/roadmap-point.png"/>
                      </div>
                      <div class="roadmap-box p-4">
                        <h4 class="text-center color-accent mb-3 mt-2">
                          Community Rewards!
                        </h4>
                        <p>
                          We believe that the community will be responsible for our success and therefore will be giving back to them!
                        </p>
                        <p>
                          Depending on how much funds were raised we are going to large portion back to the community by running various giveaways, contests with prizes and fun incentives to rewards all Molly NFT holders!
                        </p>
                        <p>
                          Rewards can range from vacations, invitations to parties, luxury goods or crypto rewards!
                        </p>
                      </div>

                    </div>
                  </div>

                  <div class="item mx-md-3">
                    <div>
                      <div class="d-flex justify-content-center align-items-center color-accent">
                        <span class="icon-roadmap icon-circle-check icon-util me-2"></span>
                        <span class="fw-bold">COMPLETED</span>
                      </div>
                      <h5 class="text-center text-uppercase font-weight-light">Stage 6</h5>
                      <div class="d-flex justify-content-center">  
                        <img class="img-fluid roadmap-point" src="/roadmap-point.png"/>
                      </div>
                      <div class="roadmap-box p-4">
                        <h4 class="text-center color-accent mb-3 mt-2">
                          Forming the Alpha Group
                        </h4>
                        <p>
                          Forming the alpha group! It’s time to collaborate, share experience and build the biggest and strongest alpha group in the NFT space!
                        </p>
                        <p>
                          With a Molly Alpha group, you will know precisely when and where each NFT release is happening online and exactly how to purchase the collection with step-by-step instructions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="item mx-md-3">
                    <div>
                      <div class="d-flex justify-content-center align-items-center color-accent">
                        <span class="icon-roadmap icon-circle-check icon-util me-2"></span>
                        <span class="fw-bold">COMPLETED</span>
                      </div>
                      <h5 class="text-center text-uppercase font-weight-light">Stage 7</h5>

                      <div class="d-flex justify-content-center">  
                        <img class="img-fluid roadmap-point" src="/roadmap-point.png"/>
                      </div>
                      <div class="roadmap-box p-4">
                        <h4 class="text-center color-accent mb-3 mt-2">
                          Legendary NFTs
                        </h4>
                        <p>
                          Any great art collection has a few pieces that makes it stand out! Like the most successful NFT collections on the market we will also make special pieces which not only will look amazing, but also have additional utility!
                        </p>
                        <p>
                          They will make you stand out and bring you great rewards!
                        </p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <div class="roadmapCarosel owl-carousel owl-roadmap owl-loaded owl-drag">
                  <div class="item mx-md-3">
                    <div>
                      <div class="d-flex justify-content-center align-items-center color-accent">
                        <span class="icon-roadmap icon-calendar icon-util me-2"></span>
                        <span class="fw-bold">April</span>
                      </div>
                      <h5 class="text-center text-uppercase font-weight-light">Stage 1</h5>
                        <div class="d-flex justify-content-center">  
                          <img class="img-fluid roadmap-point" src="/roadmap-point.png"/>
                        </div>
                        <div class="roadmap-box p-4">
                          <h4 class="text-center color-accent mb-3 mt-2">
                            Secret Molly Collection
                          </h4>
                          <p>
                            Our gift to all loyal molly holders who hold more than 5 Molly NFTs and have listed above 1 ETH (or not listed at all)! This will be small ultra-exclusive collection that we aim to price high! Here the artist will express himself and create something unique and high-value!
                          </p>
                        </div>
                    </div>
                    </div>


                    <div class="item mx-md-3">
                      <div>
                        <div class="d-flex justify-content-center align-items-center color-accent">
                          <span class="icon-roadmap icon-calendar icon-util me-2"></span>
                          <span class="fw-bold">April</span>
                        </div>
                        <h5 class="text-center text-uppercase font-weight-light">Stage 2</h5>
                        <div class="d-flex justify-content-center">  
                          <img class="img-fluid roadmap-point" src="/roadmap-point.png"/>
                        </div>
                        <div class="roadmap-box p-4">
                          <h4 class="text-center color-accent mb-3 mt-2">		
                            Simple Staking Game
                          </h4>
                          <p>
                            We will develop a simple staking game, where players can use their Molly NFT to earn virtual token rewards! The more often you play, the higher your rewards!Start Accumulating Molly virtual Molly token and claim the real Molly token at launch!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="item mx-md-3">
                      <div>
                        <div class="d-flex justify-content-center align-items-center color-accent">
                          <span class="icon-roadmap icon-calendar icon-util me-2"></span>
                          <span class="fw-bold">May</span>
                        </div>
                        <h5 class="text-center text-uppercase font-weight-light">Stage 3</h5>
                        <div class="d-flex justify-content-center">  
                          <img class="img-fluid roadmap-point" src="/roadmap-point.png"/>
                        </div>
                        <div class="roadmap-box p-4">
                          <h4 class="text-center color-accent mb-3 mt-2">
                            Governance Token Launch 
                          </h4>
                          <p>
                            We are going to launch our own Governance Molly Token! The tokenomics of the token will be decided by the community! The token will also be used to purchase clothes from our Merch and Buy Tickets for the upcoming Molly branded trips!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="item mx-md-3">
                      <div>
                        <div class="d-flex justify-content-center align-items-center color-accent">
                          <span class="icon-roadmap icon-calendar icon-util me-2"></span>
                          <span class="fw-bold">May</span>
                        </div>
                        <h5 class="text-center text-uppercase font-weight-light">Stage 4</h5>
                        <div class="d-flex justify-content-center">  
                          <img class="img-fluid roadmap-point" src="/roadmap-point.png"/>
                        </div>
                        <div class="roadmap-box p-4">
                          <h4 class="text-center color-accent mb-3 mt-2">
                            Molly DAO voting

                          </h4>
                          <p>
                            We are going to have our own Molly DAO! More information coming soon!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="item mx-md-3">
                      <div>
                      <div class="d-flex justify-content-center align-items-center color-accent">
                          <span class="icon-roadmap icon-calendar icon-util me-2"></span>
                          <span class="fw-bold">May</span>
                        </div>
                        <h5 class="text-center text-uppercase font-weight-light">Stage 5</h5>
                        <div class="d-flex justify-content-center">  
                          <img class="img-fluid roadmap-point" src="/roadmap-point.png"/>
                        </div>
                        <div class="roadmap-box p-4">
                          <h4 class="text-center color-accent mb-3 mt-2">
                            Dragon Molly Collection by Black Tape Project
                          </h4>
                          <p>
                           The first flagship Molly Drop! The collection is in partnership with one of the best artists worldwide - Joel Alvarez - The black tape project!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="item mx-md-3">
                      <div>
                        <div class="d-flex justify-content-center align-items-center color-accent">
                          <span class="icon-roadmap icon-calendar icon-util me-2"></span>
                          <span class="fw-bold">July</span>
                        </div>
                        <h5 class="text-center text-uppercase font-weight-light">Stage 6</h5>
                        <div class="d-flex justify-content-center">  
                          <img class="img-fluid roadmap-point" src="/roadmap-point.png"/>
                        </div>
                        <div class="roadmap-box p-4">
                          <h4 class="text-center color-accent mb-3 mt-2">
                            Molly High end Fashion Merch Store
                          </h4>
                          <p>
                            Our own high-end-fashion store! Holders can purchase they Molly wear ONLY with the Molly Token!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="item mx-md-3">
                      <div>
                        <div class="d-flex justify-content-center align-items-center color-accent">
                          <span class="icon-roadmap icon-calendar icon-util me-2"></span>
                          <span class="fw-bold">June-July</span>
                        </div>
                        <h5 class="text-center text-uppercase font-weight-light">Stage 7</h5>

                        <div class="d-flex justify-content-center">  
                          <img class="img-fluid roadmap-point" src="/roadmap-point.png"/>
                        </div>
                        <div class="roadmap-box p-4">
                          <h4 class="text-center color-accent mb-3 mt-2">
                            Play & Earn Moly Game
                          </h4>
                          <p>
                            We want to develop our own Molly Branded Play & Earn Game! Gameplay will be determined by the DAO!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="item mx-md-3">
                      <div>
                        <div class="d-flex justify-content-center align-items-center color-accent">
                          <span class="icon-roadmap icon-calendar icon-util me-2"></span>
                          <span class="fw-bold">July-August</span>
                        </div>
                        <h5 class="text-center text-uppercase font-weight-light">Stage 8</h5>

                        <div class="d-flex justify-content-center">  
                          <img class="img-fluid roadmap-point" src="/roadmap-point.png"/>
                        </div>
                        <div class="roadmap-box p-4">
                          <h4 class="text-center color-accent mb-3 mt-2">
                            Cyborg Molly Collection
                          </h4>
                          <p>
                            More info Coming soon!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="item mx-md-3">
                      <div>
                        <div class="d-flex justify-content-center align-items-center color-accent">
                          <span class="icon-roadmap icon-calendar icon-util me-2"></span>
                          <span class="fw-bold">September</span>
                        </div>
                        <h5 class="text-center text-uppercase font-weight-light">Stage 9</h5>

                        <div class="d-flex justify-content-center">  
                          <img class="img-fluid roadmap-point" src="/roadmap-point.png"/>
                        </div>
                        <div class="roadmap-box p-4">
                          <h4 class="text-center color-accent mb-3 mt-2">
                            Molly Villa
                          </h4>
                          <p>
                            Yes, that’s right! We are going to make a collection and with the amount of funds we receive from it to purchase/rent villa in an exotic destination where content creators can go and create content! Something like a tik -tok house! Holders will have access to the events organised in the Villa! Let’s network!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="item mx-md-3">
                      <div>
                        <div class="d-flex justify-content-center align-items-center color-accent">
                          <span class="icon-roadmap icon-calendar icon-util me-2"></span>
                          <span class="fw-bold">December</span>
                        </div>
                        <h5 class="text-center text-uppercase font-weight-light">Stage 10</h5>

                        <div class="d-flex justify-content-center">  
                          <img class="img-fluid roadmap-point" src="/roadmap-point.png"/>
                        </div>
                        <div class="roadmap-box p-4">
                          <h4 class="text-center color-accent mb-3 mt-2">
                            The Metaverse
                          </h4>
                          <p>
                            Purchasing a Molly will create far more utility than a profile picture. All Molly NFTs are anticipated to be fully functional in the Metaverse.
                          </p>
                          <p>
                            Additionally, we plan to buy land in the metaverse to build our digital member space that only holders will have access to.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="team">

      <div class="container-fluid">
        
        <div class="dream-team-bg py-5 mx-3 px-md-5">

          <h2 class="title text-center text-uppercase display-5 fw-bold mb-5">
            The Dream Team
            <span class="title-big">The Dream Team</span>
          </h2>

          <div class="mb-5 mx-1 mx-md-3">

            <h3 class="text-uppercase text-center fw-normal mb-5 pb-5">Founders</h3>

            <div class="row">

              <div class="col-12 col-xl-4 p-5 team-bg">
                <div class="d-flex justify-content-center">
                  <img class="team-img" src='/team/alexander.png'/>
                </div>
                <h5 class="text-center text-uppercase my-4">Alexander aka AAFSHIT</h5>
                <p>Alexander is a traveler videographer working with the biggest events in the world creating content for the business and influencers.</p>
                <p>Alexander have a 15 years of a motion-graphics & 3d animations experience working with the biggest studios in the world and been a part of blockbusters like Star wars & Star trek. His attention to detail, vision and his amazing skills in Sculpting, Modelling, Texturing and Lighting, have given birth to Molly NFT!</p>
              </div>

              <div class="col-12 col-xl-4 p-5">
                <div class="d-flex justify-content-center">
                  <img class="team-img" src='/team/nick.png'/>
                </div>
                <h5 class="text-center text-uppercase my-4">Nick aka Nordz </h5>
                <p>A dreamer who is willing to make the World a better place. Over 4 years of experience in crypto and then in the NFT industry.</p>
                <p>Dedicated to create the largest and strongest alpha group in the NFT world. Pioneer for crypto and NFTs in a couple of countries.Passionate about revolutionising what NFTs represents.</p>
                <p>His moto: "The proper function of man is to live, not to exist. I shall not waste my days in trying to prolong them. I shall use my time.""</p>
              </div>

              <div class="col-12 col-xl-4 p-5 team-bg">
                <div class="d-flex justify-content-center">
                  <img class="team-img" src='/team/george.png'/>
                </div>
                <h5 class="text-center text-uppercase my-4">George</h5>
                <p>A successful entrepreneur, who knows with vast knowledge of how to build a thriving crypto/nft start from scratch! George has huge experience in IT management, blockchain development, token and NFT marketing! He is also very passionate leader who is willing to put in the extra work required to build an outstanding team and community! George believes that there is a lot of potential and undiscovered potential in the crypto/nft space and is to fill in the missing gaps with the technology that his IT team will build!</p>
              </div>

            </div>

          </div>

        </div>

        <div>

          <h3 class="text-uppercase text-center fw-normal">Core Team</h3>
        
          <div class="row team-wrapper">
            
            <div class="col-12 col-md-6 col-lg-4">
              <div class="p-5 h-100">
                <div class="d-flex justify-content-center">
                  <img class="team-img" src="/team/simbiot.png">
                </div>
                <h5 class="text-center text-uppercase mt-3">Simbiot</h5>
                <p class="text-center">Front end developer and designer</p>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="p-5 h-100">
                <div class="d-flex justify-content-center">
                  <img class="team-img" src="/team/kris.png">
                </div>
                <h5 class="text-center text-uppercase mt-3">Kris</h5>
                <p class="text-center">Backend Developer and solidity developer</p>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="p-5 h-100">
                <div class="d-flex justify-content-center">
                  <img class="team-img" src="/team/emmy.png">
                </div>
                <h5 class="text-center text-uppercase mt-3">Emmy aka Catwoman</h5>
                <p class="text-center">Project Manager Assistant </p>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="p-5 h-100">
                <div class="d-flex justify-content-center">
                  <img class="team-img" src="/team/johnny.png">
                </div>
                <h5 class="text-center text-uppercase mt-3">Johnny - Mr. Stark </h5>
                <p class="text-center">Community Manager</p>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
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

      </div>

    </section>

    <footer class="footer pt-5 mt-5">

      <div class="footer-img logo-section mx-auto">
        <img class="mx-auto" src="/logo.png">
      </div>

      <div class="footer-links d-flex align-items-center justify-content-center px-0 pt-3 pb-5">

        <ul class="d-flex align-items-center m-0 ps-0">

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

      </div>

      <div class="text-center py-5">
        <p>Copyright © Molly NFT</p>
      </div>

    </footer>

  </div>
  
</template>

<style scoped>

/* -------------Nabbar-------------- */
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

/* ---------------Vertical navigarion------------- */


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

.cd-vertical-nav a.active {
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
  height: 100vh;
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

.cd-vertical-nav a.active:before, .cd-vertical-nav a:hover:before {
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

  .cd-vertical-nav:hover a.active:hover:before {
    background: rgba(228,152,239,.4);
  }

   .cd-vertical-nav a.active:hover {
    color: rgba(228,152,239,.4);
   }

  .cd-vertical-nav:hover label.active:hover {
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

/* --------------Sections------------------ */


/* --------------About------------------ */

.home-section {
  position: relative;
  margin-inline: auto;
  min-height: 100vh;

  background-image: url('/webpage-vue/cover.png');
  background-position:top center;
  background-repeat: no-repeat;
  background-size: contain;
  border-bottom: 1px solid rgba(228, 152, 239, .4);
}

/* --------------Collection------------------ */

.collection-wrapper {
  position: relative;

  background-image: url('/webpage-vue/team-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 30%;
}

.collection-wrapper::before,
.roadmap-section::before {
  content: "";
  background: linear-gradient(rgba(228, 152, 239, 0), rgba(228, 152, 239, .12));
  width: 100%;
  height: 220px;
  position: absolute;
  left: 0;
  transform: rotate(-180deg);
  top: 0;
}

.collection-wrapper::after {
  content: "";
  background: linear-gradient(rgba(228, 152, 239, 0), rgba(228, 152, 239, .12));
  width: 100%;
  height: 220px;
  position: absolute;
  left: 0;
  bottom: 0;
}

.collection-molly-left {
  margin-left: -9px;
  max-width: 40%;
}

.collection-molly-right {
  margin-right: -9px;
  max-width: 40%;
}

.molly-img {
  max-width: 250px;
}

.badge {
  background: linear-gradient(269.44deg, #c33ede 1.58%, #3d4bd5 100.38%), #000;
  box-shadow: 0 0 10px 2px rgba(228, 152, 239, .4);
  font-weight: 900;
  font-size: 25px;
  line-height: 35px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, .25);
  padding: 5px 20px;
  text-transform: uppercase;
}

.header-title {
  position: absolute;
  bottom: 0;
}


/* --------------Utilities------------------ */

.utilities-wrapper {
  position: relative;
}

.util-bg-img {
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(50%);
  z-index: -10;
}

.utilities-card {
  border: 1px solid var(--clr-purple);
  box-shadow: rgba(228, 152, 239, 0.25) 0px 2px 15px 5px;
}

.utilities-border {
  border-bottom: 1px solid var(--clr-purple);
  border-top: 1px solid var(--clr-purple);
}

.icon-util {
  background: linear-gradient(to right, rgba(195, 32, 217, 1), rgba(105, 91, 231, 1));
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-size: 3rem;
  margin-right: 1rem
}

.about-section  {
  background-image: url('/webpage-vue/unique_nft-bg.png');
  background-repeat: no-repeat;
  background-position: right top;

  position: relative;
}

/* --------------Success------------------ */

.success-section {
  position: relative;
  border-bottom: 1px solid var(--clr-purple);
}

#success .fixed-bg {
  position: relative;
  background-repeat: no-repeat;
  background-size: 22%, 20%,auto;
  background-position: 80.75%, 80%,left;
}

#success #success1 {
  background-image: url('/webpage-vue/success/border.png'), url('/webpage-vue/success/success_1.png'), url('/webpage-vue/success/galaxy_1.png');
}

#success #success2 {
  background-image: url('/webpage-vue/success/border.png'), url('/webpage-vue/success/success_2.png'), url('/webpage-vue/success/galaxy_2.png');
}

#success #success3 {
  background-image: url('/webpage-vue/success/border.png'), url('/webpage-vue/success/success_3.png'), url('/webpage-vue/success/galaxy_3.png');
}

.about-section::before {
  content: "";
  background: linear-gradient(rgba(228, 152, 239, 0), rgba(228, 152, 239, .12));
  width: 100%;
  height: 220px;
  position: absolute;
  left: 0;
  transform: rotate(-180deg);
  top: 0;
}

/* --------------Vision------------------ */

.vision-wrapper {
  position: relative;

  display: grid;
  place-content: center;
}

.vision-wrapper::before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  background-image: url('/webpage-vue/vision/vision-bg.png'), url('/webpage-vue/vision/ellipse-bg.png');
  background-position:top left, top right;
  background-repeat: no-repeat;
  background-size: 60%, 25%;
}

/* --------------Navigation------------------ */

.nav-tabs {
  border: none;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: .5rem 1rem;
}

.nav-tabs .nav-item.active {
  background: none;
  border: none;
  color: #e498ef;
  text-shadow: 0 0 10px #e498ef;
}

.nav-tabs .nav-item {
  font-size: 1.75rem;
  font-weight: 300;
  border: none;
  text-transform: uppercase;
  position: relative;
  color: #fff;
  background: transparent;
}

.nav-tabs .nav-link {
  margin-bottom: -1px;
  border: 1px solid transparent;
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
}

.nav-tabs .nav-item:before {
  content: "";
  display: block;
  position: absolute;
  width: 90px;
  height: 60px;
  left: 48%;
  transform: translate(-50%);
  top: 57%;
  background: url('/webpage-vue/down.svg') no-repeat;
  background-size: 100% auto;
  opacity: 0;
}

.nav-tabs .nav-item.active:before {
  opacity: 1;
}

/* --------------Roadmap------------------ */


.roadmap-section {
  position: relative;
  border-top: 1px solid var(--clr-purple);
}

.icon-roadmap {
  font-size: 1rem;
}

.roadmap {
  position: relative;
}

.roadmap:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  border-top: 1px dashed #e498ef;
  box-shadow: 0 0 10px rgba(228, 152, 239, .4);
  top: 125px;
}

.roadmap-box {
  background: rgba(228, 152, 239, .1);
  position: relative;
  margin-top: 20px;
}

.roadmap-box:before {
  content: "";
  display: block;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translate(-50%);
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid rgba(228, 152, 239, .1);
}

.roadmap .checked {
  font-size: .875rem;
}

.roadmap .roadmap-point {
  width: 100px;
  height: auto;
  z-index: 900;
}

/* --------------Team------------------ */

.team-wrapper {
  background-image: url('/webpage-vue/team-bg.png');
  background-repeat: no-repeat;
  background-position: top center;
  opacity: .7;
}

.dream-team-bg {
  position: relative;
}

.dream-team-bg::before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: .4;
  z-index: -10;
  background-image: url('/webpage-vue/cover.png');
  background-position:top;
  background-repeat: no-repeat;
  background-size: 50%;
}

.team-img {
  border: 2px solid var(--clr-purple);
  border-radius: 50%;
  padding: 2px;
  box-shadow: rgba(228, 152, 239, 0.25) 0px 2px 50px 20px;
}

/* --------------Footer------------------ */

.footer .social-links {
  width: 55px;
  height: 55px;
}

.footer .social-links span {
  font-size: 1.5rem;
}

.footer-img  img{
  width: 136px;
  height: 136px;
}

.footer-links {
  border-bottom: 1px solid rgba(228, 152, 239, .4);
  font-size: 2rem;
}

.team-bg {
  background: rgba(228, 152, 239, .1);
}

@media (min-width: 769px) {
  .links {
    display: flex;
  }

  #success .fixed-bg {
    min-height: 650px;
    padding: 0;
    display: flex;
    align-items: center;
    background-attachment: fixed;
  }
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

  .home-section {
    min-height: 70vh;
  }

  #success .fixed-bg {
    background-position: 91% .5%, 90% 5%, left;
  }
  
}

@media (max-width: 576px) {
  .collection-molly-left {
    margin-left: -20px;
    max-width: 20%;
  }

  .collection-molly-right {
    margin-right: -20px;
    max-width: 20%;
  }

  #success .fixed-bg {
    background-position: center 95%, center 93%, left;
    min-height: 350px;
  }

}

</style>
