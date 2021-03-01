<template>
  <div class="wrap column justify-center items-center">
      <p>{{title}}</p>
      <p>{{description}}</p>
  </div>
</template>

<script>
export default {
    props: ["title", "description"],
};
</script>

<style lang="scss" scoped>
.wrap {
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04),
    0px 4px 8px rgba(96, 97, 112, 0.16);
  border-radius: 8px;
  padding:12px 8px;
}
</style>