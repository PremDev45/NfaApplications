const cds = require('@sap/cds');
module.exports = cds.service.impl(async function () {
    let {
        NfaDetails
    } = this.entities;

    this.on('getbpa', async (req) => {
        const BpaDest = await cds.connect.to("NfaBpaDest");
        const body = {
            "definitionId": "us10.b201b415trial.nfabpa.nFABA",
            "context": {
                "nfanumber": "Doc112233",
                "proceed": true
            }
        }
        // const meta = await BpaDest.get('/workflow/rest/v1/workflow-instances');
        const meta = await BpaDest.post('/workflow/rest/v1/workflow-instances',body);
        console.log();

    });

})