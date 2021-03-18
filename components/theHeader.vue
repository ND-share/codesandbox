<template>
  <section>
    <div class="container">
      <header>
        <div class="is-flex is-justify-content-flex-end">
          <a @click="$router.push('/')">
            <span class="icon is-large">
              <i class="mdi mdi-24px mdi-home" />
            </span>
          </a>
        </div>
      </header>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 1rem 1.5rem 0;
}
</style>
