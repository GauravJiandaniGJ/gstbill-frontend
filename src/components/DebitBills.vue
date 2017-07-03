<template>
<div class="DebitBills">
  <div class="box">
		<h2 class="title header">Debit Bills</h2>
		<hr>
    <div class="tabs is-boxed is-medium">
				<ul class="menu-list">
					<li><router-link :to="{ name: 'FullListDebitBill' }">Full List</router-link></li>
					<li><router-link :to="{ name: '' }">Pending</router-link></li>
					<li><router-link :to="{ name: '' }">New Entry</router-link></li>
					<li><router-link :to="{ name: '' }">Shortcuts</router-link></li>
					<li><router-link :to="{ name: '' }">New Shortcut</router-link></li>
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

  })
}
</script>
<style lang="scss">
</style>
