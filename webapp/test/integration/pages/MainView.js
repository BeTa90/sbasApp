sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/opaQunit"
], function (Opa5) {
	"use strict";
	var sViewName = "MainView";
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {

                //click on the button
		 		clickOnMyButton: function() {
		 			return this.waitFor({
		 				viewName: sViewName,
		 				id: "button1",
		 				viewNamespace : "ns.UI5Module.view.",
		 				timeout : 0,
		 				success: function(oBtn) {
		 					oBtn.$().trigger("tap");
		 				},
		 				errorMessage: "Could not find the button on page journey"
		 			});
		 		}

            },


			assertions: {

				iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "app",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " view"
					});
                },

                //check if the label was changed or not
		 		checkTextIfChanged: function() {
		 			return this.waitFor({
		 				viewName: sViewName,
		 				id: "button1",
		 				viewNamespace : "ns.UI5Module.view.",
		 				timeout : 0,
		 				matchers: new sap.ui.test.matchers.PropertyStrictEquals({
		 					name: "text",
		 					value: "I was clicked"
		 				}),
		 				success: function(oBtn) {
		 					// @ts-ignore
		 					QUnit.assert.ok(true, "Button text was successfully changed");
		 				},
		 				errorMessage: "checkTextIfChanged - OMG Something wrong in your App"
		 			});
		 		}

    
			}
		}
	});

});
