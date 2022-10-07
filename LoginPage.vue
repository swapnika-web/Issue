<template>
    <div class="container">
    <h1 class="heading">Create an Account</h1>
    <q-form >
    <div class="email"> 
    <q-input outlined type="text" v-model="email" label="Email" /></div>
    <br>
    <div class="password">
    <q-input outlined  type="password" v-model="password" label="Password"  /></div>
    <br>
   
    <q-button color="green" label="Submit" @click="register">Submit</q-button>
</q-form>
</div>

  </template>
  
  
  <script>
    import { ref } from 'vue'
   
    import { useRouter } from 'vue-router' 
import { getAuth , createUserWithEmailAndPassword} from '@firebase/auth'
    // import router
    export default{
        setup(){
      
        
    const email = ref('')
    const password = ref('')
    let Auth = getAuth();
    const router = useRouter() // get a reference to our vue router
    const register = () => {
    
       // get the auth api

        createUserWithEmailAndPassword( Auth ,email.value, password.value) // need .value because ref()
        .then(() => {
          console.log('Successfully registered!');
          router.push('/StepperSteps') // redirect to the feed
        })
        .catch(error => {
          console.log(error.code)
          alert(error.message);
        });
    }
    return{
        email,password,router, register
        
    }
}
}
  </script>

<style>
   .email{
    width: 25%;
    margin-left: 35%;
  }
  .password{
    width: 25%;
    margin-left: 35%;
  }
  .submit{
    margin-right: 5%;
  }
  .heading{
    font-size:x-large;
    margin-left: -5%;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    
 }
 .container{
    margin-top: 10%;
 }
   
    
  </style>