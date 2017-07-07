'use strict';

app.bookingDokterView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('bookingDokterView');

// START_CUSTOM_CODE_bookingDokterView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_bookingDokterView
(function(parent) {
    var
    /// start global model properties
    /// end global model properties
        bookingDokterViewModel = kendo.observable({
        submit: function() {},
        /// start add model functions
        /// end add model functions

    });

    /// start form functions
    /// end form functions

    parent.set('onShow', function _onShow() {
        var that = parent;
        that.set('addFormData', {
            listDokter: '',
            listKota: '',
            /// start add form data init
            /// end add form data init
        });
        /// start add form show
        /// end add form show
    });
    parent.set('bookingDokterViewModel', bookingDokterViewModel);
})(app.bookingDokterView);

// START_CUSTOM_CODE_bookingDokterViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_bookingDokterViewModel