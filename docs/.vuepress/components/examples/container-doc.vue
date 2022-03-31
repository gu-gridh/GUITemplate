<template>
  <div>
    <header>Content outside container</header>
    <Container>
      <header>Content inside container</header>
    </Container>
  </div>
</template>

<style scoped>
header {
  height: 3em;
  border: medium dashed #999;
}
</style>
