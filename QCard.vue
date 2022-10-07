<template>

<div class="Container">
    <q-card>
     <q-card-section>
           <h2 style="color:black; font-size: large;"><b>WELCOME,</b></h2>
           <p>{{name}}</p>
           <p>{{email}}</p>
         </q-card-section>
   
 <q-card-actions class="actions">
    <router-link :to="`/UserCreate`">
     
     <q-button class="button" type="submit" to="./UserCreate" style="margin-left: 20px; background-color: skyblue; ">OK</q-button>
    </router-link>
 </q-card-actions>
 
 </q-card>
 </div>
</template>

<script>
   
</script>

<style>
    #Container{
        background-coLor: rgb(56, 47, 47);
    }
</style>