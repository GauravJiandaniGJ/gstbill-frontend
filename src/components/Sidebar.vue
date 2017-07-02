<template>
<div class="sidebar">
<div class="card company-sidebar">
    <aside class="menu">
      <ul class="menu-list">
        <li><router-link :to="{ name: 'CompanyList' }"> Company List</router-link></li>
        <!-- <li><router-link :to="{ name: 'select-category' }">Step 2: Select Category</router-link></li>
        <li><router-link :to="{ name: 'select-round-details' }">Step 3: Select Round Details</router-link></li>
        <li><router-link :to="{ name: 'placement-criteria' }">Step 4: Placement Criteria</router-link></li> -->

        <li><a>New Company</a></li>
        <li><a>Users List</a></li>
        <li><a>HOME</a></li>
      </ul>
    </aside>
  </div>
</div>
</template>
<script>
export default {
  name: 'sidebar'
}
</script>
<style>
</style>
