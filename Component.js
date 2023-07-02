sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/resource/ResourceModel"
  ], function(UIComponent, ResourceModel) {
    "use strict";
  
    return UIComponent.extend("myProfile.Component", {
      metadata: {
        manifest: "json"
      },
  
      init: function() {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);
   
        // set i18n model
        var i18nModel = new ResourceModel({
          bundleName: "myProfile.i18n.i18n"
        });
        this.setModel(i18nModel, "i18n");
  
        // create the views based on the url/hash
        this.getRouter().initialize();
      }
    });
  });
  