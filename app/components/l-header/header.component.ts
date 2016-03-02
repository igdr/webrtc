import {Component, View} from "angular2/core";
import {CORE_DIRECTIVES} from "angular2/common";

@Component({
    selector: 'header',
})
@View({
    templateUrl: './app/components/l-header/header.component.html',
    directives: [CORE_DIRECTIVES]
})

export class HeaderComponent {

}
