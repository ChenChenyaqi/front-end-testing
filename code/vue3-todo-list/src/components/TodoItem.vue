<template>
  <div>
    <h1>{{ todoItem.title }}</h1>
    <div>
      <button @click="handleRemove">remove</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TodoItem, useTodoStore } from "../stores/todo"

interface Props {
  todoItem: TodoItem
}
const props = defineProps<Props>()

const todoStore = useTodoStore()

function handleRemove() {
  todoStore.removeTodo(props.todoItem.id)
}
</script>

<style scoped></style>
