$(btnClose).click( function () {
    games.classList.replace("d-none", "d-block")
    details.classList.replace("d-block", "d-none")})
let contener2 = []
export async function detailsData(e) {const options = {method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cf7c79cb69mshff31df14226e1bbp1c7da3jsncf33a1a5813c',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}};
    let Ddat = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${e}`, options)
    contener2 = await Ddat.json()
    ShowDetailsData(contener2)}
function ShowDetailsData(e) {
                $("#details-content .col-md-4 img").attr("src",e.thumbnail)
                $("#details-content .col-md-8 h3").text(`Title : ${e.title}`)
                $(".Category").text(` ${e.genre}`)
                $(".Platform").text(` ${e.platform}`)
                $(".Status").text(` ${e.status}`)
                $(".col-md-8 .small").text(` ${e.description}`)
                $("#details-content .col-md-8 a").attr("href",e.game_url)}