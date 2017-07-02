<template>
  <div id="Users">
<div class="box">
  <div class="company-wise head">
			<h2 class="title">Users Listing</h2>
		</div>

		<div class="companywise-body">
			<div class="one-company">
				<!-- v-for="company in companies" -->
				<input type="hidden">
				<span class="text title is-4">Company Name</span>
				<a class="button is-success is-outlined a-tag login">Remove</a>
			</div>
		</div>
</div>
  </div>
</template>
<script>
export default {
  name: 'Users',
  data: () => ({

  })
}
</script>
<style lang="scss">
</style>
