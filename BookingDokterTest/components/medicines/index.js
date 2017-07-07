'use strict';

app.medicines = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('medicines');

// START_CUSTOM_CODE_medicines
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_medicines
(function(parent) {
    var
    /// start global model properties
    /// end global model properties
        medicinesModel = kendo.observable({
        submit: function() {
        $.ajax({
                async: false,
                url: "http://ultimosolution.com/Mobile.ashx",
                dataType: "json",
                dataFilter: function (data) { return data; },
                success: function (data) {
                    result = data;
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }

            })

        },
        /// start add model functions
        /// end add model functions

        cancel: function() {}
    });

    /// start form functions
    /// end form functions

    parent.set('onShow', function _onShow() {
        var that = parent;
        that.set('addFormData', {
            result: '',
            val2: '',
            name: '',
            /// start add form data init
            /// end add form data init
        });
        /// start add form show
        /// end add form show
    });
    parent.set('medicinesModel', medicinesModel);
})(app.medicines);

// START_CUSTOM_CODE_medicinesModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_medicinesModel