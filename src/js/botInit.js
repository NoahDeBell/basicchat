//settings for the bot
Bots.init({
    appId: '5c99fdf8bf58b90010bc14b5', //app-id for bot channel
    customColors: { //custom coloring for the bot
        brandColor: '47ff1e',//this color is for the banner
        conversationColor: '00d701',//this color is for the coloring in the sending "chat bubble"
        actionColor: '47ff1e' //coloring for send button and the 
        }, 
    menuItems:{
        imageUpload:true,
        fileUpload:false,
        shareLocation:false
        },
    customText:{
        headerText: "ERP - ChatBot by \©SkyNet",
        inputPlaceholder: "Please write your message",
        introductionText:"Welcome I'm here to assist in the ERP process",
        sendButtonText:"Send",
        settingsHeaderText:"Settings"
        },
    businessName:"Genesis",
    businessIconUrl: "/src/img/ACTlogo.jpg",
    buttonIconUrl:"/src/img/ACTlogo.jpg",
    soundNotificationEnabled: false //set true for sound notifications, false for no sound
});