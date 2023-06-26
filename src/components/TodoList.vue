<template>
	<h1>TodoList</h1>
	<ul class="list">
		<TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
		<div v-if="!todos.length">You have no tasks. Please add a task.</div>
	</ul>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

import { useStore } from 'vuex'
import TodoItem from './TodoItem.vue'

export default defineComponent({
	components: {
		TodoItem,
	},
	setup() {
		const store = useStore()
		const todos = computed(() => store.getters.todo)

		return {
			todos,
		}
	},
})
</script>
<style lang="scss">
.list {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0;
}
</style>
