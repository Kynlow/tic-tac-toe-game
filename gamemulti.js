const $turnlogocontainer = document.querySelector("#turnlogocontainer");
const $dialog = document.querySelector("#dialog1");
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
let gridWin = [[], [], []];

for (let i = 0; i < gridElements.length; i++) {
	gridElements[i].addEventListener("click", () => {
		if (gridTemplate[i] == "") {
			const $pawn = document.createElement("img");
			if (teamChose == "croix") {
				$pawn.classList.add("pawn-cross");
				teamChose = "rond";
				gridTemplate[i] = "croix";
			} else {
				$pawn.classList.add("pawn-round");
				teamChose = "croix";
				gridTemplate[i] = "rond";
			}
			gridElements[i].appendChild($pawn);
		}
		isWon();
	});
}


function isWon() {
	for (let j = 0; j < gridTemplate.length; j++) {
		if (j <= 3 && gridTemplate[j] != "") {
			gridWin[0].push(gridTemplate[j]);
		}
		if (j > 3 && j <= 7 && gridTemplate[j] != "") {
			gridWin[1].push(gridTemplate[j]);
		}
		if (j > 7 && gridTemplate[j] != "") {
			gridWin[2].push(gridTemplate[j]);
		}
	}
	//Row test
	for (let l = 0; l < gridWin.length; l++) {
		for (let p = 0; p < 3; p++) {
			if (
				gridWin[p][0] &&
				gridWin[p][0] == gridWin[p][1] &&
				gridWin[p][1] == gridWin[p][2]
			) {
				
				console.log("win");
			}
			if (
				gridWin[0][p] &&
				gridWin[0][p] == gridWin[1][p] &&
				gridWin[1][p] == gridWin[2][p]
			) {
				
				console.log("win");
			}
			if (
				gridWin[0][0] &&
				gridWin[0][0] == gridWin[1][1] &&
				gridWin[1][1] == gridWin[2][2]
			) {
				
				console.log("win");
			}
			if (
				gridWin[0][2] &&
				gridWin[0][2] == gridWin[1][1] &&
				gridWin[1][1] == gridWin[0][2]
			) {
				
			}
		}
		console.log(gridWin);
	}
}

function winSynematic(wonTeam) {
	$dialog.showModal();
}
