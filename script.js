const main = document.querySelector("#main");
const drawer = document.querySelector("#drawer")
const Flowers = document.querySelector("#Flowers");
const Animals = document.querySelector("#Animals");
const Nature = document.querySelector("#Nature");

async function getimages(e) {
    let imgarr = null;
    const theme = e.target.id;
    if ((e.target == Nature || e.target == Animals || e.target == Flowers) && (e.target.dataset.isactive === "inactive")) {
        const rawdata = await fetch(`${theme}.json`)
        imgarr = await rawdata.json();

        main.innerHTML = "";
        const arr = document.querySelectorAll("[data-isactive='active']")
        if (arr.length == 1) arr[0].dataset.isactive = "inactive"
        e.target.dataset.isactive = "active"

        imgarr.forEach((elem) => {
            main.innerHTML += `<img src=${elem.url} alt=${elem.name}>`
        });
    }
}

drawer.addEventListener("click", getimages)
