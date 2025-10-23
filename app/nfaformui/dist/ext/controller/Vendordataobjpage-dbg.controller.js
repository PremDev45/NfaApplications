sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('nfaformui.ext.controller.Vendordataobjpage', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements

		override: {
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf nfaformui.ext.controller.Vendordataobjpage
			 */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
				console.log("oModel", oModel);
			},
			// onAfterRendering: async function(){
			// 	debugger;
			// },
			routing: {

				onAfterBinding: async function (oEvent) {
					debugger
					////custom button 

					// sap.ui.core.Element.getElementById("nfaformui::NfaDetails_NfaDetailsToNfaVendorDataObjectPage--fe::FormContainer::TermsPenaltiesLegalConditions::FormElement::DataField::HrClearanceCertificates").setVisible(false)



					// window.location.reload(true); // true forces reload from server (deprecated in some browsers)

					var sUrl = window.location.href;

					// Regular expression to extract the keys inside NfaDetailsToNfaVendorData(...)
					var oMatch = sUrl.match(/NfaDetailsToNfaVendorData\(([^)]+)\)/);

					let NfaNumber = '';
					let ProposedVendorCode = '';
					let round = '';

					if (oMatch && oMatch[1]) {
						// Split by comma, then split key=value
						var params = oMatch[1].split(",");
						params.forEach(function (param) {
							var parts = param.split("=");
							var key = parts[0].trim();
							var value = parts[1].trim();

							// Remove quotes if present
							if (value.startsWith("'") && value.endsWith("'")) {
								value = value.slice(1, -1);
							}

							// Assign values to variables
							if (key === "NfaNumber") NfaNumber = value;
							if (key === "ProposedVendorCode") ProposedVendorCode = value;
							if (key === "round") round = value;
						});
					}

					console.log("NfaNumber:", NfaNumber);
					console.log("ProposedVendorCode:", ProposedVendorCode);
					console.log("round:", round);

					let ofuncname = 'getVendorData';
					let getVendorData = this.getView().getModel().bindContext(`/${ofuncname}(...)`);
					getVendorData.setParameter('NfaNumber', NfaNumber);
					getVendorData.setParameter('ProposedVendorCode', ProposedVendorCode);
					getVendorData.setParameter('round', round);
					debugger;
					await getVendorData.execute();
					var vendorData = getVendorData.getBoundContext().getValue();
					var parseVendorData = JSON.parse(vendorData.value);
					console.log(parseVendorData);
					var hrAttachFileName = parseVendorData[0].HrClearanceCertificates;
					var insuranceAttachFileName = parseVendorData[0].Insurance;
					var jobAttachFileName = parseVendorData[0].JobClearanceCertificates;
					function getFileExtension(fileName) {
						if (!fileName) return ""; // in case the filename is null or empty
						var parts = fileName.split('.');
						return parts.length > 1 ? parts.pop().toLowerCase() : ""; // return extension in lowercase
					}

					// Store extensions in variables
					var hrFileExt = getFileExtension(hrAttachFileName);
					var insuranceFileExt = getFileExtension(insuranceAttachFileName);
					var jobFileExt = getFileExtension(jobAttachFileName);



					// 1️⃣ Define function names

					//////////SAI///////////////////////
					var fname = "getHrJob";
					let fname1 = this.getView().getModel().bindContext(`/${fname}(...)`);

					var getJobClearanceCertificate = "getJobClearanceCertificate";
					let getJobClearanceCertificate1 = this.getView().getModel().bindContext(`/${getJobClearanceCertificate}(...)`);

					var Insurance = "getInsurance";
					let Insurance1 = this.getView().getModel().bindContext(`/${Insurance}(...)`);

					debugger;
					//HR CERTIFICATE
					// Get the form container
					// Get the form container
					let oFormContainer = sap.ui.core.Element.getElementById(
						'nfaformui::NfaDetails_NfaDetailsToNfaVendorDataObjectPage--fe::FormContainer::TermsPenaltiesLegalConditions'
					);

					// 1️⃣ Remove only certificate elements safely
					oFormContainer.getFormElements().slice().forEach(el => { // slice() to avoid live collection issues
						const certificateType = el.data("certificateType");
						if (certificateType === "HR" || certificateType === "Job" || certificateType === "Insurance") {
							oFormContainer.removeFormElement(el);
						}
					});

					// 2️⃣ Create links conditionally
					let oLinkHR = hrAttachFileName
						? new sap.m.Link({ text: hrAttachFileName, icon: "sap-icon://show", press: onViewHRCertificatePress })
						: new sap.m.Text({ text: "-" });

					let oLinkJob = jobAttachFileName
						? new sap.m.Link({ text: jobAttachFileName, icon: "sap-icon://show", press: JobClearanceCertificate })
						: new sap.m.Text({ text: "-" });

					let oLinkInsurance = insuranceAttachFileName
						? new sap.m.Link({ text: insuranceAttachFileName, icon: "sap-icon://show", press: InsurancePress })
						: new sap.m.Text({ text: "-" });

					// 3️⃣ Recreate form elements with customData
					let oFormElementHR = new sap.ui.layout.form.FormElement({
						label: new sap.m.Label({ text: 'HR Clearance' }),
						fields: [oLinkHR],
						customData: [new sap.ui.core.CustomData({ key: "certificateType", value: "HR" })]
					});

					let oFormElementJob = new sap.ui.layout.form.FormElement({
						label: new sap.m.Label({ text: 'Job Clearance' }),
						fields: [oLinkJob],
						customData: [new sap.ui.core.CustomData({ key: "certificateType", value: "Job" })]
					});

					let oFormElementInsurance = new sap.ui.layout.form.FormElement({
						label: new sap.m.Label({ text: 'Insurance' }),
						fields: [oLinkInsurance],
						customData: [new sap.ui.core.CustomData({ key: "certificateType", value: "Insurance" })]
					});

					// 4️⃣ Add them back to the form container
					[oFormElementHR, oFormElementJob, oFormElementInsurance].forEach(el => oFormContainer.addFormElement(el));

					// 5️⃣ Async function for HR Certificate
					async function onViewHRCertificatePress(oEvent) {
						sap.ui.core.Element.getElementById("nfaformui::NfaDetails_NfaDetailsToNfaVendorDataObjectPage").setBusy(true);

						const url = window.location.href;

						const NfaNumber = (url.match(/NfaNumber='([^']+)'/) || [])[1] || null;
						const invitationId = (url.match(/ProposedVendorCode='([^']+)'/) || [])[1] || null;

						fname1.setParameter('NfaNumber', NfaNumber);
						fname1.setParameter('invitationId', invitationId);
						await fname1.execute();
						debugger
						const context = fname1.getBoundContext();
						const getdata = context.getValue();
						const headerdata = getdata.value; // raw PDF binary string
						function b64toBlob(b64Data, contentType = 'application/pdf') {
							const sliceSize = 512;
							const byteCharacters = atob(b64Data);
							const byteArrays = [];

							for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
								const slice = byteCharacters.slice(offset, offset + sliceSize);
								const byteNumbers = new Array(slice.length);
								for (let i = 0; i < slice.length; i++) {
									byteNumbers[i] = slice.charCodeAt(i);
								}
								const byteArray = new Uint8Array(byteNumbers);
								byteArrays.push(byteArray);
							}

							return new Blob(byteArrays, { type: contentType });
						}

						// const headerdata = getdata.value; // base64 encoded string without data prefix
						const pdfBlob = b64toBlob(headerdata);
						const blobUrl = URL.createObjectURL(pdfBlob);
						sap.ui.core.Element.getElementById("nfaformui::NfaDetails_NfaDetailsToNfaVendorDataObjectPage").setBusy(false);
						window.open(blobUrl, "_blank");



						// sap.ui.core.Element.getElementById("nfaformui::NfaDetails_NfaDetailsToNfaVendorDataObjectPage").setBusy(false);
					}

					// 6️⃣ Async function for Job Clearance Certificate
					async function JobClearanceCertificate(oEvent) {
						sap.ui.core.Element.getElementById("nfaformui::NfaDetails_NfaDetailsToNfaVendorDataObjectPage").setBusy(true);
						debugger
						const url = window.location.href;

						const NfaNumber = (url.match(/NfaNumber='([^']+)'/) || [])[1] || null;
						const invitationId = (url.match(/ProposedVendorCode='([^']+)'/) || [])[1] || null;

						getJobClearanceCertificate1.setParameter('NfaNumber', NfaNumber);
						getJobClearanceCertificate1.setParameter('invitationId', invitationId);
						await getJobClearanceCertificate1.execute();

						const context = getJobClearanceCertificate1.getBoundContext();
						const getdata = context.getValue();
						debugger
						const headerdata = getdata.value;

						// Convert binary string to Uint8Array for Blob download
						function b64toBlob(b64Data, contentType = 'application/pdf') {
							const sliceSize = 512;
							const byteCharacters = atob(b64Data);
							const byteArrays = [];

							for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
								const slice = byteCharacters.slice(offset, offset + sliceSize);
								const byteNumbers = new Array(slice.length);
								for (let i = 0; i < slice.length; i++) {
									byteNumbers[i] = slice.charCodeAt(i);
								}
								const byteArray = new Uint8Array(byteNumbers);
								byteArrays.push(byteArray);
							}

							return new Blob(byteArrays, { type: contentType });
						}

						// const headerdata = getdata.value; // base64 encoded string without data prefix
						const pdfBlob = b64toBlob(headerdata);
						const blobUrl = URL.createObjectURL(pdfBlob);
						sap.ui.core.Element.getElementById("nfaformui::NfaDetails_NfaDetailsToNfaVendorDataObjectPage").setBusy(false);
						window.open(blobUrl, "_blank");


					}
					async function InsurancePress(oEvent) {
						debugger
						sap.ui.core.Element.getElementById("nfaformui::NfaDetails_NfaDetailsToNfaVendorDataObjectPage").setBusy(true);
						debugger
						const url = window.location.href;

						const NfaNumber = (url.match(/NfaNumber='([^']+)'/) || [])[1] || null;
						const invitationId = (url.match(/ProposedVendorCode='([^']+)'/) || [])[1] || null;

						Insurance1.setParameter('NfaNumber', NfaNumber);
						Insurance1.setParameter('invitationId', invitationId);
						await Insurance1.execute();

						const context = Insurance1.getBoundContext();
						const getdata = context.getValue();
						debugger
						const headerdata = getdata.value;

						// Convert binary string to Uint8Array for Blob download
						function b64toBlob(b64Data, contentType = 'application/pdf') {
							const sliceSize = 512;
							const byteCharacters = atob(b64Data);
							const byteArrays = [];

							for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
								const slice = byteCharacters.slice(offset, offset + sliceSize);
								const byteNumbers = new Array(slice.length);
								for (let i = 0; i < slice.length; i++) {
									byteNumbers[i] = slice.charCodeAt(i);
								}
								const byteArray = new Uint8Array(byteNumbers);
								byteArrays.push(byteArray);
							}

							return new Blob(byteArrays, { type: contentType });
						}

						// const headerdata = getdata.value; // base64 encoded string without data prefix
						const pdfBlob = b64toBlob(headerdata);
						const blobUrl = URL.createObjectURL(pdfBlob);
						sap.ui.core.Element.getElementById("nfaformui::NfaDetails_NfaDetailsToNfaVendorDataObjectPage").setBusy(false);
						window.open(blobUrl, "_blank");


					}



					oEvent.requestObject().then((oData) => {
						debugger
						if (!oData) return;

						if (oData.NfaVendorDataToNfaDetails.Status == "Need For Clarification" || oData.NfaVendorDataToNfaDetails.Status == "New") {
							this.getView().byId("fe::StandardAction::Edit").setVisible(true)
							this.getView().byId("fe::StandardAction::Edit").setEnabled(true)
						} else {
							this.getView().getController().getExtensionAPI().getEditFlow().setEditMode("Display");
							this.getView().byId("fe::StandardAction::Edit").setVisible(false)
							this.getView().byId("fe::StandardAction::Edit").setEnabled(false)
						}
					});
				}
			}
		}
	});
});
