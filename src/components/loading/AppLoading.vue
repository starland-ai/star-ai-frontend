<template>
  <section class="fixed top-0 bottom-0 left-0 right-0 bg-modal-bg  flex items-center justify-center" style="z-index: 999;">
    <div class="mock text-white text-xl bold">
      <img src="@/assets/images/loading.png" class="loading w-[72px] h-[65px]"/>
      <div class="mt-[24px]">Loading...</div>
    </div>
  </section>
</template>

<style>
.loading {
  animation: spin 3s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); } 
  100% { transform: rotate(360deg); } 
}
.mask {
  width: 100%;
  height: 100%;
}
.main {
  margin: 200px auto;
  text-align: center;
}
</style>
