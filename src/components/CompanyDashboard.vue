<template>
<div id="CompanyDashboard">
  <CompanyDashboardNavbar></CompanyDashboardNavbar>
  <div class="CompanyDashboard">

    <div class="box placement-page">

      <h2 class="title header">Financial Year</h2>
      <div class="main-textbox">
        <div class="field has-addons">
          <p class="control is-fullwidth">
            <input v-validate="'required'" name="financialYear" v-model="financialYear" class="input input-box" type="text" placeholder="Create New Financial Year" @keyup.enter="createSeason">
          </p>
          <p class="control">
            <a class="button is-success" @click="createFinancialYear()"> Create </a>
          </p>
        </div>
        <!-- <div class="help is-danger" v-show="errors.has('season')">
          {{errors.first('season')}}
        </div> -->
      </div>


      <!-- tabs starts -->
      <div class="tabs">
        <ul>
          <li>
          </li>
        </ul>
      </div>
      <!-- tabs ends -->
        <div class="columns is-multiline">

          <div class="column is-one-third" v-for="year in years">
            <div class="card">
              <div class="card-header">
                <p class="card-header-title">
                  {{year.title}}
                </p>
              </div>
              <footer class="card-footer">
                <router-link :to="{ name: 'FinancialYearDashboard', params: { cid: cid, yid: year.id}}" class="card-footer-item">View</router-link>
              </footer>
            </div>
          </div>

        </div>

      <router-view></router-view>
    </div>

  </div>
</div>
</template>
<script>
import CompanyDashboardNavbar from '@/components/CompanyDashboardNavbar'
import axios from 'axios'
export default {
  name: 'CompanyDashboard',
  components: {
    CompanyDashboardNavbar
  },
  data: () => ({
    years: [],
    financialYear: '',
    cid: null
  }),
  created () {
    this.getToken()
    this.cid = this.$route.params.cid
    this.getFinancialYears()
  },
  methods: {
    createFinancialYear () {
      axios.post(`http://localhost:8000/api/company/` + this.cid + `/year/createFinancialYear`, {
        title: this.financialYear
      })
       .then(response => {
          // JSON responses are automatically parsed.
         this.getFinancialYears()
         this.financialYear = ''
       })
        .catch(e => {
          this.errors.push(e)
        })
    },
    getToken () {
      var token = window.localStorage.getItem('token')
      if (token != null) {
        return true
      } else {
        this.$router.push('/')
      }
    },
    getFinancialYears () {
      axios.get(`http://localhost:8000/api/company/` + this.cid + `/year/dashboard`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.years = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
<style lang="scss">
.CompanyDashboard {

    .box.placement-page {
        padding-top: 1rem;
    }

    .title.header {
        padding-top: 0;
        border-bottom: solid 1px #ddd;
        padding-bottom: 1rem;
    }

    .placement-season {
        margin-top: 1rem;
    }

    .field.has-addons {
        justify-content: center;
        padding-bottom: 1.5rem;
    }

    .status {
        margin-right: 1.5rem;
    }

    .input-box {
        width: 890px;
    }

    .column.is-one-third {
        padding-left: 40px;
        padding-right: 40px;

    }

    .main-textbox {
      display: flex;
      justify-content: center;

    }

    #email {
      margin: auto;
      max-width: 50rem;
    }

}
</style>
