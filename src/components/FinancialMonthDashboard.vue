<template>
  <div class="FinancialMonthDashboard">
    <CompanyDashboardNavbar></CompanyDashboardNavbar>
    <div class="main-page">
      <div class="columns is-multiline is-mobile">
        <div class="column is-one-quarter">
          <BillSidebar></BillSidebar>
        </div>
        <div class="column">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CompanyDashboardNavbar from '@/components/CompanyDashboardNavbar'
import BillSidebar from '@/components/BillSidebar'
export default {
  name: 'FinancialMonthDashboard',
  components: {
    CompanyDashboardNavbar,
    BillSidebar
  },
  data: () => ({
    cid: null,
    yid: null,
    mid: null
  }),
  created () {
    this.cid = this.$route.params.cid
    this.yid = this.$route.params.yid
    this.mid = this.$route.params.mid
  }
}
</script>
<style lang="scss">

html {
  min-height: 100%;
  background: #fafcfd;
}
.main-page {
  margin-top: 1rem;
}
</style>
