<template>
  <div>
    <Controls>
      <ControlsSection>
        <SwitchButton
          :options="['foo', 'bar', 'baz']"
          :selected="value"
          @change="value = $event"
        />
      </ControlsSection>

      <ControlsSection>
        <SwitchButton
          :options="['Yes', 'No']"
          :selected="confirmed"
          @change="confirmed = $event"
        />
      </ControlsSection>
    </Controls>

    <p>Value: {{ value }}</p>
    <p>Confirmed: {{ confirmed }}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: "baz",
    confirmed: null,
  }),
};
</script>
