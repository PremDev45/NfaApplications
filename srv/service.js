const { event } = require('@sap/cds');
const { test } = require('@sap/cds');
const cds = require('@sap/cds');
const { elements } = require('@sap/cds/lib/ql/cds.ql-infer');
module.exports = cds.service.impl(async function () {
    let {
        NfaDetails, NfaAttachments, NfaWorkflowHistory, NfaCommentsHistory, NfaVendorData, NfaEventHistory, NfaVendorItemsDetails
    } = this.entities;
    const BPA_API_KEY = process.env.API_KEY_BPA || "zjfsmNA7qc4m8kVaNyUkM7LIvaS9f9bw";
    ///dhanush gangatkar



    const DocumentBase = {
        securityMaterial: "AribaEvents",
        query: "realm=PEOLSOLUTIONSDSAPP-T&user=puser1&apikey=RuU300xzEClMIpw8UBalRGERG9LQZcHG&passwordAdapter=PasswordAdapter1"
    };

    const AttachmentContentUrlBase = {
        securityMaterial: "AribaEvents",
        query: "fieldId=<fieldId>&realm=PEOLSOLUTIONSDSAPP-T&user=puser1&passwordAdapter=PasswordAdapter1&alternativeId=<alternativeId>&itemId=<itemId>&apikey=RuU300xzEClMIpw8UBalRGERG9LQZcHG"
    };

    var AttachmentsUrl = "https://openapi.au.cloud.ariba.com/api/sourcing-event/v2/prod/events/<docId>/supplierBids/<invitationId>"


    var AttachmentContentUrl = "https://openapi.au.cloud.ariba.com/api/sourcing-event/v2/prod/events/<eventId>/supplierBids/<invitationId>/attachments/<attachmentId>/content"
    this.on('getHrJob', async function (req) {
        //debugger

        let docId = "Doc85279386";
        let invitationId = "ACM_757720";

        // let docId = req.data.NfaNumber
        // let invitationId = req.data.invitationId;



        var NfaAriba = await cds.connect.to("NfaAriba");
        var NfaAribaAttachmnet = await cds.connect.to("NfaAribaAttachmnet");
        var AttachmentsUrlBody = {
            ...DocumentBase,
            // url: AttachmentsUrl.replace("<docId>", req.data.NfaNumber)
            url: AttachmentsUrl
                .replace("<docId>", docId)
                .replace("<invitationId>", invitationId)
            // url: "https://openapi.au.cloud.ariba.com/api/sourcing-event/v2/prod/events/Doc85279386/supplierBids/ACM_757720"
        }
        // console.log("SourcingProjectDocsBody", SourcingProjectDocsBody)
        var AttachmentsUrlResult = await NfaAriba.post('/', AttachmentsUrlBody);



        const hrArray = [];

        AttachmentsUrlResult.payload.forEach(payloadItem => {
            if (payloadItem.item?.title === "HR Clearance Certificates") {
                const term = payloadItem.item.terms?.find(t => t.title === "HR Clearance Certificates");

                if (term?.value?.attachmentValue?.id) {
                    hrArray.push({
                        attachmentId: term.value.attachmentValue.id,
                        fieldId: term.fieldId,
                        alternativeId: payloadItem.alternativeId,
                        itemId: payloadItem.item.itemId
                    });
                }
            }
        });

        console.log(hrArray);

        for (const item of hrArray) {
            const AttachmentsContentUrlBody = {
                url: AttachmentContentUrl
                    .replace("<eventId>", docId)       // replace eventId
                    .replace("<invitationId>", invitationId) // replace invitationId
                    .replace("<attachmentId>", item.attachmentId), // replace attachmentId
                query: AttachmentContentUrlBase.query
                    .replace("<fieldId>", item.fieldId)
                    .replace("<alternativeId>", item.alternativeId)
                    .replace("<itemId>", item.itemId),
                securityMaterial: AttachmentContentUrlBase.securityMaterial


            };

            debugger
            // Call API for each attachment
            let AttachmentContentUrlResult = await NfaAribaAttachmnet.post('/', AttachmentsContentUrlBody);


            return AttachmentContentUrlResult;













        }

    });

   
    this.on('getJobClearanceCertificate', async function (req) {
        //debugger

        let docId = "Doc85279386";
        let invitationId = "ACM_757720";

        // let docId = req.data.NfaNumber
        // let invitationId = req.data.invitationId;



        var NfaAriba = await cds.connect.to("NfaAriba");
        var NfaAribaAttachmnet = await cds.connect.to("NfaAribaAttachmnet");
        var AttachmentsUrlBody = {
            ...DocumentBase,
            // url: AttachmentsUrl.replace("<docId>", req.data.NfaNumber)
            url: AttachmentsUrl
                .replace("<docId>", docId)
                .replace("<invitationId>", invitationId)
            // url: "https://openapi.au.cloud.ariba.com/api/sourcing-event/v2/prod/events/Doc85279386/supplierBids/ACM_757720"
        }
        // console.log("SourcingProjectDocsBody", SourcingProjectDocsBody)
        var AttachmentsUrlResult = await NfaAriba.post('/', AttachmentsUrlBody);



        const hrArray = [];

        AttachmentsUrlResult.payload.forEach(payloadItem => {
            if (payloadItem.item?.title === "Job Clearance Certificates") {
                const term = payloadItem.item.terms?.find(t => t.title === "Job Clearance Certificates");

                if (term?.value?.attachmentValue?.id) {
                    hrArray.push({
                        attachmentId: term.value.attachmentValue.id,
                        fieldId: term.fieldId,
                        alternativeId: payloadItem.alternativeId,
                        itemId: payloadItem.item.itemId
                    });
                }
            }
        });

        console.log(hrArray);

        for (const item of hrArray) {
            const AttachmentsContentUrlBody = {
                url: AttachmentContentUrl
                    .replace("<eventId>", docId)       // replace eventId
                    .replace("<invitationId>", invitationId) // replace invitationId
                    .replace("<attachmentId>", item.attachmentId), // replace attachmentId
                query: AttachmentContentUrlBase.query
                    .replace("<fieldId>", item.fieldId)
                    .replace("<alternativeId>", item.alternativeId)
                    .replace("<itemId>", item.itemId),
                securityMaterial: AttachmentContentUrlBase.securityMaterial


            };

            // Call API for each attachment
            let AttachmentContentUrlResult = await NfaAribaAttachmnet.post('/', AttachmentsContentUrlBody);
            debugger
            return AttachmentContentUrlResult;





            // console.log("AttachmentsUrlResult", AttachmentsUrlResult);



        }

    });
    this.on('getInsurance', async function (req) {
        //debugger

        let docId = "Doc85279386";
        let invitationId = "ACM_757720";

        // let docId = req.data.NfaNumber
        // let invitationId = req.data.invitationId;



        var NfaAriba = await cds.connect.to("NfaAriba");
        var NfaAribaAttachmnet = await cds.connect.to("NfaAribaAttachmnet");
        var AttachmentsUrlBody = {
            ...DocumentBase,
            // url: AttachmentsUrl.replace("<docId>", req.data.NfaNumber)
            url: AttachmentsUrl
                .replace("<docId>", docId)
                .replace("<invitationId>", invitationId)
            // url: "https://openapi.au.cloud.ariba.com/api/sourcing-event/v2/prod/events/Doc85279386/supplierBids/ACM_757720"
        }
        // console.log("SourcingProjectDocsBody", SourcingProjectDocsBody)
        var AttachmentsUrlResult = await NfaAriba.post('/', AttachmentsUrlBody);



        const hrArray = [];

        AttachmentsUrlResult.payload.forEach(payloadItem => {
            if (payloadItem.item?.title === "Insurance") {
                const term = payloadItem.item.terms?.find(t => t.title === "Insurance");

                if (term?.value?.attachmentValue?.id) {
                    hrArray.push({
                        attachmentId: term.value.attachmentValue.id,
                        fieldId: term.fieldId,
                        alternativeId: payloadItem.alternativeId,
                        itemId: payloadItem.item.itemId
                    });
                }
            }
        });

        console.log(hrArray);

        for (const item of hrArray) {
            const AttachmentsContentUrlBody = {
                url: AttachmentContentUrl
                    .replace("<eventId>", docId)       // replace eventId
                    .replace("<invitationId>", invitationId) // replace invitationId
                    .replace("<attachmentId>", item.attachmentId), // replace attachmentId
                query: AttachmentContentUrlBase.query
                    .replace("<fieldId>", item.fieldId)
                    .replace("<alternativeId>", item.alternativeId)
                    .replace("<itemId>", item.itemId),
                securityMaterial: AttachmentContentUrlBase.securityMaterial


            };

            // Call API for each attachment
            let AttachmentContentUrlResult = await NfaAribaAttachmnet.post('/', AttachmentsContentUrlBody);
            debugger
            return AttachmentContentUrlResult;





            // console.log("AttachmentsUrlResult", AttachmentsUrlResult);



        }

    });

     this.on('getVendorData', async function (req) {
        console.log("reqxssssssssssssxxssxxssx");
        let { NfaNumber, ProposedVendorCode, round } = req.data;
        const vendorData = await SELECT.from(NfaVendorData).where({
            NfaNumber: NfaNumber,
            ProposedVendorCode: ProposedVendorCode,
            round: round
        })
        console.log("reqxssssssssssssxxssxxssxpppppppppppppp",vendorData);
        return JSON.stringify(vendorData);

    })

    this.before('READ', NfaEventHistory, async function (req) {
        // ////debugger

        if (req.data.NfaNumber) {
            let maxround = await SELECT.from(NfaDetails).where({ NfaNumber: req.data.NfaNumber });
            let finalAwardees = await SELECT.from(NfaVendorData).where({ NfaNumber: req.data.NfaNumber, AwardedVendor: 'Yes', round: maxround[0].maxRound });
            var eventData = [];
            await finalAwardees.forEach(async element => {
                let body = {
                    round: maxround[0].maxRound,
                    NfaNumber: req.data.NfaNumber,
                    idd: element.VendorName,
                    Date: '',
                    L1AmountObtained: element.OrderAmountOrSplitOrderAmount
                };
                eventData.push(body);
            });
            if (maxround[0].maxRound != 1) {
                let firstAwardees = await SELECT.from(NfaVendorItemsDetails).where({ NfaNumber: req.data.NfaNumber, Rank: '1', round: 1 });
                let firstAwardeesres = [];
                await firstAwardees.forEach(async element => {
                    const index = firstAwardeesres.findIndex(item => item.ProposedVendorCode === element.ProposedVendorCode);

                    if (index !== -1) {
                        firstAwardeesres[index].R1amt = (parseFloat(firstAwardeesres[index].R1amt) + (parseFloat(element.UnitPrice) * parseFloat(element.Quantity))).toString();
                    } else {
                        element.R1amt = (parseFloat(element.UnitPrice) * parseFloat(element.Quantity)).toString();
                        firstAwardeesres.push(element);
                    }
                });
                for (const element of firstAwardeesres) {
                    // ////debugger;
                    let VendorName = await SELECT.one.from(NfaVendorData)
                        .where({ ProposedVendorCode: element.ProposedVendorCode });

                    let body = {
                        round: 1,
                        NfaNumber: req.data.NfaNumber,
                        idd: VendorName.VendorName,
                        Date: '',
                        L1AmountObtained: element.R1amt
                    };

                    eventData.push(body);
                }

                let updateres = await UPSERT.into(NfaEventHistory, eventData);
            } else {
                let updateres = await UPSERT.into(NfaEventHistory, eventData);
                console.log(updateres)
            }

        }
    });
    this.before('READ', NfaVendorData, async function (req) {
        //debugger
        if (req.data.NfaNumber) {
            let maxround = await SELECT.from(NfaDetails).where({ NfaNumber: req.data.NfaNumber });
            req.query.where({ round: maxround[0].maxRound });
        }
    });
    this.before('READ', 'NfaVendorData.drafts', async function (req) {
        //debugger
        if (req.data.NfaNumber) {
            let maxround = await SELECT.from(NfaDetails.drafts).where({ NfaNumber: req.data.NfaNumber });
            req.query.where({ round: maxround[0].maxRound });
        }
    });
    this.on('ApproversAction', async function (req) {
        ////debugger

        const BpaDest = await cds.connect.to("NfaBpaDestLev");

        console.log(req);
        if (req.data.Action == 'Approve') {
            let nfadetupd = await SELECT.from(NfaDetails, req.data.NfaNumber);
            await INSERT({ NfaNumber: req.data.NfaNumber, Comments: nfadetupd.Comments }).into(NfaCommentsHistory);

            let currentApprovers = await SELECT.from(NfaWorkflowHistory).where({ NfaNumber: req.data.NfaNumber, Status: 'Pending' });
            const diffTime = new Date() - new Date(currentApprovers[0].createdAt);
            let DaysTaken = Math.floor(diffTime / (1000 * 60 * 60 * 24)).toString();
            let currentApproversUpdBody = {
                ApprovedBy: req.user.id,
                Status: 'Approved',
                DaysTaken: DaysTaken
            }
            await UPDATE(NfaWorkflowHistory).set(currentApproversUpdBody).where({ level: currentApprovers[0].level, NfaNumber: req.data.NfaNumber })
            let updateNextAprovers = await UPDATE(NfaWorkflowHistory).set({ Status: 'Pending' }).where({ level: currentApprovers[0].level + 1, NfaNumber: req.data.NfaNumber });
            if (!updateNextAprovers) {
                await UPDATE(NfaDetails, req.data.NfaNumber).with({ Status: 'Approved', Comments: null })
                const body = {
                    "executionId": nfadetupd.WorkFlowId,
                    "inputs": {
                        "nextlevel": 0,
                        "proceed": false
                    }
                };
                const BpaRes = await BpaDest.post('/', body);
                console.log(BpaRes);
            } else {
                await UPDATE(NfaDetails, req.data.NfaNumber).with({ Comments: null });
                const body = {

                    "executionId": nfadetupd.WorkFlowId,
                    "inputs": {
                        "nextlevel": currentApprovers[0].level + 1,
                        "proceed": true
                    }
                };
                // const BpaRes = await BpaDest.send({
                //   method: "POST",
                //   url: "/unified/v1/triggers/api/us10.b201b415trial.nfabpa.nextLevel",
                //   body: body,
                //    headers: {
                //     "Content-Type": "application/json"
                //   }
                // });
                const BpaRes = await BpaDest.post('/', body);
                console.log(BpaRes);
            }
            return "Done"
        } else if (req.data.Action == 'Reject') {
            let nfadetupd = await SELECT.from(NfaDetails, req.data.NfaNumber);
            await INSERT({ NfaNumber: req.data.NfaNumber, Comments: nfadetupd.Comments }).into(NfaCommentsHistory);
            let currentApprovers = await SELECT.from(NfaWorkflowHistory).where({ NfaNumber: req.data.NfaNumber, Status: 'Pending' });
            let diffTime = new Date() - new Date(currentApprovers[0].createdAt);
            let DaysTaken = Math.floor(diffTime / (1000 * 60 * 60 * 24)).toString();
            let currentApproversUpdBody = {
                ApprovedBy: req.user.id,
                Status: 'Rejected',
                DaysTaken: DaysTaken
            }
            await UPDATE(NfaWorkflowHistory).set(currentApproversUpdBody).where({ level: currentApprovers[0].level, NfaNumber: req.data.NfaNumber })
            await UPDATE(NfaDetails, req.data.NfaNumber).with({ Status: 'Rejected', Comments: null })
            const body = {
                "executionId": nfadetupd.WorkFlowId,
                "inputs": {
                    "nextlevel": 0,
                    "proceed": false
                }
            };
            const BpaRes = await BpaDest.post('/', body);
            console.log(BpaRes);
            return "Done"
        } else if (req.data.Action == 'Need For Clarification') {
            let nfadetupd = await SELECT.from(NfaDetails, req.data.NfaNumber);
            await INSERT({ NfaNumber: req.data.NfaNumber, Comments: nfadetupd.Comments }).into(NfaCommentsHistory);
            await UPDATE(NfaDetails, req.data.NfaNumber).with({ Status: 'Need For Clarification', Comments: null })
            return "Done"
        }
    });
    this.on('sendForApproval', async function (req) {
        ////debugger
        try {
            let nfadetupd = await SELECT.from(NfaDetails, req.data.NfaNumber);
            await INSERT({ NfaNumber: req.data.NfaNumber, Comments: nfadetupd.Comments }).into(NfaCommentsHistory);
            if (nfadetupd.Status == 'New') {
                ////debugger
                const BpaDest = await cds.connect.to("NfaBpaDest");
                const body = {
                    "definitionId": "us10.b201b415trial.nfabpa.nFABA",
                    "context": {
                        "nfanumber": req.data.NfaNumber,
                        "proceed": true
                    }
                }
                const BpaRes = await BpaDest.post('/workflow/rest/v1/workflow-instances', body);



                await UPDATE(NfaDetails, req.data.NfaNumber).with({ Status: 'Pending For Approval', Comments: null, WorkFlowId: BpaRes.id });
                await UPDATE(NfaWorkflowHistory).set({ Status: "Pending" }).where({ NfaNumber: req.data.NfaNumber, level: 1 });
            } else {
                await UPDATE(NfaDetails, req.data.NfaNumber).with({ Status: 'Pending For Approval', Comments: null });
            }

            return true;
        } catch (error) {
            return false;
        }

    });
    this.on('validateBeforeSendForApproval', async function (req) {
        ////debugger
        let ErrorMsgs = [];
        let NfaNumber = req.data.NfaNumber;
        let NfaDetailsData = await SELECT.from(NfaDetails, NfaNumber);
        if (!NfaDetailsData.Comments) {
            ErrorMsgs.push('Please enter Comments before sending for approval.');
        }
        return JSON.stringify(ErrorMsgs);
    })
    this.after('READ', NfaDetails, async (req) => {
        ////debugger
        req.forEach(element => {
            if (element.Status == 'Need For Clarification')
                element.StatusInd = 2;
            else if (element.Status == 'Approved')
                element.StatusInd = 3;
            else if (element.Status == 'Rejected')
                element.StatusInd = 1;
            else if (element.Status == "Pending For Approval")
                element.StatusInd = 0;
            else if (element.Status == "New")
                element.StatusInd = 0;
        });
    });
    this.before('READ', NfaAttachments, async function (req) {
        ////debugger
    })
    this.after('READ', NfaAttachments, async function (req, req1) {
        ////debugger
        console.log("reqqqq", req)
        req.forEach(element => {
            if (this.path == "/odata/v4/nfa-approval")
                element.Url = `${this.path}/NfaAttachments(ID=${element.ID},NfaNumber='${element.NfaNumber}')/Content`;
            else
                element.Url = `${this.path}/NfaAttachments(ID=${element.ID},IsActiveEntity=true,NfaNumber='${element.NfaNumber}')/Content`;
            console.log("urlllllllllllll", element.Url)
        });

    });
    this.after('READ', 'NfaAttachments.drafts', async (attachments, req) => {
        ////debugger
        attachments.forEach(element => {
            element.Url = `${this.path}/NfaAttachments(ID=${element.ID},IsActiveEntity=false,NfaNumber='${element.NfaNumber}')/Content`;
        });
    });

    ///dhanush gangatkar




    this.on('getbpa', async (req) => {
        // const BpaDest = await cds.connect.to("NfaBpaDest");
        // const body = {
        //     "definitionId": "us10.b201b415trial.nfabpa.nFABA",
        //     "context": {
        //         "nfanumber": "Doc112233",
        //         "proceed": true
        //     }
        // }
        // // const meta = await BpaDest.get('/workflow/rest/v1/workflow-instances');
        // const meta = await BpaDest.post('/workflow/rest/v1/workflow-instances',body);
        // console.log();

        const BpaDest2 = await cds.connect.to("NfaBpaDestLev2");
        const body = {
            "executionId": "48c12e5e-921a-11f0-ba09-eeee0a94f635",
            "inputs": {
                "nextlevel": 0,
                "proceed": true
            }
        }
        // const meta = await BpaDest2.post('/unified/v1/triggers/api/us10.b201b415trial.nfabpa.nextLevel',body);
        const meta = await BpaDest2.send({
            method: 'POST', path: '/unified/v1/triggers/api/us10.b201b415trial.nfabpa.nextLevel',
            headers: {
                'APIKey': process.env.API_KEY_BPA
            },
            data: body
        })
    });

})

