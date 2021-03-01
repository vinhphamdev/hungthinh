<template>
  <q-layout view="hHh Lpr fFf" style="overflow: hidden">
    <q-header
      bordered
      class="qheader row justify-center"
      height-hint="98"
      :class="{ 'navbar--hidden': !showNavbar }"
    >
      <q-toolbar class="toolbar row justify-between items-center">
        <q-img
          src="~assets/logo.png"
          style="width: 268px; height: 68px; cursor: pointer"
          class="kailogo"
          @click="$router.push('/')"
        />
      </q-toolbar>
    </q-header>

    <q-page-container class="page-container row justify-center">
      <div class="wrapper">
        <router-view />
      </div>

      <div class="footer">
        <div class="footer-wrap row justify-between">
          <q-img
            src="~assets/logo.png"
            style="width: 268px; height: 68px; cursor: pointer"
            class="kailogo"
            @click="$router.push('/')"
          />
          <!-- <div>
            <p style="color: white">CONTACT</p>
          </div> -->
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import VueScrollTo from "vue-scrollto";
import Vue from "vue";

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "linear",
  offset: 0,
  force: false,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

export default {
  name: "MainLayout",
  computed: {},
  data() {
    return {
      leftDrawerOpen: false,
      show: false,
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition > 60) {
        this.show = false;
      }
      if (currentScrollPosition < 0) {
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>
<style lang="scss" scoped>
//scroll nav
.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
//end  scroll

.header__nav {
  position: relative;
  display: none;
}
.header__navbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
}
.header__item {
  // padding: 1rem;
}
.header--icon {
  width: 1.65rem;
  height: 1.65rem;
}
.header--button {
  top: 0;
  right: 15px;
  position: absolute;
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: transparent;
}

.btn-close::after {
  position: absolute;
  content: "";
  width: 0px;
  height: 0px;
  border-top: 0px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 19px solid #e6e6e6;
  border-left: 20px solid transparent;
  top: 84%;
  right: -6px;
}
.header--button:focus {
  outline: 0;
}
.dropdown__menu {
  top: 146%;
  right: 0;
  position: absolute;
  z-index: 10;
  width: 91vw;
  margin-top: 1rem;
  overflow-y: auto;
  border: 1px solid var(--color-gray);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(70px);
  border-radius: 5px;
}
.dropdown__menu-link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  padding: 0.8rem 0 0.8rem 0.5rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  color: #000000;
}
.dropdown__menu-link:hover {
  color: #432ad7 !important;
  background: rgba(0, 0, 0, 0.15);
  text-decoration: underline;
}
.dropdown__menu-svg {
  width: 1.5rem;
  height: 1.5rem;
}
.dropdown__menu-text {
  margin-left: 1rem;
  margin-right: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s;
}
.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(31px);
}
.slide-fade-leave-active {
  transform: translateX(-31px);
}
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 1s;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.main {
  margin: 6rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.main__subtitle {
  color: #4f5959;
  font-weight: 100;
  margin-bottom: 2rem;
}
.main__link {
  margin-right: 1.5rem;
  display: inline-block;
}
.main__link:last-child {
  margin-right: 0;
}
.main__svg {
  width: 2rem;
  height: 2rem;
  opacity: 0.6;
  color: #94a2b0;
}
.main__svg:hover {
  color: #ffad1f;
}

////////////////////////////
.footer {
  max-width: 1920px;
  width: 84%;
  height: 187px;
  background: black;
}

.footer-wrap {
  padding: 71px 117px;
}

.menu {
  color: black;
  list-style: none;
}

.menu > li {
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  margin-right: 60px;
}

.menu > li:last-child {
  margin-right: 0;
}

.menu > li > a {
  text-decoration: none;
  color: #000000;
}

.menu > li > a:hover {
  text-decoration: underline;
  color: #432ad7;
}

.wrapper {
  background-color: $white;
  max-width: 1920px;
  width: 84%;
  z-index: 99;
}
.qheader {
  background-color: white !important;
  border: none;
  z-index: 999;
  transition: 0.1s all ease-out;
}

.toolbar {
  height: 100%;
  position: relative;
  max-width: 1920px;
  width: 84%;
  padding: 0;
  border-bottom: 2px solid #000000;

  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}

// mobile screen
@media screen and (max-width: 740px) {
  .wrapper {
    width: 100%;
    padding: 0px 20px;
  }

  .kailogo {
    height: 46px !important;
  }

  .footer {
    height: 130px;
  }

  .footer-wrap {
    padding: 45px 23px;
  }

  .menu {
    display: none;
  }

  .header__nav {
    display: block;
  }
}

// mobile screen & tablet screen
@media screen and (max-width: 1024px) {
  .wrapper {
    margin-top: 0px;
  }

  .toolbar {
    padding: 14px 0px 14px 14px;
  }
}

// tablet screen
@media screen and (min-width: 740px) and (max-width: 1024px) {
  .wrapper {
    padding: 8px 31px 122px 31px;
  }
}

// end tablet
</style>
