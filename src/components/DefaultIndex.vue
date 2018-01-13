<template>
<div class="home">
  <router-view></router-view>
  <public-footer></public-footer>
</div>
</template>
<script>
import PublicFooter from './Footer.vue'
export default {
  components: {
    PublicFooter
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
 .home {
  width: 100%;
  height: 100%;
 }
</style>
