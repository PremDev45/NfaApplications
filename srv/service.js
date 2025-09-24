const cds = require('@sap/cds');
module.exports = cds.service.impl(async function () {
    let {
        NfaDetails,NfaAttachments,NfaWorkflowHistory,NfaCommentsHistory
    } = this.entities;
    const BPA_API_KEY = process.env.API_KEY_BPA || "zjfsmNA7qc4m8kVaNyUkM7LIvaS9f9bw";
///dhanush gangatkar
this.on('ApproversAction',async function (req) {
    debugger

    const BpaDest = await cds.connect.to("NfaBpaDestLev");

    console.log(req);
    if(req.data.Action == 'Approve'){
        let nfadetupd =await SELECT.from(NfaDetails,req.data.NfaNumber);
    await INSERT({NfaNumber:req.data.NfaNumber,Comments:nfadetupd.Comments}).into(NfaCommentsHistory);
    
        let currentApprovers =await  SELECT.from(NfaWorkflowHistory).where({NfaNumber:req.data.NfaNumber,Status:'Pending'});
         const diffTime = new Date() - new Date(currentApprovers[0].createdAt);
         let DaysTaken=Math.floor(diffTime / (1000 * 60 * 60 * 24)).toString();
         let currentApproversUpdBody = {ApprovedBy:req.user.id,
             Status:'Approved' ,
             DaysTaken:DaysTaken}
        await UPDATE(NfaWorkflowHistory).set(currentApproversUpdBody).where({level:currentApprovers[0].level,NfaNumber:req.data.NfaNumber})
        let updateNextAprovers =await UPDATE(NfaWorkflowHistory).set({Status:'Pending'}).where({level:currentApprovers[0].level+1,NfaNumber:req.data.NfaNumber});
        if(!updateNextAprovers){
            await UPDATE(NfaDetails,req.data.NfaNumber).with({Status:'Approved',Comments:null})
            const body = {
    "executionId": nfadetupd.WorkFlowId,
    "inputs": {
        "nextlevel": 0,
        "proceed": false
    }
};
const BpaRes = await BpaDest.post('/',body);
console.log(BpaRes);
        }else{
            await UPDATE(NfaDetails,req.data.NfaNumber).with({Comments:null});
             const body = {
               
    "executionId": nfadetupd.WorkFlowId,
    "inputs": {
        "nextlevel": currentApprovers[0].level+1,
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
const BpaRes = await BpaDest.post('/',body);
console.log(BpaRes);
        }
        return "Done"
    }else if(req.data.Action == 'Reject'){
          let nfadetupd =await SELECT.from(NfaDetails,req.data.NfaNumber);
    await INSERT({NfaNumber:req.data.NfaNumber,Comments:nfadetupd.Comments}).into(NfaCommentsHistory);
let currentApprovers =await  SELECT.from(NfaWorkflowHistory).where({NfaNumber:req.data.NfaNumber,Status:'Pending'});
         let diffTime = new Date() - new Date(currentApprovers[0].createdAt);
        let DaysTaken=Math.floor(diffTime / (1000 * 60 * 60 * 24)).toString();
         let currentApproversUpdBody = {ApprovedBy:req.user.id,
             Status:'Rejected' ,
             DaysTaken:DaysTaken }
        await UPDATE(NfaWorkflowHistory).set(currentApproversUpdBody).where({level:currentApprovers[0].level,NfaNumber:req.data.NfaNumber})
        await UPDATE(NfaDetails,req.data.NfaNumber).with({Status:'Rejected',Comments:null})
         const body = {
    "executionId": nfadetupd.WorkFlowId,
    "inputs": {
        "nextlevel": 0,
        "proceed": false
    }
};
const BpaRes = await BpaDest.post('/',body);
console.log(BpaRes);
        return "Done"
    }else if(req.data.Action == 'Need For Clarification'){
let nfadetupd =await SELECT.from(NfaDetails,req.data.NfaNumber);
    await INSERT({NfaNumber:req.data.NfaNumber,Comments:nfadetupd.Comments}).into(NfaCommentsHistory);
    await UPDATE(NfaDetails,req.data.NfaNumber).with({Status:'Need For Clarification',Comments:null})
        return "Done"
}
});
this.on('sendForApproval',async function (req) {
debugger
    try {
         let nfadetupd =await SELECT.from(NfaDetails,req.data.NfaNumber);
    await INSERT({NfaNumber:req.data.NfaNumber,Comments:nfadetupd.Comments}).into(NfaCommentsHistory);
    if(nfadetupd.Status == 'New'){
debugger
 const BpaDest = await cds.connect.to("NfaBpaDest");
        const body = {
    "definitionId": "us10.b201b415trial.nfabpa.nFABA",
    "context": {
        "nfanumber": req.data.NfaNumber,
        "proceed": true
    }
}
        const BpaRes = await BpaDest.post('/workflow/rest/v1/workflow-instances',body);
           


await UPDATE(NfaDetails,req.data.NfaNumber).with({Status:'Pending For Approval',Comments:null,WorkFlowId:BpaRes.id});
    await UPDATE(NfaWorkflowHistory).set({ Status: "Pending" }).where({NfaNumber:req.data.NfaNumber,level:1});
    }else{
await UPDATE(NfaDetails,req.data.NfaNumber).with({Status:'Pending For Approval',Comments:null});
    }
    
    return true;
    } catch (error) {
        return false;
    }
   
});
this.on('validateBeforeSendForApproval',async function (req) {
    debugger
    let ErrorMsgs=[];
    let NfaNumber= req.data.NfaNumber;
    let NfaDetailsData =await SELECT.from(NfaDetails,NfaNumber);
    if(!NfaDetailsData.Comments){
        ErrorMsgs.push('Please enter Comments before sending for approval.');
    }
    return JSON.stringify(ErrorMsgs);
})    
this.after( 'READ',NfaDetails, async (req) => {
        // debugger
         req.forEach(element => {
            if(element.Status == 'Need For Clarification')
           element.StatusInd=2;
        else if(element.Status == 'Approved')
           element.StatusInd=3;
        else if(element.Status == 'Rejected')
           element.StatusInd=1;
        else if(element.Status == "Pending For Approval")
            element.StatusInd=0;
        else if(element.Status == "New")
            element.StatusInd=0;
        });
    });
    this.after( 'READ',NfaAttachments, async (req,req1) => {
        debugger
        req.forEach(element => {
            if(this.path == "/odata/v4/nfa-approval")
           element.Url=`${this.path}/NfaAttachments(ID=${element.ID},NfaNumber='${element.NfaNumber}')/Content`; 
        else
        element.Url=`${this.path}/NfaAttachments(ID=${element.ID},IsActiveEntity=true,NfaNumber='${element.NfaNumber}')/Content`; 
        });
    });
    this.after('READ','NfaAttachments.drafts', async (attachments, req) => {
        debugger
          attachments.forEach(element => {
           element.Url=`${this.path}/NfaAttachments(ID=${element.ID},IsActiveEntity=false,NfaNumber='${element.NfaNumber}')/Content`; 
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

