$(document).ready(() => {
    console.log('ready')

    let moviesArray = [
        "-PYQyzENIbY",
        "z6-FWJteNLI",
        "1dZn95JfxMQ",
        "Acjf66Qdj2U",
        "etBufTl7slc",
        "D-UmfqFjpl0",
        "8410qUT4QtA"
    ]
    
    const theFrame = $("#theFrame");
    const randomNr = Math.floor(Math.random() * moviesArray.length);
    
    theFrame.attr("src", "https://www.youtube.com/embed/" + moviesArray[randomNr] + "?controls=1&autoplay=1")
    
})