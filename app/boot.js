System.register(['angular2/platform/browser', 'angular2/router', './app', 'angular2/http'], function(exports_1) {
    var browser_1, router_1, app_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.AppComponent, [
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map