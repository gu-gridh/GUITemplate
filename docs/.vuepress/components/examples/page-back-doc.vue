<template>
  <div style="padding:0;">
    <Container>
      <PageBack />
      <h2>Lorem ipsum</h2>
      <p>Click arrow to go back in browser history</p>
    </Container>

    <Container>
      <PageBack to="/about" />
      <h2>Lorem ipsum</h2>
      <p>Click arrow to go to route <code>/about</code></p>
    </Container>

    <Container>
      <PageBack href="https://google.com/" />
      <h2>Lorem ipsum</h2>
      <p>Click arrow to go to URL <code>https://google.com/</code></p>
    </Container>
  </div>
</template>
