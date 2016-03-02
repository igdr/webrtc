import {Component, View} from 'angular2/core';
import {AlertsComponent} from "../l-alerts/alerts.component";
import {HeaderComponent} from "../l-header/header.component";
import {FooterComponent} from "../l-footer/footer.component";
import {Stream} from "./stream";

@Component({
    selector: 'dashboard',
})
@View({
    templateUrl: './app/components/dashboard/dashboard.component.html',
    directives: [AlertsComponent, HeaderComponent, FooterComponent]
})

export class DashboardComponent {

    private peer;
    private stream:Stream;

    constructor() {
        this.stream = new Stream();
        this.stream.statusMsg = 'Loading..';

        // Request video stream
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;

        this.peer = new Peer({
            host: "igdr-peerjs.herokuapp.com",
            secure: true,
            port: 443,
            debug: 3
        });

        var _this = this;
        this.peer.on('open', function (id) {
            _this.stream.id = id;
            _this.stream.statusMsg = 'Connected to Peer Server...';
            _this.stream.statusMsg = 'Streaming local video...';
        });

        // Listen to incoming calls
        this.peer.on('stream', function (call) {
            // ask the user if he wants to answer the stream
            _this.initSelfVideo(function () {
                call.answer(_this.stream.localStream);
                _this.handleCall(call);
            });
        });

        this.peer.on('error', function (err) {
            _this.stream.error = err;
        });
    }

    callTo(id):void {
        if (this.stream.inProgress) {
            this.stream.call.close();
        }

        this.stream.peerId = id;

        var _this = this;
        this.initSelfVideo(function () {
            _this.handleCall(_this.peer.call(_this.stream.peerId, _this.stream.localStream));
        });
    }

    initSelfVideo(cb):void {
        var _this = this;
        navigator.getUserMedia({
            audio: true,
            video: true
        }, function (stream) {
            _this.stream.localStream = stream;
            _this.stream.localVdoURL = URL.createObjectURL(stream);
            cb();
        }, function (error) {
            _this.stream.error = error.message;
        });
    }

    handleCall(call):void {
        var _this = this;
        if (_this.stream.call) {
            _this.stream.call.close();
        }

        call.on('stream', function (peerStream) {
            _this.stream.peerVdoURL = URL.createObjectURL(peerStream);
        });

        _this.stream.call = call;
    }

    endCall():void {
        this.stream.call.close();
        this.stream.call = false;
    };
}
