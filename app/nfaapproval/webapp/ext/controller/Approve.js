sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';
    function validateComments() {
        debugger
        if (sap.ui.getCore().byId("nfaapproval::NfaDetailsObjectPage--fe::CustomSubSection::Justification1--GenTextArea").getValue() == "") {
            let msgStrip = new sap.m.MessageStrip({ text: 'Please enter Comments before any Action.', showCloseButton: true, type: "Information", showIcon: true, type: "Error" });
            let oDialog = new sap.m.Dialog({
                title: "Error Messages",
                contentWidth: "400px",
                type: sap.m.DialogType.Message,
                state: sap.ui.core.ValueState.Error,
                content: msgStrip,
                beginButton: new sap.m.Button({
                    text: "Close",
                    press: function () {
                        oDialog.close();
                    }
                }),
                afterClose: function () {
                    oDialog.destroy();
                }
            });
            oDialog.open();
            return false;
        }
        return true;
    }
    return {

        Approve: async function (oEvent) {
            debugger

            if (validateComments()) {
                sap.ui.core.BusyIndicator.show(0);
                let oname = 'ApproversAction';
                let oFunction = oEvent.getModel().bindContext(`/${oname}(...)`);
                oFunction.setParameter("NfaNumber", oEvent.getObject().NfaNumber);
                oFunction.setParameter("Action", "Approve");
                await oFunction.execute();
                let oContext1 = oFunction.getBoundContext();
                let result1 = oContext1.getObject();
                // result1=JSON.parse(result1.value);

                MessageToast.show("Custom handler invoked.");
                window.history.back();
                setTimeout(() => {
                    location.reload();
                    sap.ui.core.BusyIndicator.hide();
                }, 500);

                return

            }


        },
        Reject: async function (oEvent) {
            debugger

            if (validateComments()) {
                sap.ui.core.BusyIndicator.show(0);
                let oname = 'ApproversAction';
                let oFunction = oEvent.getModel().bindContext(`/${oname}(...)`);
                oFunction.setParameter("NfaNumber", oEvent.getObject().NfaNumber);
                oFunction.setParameter("Action", "Reject");
                await oFunction.execute();
                let oContext1 = oFunction.getBoundContext();
                let result1 = oContext1.getObject();
                // result1=JSON.parse(result1.value);
                // window.history.go(-1);

                MessageToast.show("Custom handler invoked.");
                window.history.back();
                setTimeout(() => {
                    location.reload();
                    sap.ui.core.BusyIndicator.hide();
                }, 500);
                return
            }
        },
        NedForClarification: async function (oEvent) {
            debugger

            if (validateComments()) {
                sap.ui.core.BusyIndicator.show(0);
                let oname = 'ApproversAction';
                let oFunction = oEvent.getModel().bindContext(`/${oname}(...)`);
                oFunction.setParameter("NfaNumber", oEvent.getObject().NfaNumber);
                oFunction.setParameter("Action", "Need For Clarification");
                await oFunction.execute();
                let oContext1 = oFunction.getBoundContext();
                let result1 = oContext1.getObject();
                // result1=JSON.parse(result1.value);
                // window.history.go(-1);


                MessageToast.show("Custom handler invoked.");
                window.history.back();
                setTimeout(() => {
                    location.reload();
                    sap.ui.core.BusyIndicator.hide();
                }, 500);
                return
            }
        }
    };
});
