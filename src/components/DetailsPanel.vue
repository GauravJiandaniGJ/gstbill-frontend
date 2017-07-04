<template>
<div class="DetailsPanel">

  <div class="columns is-multiline" v-for="panel in panels" v-if="hidden" id="content">
    <div class="column">
      <PanelsDetails></PanelsDetails>
    </div>
  </div>
<hr>
  <div class="columns is-multiline">
    <div class="column">
      <a class="button is-info is-outline" v-if="hidden" @click="addNew()" id="save">Add New</a>
      <a class="button is-info is-outline" v-if="!hidden" @click="addNew()" >Add</a>
    </div>
  </div>

</div>
</template>
<script>
import PanelsDetails from '@/components/PanelsDetails'
export default {
  name: 'DetailsPanel',
  data: () => ({
    hidden: false,
    panels: [

    ],
    addoredit: false
  }),
  components: {
    PanelsDetails
  },
  methods: {
    addNew () {
      this.hidden = true
      this.panels.push(1)
    }
  }
}
</script>
<style lang="scss">
#save {
    padding-right: 1rem;
}
#addnew {
    padding-left: 1rem;
}
</style>
