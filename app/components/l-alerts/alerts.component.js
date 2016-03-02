System.register(["angular2/core", "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, common_2, common_3;
    var AlertsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
                common_3 = common_1_1;
            }],
        execute: function() {
            AlertsComponent = (function () {
                function AlertsComponent() {
                    this.alerts = [{
                            type: 'success',
                            msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!'
                        }, {
                            type: 'danger',
                            msg: 'Found a bug? Create an issue with as many details as you can.'
                        }];
                }
                AlertsComponent.prototype.addAlert = function () {
                    this.alerts.push({
                        msg: 'Another alert!'
                    });
                };
                AlertsComponent.prototype.closeAlert = function (index) {
                    this.alerts.splice(index, 1);
                };
                AlertsComponent = __decorate([
                    core_1.Component({
                        selector: 'alerts',
                    }),
                    core_1.View({
                        templateUrl: './app/components/l-alerts/alerts.component.html',
                        directives: [common_1.CORE_DIRECTIVES, common_2.NgFor, common_3.NgIf]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AlertsComponent);
                return AlertsComponent;
            })();
            exports_1("AlertsComponent", AlertsComponent);
        }
    }
});
//# sourceMappingURL=alerts.component.js.map