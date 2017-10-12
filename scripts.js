// Add ready listener

$(document).ready(function(){
	// console.log("Sanity check!");

	
	// load cards in an array called cards
	const cards = [
		'<img src="images/monsters-01.png">',
		'<img src="images/monsters-02.png">',
		'<img src="images/monsters-03.png">',
		'<img src="images/monsters-04.png">',
		'<img src="images/monsters-05.png">',
		'<img src="images/monsters-06.png">',
		'<img src="images/monsters-07.png">',
		'<img src="images/monsters-08.png">',
		'<img src="images/monsters-09.png">',
		'<img src="images/monsters-10.png">',
		'<img src="images/monsters-11.png">',
		'<img src="images/monsters-12.png">',		
		'<img src="images/monsters-13.png">',		
		'<img src="images/monsters-14.png">',		
		'<img src="images/monsters-15.png">',		
		'<img src="images/monsters-16.png">',				
	];

	var gridSize = 4;
	var cardsToUse = [];

	$('button').click(function() {
		// console.log('user clicked on a button!');
		var userAnswer = $(this).html();
		if (userAnswer === "Easy" {
			gridSize = 4;
		} else if (userAnswer === "Medium") {
			gridSize = 12;
		} else if (userAnswer === "Hard") {
			gridSize = 32;
		}

		cards.map((card, index)=>)

			// Card pushed onto the array twice because 
			// we need at least 2 of each image to form a match
			cardsToUse.push(card, card);

		});

		var memoryHTML = ""; // Empty String
		for (let i = 0; i < gridSize; i++) {
			memoryHTML += '<div class="card col-sm-3">';
				memoryHTML += <'div class="card-holder">';
					memoryHTML += '<div class="card-front">${cardsToUse[i]}</div>';
					memoryHTML += '<div class="card-back"></div>';
				memoryHTML += '</div>';
				memoryHTML += '</div>';



		}

		console.log(memoryHTML);
		$('mg-stuff').html(memoryHTML);


});