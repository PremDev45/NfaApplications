sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
		
              onAfterItemAdded:async function(oEvent) {
			debugger
		var item = oEvent.getParameter("item");
			let oFile = oEvent.getParameter("item").getFileObject();
let oList = this.getRouting().getView()
    .getBindingContext()
    .getModel()
    .bindList("NfaDetailsToNfaAttachments", this.getRouting().getView().getBindingContext());
let oContext = oList.create({
    FileName: oFile.name,
    Size: oFile.size,
    MediaType: oFile.type
}, true); // deferred creation
console.log("Context created:", oContext);
oContext.created().then(() => {
	debugger
    let oData = oContext.getObject();   // now contains ID + metadata
    // var url = baseuri + `odata/v4/catalog/attachments(ID=${id},PAN_Number='${panNumber}')/content`;
					var url = oContext.getModel().getServiceUrl() + oContext.getPath().slice(1)+"/Content";
					debugger
					item.setUploadUrl(url);
					var oUploadSet = this.byId("uploadSet");
					oUploadSet.uploadItem(item);
}).catch((oError) => {
	debugger
    console.error("Error during create:", oError);
    sap.m.MessageToast.show("Error: " + oError.message);
});
		},
		onUploadCompleted:async function (oEvent) {
				debugger
				var oUploadSet = this.byId("uploadSet");
				setTimeout(async () => {
					await oUploadSet.getBindingContext().getBinding().refresh()
				}, 2000);
				await oUploadSet.getBindingContext().getBinding().refresh()
			},
				onRemovePressed: function (oEvent) {
				debugger
				oEvent.preventDefault();
				if(!this.getBindingContext().getObject().IsActiveEntity){
				// oEvent.preventDefault();
				oEvent.getParameter("item").getBindingContext().delete();
				MessageToast.show("Selected file has been deleted");
				oEvent.getParameter("item").destroy();
				}
				
			},
			formatThumbnailUrl: function (mediaType) {
				var iconUrl;
				switch (mediaType) {
					case "image/png":
						iconUrl = "sap-icon://card";
						break;
					case "text/plain":
						iconUrl = "sap-icon://document-text";
						break;
					case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
						iconUrl = "sap-icon://excel-attachment";
						break;
					case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
						iconUrl = "sap-icon://doc-attachment";
						break;
					case "application/pdf":
						iconUrl = "sap-icon://pdf-attachment";
						break;
					default:
						iconUrl = "sap-icon://attachment";
				}
				return iconUrl;
			}
    };
});
