<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <h1>Firebase App</h1>
    </div>
    <form>
        <div class="form-group">
          <input class="form-control" type="text" v-model="name" placeholder="Enter name">
          <button class="btn btn-block btn-primary" v-on:click="submitName">+</button>
        </div>
    </form>
    <div class="list-container">
      <ul class="list-group">
        <li class="list-group-item" v-for="personName in names"
            v-bind:key="personName['.key']">
            <div v-if="!personName.edit">
              <p>{{personName.name}}</p>
              <button class="deleteBtn btn btn-danger btn-sm" v-on:click="removeName(personName['.key'])"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
              <button class="editBtn btn btn-sm btn-warning" v-on:click="setEditName(personName['.key'])"><i class="fa fa-pencil" aria-hidden="true"></i></button>
            </div>
            <div v-else>
              <input type="text" v-model="personName.name">
              <button @click="saveEdit(personName)">Save</button>
              <button @click="cancelEdit(personName['.key'])">Cancel</button>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { namesRef } from './firebase';
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    submitName(e) {
      e.preventDefault();
      namesRef.push({
        name: this.name, edit: false
      })
      // referesh text box value
      this.name = '';
      console.log('added');
    },
    removeName(key) {
      // child keyu param to remove item
      namesRef.child(key).remove();
    },
    setEditName(key) {
      namesRef.child(key).update({ edit: true});
    },
    cancelEdit(key) {
      namesRef.child(key).update({ edit: false})
    },
    saveEdit(person) {
      const key = person['.key'];
      namesRef.child(key).set({ name: person.name, edit: false })
    }
  },
  firebase: {
    names: namesRef
  },
}
</script>

<style>
  ul {
    border: 1px solid #ccc;
    list-style-type: none;
  }

  .deleteBtn {
      display: block;
      position: relative;
      align-self: auto;
  }
  .btn {
    margin: 5px;
  }
</style>
