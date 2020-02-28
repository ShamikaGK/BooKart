var HeaderCtrl = function($scope) {
	$scope.appDetails = {};
	$scope.appDetails.title = "BooKart";
	$scope.appDetails.tagline = "The right books for you";
}

var BookListCtrl = function($scope) {
	$scope.books = [
		{
			imgUrl: "hp1.jpg",
			name: "Harry Potter and the Sorceror's Stone",
			price: 25,
			rating: 5,
			author: "J. K. Rowling",
			binding: "Hardcover",
			details: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth ...more"
		},
		{
			imgUrl: "davincicode.jpg",
			name: "The Da Vinci Code",
			price: 15,
			rating: 4,
			author: "Dan Brown",
			binding: "Paperback",
			details: "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols. As ...more"
		},
		{
			imgUrl: "pnp.jpg",
			name: "Pride and Prejudice",
			price: 20,
			rating: 4,
			author: "Jane Austen",
			binding: "Paperback",
			details: "The news that a wealthy young gentleman named Charles Bingley has rented the manor of Netherfield Park causes a great stir in the nearby village of Longbourn, especially in the Bennet household. The Bennets have five d...more"
		},
		{
			imgUrl: "alchemist.jpg",
			name: "The Alchemist",
			price: 30,
			rating: 4,
			author: "Paulo Coelho",
			binding: "Hardcover",
			details: "This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near th ...more"
		},
		{
			imgUrl: "twilight.jpg",
			name: "Twilight",
			price: 15,
			rating: 4,
			author: "Stephenie Meyer",
			binding: "Paperback",
			details: "High-school student Bella Swan, always a bit of a misfit, doesn't expect life to change much when she moves from sunny Arizona to rainy Washington state. Then she meets Edward Cullen, a handsome but mysterious teen whose ...more"
		},
		{
			imgUrl: "nttwn.jpg",
			name: "And Then There Were None",
			price: 20,
			rating: 4,
			author: "Agatha Christie",
			binding: "Paperback",
			details: "First, there were ten—a curious assortment of strangers summoned as weekend guests to a little private island off the coast of Devon. Their host, an eccentric millionaire unknown to all of them, is nowhere to be found. Al...more"
		}
	];
	
	$scope.addToKart = function(book) {
		console.log("add to kart: ", book);
	}
}