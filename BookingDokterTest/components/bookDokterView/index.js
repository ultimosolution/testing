'use strict';

app.bookDokterView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('bookDokterView');

// START_CUSTOM_CODE_bookDokterView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_bookDokterView
(function(parent) {
    var
    /// start global model properties
    /// end global model properties
        bookDokterViewModel = kendo.observable({
        submit: function() {},
        /// start add model functions
        /// end add model functions

    });

    /// start form functions
    /// end form functions

    parent.set('onShow', function _onShow() {
        var that = parent;
        that.set('addFormData', {
            antrianNumb: '20',
            antrianHeading: 'Antrian Saat ini',
            /// start add form data init
            /// end add form data init
        });
        /// start add form show
        /// end add form show
    });
    parent.set('bookDokterViewModel', bookDokterViewModel);
})(app.bookDokterView);

// START_CUSTOM_CODE_bookDokterViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_bookDokterViewModel