<template>
  <main>
    <h1>Task Board</h1>
    <p>Create a list of task </p>
    <div class="create-new">
      <input
        v-model="newTask"
        type="text"
        placeholder="Add a new task"
        @keypress.enter="addTask"
      >
      <button @click="addTask">
        Add
      </button>
    </div>
    <div class="tasks">
      <div class="task">
        <p />
        <div class="buttons">
          <button>DONE</button>
          <button class="delete">
            DELETE
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      newTask: ''
    }
  },
  methods: {
    addTask () {
      if (this.newTask) {
        this.$store.commit('addTask', this.newTask)
      }
    }
  }
}
</script>
