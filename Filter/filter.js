const students_IT = [
    { name: "İsmayıl", surname: "Əliyev", age: 18, group: 651.22 },
    { name: "Adil", surname: "Quliyev", age: 18, group: 653.22 },
    { name: "Nihad", surname: "Nəzərov", age: 18, group: 651.22 },
    { name: "Emin", surname: "Quliyev", age: 18, group: 651.22 },
    { name: "Leyla", surname: "Nəzərova", age: 18, group: 655.22 },
    { name: "İlhamə", surname: "Həmidova", age: 18, group: 651.22 },
    { name: "Gülşən", surname: "İmanova", age: 18, group: 653.22 },
    { name: "Tural", surname: "Ağayev", age: 18, group: 655.22 },
    { name: "Ümid", surname: "Məlikov", age: 18, group: 653.22 },
    { name: "Fəridə", surname: "Əliyeva", age: 18, group: 655.22 },
    { name: "Fərid", surname: "Ağalarov", age: 18, group: 653.22 },
    { name: "Yaqub", surname: "İmanov", age: 19, group: 655.22 },
    { name: "Pərvanə", surname: "İsmayılova", age: 17, group: 657.22 },
    { name: "Zəhra", surname: "Umudova", age: 18, group: 657.22 },
    { name: "Rövşən", surname: "Kazımov", age: 18, group: 657.22 },
    { name: "Yusif", surname: "Fəridli", age: 18, group: 657.22 },
];
const students_CS = [
    { name: "Zeynəb", surname: "Yusifova", age: 18, group: 681.22 },
    { name: "Adilə", surname: "Quliyeva", age: 18, group: 683.22 },
    { name: "Cəmilə", surname: "İsmayılova", age: 18, group: 685.22 },
    { name: "Turan", surname: "Qarayev", age: 18, group: 681.22 },
    { name: "Dilbər", surname: "Həsənova", age: 18, group: 687.22 },
    { name: "Elsən", surname: "Kərimov", age: 18, group: 683.22 },
    { name: "Həsrət", surname: "Həsrətov", age: 18, group: 685.22 },
    { name: "Tural", surname: "Ağayev", age: 18, group: 681.22 },
    { name: "Nərgiz", surname: "Quluzadə", age: 18, group: 683.22 },
    { name: "Bəkir", surname: "Əlizadə", age: 18, group: 685.22 },
    { name: "Tahir", surname: "Məmmədov", age: 18, group: 687.22 },
    { name: "Kənan", surname: "İmamov", age: 19, group: 687.22 },
    { name: "İslam", surname: "Muxtərli", age: 17, group: 683.22 },
    { name: "Zülfiyyə", surname: "Atayeva", age: 18, group: 681.22 },
    { name: "Fidan", surname: "Həsənzadə", age: 18, group: 687.22 },
    { name: "Göyçək", surname: "Əmirova", age: 18, group: 685.22 },
];
const students_IS = [
    { name: "Aynurə", surname: "Paşayeva", age: 18, group: 691.22 },
    { name: "Elgün", surname: "Hüseynzadə", age: 18, group: 693.22 },
    { name: "Emil", surname: "Kazımov", age: 18, group: 695.22 },
    { name: "Elmar", surname: "Quliyev", age: 18, group: 697.22 },
    { name: "Sənan", surname: "Qasımzadə", age: 18, group: 691.22 },
    { name: "Səmra", surname: "Mirzəyeva", age: 18, group: 693.22 },
    { name: "Amid", surname: "Abdullayev", age: 18, group: 695.22 },
    { name: "Sevinc", surname: "Məmmədov", age: 18, group: 697.22 },
    { name: "İpək", surname: "Rəhimova", age: 18, group: 691.22 },
    { name: "Gülər", surname: "Rəsulova", age: 18, group: 693.22 },
    { name: "Ülkər", surname: "Əmirova", age: 18, group: 695.22 },
    { name: "Nərgiz", surname: "Cəfərova", age: 19, group: 697.22 },
    { name: "Elşən", surname: "Əhmədov", age: 17, group: 691.22 },
    { name: "Elşad", surname: "Novruzov", age: 18, group: 693.22 },
    { name: "Zəhra", surname: "Bağırova", age: 18, group: 695.22 },
    { name: "Həsrət", surname: "Heydərli", age: 18, group: 697.22 }
];

