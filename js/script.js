Vue.config.devtools = true;

const vueApp = new Vue ({
  el: "#root",
  data:{
    welcome: "Hello Vueoolean - Todolist",
    arrayPush:[],
    arrayVuoto: "",
  },

  methods:{
    addClick(){
      //Vado a rimuovere gli spazi
      if(this.arrayVuoto.trim() === ""){
        return;
      }
      //Controllo che non ci siano le stesse parole nella todolist
      const elementFounder = this.arrayPush.find((el) => {
       return el.toLowerCase() === this.arrayVuoto.trim().toLowerCase();
     });
     if (elementFounder) {
       return;
     }

      //Pusho quello che scrive l'utente nell'array e lo resetto
     this.arrayPush.push(this.arrayVuoto)
     this.arrayVuoto=""
    },
    //Vado a rimuovere l'oggetto dalla lista con l'icona X
    removeClick(indiceDaCancellare){
      this.arrayPush.splice(indiceDaCancellare, 1)
    }

  }

})
