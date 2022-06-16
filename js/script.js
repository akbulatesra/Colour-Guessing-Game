//HTML dökümanindan gerekli ogeler js dosyasina aliniyor
let boxes = document.querySelectorAll(".myBox");
let pickedColour;
let boxNum = 6;
let colors = [];
let rgbDOM = document.querySelector("#rgb");
let resultDOM = document.querySelector("#result");
let newGame = document.querySelector("#newColours");

// rgb renk kodunu olusturmak icin math kutuphanesinden ve random,floor metodlarindan faydalandim
function creatingColours() {
    let r= Math.floor(Math.random()*256);
    let g= Math.floor(Math.random()*256);
    let b= Math.floor(Math.random()*256);
    return ("rgb("+r+","+" "+g+","+" "+b+")")
}

for (let i=0; i<boxNum; i++){
    colors.push(creatingColours()); //olusan renkler bir array e ekleniyor
    boxes[i].style.backgroundColor = colors[i]; //renkler kutulara aktariliyor
    pickedColour = colors[Math.floor(Math.random()*6)]; //tahmin edecegimiz renk seciliyor
    rgbDOM.textContent =pickedColour; //metin olarak icerigi ekleniyor
    boxes[i].addEventListener("click",function() { //tiklaninca tahminin dogrulugu kontrol ediliyor
        let clickedColour = this.style.backgroundColor;
        console.log(clickedColour);
        if (clickedColour === pickedColour){ 
            for( let i=0; i<boxNum; i++) {
                boxes[i].style.backgroundColor = pickedColour;
            }
            resultDOM.textContent = "YOU WIN"
            newGame.textContent= "ANOTHER GAME?"
        } else {
            resultDOM.textContent = "TRY AGAIN"
            boxes[i].style.backgroundColor = "#1E1E1C"
        }})}


newGame.addEventListener("click",function(){ //yeni renk secmek veya oyun bittiginde tekrar oynamak icin gerekli olan fonksiyon
    colors=[]; // once listeyi bosaltiyoruz
    newGame.textContent="new colours";
    resultDOM.textContent="";
    for (let i=0; i<boxNum; i++){ //yukaridaki atama islemlerini tekrar yapiyoruz
        colors.push(creatingColours());
        boxes[i].style.backgroundColor = colors[i];
        pickedColour = colors[Math.floor(Math.random()*6)];
        rgbDOM.textContent =pickedColour;
        
    }})



