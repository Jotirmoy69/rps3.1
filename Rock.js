let youpoint = 0;
let compoint = 0;
const choice = document.querySelectorAll(".btn");
const msg = document.querySelector("#main-msg");
const yp = document.querySelector("#score-you");
const cp = document.querySelector("#score-com");
const img = document.querySelector("#img");
const img1 = document.querySelector("#img1");

let comgen = () => {
  let option = ["rock", "paper", "scissor"];
  let cgen = Math.floor(Math.random() * 3); //(math.random) 0 => 1 || (*3) 0 => 2 || Math.floor is remove point 2.345 => 2
  return option[cgen];
};
let draw = () => {
  console.log("Its a Draw");
  msg.innerText = "Its a Draw";
 
};
let winner = (winn) => {
  if (winn == true) {
    console.log("You are the winner");
    msg.innerText = "You are the Winner !";
    youpoint++
    yp.innerText = youpoint
  } else {
    console.log("You lose");
    msg.innerText = "Computer is the Winner ! ";
    compoint++
    cp.innerText = compoint
  }
};

let myplay = (you) => {
  let comchoice = comgen();
  console.log("user computer is = ", comchoice);
  if(comchoice === "rock"){
    img.src = "rock.png"
  }
  else if (comchoice === "paper"){
    img.src = "paper.png"
  }
  else {
    img.src = "scissors.png"
  }

  // console.log(youpoint)
  
  if (you === comchoice) {
    draw();
  } else {
    let winn = true;
    if (you === "rock") {
        winn = comchoice === "paper" ? false : true;
      } else if (you === "paper") {
        winn = comchoice === "scissor" ? false : true;
      }
       else if (you === "scissor"){
        winn = comchoice === "rock" ? false : true;
       }
      winner(winn);
  }
};

choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userchoice = choice.getAttribute("id");
    console.log("user choice is = ", userchoice);
    if(userchoice === "rock"){
      img1.src = "rock.png"
    }
    else if (userchoice === "paper"){
      img1.src = "paper.png"
    }
    else {
      img1.src = "scissors.png"
    }
    myplay(userchoice);
  });
});
