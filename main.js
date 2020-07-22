new Vue({
    el: '#todo',
    data: {
        current_input: {
            title: '',
        },
        todo_list:[]
    },
    methods: {
        add_todo: function() {
            var current_input_copy = Object.assign({},this.current_input)
            this.todo_list.push(current_input_copy)
            console.log(this.todo_list)
        }
    }
})