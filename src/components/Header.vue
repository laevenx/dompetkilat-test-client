<template>
  <span>
    <img src="../assets/banner.png" style="width: 60%" /><hr/>
    <b-button v-if="token != null"  @click="logout">Logout</b-button>
  </span>
</template>
<script>
import router from '../router';
export default {
  name: "Header",
  props: {},
  methods: {
      logout(){
          localStorage.removeItem('token')
          router.push('/login')
      }
  },
  computed: {
      token(){
          return localStorage.getItem('token')
      }
  }
};
</script>

<style scoped>
</style>