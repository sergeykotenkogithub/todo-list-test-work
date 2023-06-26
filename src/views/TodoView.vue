<template>
	<TodoList />
	<TodoAdd />
</template>

<script lang="ts">
import { ITodo } from '@/types/todo'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

import TodoAdd from '@/components/TodoAdd.vue'
import TodoList from '@/components/TodoList.vue'

export default defineComponent({
	components: {
		TodoList,
		TodoAdd,
	},
	setup() {
		const store = useStore()
		const todos = store.getters.todo

		const toggleTodo = (id: number | undefined) => {
			store.commit('toggleTodo', id)
		}
		const removeTodo = (id: number | undefined) => {
			todos.value = todos.value.filter((todo: ITodo) => todo.id !== id)
		}

		const addTodo = (todo: ITodo) => {
			todos.value.push(todo)
		}

		return {
			todos,
			toggleTodo,
			removeTodo,
			addTodo,
		}
	},
})
</script>
<style lang="scss"></style>
