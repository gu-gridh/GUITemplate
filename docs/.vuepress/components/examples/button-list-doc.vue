<template>
  <div>
    <Row>
      <ButtonList>
        <ButtonLink icon="download" label="Foo" />
        <ButtonLink icon="link" label="Bar" />
      </ButtonList>
    </Row>
    <Row>
      <ButtonList>
        <a href="#works-with-links-too">
          <ButtonLink icon="download" label="A short label" />
        </a>
        <ButtonLink
          icon="link"
          label="A pretty long label, in fact much longer"
        />
      </ButtonList>
    </Row>
  </div>
</template>
