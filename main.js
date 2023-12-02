let plusicons = document.querySelectorAll(".icons");
let descricptions = document.querySelectorAll(".description");


plusicons.forEach((e) => {
    e.addEventListener("click", function () {
        plusicons.forEach((i) => { i.src = "assets/images/icon-plus.svg" })
        e.src = "assets/images/icon-minus.svg";
        let infotoshow = document.querySelector(`#desc-${e.id}`);;
        descricptions.forEach((l)=>{l.style.display = "none"})
        infotoshow.style.display = "block";

    })
})