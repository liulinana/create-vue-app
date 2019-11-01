import { HOME_MUTATION } from '@/vuex/mutation-types/homeModules_types'
import {sync} from '../action'

export const modelA = {
    state: {
        count: 0,
        todos: [
            {id: 1, text: '...', done: true},
            {id: 2, text: '...', done: false}
        ]
    },
    mutations: {
        [HOME_MUTATION](state: { count: number; }) {
            state.count++
        }
    },
    getters: {
        doneTodos: (state: { todos: { filter: (arg0: (todo: any) => any) => void; }; }) => {
            return state.todos.filter(todo => todo.done)
        },
        anthorData: (state: any, getters: { doneTodos: { length: any; }; }) => getters.doneTodos.length
    },
    actions: {
        sync
    }
};

