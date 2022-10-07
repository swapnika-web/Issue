<template>
  <div class="card mt-4">
    <table class="table m-0" >
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name, email } in users" :key="id">
          <td>{{ name }}</td>
          <td>{{ email }}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2" style="background-color: cyan; border:1px; height: 20px; width: 40px; margin-left: 10px;">Edit</button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteUser(id)" style="background-color: red; border: 1px; color:white; margin-left: 4px; height:20px; width: 50px;">
              Delete
            </button>
            <!-- <router-link :to="`/QCard/${id}}`"> -->
            <!-- <button type="submit" class="btn btn-danger btn-sm"  style="background-color: yellow ; border: 1px; color:black; margin-top: 4px; height:20px; width: 60px;">
                Redirect
              </button> -->
            <!-- </router-link> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadUsers, deleteUser } from "../config/firebase";
export default {
  setup() {
    const users = useLoadUsers();
    return { users, deleteUser };
  },
};
</script>


 <style>
    .table, thead, tr{
        border: 1px solid;
    }
 </style>
