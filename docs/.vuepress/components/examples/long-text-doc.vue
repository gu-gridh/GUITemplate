<template>
  <div>
    <Row>
      Container width:
      <label v-for="width in widths" :key="width">
        <input type="radio" v-model="widthSelected" :value="width" />
        {{ width }}
      </label>
    </Row>
    <Row>
      Mode:
      <label v-for="mode in modes" :key="mode">
        <input type="radio" v-model="modeSelected" :value="mode" />
        {{ mode }}
      </label>
    </Row>

    <Row :style="{ width: widthSelected }">
      <LongText :mode="modeSelected">
        <p>
          Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit
          amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh.
          Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet
          quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id
          dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.
          Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor
          volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id
          enim.
        </p>
        <p>
          Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
          pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan
          tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat.
          Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
          neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
        </p>
        <p>
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
          ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada.
        </p>
      </LongText>
    </Row>
  </div>
</template>

<script>
export default {
  data: () => ({
    widths: ["2000px", "1000px", "800px", "600px", "300px"],
    widthSelected: "",
    modes: ["margin", "indent"],
    modeSelected: "",
  }),
};
</script>
