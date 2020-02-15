
const buildMovieSite = (content, containerName) => {
	$(document).ready(function(){
		$('img').on('error', function() {
			$(this).parent().parent().parent().parent().remove();
		});
	});

	let movieObj = document.querySelector(containerName);
	movieObj.insertAdjacentHTML('afterbegin', `
		<div class="col-lg-4 col-md-6 p-2">
			<div class="card col-lg-12 col-md-12 card bg-dark text-white">
				<div class="card-header">
					<h4 class="text-center">${content.title}</h4>
				</div>
				<div class="row">
					<div class="col-md-5 col-sm-3 col-12">
						<img src="${content.posterUrl}" class="img-thumbnail">
					</div>
					<div class="col-md-7 col-sm-9 col-12">
						<div class="small pl-2 trunc">${content.plot}</div>
					</div>
				</div>
				<div class="card-footer">
					<div class="row">				
						<button class="like btn btn-dark text-success col-md-3 col-sm-4">
							<h5>Like 
								<i class="fa fa-thumbs-up" aria-hidden="true"></i>
							</h5>
						</button>		
						<button class="dislike btn btn-dark text-danger col-md-3 col-sm-4">
							<h5>Dislike  
								<i class="fa fa-thumbs-down" aria-hidden="true"></i>
							</h5>
						</button>
						<div class="rating col-md-2 ml-auto">
							<h2 class="numberRating">0</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
		`);
};

movieList.forEach(content => buildMovieSite(content, '.movies'));

document.querySelectorAll('.like').forEach((e) => { e.addEventListener("click", function() {
		let count = e.parentNode.querySelector(".numberRating");
		let getNumber = count.innerText;
		let writeIn = count.innerHTML = parseInt(getNumber)+1;

		
		// if(writeIn >= 9){
		// 	e.disabled = true;
		// } 

})});

document.querySelectorAll('.dislike').forEach((e) => { e.addEventListener("click", function() {
		let count = e.parentNode.querySelector(".numberRating");
		let getNumber = count.innerText;
		let writeIn = count.innerHTML = parseInt(getNumber)-1;
		
		// if(writeIn <= 0){
		// 	e.disabled = true;
		// } 
		// return writeIn;
})});

console.log(movieList.likes);

const actionButton = document.querySelector('#Action').addEventListener('click', function() {
	document.querySelector('.movies').innerHTML = '';

	const actionList = movieList.filter(function(action){
	return action.genres.includes('Action');
	});

	actionList.forEach(content => buildMovieSite(content, '.movies'));

	document.querySelector('#overview').innerHTML = 'Action Movies';
})

const adventureButton = document.querySelector('#Adventure').addEventListener('click', function() {
	document.querySelector('.movies').innerHTML = '';

	const adventureList = movieList.filter(function(adventure){
	return adventure.genres.includes('Adventure');
	});

	adventureList.forEach(content => buildMovieSite(content, '.movies'));

	document.querySelector('#overview').innerHTML = 'Adventure Movies';
})

const comedyButton = document.querySelector('#Comedy').addEventListener('click', function() {
	document.querySelector('.movies').innerHTML = '';

	const comedyList = movieList.filter(function(comedy){
	return comedy.genres.includes('Comedy');
	});

	comedyList.forEach(content => buildMovieSite(content, '.movies'));

	document.querySelector('#overview').innerHTML = 'Comedy Movies';
})

const crimeButton = document.querySelector('#Crime').addEventListener('click', function() {
	document.querySelector('.movies').innerHTML = '';

	const crimeList = movieList.filter(function(crime){
	return crime.genres.includes('Crime');
	});

	crimeList.forEach(content => buildMovieSite(content, '.movies'));

	document.querySelector('#overview').innerHTML = 'Crime Movies';
})

const dramaButton = document.querySelector('#Drama').addEventListener('click', function() {
	document.querySelector('.movies').innerHTML = '';

	const dramaList = movieList.filter(function(drama){
	return drama.genres.includes('Drama');
	});

	dramaList.forEach(content => buildMovieSite(content, '.movies'));

	document.querySelector('#overview').innerHTML = 'Drama Movies';
})

const familyButton = document.querySelector('#Family').addEventListener('click', function() {
	document.querySelector('.movies').innerHTML = '';

	const familyList = movieList.filter(function(family){
	return family.genres.includes('Family');
	});

	familyList.forEach(content => buildMovieSite(content, '.movies'));

	document.querySelector('#overview').innerHTML = 'Family Movies';
})

const romanceButton = document.querySelector('#Romance').addEventListener('click', function() {
	document.querySelector('.movies').innerHTML = '';

	const romanceList = movieList.filter(function(romance){
	return romance.genres.includes('Romance');
	});

	romanceList.forEach(content => buildMovieSite(content, '.movies'));

	document.querySelector('#overview').innerHTML = 'Romance Movies';
})

const thrillerButton = document.querySelector('#Thriller').addEventListener('click', function() {
	document.querySelector('.movies').innerHTML = '';

	const thrillerList = movieList.filter(function(thriller){
	return thriller.genres.includes('Thriller');
	});

	thrillerList.forEach(content => buildMovieSite(content, '.movies'));

	document.querySelector('#overview').innerHTML = 'Thriller Movies';
})

const warButton = document.querySelector('#War').addEventListener('click', function() {
	document.querySelector('.movies').innerHTML = '';

	const warList = movieList.filter(function(war){
	return war.genres.includes('War');
	});

	warList.forEach(content => buildMovieSite(content, '.movies'));

	document.querySelector('#overview').innerHTML = 'War Movies';
})





