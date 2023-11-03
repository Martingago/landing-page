<template>
    <transition name="slide-fade">
        <devInfo v-if="devInfo" :dev-info="devInfo" ></devInfo>
    </transition>
    <!-- <dev-info-skeleton v-else></dev-info-skeleton> -->
</template>

<script setup>
const props = defineProps({
    devInfo: Object
})

</script>
<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  transform: scaleY(0);
  opacity: 0;
}
.slide-fade-enter-to, .slide-fade-leave-from {
  transform: scaleY(1);
  opacity: 1;
}
</style>