<template>
  <v-app>
    <v-main>
      <div class="layout-wrap bg-background">
        <div class="sidebar-container">
          <div>
            <div class="branding-container">
              <span class="logo">logo</span>
              <h1 class="name">Crypto Dash</h1>
            </div>

            <v-list lines="one" class="bg-background">
              <v-list-item
                :title="'Dashboard'"
                subtitle="Curated List and Information"
                class="py-4 text-white"
              ></v-list-item>

              <v-list-item
                :title="'All'"
                class="py-4 text-white"
                subtitle="Overview"
              ></v-list-item>

              <v-list-item
                :title="'Account'"
                subtitle="Settings and Auth "
                class="py-4 text-white"
              ></v-list-item>
            </v-list>
          </div>
        </div>
        <div>
          <slot />
          <ComponentContainer>
            <p>footer here</p>
          </ComponentContainer>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>

<style scoped>
.sidebar-container {
  border-right: 1px solid #e0e2ea;
}
.branding-container {
  display: flex;
  align-items: center;

  padding: 0.5rem;
  .logo {
    padding: 5px;
  }

  .name {
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 10px;
  }
}
.nav-container {
  padding: 0.5rem;
}
.layout-wrap {
  display: grid;
  grid-template-columns: 250px 1fr;
}

.v-list-item {
  background: linear-gradient(
    -72.47deg,
    rgb(145, 85, 253) 22.16%,
    rgba(145, 85, 253, 0.7) 76.47%
  );
  border-radius: 0 10px 10px 0;
  margin-bottom: 1rem;
  max-width: 95%;
}
</style>
