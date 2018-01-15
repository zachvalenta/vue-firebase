var app = new Vue({
	el: '#root',
	data: {
		appName: 'app',
		query: '',
		characters: [],
		favorite_chars: [],
	},
	beforeCreate(){
    	
    	// https://stackoverflow.com/a/40714462/6813490

    	var db = firebase.database().ref(); //ref
    	
    	// on() is event listener, which makes more since with other args like child_added
    	// 'value' refers to value of node specified in conf
    	// 'snap' is name of callback
    	db.on('value', snap => {
    		
    		// 'snap' has other metadata, so need 'val()' to actually get JSON
    		var favs = snap.val();
    		
    		if(favs === null){
    			console.log("no data");
    			return;
    		}

    		/*have: constantly empty container and refill*/
    		/*want: on DOM load, *one-time*, pull from Firebase*/ 
    		//https://stackoverflow.com/questions/40714319/how-to-call-a-vue-js-function-on-page-load
    		// https://vuejs.org/v2/api/#vm-once
    		this.favorite_chars = [];
    		var fav_char_names = Object.values(favs);
    		for (var i = 0; i < fav_char_names.length; i++) {
    			console.log(fav_char_names[i]);
    			this.favorite_chars.push(fav_char_names[i]);
    		}
    	});
 	},
	methods: {
		search: function(){
			if(this.query){
				
				this.characters.length = 0;				
				var url = "http://gateway.marvel.com/v1/public/characters?nameStartsWith=" + this.query + "&ts=1&apikey=43634ab5f5b50782274a50ec7e7d9811&hash=4761558e45170642234948dc70f24c20";
				
				// aped from example on vue main page
				fetch(url)
					.then(response => response.json())
					.then(json => {
						for (var i = 0; i <= json.data.results.length - 1 ; i++) {
							// 'this' bound to Vue instance
							this.characters.push(json.data.results[i].name)	
							console.log(json.data.results[i].name)
						}
					})
			}
			else {
				alert("enter search query")
			}
		},
		add_to_fav: function(li){
			var db = firebase.database().ref();
			db.push(li, function (err) {
				if(err){console.log("couldn't push to Firebase");}
			});
		},
		rm_from_fav: function(li){
			console.log(li);
			var index = this.favorite_chars.indexOf(li);
			this.favorite_chars.splice(index, 1);
			console.log(this.favorite_chars)
		}
	}
});
