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

const howManyMovies = (arr, selectedGenre, selectedDirector ) => {
    arr.filter(movie => movie.genre===selectedGenre).filter(movie => movie.director ===selectedDirector).length 
}