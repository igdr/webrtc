System.register(["../../models", "angular2/core", "angular2/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var models_1, core_1, http_1;
    var TodoManager;
    return {
        setters:[
            function (models_1_1) {
                models_1 = models_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            TodoManager = (function () {
                function TodoManager(http) {
                    this.http = http;
                    this.todos = new Array();
                    this.todos.push(new models_1.TodoItem('Hello world', false));
                    console.log('Task Service created.', http);
                }
                TodoManager.prototype.findAll = function () {
                    return this.http.get('todo.json')
                        .map(function (responseData) {
                        console.log(responseData.json());
                        return responseData.json();
                    })
                        .map(function (tasks) {
                        var result = [];
                        if (tasks) {
                            tasks.forEach(function (task) {
                                result.push(new models_1.TodoItem(task.text, task.completed));
                            });
                        }
                        return result;
                    });
                };
                TodoManager.prototype.removeTodo = function (todo) {
                    this.todos.splice(this.todos.indexOf(todo), 1);
                };
                TodoManager.prototype.addTodo = function (todo) {
                    this.todos.push(todo);
                };
                TodoManager.prototype.toggleAll = function (complete) {
                    this.todos.forEach(function (todo) {
                        todo.completed = complete;
                    });
                };
                TodoManager = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TodoManager);
                return TodoManager;
            })();
            exports_1("TodoManager", TodoManager);
        }
    }
});
//# sourceMappingURL=manager.js.map