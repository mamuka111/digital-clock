let container = document.querySelector(".container")
let am = document.querySelector(".am")
let  rightLast = document.querySelector(".rightLast")
 let saati=0;
 let wuti=0;
 let wami=0;
 let p1 = document.querySelector(".left1")
 let p2 = document.querySelector(".bottom1")
 let p3 = document.querySelector(".rigth1")
 setInterval(()=>{
    rightLast.innerHTML = am.textContent
    wami++;
    if (saati >= 12) {
        am.textContent = "PM";
      } else {
        am.textContent = "AM";
      }
    if(wami>=60){
        wami = 0;
        wuti ++
    }
    if(wuti >=60 ){
        wuti = 0;
        saati ++;
    }
    if (saati>=24){
        saati=0
        wuti=0
        wami=0
    }

    p1.innerHTML = saati;
    p2.innerHTML = wuti;
    p3.innerHTML = wami;
 },1000)