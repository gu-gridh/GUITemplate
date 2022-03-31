<template>
  <div>
    <Controls>
      <ControlsSection>
        <Tabs
          :options="['Version 1', 'Version 2', 'Version 3 (beta)']"
          :selected="version"
          @change="version = $event"
        />
      </ControlsSection>

      <ControlsSection>
        <Tabs
          :options="['Edit', 'Preview']"
          :selected="mode"
          @change="mode = $event"
        />
      </ControlsSection>
    </Controls>

    <p>Version: {{ version }}</p>
    <p>Mode: {{ mode }}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    version: "Version 3 (beta)",
    mode: "Edit",
  }),
};
</script>
