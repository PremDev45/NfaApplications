sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"nfaapproval/test/integration/pages/NfaDetailsList",
	"nfaapproval/test/integration/pages/NfaDetailsObjectPage"
], function (JourneyRunner, NfaDetailsList, NfaDetailsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('nfaapproval') + '/index.html',
        pages: {
			onTheNfaDetailsList: NfaDetailsList,
			onTheNfaDetailsObjectPage: NfaDetailsObjectPage
        },
        async: true
    });

    return runner;
});

