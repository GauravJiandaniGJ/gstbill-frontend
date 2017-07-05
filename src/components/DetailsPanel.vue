<template>
<div class="DetailsPanel">

<pre v-model="this.panels=billDetails"></pre>

  <div class="columns is-multiline" v-for="panel in panels" id="content">
    <div class="column">
      <PanelsDetails :panel="panel"></PanelsDetails>
    </div>
  </div>
<hr>


<div class="columns is-multiline" id="content">

<div class="column is-5 only">
  <div class="field">
    <p class="control">
    </p>
  </div>
</div>

<div class="column only">
  <div class="field">
    <p class="control">

    </p>
  </div>
</div>

<div class="column only">
  <div class="field">
    <p class="control">
      <input v-validate="'required'" name="qty" placeholder="Qty" type="text" class="input">
    </p>
  </div>
</div>

<div class="column only">
  <div class="field">
    <p class="control">

    </p>
  </div>
</div>

<div class="column only">
  <div class="field">
    <p class="control">
      <input v-validate="'required'" name="rate" placeholder="total" type="text" class="input">
    </p>
  </div>
</div>

<div class="column" id="only">
  <div class="field">
    <p class="control">

    </p>
  </div>
</div>
</div>


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
    panels: [],
    addoredit: false,
    bid: null
  }),
  components: {
    PanelsDetails
  },
  created () {
  },
  methods: {
    addNew () {
      this.hidden = true
      this.panels.push(1)
    }
  },
  props: {
    billDetails: {
      required: true
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
