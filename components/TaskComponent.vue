<template>
  <div :class="`task ${task.done ? 'is-complete' : ''}`">
    <div class="content">
      {{ task.content }}
    </div>

    <div class="buttons">
      <button @click="toggleDone">
        {{ task.done ? 'Undo' : 'Done' }}
      </button>
      <button class="delete" @click="toggleDelete">
        DELETE
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object, // specify the data type as Object
      required: true // specify if the prop is required or not
    }
  },
  methods: {
    toggleDone (task) {
      this.$store.commit('toggleTask', this.task)
    },
    toggleDelete (task) {
      this.$store.commit('removeTask', this.task)
    }
  }

}
</script>
