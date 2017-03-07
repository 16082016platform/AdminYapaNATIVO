'use strict';
var menuItems,
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [{
    "title": "HomeView",
    "moduleName": "components/homeView/homeView",
    "icon": "\ue0e7"
}, {
    "title": "Usuarios",
    "moduleName": "components/usuarios/usuarios",
    "icon": "\ue0eb"
}];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;