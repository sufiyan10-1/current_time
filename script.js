// const clock =document.querySelector("#clock");

// setInterval(() =>{
//    const date = new Date();
//   clock.textContent = date.toLocaleTimeString();
// },1000);

const button = document.getElementById("start_button");
console.log(button)
const time = document.getElementById("time");

button.addEventListener("click", () =>{
   showTime();
})
function showTime(){
    setInterval(()=>{
       const date = new Date()
       time.innerHTML = date.toLocaleTimeString()
   
    },1000)
}