const $form = document.querySelector("form");
const $croix = document.querySelector("#croix");
const $rond = document.querySelector("#rond");

let teamChose = "croix";
$form.addEventListener("submit", (e) => {
	e.preventDefault();
	let data = new FormData($form);
	let radios = data.get("radios");
	teamChose = radios;
	
    localStorage.clear()
	localStorage.setItem("teamChose", teamChose);

	if (e.submitter.value == "cpu") {
		window.location.href = "gamesolo.html";
	} else if (e.submitter.value == "player") {
		window.location.href = "gamemulti.html";
	}
});
