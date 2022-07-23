let calculator = document.querySelectorAll(".buttons button");
let ekran = document.querySelector(".screen");
let islem = null;
let islemSirasi = "sayi1";
let sayi1 = "";
let sayi2 = "";
let sonuc = null;
let islemEklenebilir = false;


calculator.forEach((element) => {
  element.addEventListener("click", (e) => {
    if(e.target.classList.contains("operation")) {

        if(e.target.innerHTML === "R") {
            // reset - AC
            ekran.innerHTML = "&nbsp;"
            islem = null;
            islemSirasi = "sayi1";
            sayi1 = "";
            sayi2 = "";
            sonuc = null;
            islemEklenebilir = false;
        } else if(e.target.innerHTML === "=") {
            // eşittir =
            if(sayi1 !== "" && sayi2 !== "" && sonuc===null) {
                switch (islem) {
                    case "+": sonuc = parseInt(sayi1) + parseInt(sayi2); break;
                    case "-": sonuc = sayi1 - sayi2; break;
                    case "x": sonuc = sayi1 * sayi2; break;
                    case "/": sonuc = sayi1 / sayi2; break;
                }
                ekran.insertAdjacentText('beforeend',` = ${sonuc}`)
            }
        } else {
            // işlem + - x / 
            if(sayi1 !== "") {
                if(islemEklenebilir) {
                    islemSirasi = "sayi2"
                    ekran.insertAdjacentText("beforeend",` ${e.target.innerHTML} `)
                    islemEklenebilir = false
                    islem = e.target.innerHTML
                }
            } else {
                alert("öncelikle bir sayı belirleyin!!")
            }
        }
        
    }else {
        // sayı tıklandı
        if(islemSirasi === "sayi1") {
            sayi1+=e.target.innerHTML;
            islemEklenebilir = true
        } else {
            sayi2+=e.target.innerHTML;
        }
        sonuc === null ? ekran.insertAdjacentText('beforeend',e.target.innerHTML) : null;
    }
  });
});
