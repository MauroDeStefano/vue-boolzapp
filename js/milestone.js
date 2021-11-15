const app = new Vue({
  
  el: "#app",

  data: {
  
    users:[
      {
        reciver: "Ugo De Ughis",
        profileImage: "img/avatar_2.jpg",
        visible: true, 
        messages: [
        {
          date: "10/01/2021 13:15",
          text: "Buongiorno, come stai?? ",
          sent: false
        },
        {
          date: "10/01/2021 13:15",
          text: "cosa hai fatto ieri?",
          sent: true
        },
        {
          date: "10/01/2021 13:15",
          text: "tutto apposto",
          sent: false
        },
      ]
      },
      {
        reciver: "Giovanni",
        profileImage: "img/avatar_3.jpg",
        visible: true, 
        messages: [
          {
            date: "10/01/2021 13:15",
            text: "Buongiorno, come stai?? ",
            sent: true
          },
          {
            date: "10/01/2021 13:15",
            text: "cosa hai fatto ieri?",
            sent: false
          },
          {
            date: "10/01/2021 13:15",
            text: "tutto apposto",
            sent: true
          },
        ]
      },
      {
        reciver: "Luca",
        profileImage: "img/avatar_4.jpg",
        visible: true, 
        messages: [
          {
            date: "10/01/2021 13:15",
            text: "Buongiorno, come stai?? ",
            sent: false
          },
          {
            date: "10/01/2021 13:15",
            text: "cosa hai fatto ieri?",
            sent: true
          },
          {
            date: "10/01/2021 13:15",
            text: "tutto apposto",
            sent: false
          },
        ]
      },
      {
        reciver: "Giuseppe",
        profileImage: "img/avatar_5.jpg",
        visible: true, 
        messages: [
          {
            date: "10/01/2021 13:15",
            text: "Buongiorno, come stai?? ",
            sent: false
          },
          {
            date: "10/01/2021 13:15",
            text: "cosa hai fatto ieri?",
            sent: true
          },
          {
            date: "10/01/2021 13:15",
            text: "tutto apposto",
            sent: false
          },
        ]
      }
    ],

    notification: {
      active :true,
      off : false
    },

    selected : 0,
    
  },

});
