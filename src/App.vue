<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import AppHeader from "@/layout/AppHeader.vue";

import AppLoading from "@/components/loading/AppLoading.vue";
import { useRoute } from "vue-router";

const store = useStore();
const loading = computed(() => store.state.loading);
const route = useRoute()

const showFooter = ref(true)

if(route.path === '/doc') {
  showFooter.value = false
}else {
  showFooter.value = true
}
</script>

<template>
  <div>
    <AppHeader />
    <main class="w-full min-h-screen bg-black pt-15" style="paddingTop: 60px;">
      <router-view />
    </main>
    <AppLoading v-if="loading" />
  </div>
</template>

<style scoped lang="less">
#app-body {
}
*{
  font-family: Inter var;
}
.bg-black{
  background-color: #08091B;
  background-image: url('@/assets/images/background5.png'), url('image2.jpg');
  background-position: center top, right bottom; 
  background-repeat: repeat, repeat; 
  background-size: cover, auto; 
}

</style>
