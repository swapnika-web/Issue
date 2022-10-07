<template>
  <div class="wholeform">
      <q-stepper
        v-model="step"
        ref="stepper"
        color="primary"
        animated
      >
        <q-step
          :name="1"
          title="Step 1"
          caption="Payment method"
          icon="settings"
          :done="step > 1"
        >

       
          <q-form >
        <div class="q-pa-md">
          <div class="q-gutter-md" style="max-width: 300px">
            <q-input outlined type="text" v-model="name" label="Name on the card*" />
            <q-input outlined v-model="card" label="Card Number*"
            mask="#### #### #### ####"
            fill-mask="#"
             />
      
            <q-input  outlined v-model="cvv" label="CVV*" mask="###"
           unmasked-value/>
      
            <q-input outlined type="password" v-model="otp" label="OTP* " mask="######"/>
            
        
           
          </div>
        </div>
      
     
      
    <q-stepper-navigation>
            <q-btn @click="step = 2" color="primary" label="Next" 
            :disable="name== '' || card==''"/>
          </q-stepper-navigation>
        </q-form>
        </q-step>

        
  
        <q-step
          :name="2"
          title="Step 2"
          icon="create_new_folder"
          :done="step > 2"
        >
          <TypeSelect></TypeSelect>
          <q-stepper-navigation>
            <q-btn @click="step = 3" color="primary" label="Next" />
            
                <q-btn @click="step = 1" color="grey" label="Previous" style="margin-left: 20px;" />
            
          </q-stepper-navigation>
        </q-step>
  
        <q-step
          :name="3"
          title="Step 3"
          icon="assignment"
          :done="step > 3"
        >
         
        <QButton></QButton>
        <q-stepper-navigation>
            <q-btn @click="step = 4" color="primary" label="Next" />

            <q-btn @click="step = 2" color="grey" label="Previous" style="margin-left: 20px;" />
          </q-stepper-navigation>
        </q-step>
  
        <q-step
          :name="4"
          title="Step 4"
          icon="add_comment"
        >
          <CheckBox></CheckBox>
          <q-stepper-navigation> 
            <q-btn color="green" label="Finish" to="./LandingPage" />
            
            <q-btn @click="step = 3" color="grey" label="Previous" style="margin-left: 20px;"/>
               </q-stepper-navigation> 
        </q-step>

        
       

      </q-stepper>
    </div>
  </template>

  <script>
    import { ref } from 'vue'
   


import TypeSelect from './TypeSelect.vue'
import QButton from './QButton.vue'
import CheckBox from './CheckBox.vue'


    export default {
    name: "StepperSteps",
    components:{
    
    TypeSelect,
    QButton,
    CheckBox,
   
},
    setup () {
      let step = ref(1);
      let name = ref("");
      let card= ref("")
      const disable = () => {
  if(step.value<5){
  !name.value || !card.value}
}
        return {
          step: ref(1),
          name: ref(''),
           card: ref(''),
            cvv: ref(null),
            otp: ref(''),
         disable
        };
      },
    };
    
    </script>

    <style>
      .wholeform{
        width : 70%;
        margin-left: 10%;
        margin-top: 5%;
      }
    </style>