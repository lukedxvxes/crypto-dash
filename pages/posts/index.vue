<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

const { data: postList } = useAsyncData('postList', () => {
  return queryContent('/posts').find();
});
</script>

<template>
  <div class="posts">
    <v-card v-for="post in postList" :key="post._path" class="pa-2">
      <v-card-title class="font-weight-bold pb-0">{{
        post.title
      }}</v-card-title>
      <v-card-subtitle class="mb-4">
        <span>10/12/2023</span> |
        <span>Luke Davies</span>
      </v-card-subtitle>
      <v-card-text>
        {{ post.description }}
      </v-card-text>
      <v-card-actions>
        <NuxtLink :to="`${post._path}`">
          <v-btn size="small" variant="elevated" class="bg-primary"
            >Read More</v-btn
          ></NuxtLink
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped lang="scss">
.posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: 1em;
}
</style>
