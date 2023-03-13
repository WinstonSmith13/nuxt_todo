export const state = () => ({
  task: []
})

export const mutations = {
  addTask (state, task) {
    state.task = [{ content: task, done: false }, ...state.task]
  },
  removeTask (state, task) {
    state.task.splice(state.task.indexOf(task), 1)
  },
  toggleTask (state, task) {
    task.done = !task.done
  }
}
