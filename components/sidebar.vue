<template>
  <v-card class="my-4 ml-4">
    <di class="sticky-wrapper">
      <div class="branding-container">
        <h1 class="name text-primary">Crypto Dash</h1>
      </div>

      <v-list lines="one" class="">
        <div>
          <NuxtLink :to="`/`">
            <v-list-item
              title="Dashboard"
              subtitle="Curated List and Information"
              class="py-4"
            ></v-list-item>
          </NuxtLink>
          <NuxtLink :to="`/posts`">
            <v-list-item
              title="Posts"
              subtitle="Latest and Greatest"
              class="py-4"
            ></v-list-item>
          </NuxtLink>
        </div>
        <div>
          <NuxtLink :to="`/account`" class="account-link">
            <v-list-item
              title="Account"
              subtitle="Settings and Auth"
              class="py-4"
            ></v-list-item>
          </NuxtLink>
        </div>
      </v-list>
    </di>
  </v-card>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.sticky-wrapper {
  position: sticky;
  top: 0;
}
.branding-container {
  display: flex;
  align-items: center;

  padding: 1rem 0.5rem;
  .logo {
    padding: 5px;
  }

  .name {
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 10px;
  }
}
</style>
