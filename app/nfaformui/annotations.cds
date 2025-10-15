using NfaForm as service from '../../srv/service';
using from '../../db/schema';

annotate service.NfaDetails with @(
    UI.CreateHidden:true,
    UI.DeleteHidden:true,
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'SBU Unit Location',
                Value : SBUUnitLocation,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Amendment In Existing Po ARC Contract',
                Value : AmendmentInExistingPoArcContract,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Pricing In Business Plan If Applicable',
                Value : PricingInBusinessPlanIfApplicable,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Price Justification',
                Value : PriceJustification,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Deviations from Group Philosophy Cardinal Rules',
                Value : DeviationsfromGroupPhilosophyCardinalRules,
            },
            {
                $Type : 'UI.DataField',
                Label : 'List of Deviation',
                Value : ListOfDeviation,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Penalty Clause for Quality',
                Value : PenaltyClauseForQuality,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Penalty Criteria',
                Value : PenaltyCriteria,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Rationale if not L1',
                Value : RationaleIfNotL1,
            },
            {
                $Type : 'UI.DataField',
                Label : 'NFA ID',
                Value : NFAID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Approving Plant',
                Value : ApprovingPlant,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Existing Po Number',
                Value : ExistingPoNumber,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.CollectionFacet',
            Label : 'General Details',
            ID : 'GeneralDetails',
            Facets : [
                {
                    $Type : 'UI.ReferenceFacet',
                    Label : 'Header Level Information',
                    ID : 'HeaderLevelInformation',
                    Target : '@UI.FieldGroup#HeaderLevelInformation',
                },
                {
                    $Type : 'UI.ReferenceFacet',
                    Label : 'Event History',
                    ID : 'EventHistory',
                    Target : 'NfaDetailsToNfaEventHistory/@UI.LineItem#EventHistory',
                },
            ],
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Vendor Response Details',
            ID : 'VendorResponseDetails',
            Target : 'NfaDetailsToNfaVendorData/@UI.LineItem#VendorResponseDetails',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Justification',
            ID : 'Justification',
            Target : '@UI.FieldGroup#Justification',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'NFA Number',
            Value : NfaNumber,
        },
        {
            $Type : 'UI.DataField',
            Label : 'BU OR Purchasing Group',
            Value : BUORPurchasingGroup,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Status',
            Value : Status,
            Criticality : StatusInd,
            CriticalityRepresentation : #WithIcon,
        },
    ],
    UI.FieldGroup #HeaderLevelInformation : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : ProjectDescription,
                Label : 'Project Description',
            },
            {
                $Type : 'UI.DataField',
                Value : SubjectofProposalOROrder,
                Label : 'Subject of Proposal / Order',
            },
            {
                $Type : 'UI.DataField',
                Value : BaseLineSpend,
                Label : 'Baseline Spend',
            },
            {
                $Type : 'UI.DataField',
                Value : ProjectCurrencyORBaseCurrency,
                Label : 'Project Currency / Base Currency',
            },
            {
                $Type : 'UI.DataField',
                Value : FinalProposedValue,
                Label : 'Final Proposed Value',
            },
            {
                $Type : 'UI.DataField',
                Value : SavingsAchievedBtwInitialAndFinalQuote,
                Label : 'Savings Achieved Btw Initial & Final Quote',
            },
            {
                $Type : 'UI.DataField',
                Value : RfpNumber,
                Label : 'RFP Number',
            },
            {
                $Type : 'UI.DataField',
                Value : RfpPublishDate,
                Label : 'RFP Publish Date',
            },
            {
                $Type : 'UI.DataField',
                Value : TimeTakenForFinalizationDASHInDAYS,
                Label : 'Time Taken For Finalization - In DAYS',
            },
             {
                $Type : 'UI.DataField',
                Value : SBUUnitLocation,
                Label : 'SBU Unit Location',
            },
            {
                $Type : 'UI.DataField',
                Value : AuctionDone,
                Label : 'Auction Done',
            },
            {
                $Type : 'UI.DataField',
                Value : ApprovingPlant,
                Label : 'Approving Plant',
            },
            {
                $Type : 'UI.DataField',
                Value : TaskId,
                Label : 'Task Id',
            },
            {
                $Type : 'UI.DataField',
                Value : BaseLanguage,
                Label : 'BaseLanguage',
            },
            {
                $Type : 'UI.DataField',
                Value : Commodity,
                Label : 'Commodity',
            },
            {
                $Type : 'UI.DataField',
                Value : Regions,
                Label : 'Regions',
            },
            {
                $Type : 'UI.DataField',
                Value : Departments,
                Label : 'Departments',
            },
            {
                $Type : 'UI.DataField',
                Value : Owner,
                Label : 'Owner',
            },
            {
                $Type : 'UI.DataField',
                Value : Version,
                Label : 'Version',
            },
            {
                $Type : 'UI.DataField',
                Value : TargetSavings,
                Label : 'TargetSavings',
            },
            {
                $Type : 'UI.DataField',
                Value : Origin,
                Label : 'Origin',
            },
            {
                $Type : 'UI.DataField',
                Value : LastModified,
                Label : 'LastModified',
            },
            {
                $Type : 'UI.DataField',
                Value : AnticipatedContractEffectiveDate,
                Label : 'AnticipatedContractEffectiveDate',
            },
        ],
    },
    UI.FieldGroup #Justification : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : Comments,
            },
        ],
    },
    UI.DataPoint #Status : {
        $Type : 'UI.DataPointType',
        Value : Status,
        Title : '',
        Criticality : StatusInd,
    },
    UI.HeaderFacets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'Status',
            Target : '@UI.DataPoint#Status',
        },
    ],
    UI.DataPoint #Status1 : {
        $Type : 'UI.DataPointType',
        Value : Status,
        Title : '',
        Criticality : StatusInd,
    },
);

