sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"nfaformui/test/integration/pages/NfaDetailsList",
	"nfaformui/test/integration/pages/NfaDetailsObjectPage"
], function (JourneyRunner, NfaDetailsList, NfaDetailsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('nfaformui') + '/index.html',
        pages: {
			onTheNfaDetailsList: NfaDetailsList,
			onTheNfaDetailsObjectPage: NfaDetailsObjectPage
        },
        async: true
    });

    return runner;
});

