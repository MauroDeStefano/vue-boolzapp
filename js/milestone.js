// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato
// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

getDate();

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
          date: "10/01/2021 13:30",
          text: "bene dai, cosa hai fatto ieri?",
          sent: true
        },
        {
          date: "10/01/2021 13:45",
          text: "il solito giro di commissioni.",
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
            date: "10/01/2021 20:15",
            text: "hey ciao!",
            sent: true
          },
          {
            date: "10/01/2021 21:15",
            text: "ciao, dimmi..",
            sent: false
          },
          {
            date: "10/01/2021 21:25",
            text: "no, niente, salutavo e basta",
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
            date: "10/01/2021 13:25",
            text: "tutto apposto, te? che racconti?",
            sent: true
          },
          {
            date: "10/01/2021 13:35",
            text: "niente di che, si lavora sodo",
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
            text: "ciao bello!",
            sent: false
          },
          {
            date: "10/01/2021 13:15",
            text: "Hey bomber!",
            sent: true
          },
          {
            date: "10/01/2021 13:15",
            text: "Sta sera Party",
            sent: false
          },
        ]
      }
    ],

    yourProfile:{
      sender: "Mauro",
      image: "img/avatar_7.jpg"
    },

    notification: {
      active :true,
      off : false
    },

    newText: "",

    selected : 0,

    searchText = ""
    
  },

  methods:{

    newMessageSend(){
      
      const newMessage = {
        date : getDate(),
        text : this.newText,
        sent : true
      };
      
      this.users[this.selected].messages.push(newMessage);

      const newAwnser = {
        date: getDate(),
        text: "Ok",
        sent: false
      };

      this.newText = "";

      setTimeout(()=>{

      this.users[this.selected].messages.push(newAwnser);

      }, 1000);

    },

  }

});

function getDate(){
  let trueDate = new Date();

  let day = trueDate.getDate();
  let month = trueDate.getMonth() + 1;
  let fullYear = trueDate.getUTCFullYear();
  let hours = trueDate.getUTCHours() + 1;
  let minutes = trueDate.getUTCMinutes();

  if (minutes < 10){
    minutes= "0" + minutes;
  };

  if(hours < 10){
    hours = "0" + hours;
  };

   return day + "/"+ month + "/" + fullYear + " " + hours + ":" + minutes;

};


