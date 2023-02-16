<template>
  <div class="goTop"><a href="#" @click.prevent="goTop">TOP</a></div>
  <div class="main">
    <nav>
      <div class="container">
        <h1>
          <router-link to="/" class="logo"> 京式會社 </router-link>
          <span>日本服飾、雜貨代購</span>
        </h1>
        <div class="nav-link">
          <router-link to="/products">所有商品</router-link>
          <router-link to="/products">購買須知</router-link>
          <router-link to="/products">登入</router-link>
          <router-link to="/cart">購物車</router-link>
        </div>
        <div class="navList">
          <a href="#">
            <i class="bi bi-list"></i>
          </a>
        </div>
      </div>
    </nav>
    <ToastMessage></ToastMessage>
    <router-view />
  </div>
  <footer>
    <div class="container">
      <div class="footerLogo">
        <h2>京式會社</h2>
        <p>版權所有 Copyright © 2022 All Rights Reserved.</p>
        <p>僅作為vue3練習，無任何商業用途 | 圖片來源：GRL (https://www.grail.bz/) <br>
          Just for practise vue3. Non-commercial | images by GRL website</p>
      </div>
      <div class="footerInfo">
        <p>客服信箱 : melody804210@gmail.com</p>
        <p>客服時間:周一至周五 12:00~18:00</p>
      </div>
    </div>
  </footer>
</template>
<script>
import emitter from '@/methods/emitter'
import ToastMessage from '@/components/ToastMessages.vue'

export default {
  provide () {
    return {
      emitter
    }
  },
  components: {
    ToastMessage
  },
  methods: {
    goTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>
<style lang="scss">
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css');
@import './assets/all.scss';
html, body {
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
  display: flex; /*使物件依序排列*/
  flex-direction: column; /*使物件垂直排列*/
}
.goTop {
  a {
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-radius: 30px;
    border: 2px solid #4a593d;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 20;
    color: #4a593d;
    transition: all .5s;
    background: rgba(255,255,255,.5);
    &:hover {
      background: #4a593d;
      color: #fff;
    }
  }
}
.main {
  flex-grow: 1;
  position: relative;
}
nav {
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 31px 0;
  .container {
    display: flex;
    align-items: center;
  }
  h1 {
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: 12px;
    a {
      margin-right: 12px;
    }
    span {
      font-size: 14px;
      position: relative;
      &::before {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: #838a2d;
        position: absolute;
        top: 18px;
      }
    }
  }
  .logo {
    display: block;
    width: 140px;
    height: 37px;
    background: url('../img/jingShopLogo.png') no-repeat;
    text-indent: 101%; /*首行縮排*/
    overflow: hidden; /*自動隱藏超出的文字或圖片*/
    white-space: nowrap; /*希望元素在第一排上面，沒有斷行*/
  }
  .nav-link {
    display: flex;
    align-items: center;
    a {
      color: #000;
      padding: 0 12px;
      position: relative;
      &::before {
        content: '';
        display: block;
        height: 2px;
        background: transparent;
        position: absolute;
        top: 20px;
        left: 50%;
        right: 50%;
        transition: all 0.5s;
      }
      &:hover {
        color: #4a593d;
      }
      &:hover::before {
        background: #838a2d;
        left: 0;
        right: 0;
      }
    }
  }
  .navList {
    display: none;
  }
}
footer {
  background: #D0D3C9;
  color: #4a593d;
  padding: 12px;
  line-height: 1.5;
  margin-top: 60px;
  .container {
    display: flex;
    align-items: center;
  }
  .footerLogo {
    margin-right: auto;
  }
}
@media screen and (max-width: 576px) {
  nav {
    padding: 25px 0;
    .logo {
      width: 90px;
      height: 24px;
      background-size: cover;
    }
    .nav-link {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100px;
      left: 0;
      right: 0;
      padding: 16px;
      background: rgba(255,255,255,.7);
      a {
        padding: 16px;
        &::before {
        top: 36px;
      }
      }
    }
    .navList {
      display: block;
      font-size: 48px;
      margin-right: 12px;
      a {
        color: #838a2d;
      }
    }
  }
  footer {
  background: #D0D3C9;
  padding: 12px;
  font-size: 13px;
  .container {
    flex-direction: column;
    align-items: flex-start;
  }
  .footerLogo {
    margin-right: 0;
  }
}
}
</style>

<script></script>
