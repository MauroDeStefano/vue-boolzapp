const app = new Vue({
  
  el: "#app",

  data: {
  
    users:[
      {
        reciver: "Marco",
        porfileImage: "",
        visible: true, 
        messages: [
          {
            date: "",
            text: "Buongiorno",
            status: "sent"
          }
        ]
      },
      {
        reciver: "Giovanni",
        porfileImage: "",
        visible: true, 
        messages: [
          {
            date: "",
            text: "Buongiorno",
            status: "sent"
          }
        ]
      },
      {
        reciver: "Luca",
        porfileImage: "",
        visible: true, 
        messages: [
          {
            date: "",
            text: "Buongiorno",
            status: "sent"
          }
        ]
      },
      {
        reciver: "Giuseppe",
        porfileImage: "",
        visible: true, 
        messages: [
          {
            date: "",
            text: "Buongiorno",
            status: "sent"
          }
        ]
      }
    ],

    notification: true,

  },

});