annotate service.NfaEventHistory with @(
    UI.LineItem #EventHistory : [
        {
            $Type : 'UI.DataField',
            Value : round,
            Label : 'Round',
        },
        {
            $Type : 'UI.DataField',
            Value : idd,
            Label : 'Vendor Name',
        },
        {
            $Type : 'UI.DataField',
            Value : L1AmountObtained,
            Label : 'L1 Amount Obtained',
        },
        {
            $Type : 'UI.DataField',
            Value : Date,
            Label : 'Date',
        },
    ]
);

annotate service.NfaVendorData with @(
    UI.LineItem #VendorResponseDetails : [
        {
            $Type : 'UI.DataField',
            Value : AwardedVendor,
            Label : 'Awarded Vendor',
        },
        {
            $Type : 'UI.DataField',
            Value : VendorName,
            Label : 'Vendor Name',
        },
        {
            $Type : 'UI.DataField',
            Value : OriginalQuote,
            Label : 'Original Quote',
        },
        {
            $Type : 'UI.DataField',
            Value : FinalQuote,
            Label : 'Final Quote',
        },
        {
            $Type : 'UI.DataField',
            Value : VendorLocation,
            Label : 'Vendor Location',
        },
        {
            $Type : 'UI.DataField',
            Value : OrderAmountOrSplitOrderAmount,
            Label : 'Order Amount or Split Order Amount',
        },
       
    ],
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Commercial & Pricing Details',
            ID : 'CommercialPricingDetails',
            Target : '@UI.FieldGroup#CommercialPricingDetails',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Approvals, Dependencies & Compliance',
            ID : 'ApprovalsDependenciesCompliance',
            Target : '@UI.FieldGroup#ApprovalsDependenciesCompliance',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Item Details',
            ID : 'ItemDetails',
            Target : 'NfaVendorDataToNfaVendorItemsDetails/@UI.LineItem#ItemDetails',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Terms, Penalties & Legal Conditions',
            ID : 'TermsPenaltiesLegalConditions',
            Target : '@UI.FieldGroup#TermsPenaltiesLegalConditions',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Due Diligence',
            ID : 'DueDiligence',
            Target : '@UI.FieldGroup#DueDiligence4',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Grades',
            ID : 'Grades',
            Target : 'NfaVendorDataToNfaVendorDueDeligenceDetailsGrade/@UI.LineItem#Grades',
        },
    ],
    UI.FieldGroup #VendorResponse : {
        $Type : 'UI.FieldGroupType',
        Data : [
            
        ],
    },
    UI.FieldGroup #TermsandConditions : {
        $Type : 'UI.FieldGroupType',
        Data : [
            
        ],
    },
    UI.FieldGroup #ItemLevelInfo : {
        $Type : 'UI.FieldGroupType',
        Data : [
            
        ],
    },
    UI.HeaderFacets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'Status',
            Target : 'NfaVendorDataToNfaDetails/@UI.DataPoint#Status1',
        },
    ],
    UI.FieldGroup #CommercialPricingDetails : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : PricingInBusinessPlanIfApplicable,
                Label : 'Pricing In Business Plan (If Applicable)',
            },
            {
                $Type : 'UI.DataField',
                Value : PriceJustification,
                Label : 'Price Justification',
            },
            {
                $Type : 'UI.DataField',
                Value : RationaleIfNotL1,
                Label : 'Rationale If Not L1',
            },
            {
                $Type : 'UI.DataField',
                Value : RationalForNotDoingAuction,
                Label : 'Rational For not Doing Auction',
            },
            {
                $Type : 'UI.DataField',
                Value : IsAnyNewInitiativeBestpractices,
                Label : 'Is Any New Initiative Best practices',
            },
            {
                $Type : 'UI.DataField',
                Value : NegotiationCommittee,
                Label : 'Negotiation Committee',
            },
            {
                $Type : 'UI.DataField',
                Value : LastPurchasePriceClpp,
                Label : 'Last Purchase Price Clpp',
            },
            {
                $Type : 'UI.DataField',
                Value : ContractValueBasicValue,
                Label : 'Contract Value (Basic Value)',
            },
            {
                $Type : 'UI.DataField',
                Value : Budget,
                Label : 'Budget',
            },
            {
                $Type : 'UI.DataField',
                Value : AmendmentValueTotalNfaAmount,
                Label : 'Amendment Value Total Nfa Amount',
            },
            {
                $Type : 'UI.DataField',
                Value : ApproximateDutyAmountInINR,
                Label : 'Approximate Duty Amount In INR ₹',
            },
            {
                $Type : 'UI.DataField',
                Value : MonthlyQuantity,
                Label : 'Monthly Quantity',
            },
            {
                $Type : 'UI.DataField',
                Value : TermsOfPaymentMilestoneOnwhichPaymentWillBemade,
                Label : 'Terms Of Payment & Milestone On Which Payment Will Be Made',
            },
            {
                $Type : 'UI.DataField',
                Value : ProductServiceDescriptionBackground,
                Label : 'Product Service Description Background',
            },
            {
                $Type : 'UI.DataField',
                Value : VendorsLatestAvailableTurnover,
                Label : 'Vendors Latest Available Turnover ( In INR Cr.) ₹',
            },
            {
                $Type : 'UI.DataField',
                Value : TotalVendorSpendforCurrentFY,
                Label : 'Total Vendor Spend For Current FY (In INR Cr.) (Total Open Value As On NFA Date + Proposed Annual Value)₹',
            },
        ],
    },
    UI.FieldGroup #ApprovalsDependenciesCompliance : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : AmendmentInExistingPoArcContract,
                Label : 'Amendment In Existing PO ARC Contract',
            },
            {
                $Type : 'UI.DataField',
                Value : DeviationsfromGroupPhilosophyCardinalRules,
                Label : 'Deviations from Group Philosophy Cardinal Rules',
            },
            {
                $Type : 'UI.DataField',
                Value : ListOfDeviation,
                Label : 'List Of Deviation',
            },
            {
                $Type : 'UI.DataField',
                Value : IsThereAnyImportSupplyUnderThisProposal,
                Label : 'Is There Any Import Supply Under This Proposal',
            },
            {
                $Type : 'UI.DataField',
                Value : ReasonForPostFactoNFAIfApplicable,
                Label : 'Reason For Post Facto NFA ( If Applicable)',
            },
            {
                $Type : 'UI.DataField',
                Value : IsVendorDependency,
                Label : 'Is Vendor dependency > 50%',
            },
            {
                $Type : 'UI.DataField',
                Value : RationalForAwardingContractToDependentPartner,
                Label : 'Rational For Awarding Contract To Dependent Partner',
            },
            {
                $Type : 'UI.DataField',
                Value : FTAEPCGAnyOtherBenefitAvailedForDutySaving,
                Label : 'FTA/EPCG/ Any Other Benefit Availed For Duty Saving',
            },
            {
                $Type : 'UI.DataField',
                Value : OrderTypePartiesContactedAndTechnicallyAccepted,
                Label : 'Order Type Parties Contacted And Technically Accepted ( Rational If On Single Vendor Basis)',
            },
            {
                $Type : 'UI.DataField',
                Value : InternalSLAsKPIsForTheContract,
                Label : 'Internal SLAs/KPIs For The Contract',
            },
            {
                $Type : 'UI.DataField',
                Value : ContractPeriod,
                Label : 'Contract Period',
            },
        ],
    },
    UI.FieldGroup #TermsPenaltiesLegalConditions : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : PenaltyClauseForQuality,
                Label : 'Penalty Clause For Quality',
            },
            {
                $Type : 'UI.DataField',
                Value : PenaltyCriteria,
                Label : 'Penalty Criteria',
            },
            {
                $Type : 'UI.DataField',
                Value : PackingForwarding,
                Label : 'Packing & Forwarding',
            },
            {
                $Type : 'UI.DataField',
                Value : Insurance,
                Label : 'Insurance',
                @UI.Hidden,
            },
            {
                $Type : 'UI.DataField',
                Value : LiquidatedDamages,
                Label : 'Liquidated Damages',
            },
            {
                $Type : 'UI.DataField',
                Value : LiquidatedDamagesClause,
                Label : 'Liquidated Damages Clause',
            },
            {
                $Type : 'UI.DataField',
                Value : PbgAndSd,
                Label : 'PBG and SD',
            },
            {
                $Type : 'UI.DataField',
                Value : PbgAndSdClause,
                Label : 'PBG and SD Clause',
            },
            {
                $Type : 'UI.DataField',
                Value : JobClearanceCertificates,
                Label : 'Job Clearance Certificates',
                @UI.Hidden,
            },
            {
                $Type : 'UI.DataField',
                Value : HrClearanceCertificates,
                Label : 'HR Clearance Certificates',
                @UI.Hidden,
            },
            {
                $Type : 'UI.DataField',
                Value : OtherKeyTerms,
                Label : 'Other Key Terms (Eg: Warranty, Inspection Clause, GTC Deviation, Party Delivery. Etc)',
            },
            {
                $Type : 'UI.DataField',
                Value : DeliveryLeadTime,
                Label : 'Delivery Lead Time',
            },
        ],
    },
    UI.FieldGroup #DueDiligence : {
        $Type : 'UI.FieldGroupType',
        Data : [
        ],
    },
    UI.FieldGroup #DueDiligence1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.AgeOfCompany,
                Label : 'AgeOfCompany',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.AuthorizedCapital,
                Label : 'AuthorizedCapital',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.ClassOfCompany,
                Label : 'ClassOfCompany',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.Comments,
                Label : 'Comments',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyActivity,
                Label : 'CompanyActivity',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyAddress,
                Label : 'CompanyAddress',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyCity,
                Label : 'CompanyCity',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyCountry,
                Label : 'CompanyCountry',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyEmail,
                Label : 'CompanyEmail',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyName,
                Label : 'CompanyName',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyNumber,
                Label : 'CompanyNumber',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyPincode,
                Label : 'CompanyPincode',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyState,
                Label : 'CompanyState',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyStatus,
                Label : 'CompanyStatus',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyWebsite,
                Label : 'CompanyWebsite',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.DateOfIncorporation,
                Label : 'DateOfIncorporation',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.DateofLastAnnualGeneralMeeting,
                Label : 'DateofLastAnnualGeneralMeeting',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.DateOfLastBalanceSheet,
                Label : 'DateOfLastBalanceSheet',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.Description,
                Label : 'Description',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.ListingStatus,
                Label : 'ListingStatus',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.ManagementDetails,
                Label : 'ManagementDetails',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.NICCode,
                Label : 'NICCode',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.NICCodeDescription,
                Label : 'NICCodeDescription',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.PaidUpCapital,
                Label : 'PaidUpCapital',
            },
        ],
    },
    UI.FieldGroup #DueDilegence : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.AgeOfCompany,
                Label : 'AgeOfCompany',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.AuthorizedCapital,
                Label : 'AuthorizedCapital',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.ClassOfCompany,
                Label : 'ClassOfCompany',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.Comments,
                Label : 'Comments',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyActivity,
                Label : 'CompanyActivity',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyAddress,
                Label : 'CompanyAddress',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyCity,
                Label : 'CompanyCity',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyCountry,
                Label : 'CompanyCountry',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyEmail,
                Label : 'CompanyEmail',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyName,
                Label : 'CompanyName',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyNumber,
                Label : 'CompanyNumber',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyPincode,
                Label : 'CompanyPincode',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyState,
                Label : 'CompanyState',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyStatus,
                Label : 'CompanyStatus',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyWebsite,
                Label : 'CompanyWebsite',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.DateOfIncorporation,
                Label : 'DateOfIncorporation',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.DateofLastAnnualGeneralMeeting,
                Label : 'DateofLastAnnualGeneralMeeting',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.DateOfLastBalanceSheet,
                Label : 'DateOfLastBalanceSheet',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.Description,
                Label : 'Description',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.ID,
                Label : 'ID',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.ListingStatus,
                Label : 'ListingStatus',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.ManagementDetails,
                Label : 'ManagementDetails',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.NfaNumber,
                Label : 'NfaNumber',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.NICCode,
                Label : 'NICCode',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.NICCodeDescription,
                Label : 'NICCodeDescription',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.PaidUpCapital,
                Label : 'PaidUpCapital',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.ProposedVendorCode,
                Label : 'ProposedVendorCode',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.RiskGrade,
                Label : 'RiskGrade',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.RiskScore,
                Label : 'RiskScore',
            },
        ],
    },
    UI.FieldGroup #DueDiligence2 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.AgeOfCompany,
                Label : 'AgeOfCompany',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.AuthorizedCapital,
                Label : 'AuthorizedCapital',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.ClassOfCompany,
                Label : 'ClassOfCompany',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.Comments,
                Label : 'Comments',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyActivity,
                Label : 'CompanyActivity',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyAddress,
                Label : 'CompanyAddress',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyCity,
                Label : 'CompanyCity',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyName,
                Label : 'CompanyName',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyEmail,
                Label : 'CompanyEmail',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyCountry,
                Label : 'CompanyCountry',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyNumber,
                Label : 'CompanyNumber',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyPincode,
                Label : 'CompanyPincode',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyState,
                Label : 'CompanyState',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyStatus,
                Label : 'CompanyStatus',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyWebsite,
                Label : 'CompanyWebsite',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.DateOfIncorporation,
                Label : 'DateOfIncorporation',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.DateofLastAnnualGeneralMeeting,
                Label : 'DateofLastAnnualGeneralMeeting',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.DateOfLastBalanceSheet,
                Label : 'DateOfLastBalanceSheet',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.Description,
                Label : 'Description',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.ID,
                Label : 'ID',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.ListingStatus,
                Label : 'ListingStatus',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.ManagementDetails,
                Label : 'ManagementDetails',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.NfaNumber,
                Label : 'NfaNumber',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.NICCode,
                Label : 'NICCode',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.NICCodeDescription,
                Label : 'NICCodeDescription',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.PaidUpCapital,
                Label : 'PaidUpCapital',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.ProposedVendorCode,
                Label : 'ProposedVendorCode',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.RiskGrade,
                Label : 'RiskGrade',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.RiskScore,
                Label : 'RiskScore',
            },
        ],
    },
    UI.FieldGroup #DueDiligence3 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.AgeOfCompany,
                Label : 'AgeOfCompany',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.AuthorizedCapital,
                Label : 'AuthorizedCapital',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.ClassOfCompany,
                Label : 'ClassOfCompany',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.Comments,
                Label : 'Comments',
            },
        ],
    },
    UI.FieldGroup #DueDiligence4 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyName,
                Label : 'CompanyName',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyAddress,
                Label : 'CompanyAddress',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyCity,
                Label : 'CompanyCity',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyState,
                Label : 'CompanyState',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyPincode,
                Label : 'CompanyPincode',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyCountry,
                Label : 'CompanyCountry',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.ClassOfCompany,
                Label : 'ClassOfCompany',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.Comments,
                Label : 'Comments',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.AuthorizedCapital,
                Label : 'AuthorizedCapital',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.AgeOfCompany,
                Label : 'AgeOfCompany',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyActivity,
                Label : 'CompanyActivity',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyEmail,
                Label : 'CompanyEmail',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyNumber,
                Label : 'CompanyNumber',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyStatus,
                Label : 'CompanyStatus',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.CompanyWebsite,
                Label : 'CompanyWebsite',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.DateOfIncorporation,
                Label : 'DateOfIncorporation',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.DateofLastAnnualGeneralMeeting,
                Label : 'DateofLastAnnualGeneralMeeting',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.DateOfLastBalanceSheet,
                Label : 'DateOfLastBalanceSheet',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.ListingStatus,
                Label : 'ListingStatus',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.ManagementDetails,
                Label : 'ManagementDetails',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.NICCode,
                Label : 'NICCode',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.NICCodeDescription,
                Label : 'NICCodeDescription',
            },
            {
                $Type : 'UI.DataField',
                Value : NfaVendorDataToNfaVendorDueDeligenceDetails.PaidUpCapital,
                Label : 'PaidUpCapital',
            },
        ],
    },
);

