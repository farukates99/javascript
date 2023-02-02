let İsim=prompt("İsim","adınızı giriniz");
console.log(İsim);
document.getElementById("myName").innerHTML=İsim;
const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
function showTime(){
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let day=weekday[today.getDay()];
  console.log(h);
  document.getElementById("myClock").innerHTML= h + ":" + m + ":" + s +" " +day;
}
setInterval(showTime, 1000); 
