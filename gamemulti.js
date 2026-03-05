const $turnlogocontainer = document.querySelector("#turnlogocontainer");

let teamChose = localStorage.getItem("teamChose");
console.log(teamChose);
document.addEventListener("DOMContentLoaded", () => {
	const $turnLogo = document.createElement("img");
	$turnLogo.classList.add("turnLogo");

	if (teamChose == "croix") {
		$turnLogo.setAttribute("src", "assets/croix-silver.svg");
		$turnlogocontainer.appendChild($turnLogo);
	} else {
		$turnLogo.setAttribute("src", "assets/rond-silver.svg");
		$turnlogocontainer.appendChild($turnLogo);
	}
});

const gridElements = document.querySelectorAll(".board-btn");
let gridTemplate = ["", "", "", "", "", "", "", "", ""];
let gridWin = [
    [],
    [],
    []
]

for (let i = 0; i < gridElements.length; i++) {
	gridElements[i].addEventListener("click", () => {
		if (gridTemplate[i] == "") {
			const $pawn = document.createElement("img");
			if (teamChose == "croix") {
				$pawn.classList.add("pawn-cross");
				teamChose = "rond";
				gridTemplate[i] = "x";
			} else {
				$pawn.classList.add("pawn-round");
				teamChose = "croix";
				gridTemplate[i] = "o";
			}
			gridElements[i].appendChild($pawn);
			console.log(gridTemplate);
		}
	});
}

function isWon() {
    
}