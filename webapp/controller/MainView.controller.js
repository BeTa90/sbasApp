sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/Filter",
	    "sap/ui/model/FilterOperator"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, MessageToast, JSONModel, Filter, FilterOperator) {
		"use strict";

		return Controller.extend("ns.UI5Module.controller.MainView", {
			onInit: function () {
                var productsModel = new sap.ui.model.json.JSONModel();
                this.getView().setModel(productsModel, "productsModel");
                productsModel.loadData("model/products.json", {}, false);
                console.log("test");
            },
            
            onPress: function(oEvent) {
                MessageToast.show("Helooo");

                var oBtn = oEvent.getSource();
                setTimeout(function() {
                    oBtn.setText("I was clicked");
                }, 3000);
            //	oBtn.setText("I was clicked");
                oEvent="I was clicked";

            },

            onSearch: function (oEvent) {
                // add filter for search
                var aFilters = [];
                var sQuery = oEvent.getSource().getValue();
                if (sQuery && sQuery.length > 0) {
                    var filter = new Filter("ProductId", FilterOperator.Contains, sQuery);
                    aFilters.push(filter);
                }

                // update list binding
                var oList = this.byId("list0");
                var oBinding = oList.getBinding("items");
                // @ts-ignore
                oBinding.filter(aFilters, "Application");
            }


		});
	});