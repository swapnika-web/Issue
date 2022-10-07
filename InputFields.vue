<template>
    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px"
      @keydown.enter="handleSubmit">
        <q-input outlined type="text" v-model="name" label="Name on the card*" />
        <q-input outlined v-model="card" label="Card Number*"
        mask="#### #### #### ####"
        fill-mask="#"
         />
  
        <q-input  outlined v-model="cvv" label="CVV*" mask="###"
       unmasked-value/>
  
        <q-input outlined v-model="otp" label="OTP* " mask="######"/>
        
  
       
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup () {
 
      return {
       name: ref(''),
       card: ref(''),
        cvv: ref(null),
        otp: ref(''),
       
      }
    },
    methods: {
    handleSubmit() {
      // Send data to the server or update your stores and such.
    }
  }
  }
  </script>
  