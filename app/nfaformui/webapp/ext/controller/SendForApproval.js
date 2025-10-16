sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        SendForApproval: async function (oEvent) {
            debugger
            let oname = 'validateBeforeSendForApproval';
            let oFunction = oEvent.getModel().bindContext(`/${oname}(...)`);
            oFunction.setParameter("NfaNumber", oEvent.getObject().NfaNumber);
            await oFunction.execute();
            let oContext1 = oFunction.getBoundContext();
            let result1 = oContext1.getObject();
            result1 = JSON.parse(result1.value);

            if (result1.length) {
                // let oFooterToolbar =  sap.ui.getCore().byId("nfaformui::NfaDetailsObjectPage").getContent()[0].getFooter().getContent();

                let oVBox = new sap.m.VBox({
                    height: "auto",
                    style: "margin-bottom: 10px;",
                    items: result1.map(el => new sap.m.MessageStrip({ text: el, showCloseButton: true, type: "Information", showIcon: true, type: "Error" }))
                });
                // oFooterToolbar.addContent(oVBox);

                let oDialog = new sap.m.Dialog({
                    title: "Error Messages",
                    contentWidth: "400px",
                    type: sap.m.DialogType.Message,
                    state: sap.ui.core.ValueState.Error,
                    content: oVBox,   // add all MessageStrips
                    beginButton: new sap.m.Button({
                        text: "Close",
                        press: function () {
                            oDialog.close();
                        }
                    }),
                    afterClose: function () {
                        oDialog.destroy(); // clean up
                    }
                });
                oDialog.open();
            } else {
                let oDialog = new sap.m.Dialog({
                    title: "Warning",
                    contentWidth: "400px",
                    type: sap.m.DialogType.Message,
                    state: sap.ui.core.ValueState.Warning,
                    content: new sap.m.Text({ text: "Sending this for approval is final. Are you sure you want to proceed?" }),
                    beginButton: new sap.m.Button({
                        type: sap.m.ButtonType.Emphasized,
                        text: "OK",
                        press: async function () {
                            debugger
                            let oname = 'sendForApproval';
                            let oFunction = oEvent.getModel().bindContext(`/${oname}(...)`);
                            oFunction.setParameter("NfaNumber", oEvent.getObject().NfaNumber);
                            await oFunction.execute();
                            let oContext1 = oFunction.getBoundContext();
                            let result1 = oContext1.getObject();
                            oDialog.close();
                            MessageToast.show("Successfully submitted for approval.");
                            window.location.reload()

                        }
                    }),
                    endButton: new sap.m.Button({
                        text: "Cancel",
                        press: function () {
                            debugger
                            oDialog.close();
                            MessageToast.show("Approval request not sent.");
                        }
                    })
                });
                oDialog.open();
            }


        }
    };
});
