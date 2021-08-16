<template>
  <section class="section pt-1">
    <div class="container">
      <div class="is-flex">
        <h1>{{ title }}</h1>
      </div>
      <hr />
      <article class="mb-5">
        <h2>研修</h2>
        <div class="columns mt-1">
          <div class="column is-12">
            <ul>
              <li v-for="tutorial in tutorialList" :key="tutorial.id">
                <nuxt-link :to="{ name: tutorial.link }">{{
                  tutorial.text
                }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <article class="mb-5">
        <h2>番外編</h2>
        <div class="columns mt-1">
          <div class="column is-12">
            <ul>
              <li v-for="another in anotherList" :key="another.index">
                <router-link :to="{ name: another.link }">{{
                  another.text
                }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    title() {
      return 'TOP'
    },
    tutorialList() {
      return [
        {
          id: 1,
          text: 'Chapter1',
          link: 'traning-chapter1',
        },
        {
          id: 2,
          text: 'Chapter2',
          link: 'traning-chapter2',
        },
        {
          id: 3,
          text: 'Chapter3',
          link: 'traning-chapter3',
        },
        {
          id: 4,
          text: 'Chapter4-1',
          link: 'traning-chapter4-1',
        },
        // {
        //   id: 5,
        //   text: 'Chapter4-2',
        //   link: 'traning-chapter4-2',
        // },
      ]
    },
    anotherList() {
      return [
        {
          text: 'API 呼出検証',
          link: 'examples-api',
        },
      ]
    },
  },
}
</script>
