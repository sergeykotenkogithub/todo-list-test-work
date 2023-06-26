import { LOCAL_TODO } from '@/const'
import { ITodo } from '@/types/todo'
import { createStore } from 'vuex'
interface State {
	todo: ITodo[]
}

const localState = localStorage.getItem(LOCAL_TODO)

export const store = createStore({
	state(): State {
		return {
			todo: localState ? JSON.parse(localState) : [],
		}
	},
	getters: {
		todo(state: State) {
			return state.todo
		},
	},
	mutations: {
		toggleTodo(state, id) {
			const targetTodo = state.todo.find((todo: ITodo) => todo.id === id)
			if (targetTodo) {
				targetTodo.completed = !targetTodo.completed
			}
			store.commit('addLocalState')
		},
		removeTodo(state, id) {
			state.todo = state.todo.filter((todo: ITodo) => todo.id !== id)
			store.commit('addLocalState')
		},
		addTodo(state, todo: ITodo) {
			state.todo.push(todo)
			store.commit('addLocalState')
		},
		editTodo(state, { id, text }) {
			const targetTodo = state.todo.find((todo: ITodo) => todo.id === id)
			if (targetTodo) {
				targetTodo.text = text
			}
			store.commit('addLocalState')
		},
		addLocalState(state) {
			localStorage.setItem(LOCAL_TODO, JSON.stringify(state.todo))
		},
	},
	actions: {},
	modules: {},
})
