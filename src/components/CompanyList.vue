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
            <router-link :to="{ name: 'Details'}" class="card-footer-item">Enter</router-link>
          </footer>
        </div>
      </div>

      <div class="column is-one-third">
        <div class="card">
          <div class="card-header">
            <p class="card-header-title">
              Temporary
            </p>
            <span>
                <span class="tag is-success">Tem</span>
            </span>
          </div>
          <div class="card-content">
            <div class="content">
              State:Temporary&nbsp;<b></b><br> GST:Temporary&nbsp;
              <b></b>
            </div>
          </div>
          <footer class="card-footer">
            <router-link :to="{ name: 'CompanyDashboard'}" class="card-footer-item">Enter</router-link>
          </footer>
        </div>
      </div>


    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'CompanyList',
  data: () => ({
    data: []
  }),
  created () {
    axios.get(`http://localhost:8000/api/company/dashboard`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.data = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
<style lang="css">
</style>
