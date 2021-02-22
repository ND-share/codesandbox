<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">codesandbox</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>

        <!-- v-model(v-on,v-bind) -->
        <p>v-on,v-bindを使用した場合</p>
        <input
          v-bind:value="bindMessage"
          placeholder="edit me"
          v-on:input="bindMessage = $event.target.value"
        />
        <p>Message is: {{ bindMessage }}</p>

        <br />

        <!-- v-model(v-on,v-bindを省略して使用) -->
        <p>v-on,v-bindを省略して使用した場合</p>
        <input
          :value="omittedMessage"
          placeholder="edit me"
          @input="omittedMessage = $event.target.value"
        />
        <p>Message is: {{ omittedMessage }}</p>

        <br />

        <!-- v-model -->
        <p>v-modelを使用した場合</p>
        <input v-model="modelMessage" placeholder="edit me" />
        <p>Message is: {{ modelMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelMessage: '',
      omittedMessage: '',
      bindMessage: '',
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
