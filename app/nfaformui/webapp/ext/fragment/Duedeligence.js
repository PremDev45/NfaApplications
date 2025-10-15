sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (JSONModel, MessageToast) {
    "use strict";

    return {
        /**
         * Loads due diligence section names from backend API
         * @param {sap.ui.core.Fragment} fragment
         */
        loadDueDiligenceData: async function (fragment) {
            try {
                // 🔹 Call your backend API
                // const response = await fetch("/your/backend/api/duediligence");
                const response = {
                    "Questionnaire details": [
                        {
                            "SM Vendor ID": "S10753627",
                            "ProposedVendorCode": "ProposedVendorCode",
                            "CompanyName": "Appronics Private Limited",
                            "CompanyAddress": "HRBR Layout",
                            "CompanyCity": "Banglore",
                            "CompanyState": "Banglore",
                            "CompanyPincode": "560043",
                            "CompanyCountry": "India",
                            "Class of Company": "IT",
                            "CompanyActivity": "Yes",
                            "NICCode": "99288",
                            "NICCodeDescription": "Appron",
                            "CompanyStatus": "Active",
                            "DateofIncorporation": "36895",
                            "AgeofCompany": "24",
                            "ListingStatus": "Listed",
                            "DateofLastBalanceSheet": "3/31/2025",
                            "DateofLastAnnualGeneralMeeting": "4/23/2025",
                            "AuthorizedCapital": "9828838",
                            "PaidUpCapital": "1992822",
                            "ManagementDetails": "iwiueuur",
                            "CompanyNumber": "99283773",
                            "CompanyEmail": "appronics@gmail.com",
                            "CompanyWebsite": "www.approics.com",
                            "Comments": "iijakuuasd",
                            "RiskScore": "92",
                            "RiskGrade": "A",
                            "Description": "company description"
                        }
                    ],
                    "Grade RX6": [
                        {
                            "MinScore": "40",
                            "MaxScore": "40",
                            "GradeDescription": "High Counterparty Risk",
                            "Category": "High"
                        }
                    ],
                    "Grade RX7": [
                        {
                            "MinScore": "30",
                            "MaxScore": "40",
                            "GradeDescription": "Very High Counterparty Risk",
                            "Category": "High"
                        }
                    ],
                    "Grade RX8": [
                        {
                            "MinScore": "0",
                            "MaxScore": "30",
                            "GradeDescription": "Highest Counterparty Risk",
                            "Category": "High"
                        }
                    ]
                }
                const data = await response.json();

                // 🔹 Extract keys like "Questionnaire details", "Grade RX6", etc.
                const sections = Object.keys(data).map(key => ({
                    key,
                    text: key
                }));

                // 🔹 Create JSON model
                const oModel = new JSONModel({ sections });
                fragment.setModel(oModel);

            } catch (err) {
                console.error("Error loading due diligence data:", err);
                MessageToast.show("Failed to load due diligence data");
            }
        }
    };
});
