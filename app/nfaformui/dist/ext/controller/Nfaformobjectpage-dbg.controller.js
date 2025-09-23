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
			} ,  routing: {
                onBeforeBinding: async function (oEvent) {
					debugger
					let attach = this.getView().byId("nfaformui::NfaDetailsObjectPage--fe::CustomSubSection::Attachments--uploadSet");
					  const sPath = oEvent.getPath();

                    const match = sPath.match(/IsActiveEntity=(true|false)/);

                    if (match) {  
						if (match[1]=='true') {
                            debugger
                            attach.setUploadEnabled(false)
                            // textarea.setEditable(false)
                            // attach.getItems().forEach(item => {
                            //     item.setEnabledRemove(false);
                            //     item.setVisibleRemove(false);
                            // })
                        }
                        else  {
                            debugger
                            attach.setUploadEnabled(true)
                            // textarea.setEditable(true)
                            // attach.getItems().forEach(item => {
                            //     item.setEnabledRemove(true);
                            //     item.setVisibleRemove(true);
                            // })
                        }
					}   
					
				}
			}
		}
	});
});
