const $form = document.querySelector("form");

let teamChose = "round"
$form.addEventListener("submit", (e) => {
    e.preventDefault()
    let data = new FormData($form);
    let radios = data.get("radios");
    teamChose = radios
    console.log("test")
})

