using NfaApproval as service from '../../srv/service';
// using from '../../srv/service';

annotate service.NfaDetails with @(
   UI.DeleteHidden:true,
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
            Label : 'Plant Code',
            Value : PlantCode,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Status',
            Value : Status,
        },
    ],
    UI.Facets : [
        {
            $Type : 'UI.CollectionFacet',
            Label : 'General Details',
            ID : 'GeneralDetails1',
            Facets : [
                {
                    $Type : 'UI.CollectionFacet',
                    Label : ' ',
                    ID : '_',
                    Facets : [
                        {
                            $Type : 'UI.ReferenceFacet',
                            ID : 'GeneralDetails',
                            Target : '@UI.FieldGroup#GeneralDetails',
                        },
                    ],
                },
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
    ],
    UI.FieldGroup #GeneralDetails : {
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
            {
                $Type : 'UI.DataField',
                Value : Comments,
                Label : 'Comments',
            },
        ],
    },
    UI.FieldGroup #HeaderLevelInformation : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : AmendmentValueTotalNfaAmount,
                Label : 'Amendment Value Total NFA Amount',
            },
            {
                $Type : 'UI.DataField',
                Value : Budget,
                Label : 'Budget',
            },
            {
                $Type : 'UI.DataField',
                Value : RationalForNotDoingAuction,
                Label : 'Rational for not Doing Auction',
            },
            {
                $Type : 'UI.DataField',
                Value : IsAnyNewInitiativeBestpractices,
                Label : 'Is any New Initiative Best Practices',
            },
            {
                $Type : 'UI.DataField',
                Value : NegotiationCommittee,
                Label : 'Negotiation Committee',
            },
            {
                $Type : 'UI.DataField',
                Value : IsThereAnyImportSupplyUnderThisProposal,
                Label : 'Is There any Import Supply Under This Proposal',
            },
            {
                $Type : 'UI.DataField',
                Value : LastPurchasePriceClpp,
                Label : 'Last Purchase Price CLPP',
            },
            {
                $Type : 'UI.DataField',
                Value : SavingIncreaseAmountOnLpp,
                Label : 'Saving Increase Amount On LPP',
            },
            {
                $Type : 'UI.DataField',
                Value : PricesAre,
                Label : 'Prices Are',
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
);

annotate service.NfaEventHistory with @(
    UI.LineItem #EventHistory : [
        {
            $Type : 'UI.DataField',
            Value : EventNo,
            Label : 'Event No',
        },
        {
            $Type : 'UI.DataField',
            Value : Number,
            Label : 'Number',
        },
        {
            $Type : 'UI.DataField',
            Value : Date,
            Label : 'Date',
        },
        {
            $Type : 'UI.DataField',
            Value : NumberOfVendorsParticipated,
            Label : 'Number of Vendors Participated',
        },
        {
            $Type : 'UI.DataField',
            Value : L1AmountObtained,
            Label : 'L1 Amount Obtained',
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
        {
            $Type : 'UI.DataField',
            Value : DiscountPercentage,
            Label : 'Discount Percentage',
        },
        {
            $Type : 'UI.DataField',
            Value : Rank,
            Label : 'Rank',
        },
    ],
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Vendor Response',
            ID : 'VendorResponse',
            Target : '@UI.FieldGroup#VendorResponse',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Terms and Conditions',
            ID : 'TermsandConditions',
            Target : '@UI.FieldGroup#TermsandConditions',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Item Details',
            ID : 'ItemDetails',
            Target : 'NfaVendorDataToNfaVendorItemsDetails/@UI.LineItem#ItemDetails',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Item Level Info',
            ID : 'ItemLevelInfo',
            Target : '@UI.FieldGroup#ItemLevelInfo',
        },
    ],
    UI.FieldGroup #VendorResponse : {
        $Type : 'UI.FieldGroupType',
         Data : [
            {
                $Type : 'UI.DataField',
                Value : ContractPeriod,
                Label : 'Contract Period',
            },
            {
                $Type : 'UI.DataField',
                Value : OrderTypePartiesContactedAndTechnicallyAccepted,
                Label : 'Order Type Parties Contacted And Technically Accepted ( Rational If On Single Vendor Basis)',
            },
            {
                $Type : 'UI.DataField',
                Value : IsVendorDependency,
                Label : 'Is Vendor dependency > 50%',
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
            {
                $Type : 'UI.DataField',
                Value : ShortlistedPartiesCredentialsBackground,
                Label : 'Shortlisted Parties Credentials/Background',
            },
            {
                $Type : 'UI.DataField',
                Value : InternalSLAsKPIsForTheContract,
                Label : 'Internal SLAs/KPIs For The Contract',
            },
            {
                $Type : 'UI.DataField',
                Value : ContractValueBasicValue,
                Label : 'Contract Value (Basic Value)',
            },
            {
                $Type : 'UI.DataField',
                Value : FTAEPCGAnyOtherBenefitAvailedForDutySaving,
                Label : 'FTA/EPCG/ Any Other Benefit Availed For Duty Saving',
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
                Value : ReasonForPostFactoNFAIfApplicable,
                Label : 'Reason For Post Facto NFA ( If Applicable)',
            },
            {
                $Type : 'UI.DataField',
                Value : IncoTerm,
                Label : 'Inco Term',
            },
            {
                $Type : 'UI.DataField',
                Value : TermsOfPaymentMilestoneOnwhichPaymentWillBemade,
                Label : 'Terms Of Payment & Milestone On Which Payment Will Be Made',
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
            },
            {
                $Type : 'UI.DataField',
                Value : HrClearanceCertificates,
                Label : 'HR Clearance Certificates',
            },
            {
                $Type : 'UI.DataField',
                Value : OtherKeyTerms,
                Label : 'Other Key Terms (Eg: Warranty, Inspection Clause, GTC Deviation, Party Delivery. Etc)',
            },
        ],
    },
    UI.FieldGroup #TermsandConditions : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : RationalForAwardingContractToDependentPartner,
                Label : 'Rational For Awarding Contract To Dependent Partner',
            },
        ],
    },
    UI.FieldGroup #ItemLevelInfo : {
        $Type : 'UI.FieldGroupType',
           Data : [
            {
                $Type : 'UI.DataField',
                Value : ProductServiceDescriptionBackground,
                Label : 'Product Service Description Background',
            },
            {
                $Type : 'UI.DataField',
                Value : ComparisonOfOffer,
                Label : 'Comparison of Offer',
            },
            {
                $Type : 'UI.DataField',
                Value : TaxAmount,
                Label : 'Tax Amount',
            },
            {
                $Type : 'UI.DataField',
                Value : Freight,
                Label : 'Freight',
            },
            {
                $Type : 'UI.DataField',
                Value : DeliveryLeadTime,
                Label : 'Delivery Lead Time',
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
            Value : HsnOrSacCode,
            Label : 'HSN or SAC Code',
        },
        {
            $Type : 'UI.DataField',
            Value : ItemShortDescription,
            Label : 'Item Short Description',
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
            Value : UnitPrice,
            Label : 'Unit Price',
        },
    ]
);

annotate service.NfaDetails with {
    Comments @(
        UI.MultiLineText : true
    )
};
annotate service.NfaDetails with {
    Comments @UI.fieldControl: #Editable;
};