annotate service.NfaVendorData with {
    RationalForAwardingContractToDependentPartner @UI.MultiLineText : true
};

annotate service.NfaVendorItemsDetails with @(
    UI.LineItem #ItemDetails : [
        {
            $Type : 'UI.DataField',
            Value : ItemCode,
            Label : 'Item Code',
        },
        {
            $Type : 'UI.DataField',
            Value : Name,
            Label : 'Name',
        },
        {
            $Type : 'UI.DataField',
            Value : ItemShortDescription,
            Label : 'Item Short Description',
        },
        {
            $Type : 'UI.DataField',
            Value : UnitPrice,
            Label : 'Unit Price',
        },
        {
            $Type : 'UI.DataField',
            Value : Uom,
            Label : 'UOM',
        },
        {
            $Type : 'UI.DataField',
            Value : Quantity,
            Label : 'Quantity',
        },
        {
            $Type : 'UI.DataField',
            Value : Rank,
            Label : 'Rank',
        },
        {
            $Type : 'UI.DataField',
            Value : IndianTaxPER,
            Label : 'Tax %',
        },
        {
            $Type : 'UI.DataField',
            Value : HsnOrSacCode,
            Label : 'HSN or SAC Code',
        },
        {
            $Type : 'UI.DataField',
            Value : Freight,
            Label : 'Freight',
        },
        {
            $Type : 'UI.DataField',
            Value : DiscountPercentage,
            Label : 'Discount %',
        },
    ]
);

