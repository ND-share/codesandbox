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
                <a @click="$router.push(tutorial.link)">{{ tutorial.text }}</a>
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
                <a @click="$router.push(another.link)">{{ another.text }}</a>
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
          link: '/traning/chapter1',
        },
        {
          id: 2,
          text: 'Chapter2',
          link: '/traning/chapter2',
        },
      ]
    },
    anotherList() {
      return [
        {
          text: 'API 呼出検証',
          link: '/examples/api',
        },
      ]
    },
  },
}
</script>
