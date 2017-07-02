<template>
<div class="sidebar">
<div class="card company-sidebar">
    <aside class="menu">
      <ul class="menu-list">
        <li><router-link :to="{ name: 'CompanyList' }"> Company List</router-link></li>
        <li><router-link :to="{ name: 'NewCompany' }"> New Company</router-link></li>
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
