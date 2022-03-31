<template>
  <div>
    <Modal :show="showModal" @hide="showModal = false">
      <Container>
        <h3>Background</h3>
        <p>
          Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor
          eget felis porttitor volutpat.
        </p>
      </Container>
    </Modal>
    <ButtonLink icon="info" label="Background" @click="showModal = true" />
  </div>
</template>

<script>
export default {
  data: () => ({
    showModal: false,
  }),
};
</script>
