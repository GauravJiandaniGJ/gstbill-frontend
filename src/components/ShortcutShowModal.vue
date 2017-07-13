<template>
<div class="ShortcutShowModal">
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Shortcut List</p>
      </header>
      <section class="modal-card-body">
        <div class="">
          <div>

            <div class="companywise-body">
              <div class="one-company">
                <input type="hidden">
                <span class="text title is-5">Alt + F2</span>&nbsp&nbsp&nbsp
                <span class="text title is-5">:</span>&nbsp&nbsp&nbsp
                <span class="text title is-5">Cargo Handling Charges</span>&nbsp&nbsp&nbsp
              </div>
              <hr>
              <div class="one-company">
                <input type="hidden">
                <span class="text title is-5">Alt + F3</span>&nbsp&nbsp&nbsp
                <span class="text title is-5">:</span>&nbsp&nbsp&nbsp
                <span class="text title is-5">Phyto Certificate Charges</span>&nbsp&nbsp&nbsp
              </div>
              <hr>
              <div class="one-company">
                <input type="hidden">
                <span class="text title is-5">Alt + F4</span>&nbsp&nbsp&nbsp
                <span class="text title is-5">:</span>&nbsp&nbsp&nbsp
                <span class="text title is-5">Shipping Bill Noting Charges</span>&nbsp&nbsp&nbsp
              </div>
              <hr>
              <div class="one-company">
                <input type="hidden">
                <span class="text title is-5">Alt + F5</span>&nbsp&nbsp&nbsp
                <span class="text title is-5">:</span>&nbsp&nbsp&nbsp
                <span class="text title is-5">Port and Customs Documentation</span>&nbsp&nbsp&nbsp
              </div>
              <hr>
              <div class="one-company">
                <input type="hidden">
                <span class="text title is-5">Alt + F6</span>&nbsp&nbsp&nbsp
                <span class="text title is-5">:</span>&nbsp&nbsp&nbsp
                <span class="text title is-5">Transportation Charges</span>&nbsp&nbsp&nbsp
              </div>
              <hr>
              <div class="one-company">
                <input type="hidden">
                <span class="text title is-5">Alt + F7</span>&nbsp&nbsp&nbsp
                <span class="text title is-5">:</span>&nbsp&nbsp&nbsp
                <span class="text title is-5">Lift On/Lift Off Charges</span>&nbsp&nbsp&nbsp
              </div>
              <hr>
              <div class="one-company">
                <input type="hidden">
                <span class="text title is-5">Alt + F8</span>&nbsp&nbsp&nbsp
                <span class="text title is-5">:</span>&nbsp&nbsp&nbsp
                <span class="text title is-5">Misc. Expenses for obtaining FSSAI</span>&nbsp&nbsp&nbsp
              </div>
              <hr>
              <div class="one-company">
                <input type="hidden">
                <span class="text title is-5">Alt + F9</span>&nbsp&nbsp&nbsp
                <span class="text title is-5">:</span>&nbsp&nbsp&nbsp
                <span class="text title is-5">FSSAI Fees</span>&nbsp&nbsp&nbsp
              </div>
              <hr>
              <div class="one-company">
                <input type="hidden">
                <span class="text title is-5">Alt + F10</span>&nbsp&nbsp&nbsp
                <span class="text title is-5">:</span>&nbsp&nbsp&nbsp
                <span class="text title is-5">Misc. Expenses for clearance at Customs/Phyto</span>&nbsp&nbsp&nbsp
              </div>
              <hr>


            </div>

          </div>
        </div>

      </section>
      <footer class="modal-card-foot">
        <a class="button" v-on:click="$emit('close')">Close</a>
      </footer>
    </div>
  </div>
</div>
</div>
</div>
</template>
<script>
export default {
  name: 'BanksListModal',
  data: () => ({}),
  props: {},
  created () {},
  methods: {
  }
}
</script>
<style lang="scss">
</style>
