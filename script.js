// textarea for showing expression and result 
const output = document.querySelector('.txtArea')
const result = document.querySelector('#btn-equal')
const h1 = document.querySelector('h1')

//to enter the number 
function pressNum(e){
    if(output.innerHTML === "0"){
        output.innerHTML = e.innerHTML;
    }
    else{
        output.innerHTML += e.innerHTML;
    }
}

// to clear all
function pressAllClear(){
    output.innerHTML="0";
}

// to clear one at a time.
function pressClear(){
    output.innerHTML = output.innerHTML.slice(0,-1)

}

//calculate and output result on pressing equal.
var clickCount = 0;
function pressEqual(e){
     clickCount++;
    if (clickCount === Math.round(Math.random()*5)+1){
        output.innerHTML = Math.round(Math.random()*5) 
         output.style.backgroundColor="red"
         output.style.translate = "10px"
         h1.innerHTML= "Prank Calculator" + '<i class="fa-solid fa-face-angry fa-shake" style="color: #af2c53;"></i>'
    }

    if(output.innerHTML.includes("+")){
    output.innerHTML = eval(output.innerHTML)
    } else if(output.innerHTML.includes("-")){
        output.innerHTML = eval(output.innerHTML)
    }
    else if(output.innerHTML.includes("*")){
        output.innerHTML = eval(output.innerHTML) 
    } else if(output.innerHTML.includes("/")){
        output.innerHTML = eval(output.innerHTML)
    }
    else if(output.innerHTML.includes("%")){
        output.innerHTML = eval(output.innerHTML)
        }
    else{
        output.innerHTML += e.innerHTML.slice(0, -1)
    }
}



// result.addEventListener("click",  function pressEqual(e){
//    if
// }, false)

// document.addEventListener('click', function a(e) {
//     const id = (e.target.id);
//     document.getElementById(id).src = "./images/cross.jpeg"
 
//     clickCount++;
//     if (clickCount % 2 == 0) {
//        document.getElementById(id).src = "./images/O.jpeg"
//     }
 
//  }, false);

