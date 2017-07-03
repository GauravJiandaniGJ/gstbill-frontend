<template>
<div class="BillSidebar">
  <div class="card company-sidebar">
    <aside class="menu">
      <ul class="menu-list">
        <li>
          <router-link :to="{ name: 'DebitBills' }"> Debit Bills</router-link>
        </li>
        <li>
          <router-link :to="{ name: '' }"> GST Bills </router-link>
        </li>
        <li>
          <router-link :to="{ name: '' }"> Statement </router-link>
        </li>
      </ul>
    </aside>
  </div>
</div>
</template>
<script>
export default {
  name: 'BillSidebar',
  data: () => ({

  })
}
</script>
<style lang="scss">

</style>
