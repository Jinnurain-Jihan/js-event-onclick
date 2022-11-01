const btn=document.querySelector(".btn");
const h1=document.querySelector("h1");
// btn.addEventListener("click", function(){
//       alert("you click the button");
// });

// btn.addEventListener("click",() =>{
//       alert("you click the button");
// })


// function myButton (){
//       alert("you click the button");
// }
// btn.addEventListener("click", myButton);

// const myButton=() =>{
//       h1.innerHTML="you click the button";
// }
btn.addEventListener("click", ()=>{
      h1.innerHTML="you click the button";
      h1.style.color="blue";
})