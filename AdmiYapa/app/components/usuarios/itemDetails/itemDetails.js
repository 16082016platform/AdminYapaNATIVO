var helpers = require('../../../utils/widgets/helper'),

    dialogs = require('ui/dialogs'),

    dataService = require('../../../dataProviders/backendServices');

function navigatedTo(args) {
    var page = args.object;

    page.navigationContext.pageTitle = 'Detalle del cliente';

    // context changes

    page.bindingContext = page.navigationContext;

    var fecha = new Date(page.navigationContext.CreatedAt);

    page.getViewById("fecha").text = "Fecha de registro: " + (fecha.getDate() < 10 ? "0" + fecha.getDate() : fecha.getDate()) + "-" + (fecha.getMonth() < 11 ? "0" + (fecha.getMonth() + 1) : fecha.getMonth() + 1) + "-" + fecha.getFullYear() + " " + (fecha.getHours() < 10 ? "0" + fecha.getHours() : fecha.getHours()) + ":" + (fecha.getMinutes() < 10 ? "0" + fecha.getMinutes() : fecha.getMinutes());

}

exports.navigatedTo = navigatedTo;