let ITlist1 = document.querySelector("#group_651");
let ITlist2 = document.querySelector("#group_653");
let ITlist3 = document.querySelector("#group_655");
let ITlist4 = document.querySelector("#group_657");

let CSlist1 = document.querySelector("#group_681");
let CSlist2 = document.querySelector("#group_683");
let CSlist3 = document.querySelector("#group_685");
let CSlist4 = document.querySelector("#group_687");

let ISlist1 = document.querySelector("#group_691");
let ISlist2 = document.querySelector("#group_693");
let ISlist3 = document.querySelector("#group_695");
let ISlist4 = document.querySelector("#group_697");

let filter_data;
let body = document.querySelector("tbody");
let Number = document.querySelector("#display_group");
let Table = document.getElementsByTagName("table");
let ITbutton = document.querySelector("#itbutton");
let CSbutton = document.querySelector("#csbutton");
let ISbutton = document.querySelector("#isbutton");
let istirakButton = document.querySelector("#istirak");
let qaibButton = document.querySelector("#qaib");

let row = document.getElementById("buttonsrow");
console.log(row);
function data(arr) {
    body.innerHTML = "";
    arr.forEach(element => {
        body.innerHTML += `<tr>
                <th>${element.name}</th>
                <th>${element.surname}</th>
                <th>${element.age}</th>
                <th>${element.group}</th>
                <th><button id="partinput">d/e</button></th>
            </tr>`;
    });
}

istirakButton.addEventListener("click", function () {
    let buttons = document.querySelectorAll("#partinput");
    buttons.forEach(button => {
        button.id = "iebutton";
        button.textContent = "i/e";
        button.addEventListener("click", function () {
            if (button.id === "iebutton") {
                showDangerAlert("danger", "İştiraklara müdaxilə edə bilməzsiniz.");
            }
        });
        showAlert("primary", "İştirak əlavə edildi.");
    });
})
qaibButton.addEventListener("click", function () {
    let buttons2 = document.querySelectorAll("#partinput");
    buttons2.forEach(button => {
        button.id = "qbbutton";
        button.textContent = "q.";
        button.addEventListener("click", function () {
            if (button.id === "qbbutton") {
                showDangerAlert("danger", "Qaiblərə müdaxilə edə bilməzsiniz.");
            }
        });
        showAlert("primary", "Qaib əlavə edildi.");
    });
});

