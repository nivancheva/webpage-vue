<script setup>
// import { ref, onMounted, onUpdated } from "vue";
// const cards = ref('');

//  onMounted(() => {  
//     console.log(cards.value)
//     const cardsWrapper = cards.value.children;
//     console.log(cardsWrapper)

//     for (let i = 0; i < cardsWrapper.length; i++) {
//       if(i % 2 === 0) {
//         console.log('even')
//       }
//       console.log('odd')
//     }
//   });

//   onUpdated(() =>{
//     console.log(cards.value)
//     const cardsWrapper = cards.value.children;
//     console.log(cardsWrapper)

//     for (let i = 0; i < cardsWrapper.length; i++) {
//       if(i % 2 === 0) {
//         console.log('even')
//       }
//       console.log('odd')
//     }
//   });
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

    <section class="colection-wrapper">
      <div class="container-fluid py-5">
        <div class="row align-items-center justify-content-center px-sm-1">
          <div class="col-12 col-xl-6 p-0">
            <div class="row-sm d-flex align-items-center">
              <img class="colection-molly-left" src="/moly_one.png"/>
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
              <img class="colection-molly-right" src="/moly_two.png"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section">
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
              <div>
                <img class="unique-img img-fluid" src="/about/nft1.jpg"/>
              </div>
            </div>
            <div class="item px-2">
              <div>
                <img class="unique-img img-fluid" src="/about/nft2.jpg"/>
              </div>
            </div>
            <div class="item px-2">
              <div>
                <div>
                  <img class="unique-img img-fluid" src="/about/nft3.jpg"/>
                </div>
              </div>
            </div>
            <div class="item px-2">
              <div>
                <img class="unique-img img-fluid" src="/about/nft4.jpg"/>
              </div>
            </div>
            <div class="item px-2">
              <div>
                <img class="unique-img img-fluid" src="/about/nft5.jpg"/>
              </div>
            </div>
            <div class="item px-2">
              <div>
                <img class="unique-img img-fluid" src="/about/nft6.jpg"/>
              </div>
            </div>
            <div class="item px-2">
              <div>
                <img class="unique-img img-fluid" src="/about/nft7.jpg"/>
              </div>
            </div>
            <div class="item px-2">
              <div>
                <img class="unique-img img-fluid" src="/about/nft8.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container-fluid">
        <div class="vision-wrapper">
          <h2 class="title text-center text-uppercase display-5 fw-bold my-5">
            VISION & VALUES
            <span class="title-big">VISION & VALUES</span>
          </h2>

          <div class="row">

            <div class="col-12 col-md-8 col-lg-5 mx-auto mb-5 pb-5 text-center">
              <p class="text-start">We are here to create the difference. We don’t settle for mediocre ART. We are true perfectionists in every aspect of our doings. When we create art, we focus on the detail, as this is what distinguishes GOOD art from WORLDCLASS art! There is no room for error! We give 100% and make the best. Are you ready to join us?</p>
              <p class="text-start">Our vision is to create the largest & most profitable, decentralized community & alpha group of high-end art collectors & artists! </p>
              <a class="btn btn-sm btn-connect mt-5">
                <span class="text-uppercase ps-2">Staking</span>   
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
              <div class="container">
                <div class="row justify-content-center justify-content-md-start">
                  <div class="col-11 col-md-5">
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
              <div class="container">
                <div class="row justify-content-center justify-content-md-start">
                  <div class="col-11 col-md-5">
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
              <div class="container">
                <div class="row justify-content-center justify-content-md-start">
                  <div class="col-11 col-md-5">
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

    <section>
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

    <section>
      <div class="container-fluid">
        <div class="dream-team-bg py-5 mx-3 px-md-5">
          <h2 class="title text-center text-uppercase display-5 fw-bold mb-5">
            The Dream Team
            <span class="title-big">The Dream Team</span>
          </h2>

          <div class="mb-5 mx-1 mx-md-5">
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

.vertical-nav-wrapper {
  background: transparent;
  height: 100vh;
  width: 7rem;
  top: 0;
  right: 0;
  position: fixed;
  z-index: 10;

  display: grid;
  place-content: center;
}

.vertical-nav {
  position: static;
}

.circle:hover {
  color: rgba(228, 152, 239, .4);
}

.first-sec {
  position: relative;
  margin-inline: auto;
  min-height: 100vh;

  background-image: url('/webpage-vue/cover.png');
  background-position:top center;
  background-repeat: no-repeat;
  background-size: contain;
  border-bottom: 1px solid rgba(228, 152, 239, .4);
}

.colection-wrapper {
  position: relative;

  background-image: url('/webpage-vue/team-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 30%;
}

.colection-wrapper::before {
  content: "";
  background: linear-gradient(rgba(228, 152, 239, 0), rgba(228, 152, 239, .12));
  width: 100%;
  height: 220px;
  position: absolute;
  left: 0;
  transform: rotate(-180deg);
  top: 0;
}

.colection-wrapper::after {
  content: "";
  background: linear-gradient(rgba(228, 152, 239, 0), rgba(228, 152, 239, .12));
  width: 100%;
  height: 220px;
  position: absolute;
  left: 0;
  bottom: 0;
}

.colection-molly-left {
  margin-left: -9px;
  max-width: 40%;
}

.colection-molly-right {
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

.title {
    color: var(--clr-purple);
    font-weight: 300;
    position: relative;
}

.title-big {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  font-weight: 900;
  font-size: 100px;
  line-height: 0;
  color: rgba(228, 152, 239, .07);
  width: 100%;
  min-width: 870px;
}

.about-section  {
  background-image: url('/webpage-vue/unique_nft-bg.png');
  background-repeat: no-repeat;
  background-position: right top;

  position: relative;
}

.success-section {
  position: relative;
  border-bottom: 1px solid var(--clr-purple);
}

#success .fixed-bg {
  position: relative;
  background-repeat: no-repeat;
  background-size: auto, 20%;
  background-position: left, 80%;
}

#success #success1 {
  background-image: url('/webpage-vue/success/galaxy_1.png'), url('/webpage-vue/success/success_1.png');
}

#success #success2 {
  background-image: url('/webpage-vue/success/galaxy_2.png'), url('/webpage-vue/success/success_2.png');
}

#success #success3 {
  background-image: url('/webpage-vue/success/galaxy_3.png'), url('/webpage-vue/success/success_3.png');
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

  .first-sec {
    min-height: 70vh;
  }

  
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

@media (max-width: 576px) {
  .colection-molly-left {
    margin-left: -20px;
    max-width: 20%;
  }

  .colection-molly-right {
    margin-right: -20px;
    max-width: 20%;
  }

}

</style>
