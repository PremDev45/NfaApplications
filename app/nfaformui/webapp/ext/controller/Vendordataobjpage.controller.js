sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('nfaformui.ext.controller.Vendordataobjpage', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf nfaformui.ext.controller.Vendordataobjpage
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},  routing: {
                onAfterBinding: async function (oEvent) {
					debugger
					oEvent.requestObject().then((oData) => {
                debugger
						if (!oData) return;

                if (oData.NfaVendorDataToNfaDetails.Status == "Need For Clarification" ||oData.NfaVendorDataToNfaDetails.Status == "New") {
					this.getView().byId("fe::StandardAction::Edit").setVisible(true)
					this.getView().byId("fe::StandardAction::Edit").setEnabled(true)
                } else {
                    this.getView().getController().getExtensionAPI().getEditFlow().setEditMode("Display");
					this.getView().byId("fe::StandardAction::Edit").setVisible(false)
					this.getView().byId("fe::StandardAction::Edit").setEnabled(false)
                }
            });
				}
			}
		}
	});
});
