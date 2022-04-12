<template>
  <div>
    <div class="fake-page">
      <Brand />
      <p>Main content</p>
    </div>

    <div class="fake-page">
      <Brand><div /></Brand>
      <p>Main content</p>
    </div>

    <div class="fake-page">
      <Brand>
        <h3>Custom brand content</h3>
      </Brand>
      <p>Main content</p>
    </div>
  </div>
</template>

<style scoped>
.fake-page {
  padding: 0 0 1rem;
  border: medium solid gray;
  margin-bottom: 1em;
}
.fake-page::after {
  content: "";
  display: block;
  clear: both;
}
</style>