annotate service.NfaDetails with {
    Comments @UI.MultiLineText : true
};

annotate service.NfaDetails with {
    Status @Common.FieldControl : #ReadOnly
};

annotate service.NfaDetails with {
    NfaNumber @Common.FieldControl : #ReadOnly
};
annotate service.NfaDetails with {
    ApprovingPlant @Common.FieldControl : #ReadOnly
};
annotate service.NfaDetails with {
    SBUUnitLocation @Common.FieldControl : #ReadOnly
};
annotate service.NfaDetails with {
    ExistingPoNumber @Common.FieldControl : #ReadOnly
};
annotate service.NfaDetails with {
    LastPurchasePriceClpp @Common.FieldControl : #ReadOnly
};

annotate service.NfaEventHistory with {
    AuctionDone @Common.FieldControl : #ReadOnly
};

annotate service.NfaVendorData with {
    ProductServiceDescriptionBackground @Common.FieldControl : #ReadOnly
};
annotate service.NfaVendorData with {
    ComparisonOfOffer @Common.FieldControl : #ReadOnly
};
annotate service.NfaVendorData with {
    IncoTerm @Common.FieldControl : #ReadOnly
};
annotate service.NfaVendorData with {
    ContractValueBasicValue @Common.FieldControl : #ReadOnly
};
annotate service.NfaVendorData with {
    IsVendorDependency @Common.FieldControl : #ReadOnly
};
annotate service.NfaVendorData with {
    TermsOfPaymentMilestoneOnwhichPaymentWillBemade @Common.FieldControl : #ReadOnly
};
annotate service.NfaVendorData with {
    VendorsLatestAvailableTurnover @Common.FieldControl : #ReadOnly
};
annotate service.NfaVendorData with {
    TotalVendorSpendforCurrentFY @Common.FieldControl : #ReadOnly
};
annotate service.NfaVendorData with {
    ShortlistedPartiesCredentialsBackground @Common.FieldControl : #ReadOnly
};
annotate service.NfaVendorData with {
    TaxAmount @Common.FieldControl : #ReadOnly
};
annotate service.NfaVendorDueDeligenceDetails with @(
    UI.LineItem #DueDiligence : [
        {
            $Type : 'UI.DataField',
            Value : AgeOfCompany,
            Label : 'AgeOfCompany',
        },
        {
            $Type : 'UI.DataField',
            Value : AuthorizedCapital,
            Label : 'AuthorizedCapital',
        },
        {
            $Type : 'UI.DataField',
            Value : ClassOfCompany,
            Label : 'ClassOfCompany',
        },
        {
            $Type : 'UI.DataField',
            Value : Comments,
            Label : 'Comments',
        },
        {
            $Type : 'UI.DataField',
            Value : CompanyActivity,
            Label : 'CompanyActivity',
        },
        {
            $Type : 'UI.DataField',
            Value : CompanyAddress,
            Label : 'CompanyAddress',
        },
        {
            $Type : 'UI.DataField',
            Value : CompanyCity,
            Label : 'CompanyCity',
        },
        {
            $Type : 'UI.DataField',
            Value : CompanyCountry,
            Label : 'CompanyCountry',
        },
        {
            $Type : 'UI.DataField',
            Value : CompanyEmail,
            Label : 'CompanyEmail',
        },
        {
            $Type : 'UI.DataField',
            Value : CompanyName,
            Label : 'CompanyName',
        },
        {
            $Type : 'UI.DataField',
            Value : CompanyNumber,
            Label : 'CompanyNumber',
        },
        {
            $Type : 'UI.DataField',
            Value : CompanyPincode,
            Label : 'CompanyPincode',
        },
        {
            $Type : 'UI.DataField',
            Value : CompanyState,
            Label : 'CompanyState',
        },
        {
            $Type : 'UI.DataField',
            Value : CompanyStatus,
            Label : 'CompanyStatus',
        },
        {
            $Type : 'UI.DataField',
            Value : CompanyWebsite,
            Label : 'CompanyWebsite',
        },
        {
            $Type : 'UI.DataField',
            Value : DateOfIncorporation,
            Label : 'DateOfIncorporation',
        },
        {
            $Type : 'UI.DataField',
            Value : DateofLastAnnualGeneralMeeting,
            Label : 'DateofLastAnnualGeneralMeeting',
        },
        {
            $Type : 'UI.DataField',
            Value : DateOfLastBalanceSheet,
            Label : 'DateOfLastBalanceSheet',
        },
        {
            $Type : 'UI.DataField',
            Value : Description,
            Label : 'Description',
        },
        {
            $Type : 'UI.DataField',
            Value : ID,
            Label : 'ID',
        },
        {
            $Type : 'UI.DataField',
            Value : ListingStatus,
            Label : 'ListingStatus',
        },
        {
            $Type : 'UI.DataField',
            Value : ManagementDetails,
            Label : 'ManagementDetails',
        },
        {
            $Type : 'UI.DataField',
            Value : NICCode,
            Label : 'NICCode',
        },
        {
            $Type : 'UI.DataField',
            Value : NICCodeDescription,
            Label : 'NICCodeDescription',
        },
        {
            $Type : 'UI.DataField',
            Value : PaidUpCapital,
            Label : 'PaidUpCapital',
        },
    ]
);

annotate service.NfaVendorDueDeligenceDetailsGrade with @(
    UI.LineItem #Grades : [
        {
            $Type : 'UI.DataField',
            Value : Category,
            Label : 'Category',
        },
        {
            $Type : 'UI.DataField',
            Value : GradeDescription,
            Label : 'GradeDescription',
        },
        {
            $Type : 'UI.DataField',
            Value : MaxScore,
            Label : 'MaxScore',
        },
        {
            $Type : 'UI.DataField',
            Value : MinScore,
            Label : 'MinScore',
        },
    ]
);

