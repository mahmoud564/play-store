let gameData = document.getElementById("gameData")
let games = document.getElementById("games")
let details = document.getElementById("details")
import { detailsData} from "./details.js";
let conter = ""
let contener = []
$(".nav-item a").click(function (e) {
    $(".nav-item a").removeClass("active");
    e.target.classList.add("active")
    getData($(e.target).attr("data-category"))
    conter = "";
    $(".loding").fadeIn(100) 
     $(document).ready(function () {
        $(".loding").fadeOut(1000);})})
async function getData(params) {const options = {method: 'GET',
        headers: {'X-RapidAPI-Key': 'cf7c79cb69mshff31df14226e1bbp1c7da3jsncf33a1a5813c',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}};
    let data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${params}`, options);
    contener = await data.json()
    ShowData(contener)}
getData("mmorpg")
class Games {constructor(id, title, des, urlimg, platform, genre) {
        this.id = id;
        this.title = title;
        this.des = des;
        this.urlimg = urlimg;
        this.platform = platform;
        this.genre = genre}}
function ShowData(contener) {
    contener.map(function (e) {
        let game = new Games(
            e.id,
            e.title,
            e.short_description,
            e.thumbnail,
            e.platform,
            e.genre)
        conter += `<div class="col"  data-id="${game.id}">
                        <div class="card h-100 bg-transparent" role="button">
                            <div class="card-body">
                                <figure  class="position-relative"><img src=${game.urlimg} class="card-img-top object-fit-cover h-100 "></figure>
                                <figcaption>
                                    <div class="hstack justify-content-between">
                                        <h3 class="h6 small title">${game.title}</h3>
                                        <span class="badge p-2" style="background-color: green;">Free</span>
                                    </div>
                                    <p class="card-text small text-center opacity-50">
                                    ${game.des.split(" ").slice(0, 8).join(" ")}</p>
                                </figcaption>
                            </div>
                            <footer class="card-footer small hstack justify-content-between">
                                <span class="badge badge-color genre">${game.genre}</span>
                                <span class="badge badge-color platform">${game.platform}</span>
                            </footer>
                        </div>
                    </div>  `
        gameData.innerHTML = conter
        let col=document.querySelectorAll(".col")
        for (let i = 0; i < col.length; i++) {
            col[i].addEventListener("click",function () {
                detailsData( this.getAttribute("data-id"));
            games.classList.replace("d-block", "d-none")
            details.classList.replace("d-none", "d-block")
            $(".loding").fadeIn(100) 
            $(document).ready(function () {
               $(".loding").fadeOut(1000);});})}})}
            $(document).ready(function () {
                $(".loding").fadeOut(1000);});




















