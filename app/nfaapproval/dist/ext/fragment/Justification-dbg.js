sap.ui.define([
    "sap/m/MessageToast",
        "sap/ui/core/Fragment",
    "sap/ui/core/mvc/Controller"
], function(MessageToast,Fragment, Controller) {
    'use strict';

    return {
        onPress: function(oEvent) {
            debugger
            var that = this;

            if (!this._oJustificationDialog) {
                Fragment.load({
                    name: "nfaapproval.ext.fragment.Justification", // without .fragment.xml
                    controller: this
                }).then(function (oDialog) {
                    debugger
                    that._oJustificationDialog = oDialog;
    var oContext = oEvent.getBinding().getBoundContext();
    that._oJustificationDialog.setBindingContext(oContext);
                       that.getRouting().getView().addDependent(oDialog);
                    that._oJustificationDialog.mAggregations.items[0].open();
                });
            } else {
                this._oJustificationDialog.mAggregations.items[0].open();
            }
        },
        onCloseJustification:function (params) {
            debugger
            if(this._oJustificationDialog.mAggregations.items[0])
            this._oJustificationDialog.mAggregations.items[0].close();
        }
    };
});
