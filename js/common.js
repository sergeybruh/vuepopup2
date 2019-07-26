var app = new Vue({
  el: '#app',
  data: {
    toggleForm: true,
   	//stars state 
   	stars1: {
   		1: false,
   		2: false,
   		3: false,
   		4: false,
   		5: false
   	},
   	stars2: {
   		1: false,
   		2: false,
   		3: false,
   		4: false,
   		5: false
   	},
   	stars3: {
   		1: false,
   		2: false,
   		3: false,
   		4: false,
   		5: false
   	},
   	//buffer object 
    rezult: {
    	star1: 0,
    	star2: 0,
    	star3: 0
    },

    //Object which shows on screen
    rezultFinal: {
    	star1: 0,
    	star2: 0,
    	star3: 0
    }
  },
  methods: {
  	//Method for 1-st star set 
  	star1(ev) {
  		let stars1Click = ev.path[0].attributes[0].nodeValue;
  		for (i = 0; i < stars1Click; i++) { 
		  this.stars1[i+1] = true;
		}
		this.rezult.star1 = stars1Click;
  	},
  	//Method for 2-nd star set 
  	star2(ev) {
  		let stars2Click = ev.path[0].attributes[0].nodeValue;
  		for (i = 0; i < stars2Click; i++) { 
		  this.stars2[i+1] = true;
		}
		this.rezult.star2 = stars2Click;
  	},
  	//Method for 3-rd star set 
  	star3(ev) {
  		let stars3Click = ev.path[0].attributes[0].nodeValue;
  		for (i = 0; i < stars3Click; i++) { 
		  this.stars3[i+1] = true;
		}
		this.rezult.star3 = stars3Click;
  	},
  	submit() { //Submit event, asigning one object to another
  		this.rezultFinal = Object.assign({}, this.rezult);
  		this.toggleForm = false;
  	}
  }
})