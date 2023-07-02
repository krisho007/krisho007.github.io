sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function(Controller) {
    "use strict";
  
    return Controller.extend("myProfile.controller.Home", {
      // Controller methods and event handlers can be defined here
      onLinkedInPress: function() {
        //Open a new window with the LinkedIn profile
        window.open("https://www.linkedin.com/in/kammaje/");
      },
      onSAPCommunityPress: function() {
        //Open a new window with the SAP Community profile
        window.open("https://people.sap.com/krishnakishor.kammaje2");
      },
      onMentorPress: function() {
        //Open a new window with the SAP Community profile
        window.open("https://community.sap.com/influencers?program=sapmentors&page=2");
      }
    });
  });
  