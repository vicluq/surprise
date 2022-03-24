const mainPage = document.querySelector(".intro");
const mainButton = document.getElementById("main_button");
const outputArea = document.querySelector(".output");

let clicked = 0;

const DATA = [
    "",
    "eu amo quando tu fica me olhando com um sorrisinho bobo quando a gente ta boiolando",
    "uma das melhores coisas do mundo é o tempo que a gente ta juntinho ouvindo musica junto e boiolando, sinto uma paz imensa",
    "tu é minha pessoa favorita",
    "to contigo pro que der e vier, sua parceirinha sempre",
    "literalmente amo fazer qualquer coisa contigo KKKK, sempre um tempo gostoso",
    "secretamente amo quando tu me morde, mas eu gosto de fazer drama hihi",
    "saudades/amo nossos rolês juntinhos que acabam quando o mundão acorda",
    "bicho, acho que nunca dormi tao bem como quando a gente dorme junto"
]

function generateRandom(max, min) {
    return Math.random() * (max - min) + min;
}

function sendPhrase(event) {
    console.log("SENT")
    const index = Math.ceil(generateRandom(DATA.length - 1, 0));
    console.log(index);
    outputArea.innerHTML = DATA[index];

    if(!clicked) {
        clicked = 1
        const p = document.createElement("p");
        p.innerHTML = "Clica de novo pra ver mais coisa :)";
        mainPage.append(p);
    }
}

mainButton.addEventListener("click", sendPhrase);

