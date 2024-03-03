

<template>
  <main>

    <Home />
  </main>
</template>

<script>
import { useStore } from "vuex";
import { defineComponent, computed, watch, onMounted, ref } from "vue";
import Home from './components/Home.vue'
export default defineComponent({
  name: "App",
  components: { Home },
  setup(){
    const store = useStore();
  
    onMounted(()=>{
      // localStorage.setItem("grad-color", "main"); 
    });
    return{
      onMounted
    }
  }
})
</script>
<style lang="scss">
@media (min-width: 1024px) {}
</style>
