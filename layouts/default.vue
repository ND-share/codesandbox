<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="home navbar-item has-text-black" @click="$router.push('/')">
            <span class="icon mr-1">
              <i class="mdi mdi-home mdi-24px"></i>
            </span>
            Home</a
          >
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Chapter </a>
            <div class="navbar-dropdown">
              <a
                v-for="chapter in chapters"
                :key="chapter.id"
                class="navbar-item"
                @click="$router.push(chapter.link)"
              >
                chapter{{ chapter.id }}
              </a>
              <hr class="navbar-divider" />
              <a class="navbar-item" @click="$router.push('/examples/api')">
                番外編
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chapters: [
        { id: 1, link: '/chapter/chapter1' },
        { id: 2, link: '/chapter/chapter2' },
      ],
    }
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.navbar {
  padding-left: 30px;
  padding-right: 30px;
}
</style>
