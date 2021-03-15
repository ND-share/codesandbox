<template>
  <section class="section">
    <div class="container">
      <a @click="$router.push('/')">Home</a>
      <a @click="$router.push('/chapter/chapter1')">chapter1</a>
      <a @click="$router.push('/examples/api')">このサイトについて</a>
      <h1>Chapter2 イベントハンドリング</h1>
      <hr />
      <article>
        <h2>フォーム入力</h2>
        <div class="columns">
          <div class="column is-12">
            <ul>
              <li>v-if</li>
              <li>v-for</li>
              <li>computed</li>
              <li>$refs</li>
              <li>$nextTick</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
