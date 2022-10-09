<template>
    <div class="form-container">
    <div class="q-pa-md">
      <q-stepper
        v-model="step"
        ref="stepper"
        color="primary"
        animated
      >
        <q-step
          :name="1"
          title="Step 1"
          caption="Audio Upload"
          icon="settings"
          :done="step > 1"
        >
        
        <q-uploader
        url="http://localhost:4444/upload"
        label="Upload Audio File"
        style="max-width: 300px"
        id="audio"
      />

        <q-stepper-navigation>
            <q-btn type="submit"  @click="step = 2">Continue</q-btn>
        </q-stepper-navigation>

        </q-step>


  
        <q-step
          :name="2"
          title="Step 2"
          caption="Enter Title"
          icon="create_new_folder"
          :done="step > 2"
        >
         
         <q-input outlined v-model="input" label="Enter Title" style="width:30%; margin-left: 35%;" />
        <q-stepper-navigation>
        <q-btn type="submit"  @click="step = 3" :disable="input==''">Continue</q-btn>
    </q-stepper-navigation>
        </q-step>
  
  
        <q-step
          :name="3"
          title="Create an ad"
          icon="add_comment"
        >
      hello
          <q-stepper-navigation>
            <q-btn @click="step = 2">Back</q-btn>
            </q-stepper-navigation>
        </q-step>
  
      
         
       
      </q-stepper>
    </div>
</div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup () {
        let step = ref(null)
        // let audio = ref("")
        let input = ref("")
    const disable = () =>{
        if(step.value<3){
             !input.value
        }
    }
      return {
        step: ref(1),
    //    audio:ref(''),
       input: ref(''),
       disable
      };
    },
  };
  </script>
  
  <style>
    .form-container{
        width: 60%;
        margin-left: 15%;
        margin-top: 10%;
    }
  </style>