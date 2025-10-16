sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('nfaapproval.ext.controller.ObjectPage', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf nfaapproval.ext.controller.ObjectPage
			 */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			onAfterRendering: function (oEvent) {
				debugger
				// sap.ui.getCore().byId("nfaapproval::NfaDetailsObjectPage--fe::FormContainer::Justification::FormElement::DataField::Comments").getFields()[0].getContentEdit()[0].setEditable(true);
				sap.ui.getCore().byId("nfaapproval::NfaDetailsObjectPage--fe::FooterBar::CustomAction::Approve").setType("Success");
				sap.ui.getCore().byId("nfaapproval::NfaDetailsObjectPage--fe::FooterBar::CustomAction::Reject").setType("Negative");
				sap.ui.getCore().byId("nfaapproval::NfaDetailsObjectPage--fe::FooterBar::CustomAction::NedForClarification").setType("Critical");
			},
			routing: {
				onBeforeBinding: async function (oEvent) {
					debugger
					// if you want multiline instead of Input:
					let oTextArea = new sap.m.TextArea({
						value: "{Comments}",
						rows: 5,
						width: "100%",
						editable: true,
						placeholder: "Enter your justification..."
					});

					// now place it where you want
					let oFormContainer = sap.ui.getCore().byId("nfaapproval::NfaDetailsObjectPage--fe::FormContainer::Justification");

					// inject into form container (example)
					if (oFormContainer) {
						oFormContainer.addContent(oTextArea);   // or oInput
					}
				}
			}
		}
	});
});
