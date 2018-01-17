var app = new Vue({
	el: '#root',
	data: {
		appName: 'zv basic Vue app',
		query: '',
		characters: [],
		favorite_chars: [],
	},
	beforeCreate(){
    	
    	// https://stackoverflow.com/a/40714462/6813490

    	var db = firebase.database().ref(); //ref
    	
    	// on() is event listener, so anytime value changes method will fire
    	// 'value' refers to value of node specified in conf
    	// 'snap' is name of callback
    	db.on('value', snap => {
    		
    		// 'snap' has other metadata, so need 'val()' to actually get JSON
    		var favs = snap.val();
    		
    		// Firebase once() would rm need for this
    		this.favorite_chars = [];
    		
    		if(favs === null){
    			console.log("no data");
    			return;
    		}

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
			
			if(this.favorite_chars.includes(li)){
				console.log(`already contains ${li}`);
				return;
			}

			var db = firebase.database().ref();
			db.push(li, function (err) {
				if(err){console.log("couldn't push to Firebase");}
			});
		},
		rm_from_fav: function(li){

			console.log("item to rm: " + li);
			var db = firebase.database().ref();

    		db.once('value', function(snap){
    			snap.forEach(function(item){
    				
    				var key = item.key;
    				var val = item.val();
    				console.log(`K: ${key} V: ${val}`);

    				if(val == li){
						console.log(`rm ${li}`);
						db.child(key).remove(function(err){
							if(err){console.log(`could not rm ${li}`);}
						});
    				}
    			})
    		});
		}
	}
});
