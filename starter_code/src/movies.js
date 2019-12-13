const orderByYear = (array)=>{
    return array.sort((a,b) =>{
        if(a.year>b.year) return 1
        if(a.year<b.year) return -1
        else {
            if(a.title>b.title) return 1
            if(a.title<b.title) return -1
        }   
    })
}

const howManyMovies = (arr) => {
    const movies = arr.filter((movie) => ((movie.genre).filter(genre => genre === "Drama").length > 0)).filter((movie) => movie.director === "Steven Spielberg"); 
    return movies.length
}

const orderAlphabetically = (arr) => {
    const movies = arr.map(movie => movie.title).sort().slice(0,20)
    return movies; 
}

const ratesAverage = (arr) =>{
    const movies = arr.map((movie)=> (!movie || !movie.rate || movie.rate.length===0) ? 0 : movie.rate).reduce((a, b) =>a+ b, 0);
    const redMovies = Math.round((movies/arr.length)* 100) / 100
    return movies ? redMovies : 0; 
}

const dramaMoviesRate = (arr) =>{
    const moviesDrama = arr.filter((movie) => ((movie.genre).filter(genre => genre === "Drama").length > 0));
    const movies = moviesDrama.map((movie)=> (!movie || !movie.rate || movie.rate.length===0) ? 0 : movie.rate).reduce((a, b) =>a+ b, 0);
    const redMovies = Math.round((movies/moviesDrama.length)* 100) / 100;
    return movies ? redMovies : 0; 
}

const bestYearAvg = (arr) => {
    let years =[];
    if (arr.length >0){
        arr.map((movie) => {
            if(years.year === undefined){
                let year = {year: movie.year, "rate": 0, movies:0}
                years.push(Object.assign(year));
            }
            return years; 
        })

        arr.map((movie) =>{
            let year = movie.year
            years.map((item)=>{
                if (item.year === year){
                    item.movies = item.movies +1; 
                    let rate = item.rate + parseFloat(movie.rate) /item.movies; 
                    item.rate =  Math.round((rate)* 100) / 100;
                }
            })
        })
        YearMoreRated = years.reduce((prev, current) =>((prev.rate > current.rate) ? prev : current))
        return YearMoreRated ? `The best year was ${YearMoreRated.year} with an average rate of ${YearMoreRated.rate}` : null; 
    }else{return null}
}


module.exports = {orderByYear:  orderByYear, howManyMovies: howManyMovies, orderAlphabetically: orderAlphabetically, ratesAverage: ratesAverage, dramaMoviesRate: dramaMoviesRate, bestYearAvg: bestYearAvg, bestYearAvg: bestYearAvg}