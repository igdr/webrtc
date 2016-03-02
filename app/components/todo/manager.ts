import {TodoItem} from "../../models";
import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

@Injectable()
export class TodoManager {
    todos:Array<TodoItem>;

    constructor(public http:Http) {
        this.todos = new Array<TodoItem>();
        this.todos.push(new TodoItem('Hello world', false));

        console.log('Task Service created.', http);
    }

    findAll() {
        return this.http.get('todo.json')
            .map((responseData) => {
                console.log(responseData.json());
                return responseData.json();
            })
            .map((tasks:Array<any>) => {
                let result:Array<TodoItem> = [];
                if (tasks) {
                    tasks.forEach((task) => {
                        result.push(
                            new TodoItem(task.text,
                                task.completed));
                    });
                }

                return result;
            });
    }

    removeTodo(todo:TodoItem) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }

    addTodo(todo:TodoItem) {
        this.todos.push(todo);
    }

    toggleAll(complete) {
        this.todos.forEach(function (todo:TodoItem) {
            todo.completed = complete;
        });
    }
}
