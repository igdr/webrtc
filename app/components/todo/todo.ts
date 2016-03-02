import {Component, View} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl} from 'angular2/common';
import {Validators} from 'angular2/common';
import {TodoItem} from '../../models';
import {TodoManager} from "./manager";
import {Inject} from "angular2/core";
import {AlertsComponent} from "../l-alerts/alerts.component";
import {HeaderComponent} from "../l-header/header.component";
import {FooterComponent} from "../l-footer/footer.component";

@Component({
    selector: 'todo',
    viewProviders: [FormBuilder],
    providers: [TodoManager]
})
@View({
    templateUrl: './app/components/todo/todo.html',
    directives: [AlertsComponent, HeaderComponent, FooterComponent, FORM_DIRECTIVES]
})
export class Todo {
    todos:Array<TodoItem>;

    fb:FormBuilder;
    myForm:ControlGroup;
    newTodo:Control;

    constructor(fb:FormBuilder, private manager:TodoManager) {
        this.fb = fb;

        manager.findAll().subscribe(res => this.todos = res);

        this.buildForm();
    }

    buildForm():void {
        this.newTodo = new Control('', Validators.required);

        this.myForm = this.fb.group({
            'newTodo': this.newTodo
        });
    }

    removeTodo(item:TodoItem) {
        this.manager.removeTodo(item);
    }

    onSubmit():void {
        if (this.myForm.valid) {
            this.manager.addTodo(new TodoItem(this.newTodo.value, false));

            // How in hell do I reset this thing and prevent it from being validated?
            // The only thing that works is rebuilding the whole form/&%¤#""
            this.buildForm();
        }
    }

    toggleAll($event) {
        var isComplete = $event.target.checked;
        this.manager.toggleAll(isComplete);
    }
}
