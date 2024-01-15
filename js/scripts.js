const { createApp } = Vue;

createApp ({
    data() {
        return {

            todos : [
                {
                    text: 'riordinare camera',
                    done: false,
                },
                {
                    text: 'allenamento',
                    done: false,
                },
                {
                    text: 'consegnare esercizi di Boolean',
                    done: false,
                },
            ],

            newTaskInput : '',

        };
    },
    methods : {

        addTask(){

            if(this.newTaskInput.length > 2){

                let newTask = {};

                newTask.text = this.newTaskInput;
                newTask.done = false;

                console.log(newTask);

                this.todos.push(newTask);

                this.newTaskInput = '';


                console.log(this.todos);

            };

        },

        removeTask(i) {
            console.log(i, this.todos[i]);
            this.todos.splice(i, 1);
        }
    },
}).mount('#app');