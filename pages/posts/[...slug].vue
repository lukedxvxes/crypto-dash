<script setup lang="ts">
definePageMeta({
  layout: 'post-layout',
});
</script>

<template>
  <main class="post-page">
    <content-doc />
  </main>
</template>

<style scoped lang="scss">
@import '@/styles/settings.scss';
// Variables

// Base Styles
// main {
//   margin: 0;
//   padding: 0;
//   border-radius: 5px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   padding: 20px;
//   margin-bottom: 20px;
//   color: rgb(var(-v-theme-text));
// }

.nuxt-content {
  @each $name, $style in $typography {
    #{$name} {
      @each $prop, $val in $style {
        $propname: if(
          $prop==weight,
          'font-weight',
          if($prop==size, 'font-size', $prop)
        );
        #{$propname}: #{$val};
      }
    }
  }
}
</style>
