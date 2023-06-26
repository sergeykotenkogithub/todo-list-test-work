<template>
	<li
		class="todo-item"
		:class="{ 'todo-item-done': todo?.completed }"
		@click="toggleTodo(todo?.id)"
	>
		<IconEdit class="edit icon" @click.stop="editTodo(todo?.id)" />
		<div class="text">{{ todo?.text }}</div>
		<TrashIcon class="trash icon" @click.stop="removeTodo(todo?.id)" />
	</li>
</template>
<script lang="ts">
import { PropType, defineComponent, ref } from 'vue'
import IconEdit from './icons/IconEdit.vue'
import TrashIcon from './icons/TrashIcon.vue'

import { useStore } from 'vuex'
import type { ITodo } from '../types/todo'

export default defineComponent({
	components: {
		TrashIcon,
		IconEdit,
	},
	props: {
		todo: {
			type: Object as PropType<ITodo>,
			require: true,
		},
	},
	setup(props) {
		const store = useStore()
		const editValue = ref(props.todo?.text)

		const toggleTodo = (id: number | undefined) => {
			store.commit('toggleTodo', id)
		}
		const removeTodo = (id: number | undefined) => {
			store.commit('removeTodo', id)
		}

		const editTodo = (id: number | undefined) => {
			const text = prompt('Заголовок', props.todo?.text)
			store.commit('editTodo', { id, text })
		}

		return {
			toggleTodo,
			removeTodo,
			editTodo,
			editValue,
		}
	},
})
</script>
<style lang="scss">
li {
}

.todo-item-done {
	text-decoration: line-through;
	text-decoration-color: red;
	background: #1e991e;
}

.todo-item {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin: 10px;
	padding: 20px;
	border: 0.5px solid;
	border-radius: 20px;
	width: 500px;
	list-style-type: none;
	cursor: pointer;
	@media (max-width: 600px) {
		width: 80%;
	}
}

.text {
	width: 80%;
}

.icon {
	width: 30px;
	height: 30px;
	stroke: silver;
	opacity: 0.4;
}

.trash {
	&:hover {
		stroke: black;
		opacity: 1;
	}
}

.edit {
	&:hover {
		stroke: black;
		opacity: 1;
	}
}
</style>
