<template>
  <div id="FinancialYearDashboard">
    <CompanyDashboardNavbar></CompanyDashboardNavbar>
    <div class="FinancialYearDashboard">

      <div class="box placement-page">

        <h2 class="title header">Financial Month</h2>
        <div>
          <div class="field has-addons title">
            <p class="control is-fullwidth">
              <input v-validate="'required'" name="financialYear" v-model="title" class="input input-box" type="text" placeholder="New Financial Month" @keyup.enter="createSeason">
            </p>
            <p class="control">
              <a class="button is-success" @click="addFinancialMonth()"> Create </a>
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

            <div class="column is-one-third" v-for="month in months">
              <div class="card">
                <div class="card-header">
                  <p class="card-header-title">
                    {{month.title}}
                  </p>
                </div>
                <footer class="card-footer">
                  <router-link :to="{ name: 'FinancialMonthDashboard', params: {cid: cid, yid: yid, mid: month.id}}" class="card-footer-item">View</router-link>
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
import HTTP from '@/packages/HTTP'
export default {
  name: 'FinancialYearDashboard',
  components: {
    CompanyDashboardNavbar
  },
  data: () => ({
    cid: null,
    yid: null,
    months: [],
    title: ''
  }),
  created () {
    this.getToken()
    this.cid = this.$route.params.cid
    this.yid = this.$route.params.yid
    this.getFinancialMonths()
  },
  methods: {
    addFinancialMonth () {
      HTTP.post(`year/` + this.yid + `/createFinancialMonth/`, {
        title: this.title
      })
        .then(response => {
          this.title = ''
          this.getFinancialMonths()
        })
        .catch((e) => {
          console.log(e)
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
    getFinancialMonths () {
      HTTP.get(`year/` + this.yid + `/dashboard`)
        .then(response => {
          this.months = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
<style lang="scss">
.FinancialYearDashboard {

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
        width: 100%;
    }

    .column.is-one-third {
        padding-left: 40px;
        padding-right: 40px;

    }

}
</style>
