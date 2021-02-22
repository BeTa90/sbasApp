	/* global QUnit */

	sap.ui.define([
		"sap/ui/test/opaQunit",
		"./pages/MainView"
	], function (opaTest) {
		"use strict";

		QUnit.module("Navigation Journey");

		opaTest("Should see the initial page of the app", function (Given, When, Then) {
			// Arrangements
			Given.iStartMyApp();
			// Assertions
			Then.onTheAppPage.iShouldSeeTheApp();
			//Cleanup
			Then.iTeardownMyApp();
        });
        


        //----------- TEST 1 ---------------
        opaTest("I am testing a journey to click button and see if text is changed or not",
            function(Given, When, Then) {
                // Vorbedingung
                Given.iStartMyUIComponent({
                    componentConfig: {
                        name: "ns.UI5Module"
                    }
                });
                When.onTheAppPage.clickOnMyButton();
                Then.onTheAppPage.checkTextIfChanged();
            }
        );


	});
