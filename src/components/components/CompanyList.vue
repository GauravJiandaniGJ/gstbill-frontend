<template>
<div id="companyList">
  <div class="box">
    <div class="columns is-multiline">

      <!-- 1/3 col -->
      <div class="column is-one-third" v-for="single in data">
        <div class="card">
          <div class="card-header">
            <p class="card-header-title">
              {{single.name}}
            </p>
            <span>
                <span class="tag is-success">{{single.short_name}}</span>
            </span>
          </div>
          <div class="card-content">
            <div class="content">
              State:{{single.state}}&nbsp;<b></b><br> GST:{{single.gstin}}&nbsp;
              <b></b>
            </div>
          </div>
          <footer class="card-footer">
            <!-- {{single.id}} -->
            <router-link :to="{ name: 'CompanyDashboard', params: { cid: single.id }}" class="card-footer-item">Enter</router-link>
          </footer>
        </div>
      </div>

    </div>
  </div>
</div>
</template>
<script>
import HTTP from '@/packages/HTTP'
export default {
  name: 'CompanyList',
  data: () => ({
    data: []
  }),
  created () {
    this.getToken()
    HTTP.get(`company/dashboard`)
      .then(response => {
        this.data = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
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
  }
}
</script>
<style lang="css">
</style>
