<template>
	<section class="add-todo">
		<form v-if="isFormVisible" class="add-todo__form" @submit.prevent="addTodo">
			<button class="button" type="button" @click="closeForm">X</button>
			<div class="text-input">
				<input v-model="todoText" class="input" />
			</div>
			<button class="button">Add task</button>
		</form>
		<button v-else class="button" @click="showForm">+</button>
	</section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
	setup() {
		let isFormVisible = ref(false)
		let todoText = ref('')

		const store = useStore()

		const showForm = () => {
			isFormVisible.value = true
		}

		const closeForm = () => {
			isFormVisible.value = false
		}

		const addTodo = () => {
			store.commit('addTodo', {
				id: Date.now(),
				text: todoText.value,
				completed: false,
			})
			todoText.value = ''
		}

		return {
			showForm,
			closeForm,
			addTodo,
			isFormVisible,
			todoText,
		}
	},
})
</script>

<style lang="scss">
.input {
	width: 300px;
	border-radius: 30px;
	padding: 10px;
	@media (max-width: 350px) {
		width: 80%;
	}
}

.text-input {
	margin: 20px;
}

.button {
	background: white;
	border: 0.5px solid;
	border-radius: 8px;
	padding: 8px 16px;
	&:hover {
		background: #42b983;
		cursor: pointer;
	}
}
</style>
