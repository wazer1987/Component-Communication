<template>
  <div>
      <h1 style="margin-bottom:20px;" v-if="numbner === 1">
          <slot></slot>
      </h1>
      <h2 style="margin-bottom:20px;" v-else-if="numbner === 2">
          <slot></slot>
      </h2>
      <h3 style="margin-bottom:20px;" v-else-if="numbner === 3">
          <slot></slot>
      </h3>
      <h4 style="margin-bottom:20px;" v-else-if="numbner === 4">
          <slot></slot>
      </h4>
      <h5 style="margin-bottom:20px;" v-else-if="numbner === 5">
          <slot></slot>
      </h5>
  </div>
</template>

<script>
export default {
  props: {
    numbner: {
      type: Number
    }
  }
}
</script>

<style>

</style>
