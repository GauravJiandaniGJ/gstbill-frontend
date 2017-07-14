<template lang="html">
<div class="companyList">
  <navbar></navbar>
  <div class="main-page">
    <div class="columns is-multiline is-mobile">
      <div class="column is-one-quarter">
        <sidebar></sidebar>
      </div>
      <div class="column">
        <router-view></router-view>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import navbar from '@/components/navbar'
import sidebar from '@/components/sidebar'
export default {
  name: 'companyList',
  components: {
    navbar,
    sidebar
  },
  data () {
    return {

    }
  },
  methods: {
    getToken () {
      var token = window.localStorage.getItem('token')
      if (token != null) {
        return true
      } else {
        this.$router.push('/')
      }
    }
  },
  created () {
    this.getToken()
  }
}
</script>
<style>
html {
  min-height: 100%;
  background: #fafcfd;
}
.main-page {
  margin-top: 1rem;
}
</style>
