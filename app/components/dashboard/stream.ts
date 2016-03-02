export class Stream {
    private _statusMsg:string;
    private _id:string;
    private _peerId:string;
    private _localStream:string;
    private _localVdoURL:string;
    private _peerVdoURL:string;
    private _inProgress:boolean;
    private _call:any;
    private _error:string;

    get statusMsg():string {
        return this._statusMsg;
    }

    set statusMsg(value:string) {
        this._statusMsg = value;
    }

    get id():string {
        return this._id;
    }

    set id(value:string) {
        this._id = value;
    }

    get peerId():string {
        return this._peerId;
    }

    set peerId(value:string) {
        this._peerId = value;
    }

    get localStream():string {
        return this._localStream;
    }

    set localStream(value:string) {
        this._localStream = value;
    }

    get inProgress():boolean {
        return this._inProgress;
    }

    set inProgress(value:boolean) {
        this._inProgress = value;
    }

    get localVdoURL():string {
        return this._localVdoURL;
    }

    set localVdoURL(value:string) {
        this._localVdoURL = value;
    }

    get call():any {
        return this._call;
    }

    set call(value:any) {
        this._call = value;
    }

    get error():string {
        return this._error;
    }

    set error(value:string) {
        this._error = value;
    }

    get peerVdoURL():string {
        return this._peerVdoURL;
    }

    set peerVdoURL(value:string) {
        this._peerVdoURL = value;
    }
}
