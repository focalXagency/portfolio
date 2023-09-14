
const father = document.querySelector(".cards-exp");

// fetch("http://127.0.0.1:8000/api/experiences?")
// .then(res => res.json())
// .then(res => res = res.experiences)
// .then(res => {
//   console.log(res)
//     res.forEach(ele => {
//         father.innerHTML += `<div class="card">
//     <div class="exp-title">
//       <h3>${ele.title}</h3>
//       <p>${ele.date}</p>
//     </div>
//     <div class="exp-info">
//       <p>
//         ${ele.content} <span>read more</span>
//       </p>
//     </div>
//   </div>`;
//     })
    
// })

const spans = document.querySelectorAll(".experience-section .experience_section_indicators .experience_section_indicators_span")
const myCards = document.querySelectorAll(".experience-section .container .card")
const myArrows = document.querySelectorAll(".experience-section .container .arrow")
const myContiner = document.querySelector(".experience-section .container")


let counter = 0 ;
spans.forEach((span,i) => {
  span.addEventListener("click" , () => {
    spans.forEach(element => {
      element.classList.remove("active")
    });
    span.classList.add("active")
    console.log("i is " , i) 
    counter = i ;
    myCards.forEach((card) => {
      card.setAttribute("class" , "card")
    })
      if (i > 0 && i < myCards.length-1) {
        myCards[i].setAttribute("class", "card active")
        myCards[i-1].setAttribute("class", "card prev_card")
        myCards[i+1].setAttribute("class", "card next_card")
        myArrows.forEach(element => {
          element.classList.remove("disabled")
        });
      }
      if (i == myCards.length-1) {
        myCards[i].setAttribute("class", "card active")
        myCards[i-1].setAttribute("class", "card prev_card")
        myArrows[1].classList.add("disabled")
        if (myArrows[0].classList.contains("disabled")) {
          myArrows[0].classList.remove("disabled")
        }
      }
      if (i == 0) {
        myCards[0].setAttribute("class", "card active")
        myCards[i+1].setAttribute("class", "card next_card")  
        myArrows[0].classList.add("disabled")
        if (myArrows[1].classList.contains("disabled")) {
          myArrows[1].classList.remove("disabled")
        }
      }
    ;
  })
});

myArrows.forEach(arrow => {
  arrow.addEventListener("click" , () => {
    console.log("click arrow")
    if (arrow.classList.contains("left")) {
      counter--
      console.log("click arrow left")
    }
    else if (arrow.classList.contains("right")) {
      console.log("click arrow right")
      counter++
    }
    spans[counter].click()
  })
});



let prevPoint ;
let Differ ;
let DifferArray = [0,1];

function dragging (e) {
  DifferArray = [];
  prevPoint = e.touches[0].pageX;  
}

function draggingMoveOnTouch (e) {
  Differ = prevPoint - e.touches[e.touches.length-1].pageX;
  DifferArray.push(Differ);   
}


const sliding = (e) => {
  if (DifferArray[0] == undefined || DifferArray[DifferArray.length-1] ==undefined) {
    return false
  }
  console.log("DifferArray[0]",DifferArray[0])
  console.log("DifferArray[DifferArray.length-1]",DifferArray[DifferArray.length-1])
  e.preventDefault()
  if (DifferArray[0] >= DifferArray[DifferArray.length-1]-200) {
    console.log("bigger")
    counter--;
      if (counter < 0) {
        counter=0
      }
      spans[counter].click();
  }  
  else {
    counter++;
      console.log("smaller")
      if (counter > 3) {
        counter = 3 ;
      }
      spans[counter].click();

  }
}

myContiner.addEventListener("touchstart" , (e) => {
  dragging(e);
})

myContiner.addEventListener("touchmove" , (e) => {
  e.preventDefault()
  draggingMoveOnTouch(e);
})

myContiner.addEventListener("touchend", (e)=> {
  sliding(e);
});