body.addEventListener("click", function (event) {
    if (event.target.id === "partinput") {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
        <p>Seçiminizi edin: </p>
        <button id="iebutton">i/e</button>
        <button id="qbbutton">q.</button>
      `;
        document.body.appendChild(modal);

        const ieButton = document.querySelector("#iebutton");
        ieButton.addEventListener("click", function () {
            const partInputButton = document.querySelector("#partinput");
            partInputButton.textContent = "i/e";
            partInputButton.id = 'iebutton';
            modal.remove();
        });

        const qbButton = document.getElementById("qbbutton");
        qbButton.addEventListener("click", function () {
            const partInputButton = document.querySelector("#partinput");
            partInputButton.textContent = "q.";
            partInputButton.id = 'qbbutton';
            modal.remove();
        });
    }
});
function showAlert(type, message) {
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    div.style.backgroundColor = 'turquoise'
    div.style.color = "white";
    div.style.textAlign = 'center';
    div.style.fontSize = '25px'
    div.style.width = '700px';
    div.style.height = '30px'
    div.style.position = 'absolute';
    div.style.left = '360px'
    div.style.top = '120px'

    document.body.appendChild(div);
    setTimeout(function () {
        div.remove();
    }, 2000);
}
function showDangerAlert(type, message) {
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    div.style.backgroundColor = 'red'
    div.style.color = "white";
    div.style.textAlign = 'center';
    div.style.fontSize = '25px'
    div.style.width = '700px';
    div.style.height = '30px'
    div.style.position = 'absolute';
    div.style.left = '360px'
    div.style.top = '120px'

    document.body.appendChild(div);
    setTimeout(function () {
        div.remove();
    }, 2000);
}
function add() {
    let button = document.createElement("button");
    button.id = "partinput";
    button.textContent = "d/e";
}
ITbutton.addEventListener('click', () => {
    data(students_IT);
    Number.style.display = "block";
    Number.innerText = "Information Technology";
    Number.style.backgroundColor = "lightcoral";
    Number.style.width = "200px";
    Number.style.height = "80px";
    Number.style.position = "relative";
    Number.style.top = "120px";
    add();


})
CSbutton.addEventListener('click', () => {
    data(students_CS);
    Number.style.display = "block";
    Number.innerText = "Computer Sciences";
    Number.style.backgroundColor = "yellowgreen";
    Number.style.width = "200px";
    Number.style.height = "80px";
    Number.style.position = "relative";
    Number.style.top = "120px";


})
ISbutton.addEventListener('click', () => {
    data(students_IS);
    Number.style.display = "block";
    Number.innerText = "Information Security";
    Number.style.backgroundColor = "cornflowerblue";
    Number.style.width = "200px";
    Number.style.height = "80px";
    Number.style.position = "relative";
    Number.style.top = "120px";


})


ITlist1.addEventListener("click", () => {
    filter_data = students_IT.filter(x => x.group == 651.22)
    data(filter_data);
    Number.style.display = "block";
    Number.style.backgroundColor = "crimson"

    Number.innerText = "651.22";
})
ITlist2.addEventListener("click", () => {
    filter_data = students_IT.filter(x => x.group == 653.22)
    data(filter_data);
    Number.style.display = "block";
    Number.style.backgroundColor = "crimson"
    Number.innerText = "653.22";

})
ITlist3.addEventListener("click", () => {
    filter_data = students_IT.filter(x => x.group == 655.22)
    data(filter_data);
    Number.style.display = "block";
    Number.style.backgroundColor = "crimson"
    Number.innerText = "655.22";

})
ITlist4.addEventListener("click", () => {
    filter_data = students_IT.filter(x => x.group == 657.22)
    data(filter_data);
    Number.style.display = "block";
    Number.style.backgroundColor = "crimson"
    Number.innerText = "657.22";

})
CSlist1.addEventListener("click", () => {
    filter_data = students_CS.filter(x => x.group == 681.22)
    data(filter_data);
    Number.style.display = "block";
    Number.style.backgroundColor = "lightgreen"
    Number.innerText = "681.22";

})
CSlist2.addEventListener("click", () => {
    filter_data = students_CS.filter(x => x.group == 683.22)
    data(filter_data);
    Number.style.display = "block";
    Number.style.backgroundColor = "lightgreen"
    Number.innerText = "683.22";

})
CSlist3.addEventListener("click", () => {
    filter_data = students_CS.filter(x => x.group == 685.22)
    data(filter_data);
    Number.style.display = "block";
    Number.style.backgroundColor = "lightgreen"
    Number.innerText = "685.22";

})
CSlist4.addEventListener("click", () => {
    filter_data = students_CS.filter(x => x.group == 687.22)
    data(filter_data);
    Number.style.display = "block";
    Number.style.backgroundColor = "lightgreen"
    Number.innerText = "687.22";

})
ISlist1.addEventListener("click", () => {
    filter_data = students_IS.filter(x => x.group == 691.22)
    data(filter_data);
    Number.style.display = "block";
    Number.style.backgroundColor = "lightblue"
    Number.innerText = "691.22";

})
ISlist2.addEventListener("click", () => {
    filter_data = students_IS.filter(x => x.group == 693.22)
    data(filter_data);
    Number.style.display = "block";
    Number.style.backgroundColor = "lightblue"
    Number.innerText = "693.22";

})
ISlist3.addEventListener("click", () => {
    filter_data = students_IS.filter(x => x.group == 695.22)
    data(filter_data);
    Number.style.display = "block";
    Number.style.backgroundColor = "lightblue"
    Number.innerText = "695.22";

})
ISlist4.addEventListener("click", () => {
    filter_data = students_IS.filter(x => x.group == 697.22)
    data(filter_data);
    Number.style.display = "block";
    Number.style.backgroundColor = "lightblue"
    Number.innerText = "697.22";
})