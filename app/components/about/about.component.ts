import {Component, View} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'about'
})
@View({
    templateUrl: './app/components/about/about.component.html',
})
export class AboutComponent {
    private id:string;
    private peer:any;

    constructor(params:RouteParams) {
        this.id = params.get('id');

        this.peer = new Peer({key: 'n6ky2vq8q1q93sor'});
        this.peer.on('open', function(id) {
            console.log('My peer ID is: ' + id);
        });
    }
}
