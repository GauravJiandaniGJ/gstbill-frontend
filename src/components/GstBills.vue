<template>
  <div class="GstBills">
    <div class="box">
      <h2 class="title header">GST Bills</h2>
      <hr>
      <div class="tabs is-boxed is-medium">
          <ul class="menu-list">
            <li><router-link :to="{ name: 'FullListBill' }">Full List</router-link></li>
            <li><router-link :to="{ name: 'NewGstEntry' }">New Entry</router-link></li>
            <li><router-link :to="{ name: 'PendingGstBills' }">Pending List</router-link></li>
          </ul>
        </div>

        <router-view></router-view>

    </div>
  </div>
</template>
<script>
export default {
  name: 'GstBills',
  data: () => ({

  })
}
</script>
<style lang="scss">
</style>
