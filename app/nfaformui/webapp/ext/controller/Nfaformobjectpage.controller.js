sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('nfaformui.ext.controller.Nfaformobjectpage', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf nfaformui.ext.controller.Nfaformobjectpage
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			} ,   onBeforeRendering: function () {
			debugger
			sap.ui.getCore().byId("nfaformui::NfaDetailsObjectPage--fe::FooterBar::CustomAction::SendForApproval").setType("Success");
			sap.ui.getCore().byId("nfaformui::NfaDetailsObjectPage--fe::FooterBar::CustomAction::SendForApproval").setIcon("sap-icon://paper-plane");
        },  routing: {
                onAfterBinding: async function (oEvent) {
					debugger
					oEvent.requestObject().then((oData) => {
                debugger
						if (!oData) return;

                if (oData.Status == "Need For Clarification" ||oData.Status == "New") {
					if(oData.IsActiveEntity==false)
					sap.ui.getCore().byId("nfaformui::NfaDetailsObjectPage--fe::FooterBar::CustomAction::SendForApproval").setVisible(false);
					else if(oData.IsActiveEntity==true)
					sap.ui.getCore().byId("nfaformui::NfaDetailsObjectPage--fe::FooterBar::CustomAction::SendForApproval").setVisible(true);
                    this.getView().byId("fe::StandardAction::Edit").setVisible(true)
					this.getView().byId("fe::StandardAction::Edit").setEnabled(true)
                } else {
					sap.ui.getCore().byId("nfaformui::NfaDetailsObjectPage--fe::FooterBar::CustomAction::SendForApproval").getParent().setVisible(false);
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
