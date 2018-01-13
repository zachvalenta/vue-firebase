var app = new Vue({
	el: '#root',
	data: {
		appName: 'app',
		query: '',
		characters: [],
		favorite_chars: [],
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
			console.log(li);
			this.favorite_chars.push(li);
			console.log(this.favorite_chars)
		},
		rm_from_fav: function(li){
			console.log(li);
			var index = this.favorite_chars.indexOf(li);
			this.favorite_chars.splice(index, 1);
			console.log(this.favorite_chars)
		}
	}
});
