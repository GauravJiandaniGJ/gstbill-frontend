<template>
<div class="DebitBills">
  <div class="box">
		<h2 class="title header">Debit Bills</h2>
		<hr>
    <div class="tabs is-boxed is-medium">
				<ul class="menu-list">
					<li><router-link :to="{ name: 'FullListDebitBill' }">Full List</router-link></li>
					<li><router-link :to="{ name: 'NewDebitEntry' }">New Entry</router-link></li>
					<li><router-link :to="{ name: 'PendingDebitBills' }">Pending List</router-link></li>
				</ul>
			</div>

			<router-view></router-view>

  </div>
</div>
</template>
<script>
export default {
  name: 'DebitBills',
  data: () => ({

  }),
  created () {
    this.getToken()
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
<style lang="scss">
</style>
