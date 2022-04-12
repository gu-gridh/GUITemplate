<template>
  <div>
    <Row>
      <CdhLogo />
      Default size is relative to body font size.
    </Row>

    <Row>
      <CdhLogo style="font-size: 1.2rem" />
      Here, the logo font size is set directly to slightly larger than the body
      font.
    </Row>

    <Row style="font-size: 1.2rem">
      <CdhLogo />
      Here, the parent element has a larger font size.
    </Row>
  </div>
</template>
