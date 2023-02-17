let isim = "Sezer"

let kisi = document.querySelector("#isim");
kisi.innerHTML = isim;


function checkTime(i){
    if(i<10){
        i = "0"+i
    };
    return i;
}



function startTime(){
    const bugun = new Date();
    let tumSaat = document.getElementById("saat")
    let saat = bugun.getHours()
    let dakika = bugun.getMinutes()
    let saniye = bugun.getSeconds()
    dakika = checkTime(dakika);
    saniye = checkTime(saniye);
    tumSaat.innerHTML = saat+"."+dakika+"."+saniye;
    
    setTimeout(startTime, 1000);
}

const bugun2 = new Date();

document.getElementById("gun").innerHTML = bugun2.toLocaleDateString("tr-Tr",{weekday:"long"});
//document.body.style.backgroundColor = "#0d1a26"
document.body.style.color = "Orange"
document.body.style.fontFamily = "Times New Roman, serif"