<template>
  <Pane>
    <PaneContent title="Pane title">
      <p>Some content.</p>
    </PaneContent>

    <PaneContent>
      <template v-slot:title>
        Pane title <em>with</em> <strong>HTML</strong>
      </template>
      <p>Some content.</p>
    </PaneContent>

    Some unpadded content.
  </Pane>
</template>
