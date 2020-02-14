$(document).ready(function(){
	$('img').on('error', function() {
		$(this).parent().parent().parent().parent().remove();
	});
});

let clicks = 0;

for(i in movieList) {
	let movies = document.querySelector(".movies");
	movies.insertAdjacentHTML('afterbegin', `
		<div class="col-lg-4 col-md-6 p-2">
			<div class="card col-lg-12 col-md-12 card bg-dark text-white">
				<div class="card-header">
					<h4 class="text-center">${movieList[i].title}</h4>
				</div>
				<div class="row">
					<div class="col-md-5 col-sm-3 col-12">
						<img src="${movieList[i].posterUrl}" class="img-thumbnail">
					</div>
					<div class="col-md-7 col-sm-9 col-12">
						<div class="small pl-2 trunc">${movieList[i].plot}</div>
					</div>
				</div>
				<div class="card-footer">
					<div class="row">				
						<button class="like btn btn-dark text-success col-md-4 col-sm-4"><h4 class="font-weight-bold">Like  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
	</h4></button>
						<div class="rating col-md-2 ml-auto">
							<h2 class="numberRating">${clicks}</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
		`)
}

document.querySelectorAll('.likes').forEach((e) => { e.addEventListener("click", function() {
		e.querySelector('.numberRating').innerHTML = clicks++;
})});
	