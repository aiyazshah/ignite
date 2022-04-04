// Base URL
const api_key = "key=c585dfca242245c29e17de313f2fff15";
const base_url = "https://api.rawg.io/api/";


const getCurrentDate = (yeararg) => {
    let date = new Date();
    let monthFun = () => {
        let m = date.getMonth() + 1;
        if (m < 10) {
            return `0${m}`;
        } else {
            return m;
        }

    }
    let month = monthFun()///

    let dateFun = () => {
        let d = date.getDate();
        if (d < 10) {
            return `0${d}`;
        } else {
            return d;
        }
    }
    let currentDay = dateFun();////
    let year = date.getFullYear();////
    if (yeararg === "last") {
        return `${year - 1}-${month}-${currentDay}`
    }
    if (yeararg === "next") {
        return `${year + 1}-${month}-${currentDay}`
    }
    return `${year}-${month}-${currentDay}`
}
let currentDate = getCurrentDate();///
let lastYear = getCurrentDate("last");///
let nextYear = getCurrentDate("next");
/////Popular games
let popularGames = `games?${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
let upcomingGames = `games?${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
let newGames = `games?${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`
export const popularGamesURL = () => `${base_url}${popularGames}`;
export const upcomingGamesURL = () => `${base_url}${upcomingGames}`;
export const newGamesURL = () => `${base_url}${newGames}`;

