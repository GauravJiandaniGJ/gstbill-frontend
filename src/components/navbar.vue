<template class="html">
<div class="navbar">
<nav class="nav has-shadow">
<div class="nav-left">
    <a class="nav-item  is-tab is-hidden-mobile is-active "></a>
    <a class="nav-item  is-tab is-hidden-mobile is-active ">GST BILLING WEBAPP</a>

  </div>
  <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
  <div class="nav-right nav-menu">
     <a class="nav-item is-tab is-hidden-tablet is-active">Home</a>
     <a class="nav-item is-tab is-hidden-tablet">Features</a>
     <a class="nav-item is-tab is-hidden-tablet">Pricing</a>
     <a class="nav-item is-tab is-hidden-tablet">About</a>
     <a class="nav-item is-tab" @click="profilemodal = true">
       <figure class="image is-16x16" style="margin-right: 8px;">
         <img src="http://bulma.io/images/jgthms.png">
       </figure>
       Profile
     </a>
     <a class="nav-item is-tab">Log out</a>
   </div>
</nav>
<ProfileModal v-if="profilemodal" @close="profilemodal = false"></ProfileModal>
</div>
</template>

<script>
import ProfileModal from '@/components/ProfileModal'
export default {
  name: 'navbar',
  components: {
    ProfileModal
  },
  data () {
    return {
      profilemodal: false
    }
  }
}
</script>

<style>
</style>
