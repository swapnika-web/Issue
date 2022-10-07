<template>
    <div class="card">
   <q-card  class="card bg-teal-3">
    <q-card-section>
          <h2 style="color:black; font-size: large;"><b>WELCOME,</b></h2>
          <p>{{user}}</p>
        </q-card-section>
  
<q-card-actions class="actions">
    <q-btn class="button" type="submit" to="./LoginPage" >Go to Home page</q-btn>
    <q-btn class="button" type="submit" to="./StepperSteps" style="margin-left: 20px; background-color: red;">Go to Steps</q-btn>
</q-card-actions>

</q-card>
</div>
</template>

<script>
 import { getAuth} from '@firebase/auth'

   
    
    export default{
    setup(){
        let Auth = getAuth();
     let user = Auth.currentUser.email;
     return{
        user,
    }
   
     }
    }
    
    </script>

    <style>
        .button{
            background-color: green;
            color:white;
        }
        .card{
            width: 50% ;
             margin-left: 25%;
             margin-top: 10%;
             
        }
        .actions{
            margin-left: 13%;
        }
    </style>

   
