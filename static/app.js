$(document).ready(() => {
    console.log('ready')

    let moviesArray = [
        "Y3d6b6HaifM",
        "3oypmjuiM0E",
        "5qap5aO4i9A",
        "kE16toSp2UQ",
        "Z-Rl3LhVakc",
        "JWvn258lwp0",
        "H0uIRTmRlZI",
        "ih4_1FyVjaY",
        "Eu7YYGOLCiU",
        "A8qMyBWZNw0",
        "IPHHZg5HifQ",
        "lNn18F51bfo",
        "9r8VtP5kdoo",
        "dMFYNXdsoIU",
        "OxzG2UMAkRo",
        "EQUsKHN7nUo"

    ]
    
    const theFrame = $("#theFrame");
    const randomNr = Math.floor(Math.random() * moviesArray.length);
    
    theFrame.attr("src", "https://www.youtube.com/embed/" + moviesArray[randomNr] + "?controls=1&autoplay=1")
    
})