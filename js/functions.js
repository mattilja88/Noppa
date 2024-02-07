
document.querySelector('button').addEventListener('click', () => {
    const random = Math.floor(Math.random()*6) +1
    let image = document.getElementById("kuva")
    let images = ["./images/inverted-dice-1.png", "./images/inverted-dice-2.png", "./images/inverted-dice-3.png", "./images/inverted-dice-4.png", "./images/inverted-dice-5.png", "./images/inverted-dice-6.png"]
    if (random === 1){
        image.src = images[0]
    }
    else if (random === 2){
        image.src = images[1]
    }
    else if (random === 3){
        image.src = images[2]
    }
    else if (random === 4){
        image.src = images[3]
    }
    else if (random === 5){
        image.src = images[4]
    }
    else if (random === 6){
        image.src = images[5]
    }
    
})