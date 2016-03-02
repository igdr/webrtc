import {Component, View} from "angular2/core";
import {CORE_DIRECTIVES} from "angular2/common";

@Component({
    selector: 'footer',
})
@View({
    templateUrl: './app/components/l-footer/footer.component.html',
    directives: [CORE_DIRECTIVES]
})

export class FooterComponent {

}
