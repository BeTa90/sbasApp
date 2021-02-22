/* global QUnit */

sap.ui.define([
	"ns/UI5Module/controller/MainView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MainView Controller");
    /*
    QUnit.test("I should test the MainView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
    });
    */

    QUnit.test('Test somethings !', function (assert) {
        var oAppController = new Controller();
        assert.equal(oAppController.calculate(1,1,"+"), 2); 
        assert.equal(oAppController.calculate(5,2,"-"), 3);
        assert.equal(oAppController.calculate(3,2,"*"), 6);
        assert.equal(oAppController.calculate(12,3,"/"), 4);
    });

});
