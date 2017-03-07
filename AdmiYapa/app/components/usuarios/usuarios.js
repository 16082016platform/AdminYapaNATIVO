'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    navigationProperty = require('../../utils/widgets/navigation-property'),

    service = require('./usuarios-service'),
    // additional requires

    viewModel = require('./usuarios-view-model');

function onListViewItemTap(args) {
    var itemData = viewModel.get('listItems')[args.index];
    
    helpers.navigate({
        moduleName: 'components/usuarios/itemDetails/itemDetails',
        context: itemData.details,
    });
}
exports.onListViewItemTap = onListViewItemTap;

// additional functions
var page;
function pageLoaded(args) {
    page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;

    viewModel.set('isLoading', true);
    viewModel.set('listItems', []);

    function _fetchData() {
        var context = page.navigationContext;

        if (context && context.filter) {
            return service.getAllRecords(context.filter);
        }

        return service.getAllRecords();
    };

    _fetchData()
        .then(function (result) {
            var itemsList = [];

            result.forEach(function (item) {

                if (item.Id !== "89c5b600-0057-11e7-8a39-b392dd88ab7e") {
                    itemsList.push({

                        icon: '\ue0dc', //globe

                        image: "~/images/user.png",

                        header: item.DisplayName,

                        description: item.Email,

                        // singleItem properties
                        details: item
                    });
                }


            });

            viewModel.set('listItems', itemsList);

            viewModel.set('isLoading', false);
        })
        .catch(function onCatch() {
            viewModel.set('isLoading', false);
        });
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        // additional pageInit
    }
}

// START_CUSTOM_CODE_usuarios
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_usuarios
exports.pageLoaded = pageLoaded;


exports.getUsuarios = function () {
    alert(123);
}
