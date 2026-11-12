const colors = ["lightblue","lightgreen","lightcoral"];
let colorIndex =0;
document.getElementById("colorBtn").addEventListener("click", function(){
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});
const textInput = document.getElementById("textInput");
const displayBtn = document.getElementById("displayBtn");
displayBtn.addEventListener("click", function() {
    const text = textInput.value;
    
    if (text.trim() === "") {
    alert("\u5165\u529b\u5024\u304c\u7a7a\u3067\u3059\u3002");
    return;
}
    document.getElementById("displayArea").textContent = text;
    document.getElementById("displayArea").classList.toggle("highlight");

});

const tableBody = document.getElementById("tableBody");
const rowCount = document.getElementById("rowCount");

function updateRowCount(){
    rowCount.textContent = tableBody.rows.length;
    displayBtn.style.display =
        tableBody.rows.length >= 3 ? "none" : "";
}

document.getElementById("addBtn").addEventListener("click", function() {
  const row = tableBody.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = textInput.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "\u524a\u9664";
  cell2.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function() {
    row.remove();
    updateRowCount();
  });

  if (tableBody.rows.length > 3) {
    tableBody.deleteRow(0);
  }

  updateRowCount();
});
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
