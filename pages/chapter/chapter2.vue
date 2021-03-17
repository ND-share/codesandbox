<template>
  <section class="section">
    <div class="container">
      <h1>{{ title }}</h1>
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
        <div class="columns is-multiline">
          <div class="column is-6">
            <dl>
              <dt>v-if</dt>
              <dd>
                v-bindディレクティブとv-onディレクティブを利用した基礎的な記法です。<br />
                *基本的な記法ですが、ディレクティブは短縮記法が推奨されています。
              </dd>
            </dl>
            <button class="button is-info" @click="chagngeIf()">ボタン</button>
            <p v-if="isIf" class="mt-2">結果: v-if={{ isIf }}</p>
            <p v-else class="mt-2">結果: v-if={{ isIf }}</p>
          </div>
          <div class="column is-6">
            <dl>
              <dt>v-for</dt>
              <dd>
                v-bindディレクティブとv-onディレクティブを利用した基礎的な記法です。<br />
                *基本的な記法ですが、ディレクティブは短縮記法が推奨されています。
              </dd>
            </dl>
            <ul>
              <p class="mt-2">結果:</p>
              <li v-for="vfor in vfors" :key="vfor.test">{{ vfor.test }}</li>
            </ul>
          </div>
          <div class="column is-6">
            <dl>
              <dt>computed</dt>
              <dd>
                v-bindディレクティブとv-onディレクティブを利用した基礎的な記法です。<br />
                *基本的な記法ですが、ディレクティブは短縮記法が推奨されています。
              </dd>
            </dl>
            <p>Original message: "{{ message }}"</p>
            <p class="mt-2">
              結果: Computed reversed message: "{{ reversedMessage }}"
            </p>
          </div>
          <div class="column is-6">
            <dl>
              <dt>$refs</dt>
              <dd>
                v-bindディレクティブとv-onディレクティブを利用した基礎的な記法です。<br />
                *基本的な記法ですが、ディレクティブは短縮記法が推奨されています。
              </dd>
            </dl>
            <input
              type="text"
              v-bind:value="bindMessage"
              placeholder="入力"
              v-on:input="bindMessage = $event.target.value"
            />
            <p class="mt-2">結果: {{ bindMessage }}</p>
          </div>
          <div class="column is-6">
            <dl>
              <dt>$nextTick</dt>
              <dd>
                v-bindディレクティブとv-onディレクティブを利用した基礎的な記法です。<br />
                *基本的な記法ですが、ディレクティブは短縮記法が推奨されています。
              </dd>
            </dl>
            <input
              type="text"
              v-bind:value="bindMessage"
              placeholder="入力"
              v-on:input="bindMessage = $event.target.value"
            />
            <p class="mt-2">結果: {{ bindMessage }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isIf: false,
      bindMessage: 'bindMessage',
      vfors: [
        { test: 'test' },
        { test: 'test1' },
        { test: 'test2' },
        { test: 'test3' },
        { test: 'test4' },
        { test: 'test5' },
        { test: 'test6' },
      ],
      message: 'Hello',
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
    },
    title() {
      return 'Chpater2 イベントハンドリング'
    },
  },
  methods: {
    chagngeIf() {
      this.isIf = !this.isIf
    },
  },
}
</script>
