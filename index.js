//By Ajay just Stone Paper Scissor Game
//Time took for create 4hrs and it may not appropriate forr desktop only for mobiles
//Getting variables by Id
const userChoice = document.getElementById("userChoice")
const compChoice = document.getElementById("compChoice")

const Stone = document.getElementById("stone")
const sissor = document.getElementById("sissor")
const paper = document.getElementById("paper")

const point = document.getElementById("point")
const comp = ["stone", "paper", "sissor"]

const points1 = document.getElementById("points1")
const points2 = document.getElementById("points2")

//Declaring default points
let val1 = 0
let val2 = 0
points1.textContent = `User points: ${val1}`
points2.textContent = `Comp points: ${val2}`

//Function for button stone
Stone.addEventListener("click",(e)=>{
    userChoice.textContent = e.target.innerHTML
    let choose = comp[Math.floor(Math.random()*comp.length)]
    compChoice.textContent = choose

    if(choose === comp[2] && userChoice.textContent === comp[0]){
        points1.textContent = `User points: ${val1++}`
        console.log("You won")
    }
    else if(choose === comp[0] && userChoice.textContent === comp[0]){
        points1.textContent = `User points: ${"Draw"}`
        console.log("Draw")
     }
    else{

        points2.textContent = `Comp points: ${val2++}` 
        console.log("You lose")
    }
})

//Function for button sissor
sissor.addEventListener("click",(e)=>{
     userChoice.textContent = e.target.innerHTML
     let choose = comp[Math.floor(Math.random()*comp.length)]
     compChoice.textContent = choose

     if(choose === comp[0] && userChoice.textContent === comp[2]){
         console.log("You Lose")
         points2.textContent = `Comp points: ${val2++}` 
     }
     else if(choose === comp[2] && userChoice.textContent === comp[2]){
        points1.textContent = `User points: ${"Draw"}`
    }
     else{

        points1.textContent = `User points: ${val1++}`
        console.log("You won")
     }
     })

//Function for paper
paper.addEventListener("click", (e)=>{
     userChoice.textContent = e.target.innerHTML
     let choose = comp[Math.floor(Math.random()*comp.length)]
     compChoice.textContent = choose

     if(choose === comp[0] && userChoice.textContent === comp[1]){
        points1.textContent = `User points: ${val1++}`
         console.log("You won")
     }
     else if(choose === comp[1] && userChoice.textContent === comp[1]){
        points1.textContent = `User points: ${"Draw"}`
        console.log("Draw")
     }
     else{

        points2.textContent = `Comp points: ${val2++}` 
         console.log("You lose")
     }
     })