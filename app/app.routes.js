"use strict";
var router_1 = require('@angular/router');
var links_component_1 = require('./links/links.component');
var home_component_1 = require("./home/home.component");
var routes = [
    {
        path: 'links',
        component: links_component_1.LinksComponent
    },
    {
        path: '',
        component: home_component_1.HomeComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map