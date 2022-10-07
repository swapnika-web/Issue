<template>
  <div class="q-pa-md">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 400px" 
      class="shadow-2 rounded-borders"
    >
      <header elevated class="bg-black">
        <toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />

          <toolbar-title>Form</toolbar-title>
        </toolbar>
      </header>

      <drawer  v-model="drawer" show-if-above :width="300" :breakpoint="500">
        <div class="q-pa-md">
          <stepper v-model="step" vertical color="primary" animated>
            <step
              :name="1"
              title="Please fill the details"
              icon="settings"
              :done="step > 1"
            >
              <label>Name:</label>

              <input type="text" />

              <label>Password:</label>

              <input type="text" />

              <stepper-navigation>
                <q-btn @click="step = 2" color="primary" label="Continue" />
              </stepper-navigation>
            </step>

            <step
              :name="2"
              title="Form 2"
              icon="create_new_folder"
              :done="step > 2"
            >
              <label>Email:</label>

              <input type="text" />

              <label>Address:</label>

              <input type="text" />

              <stepper-navigation>
                <btn color="green" label="Finish" to="./LandingPage"/>

                <btn
                  flat
                  @click="step = 1"
                  color="primary"
                  label="Back"
                  class="q-ml-sm"
                />
              </stepper-navigation>
            </step>
          </stepper>
        </div>
      </drawer>
    </q-layout>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      drawer: ref(),

      step: ref(1),
    };
  },
};
</script>

<style lang="sass" scoped>

.menu-list .q-item

  border-radius: 0 32px 32px 0
</style>
