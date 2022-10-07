<template>
    <div class="card card-body mt-4">
       
      <form @submit.prevent="onSubmit" >
        <div class="form-group">
          <label>Name:</label>
          <input v-model="form.name" class="form-control" required />
        </div>
  <br>
  <br>
        <div class="form-group mt-3">
          <label>Email:</label>
          <input
            v-model="form.email"
            class="form-control"
            type="email"
            required
          />
        </div>
        <br>
    <br>
  
        <button type="submit" class="btn btn-success mt-3" style="background-color: green ; border:1px; width: 100px; height: 30px; color:white;">
          Create User
        </button>
      </form>
   <UserList></UserList>
    </div>
  </template>
  
  <script>
  import { createUser } from '../config/firebase'
  import { reactive } from 'vue'
import UserList from './UserList.vue'
  export default {
    setup() {
        const form = reactive({ name: "", email: "" });
        const onSubmit = async () => {
            await createUser({ ...form });
            form.name = "";
            form.email = "";
            alert("Successfully created User");
        };
        return { form, onSubmit };
    },
    components: { UserList }
}
  </script>



 