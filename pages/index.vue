<template>
  <main>
    <h1>Task Board</h1>
    <p>Create a list of task </p>
    <div class="create-new">
      <input type="text" placeholder="Add a new task">
      <button>Add</button>
    </div>
    <div class="tasks">
      <div class="task">
        <p>Task number 1</p>
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
  name: 'IndexPage'
}
</script>
