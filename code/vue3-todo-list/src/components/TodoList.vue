<template>
  <div>
    <h1>todo list</h1>
    <div>
      <input v-model="newTodo" @keypress.enter="handleAddTodo" />
    </div>
    <div>
      <ul>
        <li v-for="todoItem in todoStore.todos" :key="todoItem.id">
          <TodoItem :todoItem="todoItem"></TodoItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoItem from "./TodoItem.vue"
import { ref } from "vue"
import { useTodoStore } from "../stores/todo"

const todoStore = useTodoStore()
const newTodo = ref("")

function handleAddTodo() {
  todoStore.addTodo(newTodo.value)
  newTodo.value = ""
}
</script>

<style scoped>
.app {
}
</style>
