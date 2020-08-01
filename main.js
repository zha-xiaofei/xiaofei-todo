
function saveTodoList (name,value) {
    var valueString = JSON.stringify(value)
    localStorage.setItem(name,valueString)
}
function getTodoList (name) {
    var valueJson = localStorage.getItem(name)
    return JSON.parse(valueJson)
}
var todo_id = 0
Vue.component('todo-list',{
    template:'#todo-list-tpl'
})
new Vue({
    el: '#todo',
    data: {
        current_input: {
            title: '',
            id: 0,
            isCompleted: false
        },
        todo_list: []
    },
    mounted: function() {
        this.todo_list = getTodoList('todoList') || this.todo_list
    },
    methods: {
        add_todo: function () {
            if(this.current_input.id) {
                console.log('更新')
                var current_input_copy = Object.assign({},this.current_input)
                var _this = this
                var index = this.todo_list.findIndex(function(todo,index) {
                    return todo.id === _this.current_input.id
                })
                console.log(index)
                Vue.set(this.todo_list,index,current_input_copy)
            } else {
            var current_input_copy = Object.assign({},this.current_input)
            current_input_copy.id = this.next_id()
            this.todo_list.push(current_input_copy)
            }
            this.current_input.title = ''
            this.current_input.id = 0
        },
        remove: function (index) {
            this.todo_list.splice(index, 1)
        },
        update_todo: function (index) {
            var todo_copy = Object.assign({}, this.todo_list[index])
            this.current_input = todo_copy
        },
        next_id: function () {
           return todo_id = todo_id +1
        },
        toggle_completed: function (index) {
           this.todo_list[index].isCompleted = !this.todo_list[index].isCompleted
        }
    },
    watch: {
        todo_list: {
            handler: function(n,o) {
                console.log('监测')
                if(n) {
                    saveTodoList('todoList',this.todo_list)
                }
            }
        }
    }
})
// 待办：将index -> id

