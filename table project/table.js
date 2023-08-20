const add = document.querySelector("#adding");
const addButton = document.querySelector(".btn-add");
const closeButton = document.querySelector(".btn-close");
const newth = document.querySelector(".headoftable");

addButton.addEventListener("click", () => {
  const nameValue = document.querySelector("#n").value;
  const surnameValue = document.querySelector("#s").value;
  const ageValue = document.querySelector("#age").value;
  const table = document.querySelector("table");

  const tr = document.createElement("tr");

  const td1 = document.createElement("td");
  td1.textContent = nameValue;

  const td2 = document.createElement("td");
  td2.textContent = surnameValue;

  const td3 = document.createElement("td");
  td3.textContent = ageValue;


  const sil = document.createElement("th");
  sil.textContent = "Sil";
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  newth.appendChild(sil);
  table.appendChild(tr);
  if (newth.childElementCount <= 5) {
    newth.appendChild(sil);
  }
  else {
    newth.lastChild.remove();
  }

  sil.addEventListener("click", (e) => {
    table.lastChild.remove();

  })
}
)

const searchInput = document.querySelector("#searchinput");
const table = document.querySelector("table");

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  for (let i = 1; i < table.rows.length; i++) {
    const nameValue = table.rows[i].cells[0].textContent.toLowerCase();
    const Show = nameValue.includes(searchValue);

    table.rows[i].style.display = Show ? "table-row " : "none";
  }
});