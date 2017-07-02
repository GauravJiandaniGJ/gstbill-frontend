<template>
<div id="CompanyDashboard">
  <CompanyDashboardNavbar></CompanyDashboardNavbar>
  <div class="CompanyDashboard">

    <div class="box placement-page">
      
      <h2 class="title header">Financial Year</h2>
      <div>
        <div class="field has-addons title">
          <p class="control is-fullwidth">
            <input v-validate="'required'" name="financialYear" class="input input-box" type="text" placeholder="Create New Financial Year" @keyup.enter="createSeason">
          </p>
          <p class="control">
            <a class="button is-success"> Create </a>
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

          <div class="column is-one-third">
            <div class="card">
              <div class="card-header">
                <p class="card-header-title">
                  Financial Year 2017-18
                </p>
              </div>
              <footer class="card-footer">
                <router-link :to="{ name: ''}" class="card-footer-item">View</router-link>
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
export default {
  name: 'CompanyDashboard',
  components: {
    CompanyDashboardNavbar
  },
  data: () => ({

  })
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

}
</style>
