const allbtnEl = document.getElementById("allbtn");
const activebtnEl = document.getElementById("activebtn");
const completebtnEl = document.getElementById("completebtn");
const sortEl = document.getElementById("sort");
const searchEl = document.getElementById("search");
const selectEl = document.getElementById('select');
const addEl = document.getElementById("add");
const todoEl = document.getElementById("todo");
let insertEl = document.getElementById('display_main');


let count = 0;

let set = new Set();
//---------------------------------------------------------------------------------------updateUI-----------------------------------------------------------------------
addEl.addEventListener('click', update);
function update() {
    document.getElementById("hide").style.visibility = "hidden";
    let text = todoEl.value
    text = text.trim();
    count++;
    if (text != '') {
        let html = `<div id="div${count}" class="checked">
   <input id="check${count}"class="check" type="checkbox">
   <span id="text${count}" class="text">${text}</span>
   <input id="input${count}"class="eInput" type="text">
   <img class="edit" id="e${count}" src="icons8-edit.svg" alt="">
   <img class="delete" id="d${count}"src="icons8-delete.svg" alt="">
</div>`
        insertEl.insertAdjacentHTML("afterbegin", html);
    } else {
        alert("Dont enter empty data")
    }
    todoEl.value = "";
    del();
    editFeature();
        for (let i = 0; i <= count; i++) {
            if (document.getElementById(`text${i}`)) {
                set.add(document.getElementById(`text${i}`).textContent)
            }
        }
    }
document.addEventListener("keydown", function (e) {
    let key = e.key;
    if (key === "Enter") {
        update();
    }
});

//   ------------------------------------------------------------------store------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------delete ------ edit ----------------------------------------------------------------------------------------
function editFeature() {
    for (let i = 1; i < 100; i++) {
        if (document.getElementById(`e${i}`)) {
            let flag = 1;
            document.getElementById(`e${i}`).addEventListener('click', () => {
                if (flag === 1) {
                    flag = 0;
                    document.getElementById(`input${i}`).style.display = "block"
                }
                else {
                    flag = 1;
                    let data = document.getElementById(`input${i}`).value;
                    if (data === "") {
                        alert("enter valid input");
                    }
                    else {
                        document.getElementById(`text${i}`).innerHTML = data;
                    }
                    document.getElementById(`input${i}`).style.display = "none"
                }
            })
        }
    }
}
function del() {
    for (let i = 0; i < 100; i++) {
        if (document.getElementById(`d${i}`)) {
            document.getElementById(`d${i}`).addEventListener('click', () => {
                if (document.getElementById(`div${i}`)) {
                    document.getElementById(`div${i}`).remove();
                }
            })
        }
    }
}
//----------------------------------------------------------------searchFeature-----------------------------------------------------------------------------------------------
searchEl.addEventListener('click', search);
function search() {
    let map=new Map();
    let text = todoEl.value;
    for (let i = 1; i <= count; i++) {
        if (document.getElementById(`text${i}`).textContent .includes(text)) {
           map.set(i,text);
        }
    }
    display(map)
}
function display(map){
   for(let i=1;i<=count;i++){
    if(!map.has(i)){
       if(document.getElementById(`div${i}`)){
        document.getElementById(`div${i}`).style.display="none";
       }
    }
   }
}
document.addEventListener("keydown", function (e) {
    let key = e.key;
    if (key === "Backspace" && document.getElementById('todo').value.length == 1) {
        for(let i=1;i<=count;i++){
            if(document.getElementById(`div${i}`)){
                document.getElementById(`div${i}`).style.display="block";
            }
        }
    }
});
//--------------------------------------------------------------------action--------------------------------------------------------------------------------------------------
selectEl.addEventListener('click', select);
function select(value) {
    var length = document.getElementsByClassName('check').length;
    if (value === 'select') {
        for (let i = 0; i < length; i++) {
            document.getElementsByClassName('check')[i].checked = true;
        }
    }
    else if (value === 'unselect') {
        for (let i = 0; i < length; i++) {
            document.getElementsByClassName('check')[i].checked = false;
        }
    }
    else if (value === 'delete') {
        for (let i = 0; i < length; i++) {
            if (document.getElementsByClassName('check')[i].checked) {
                document.getElementsByClassName('checked')[i].remove();
                length = document.getElementsByClassName("check").length;
                i--;
            }
        }
    }
    selectEl.value = 'Action'
}
//-----------------------------------------------------------------------sorting-----------------------------------------------------------------
sortEl.addEventListener("click", sort);
function sort(value) {
    let arr=[];
    for(let value of set){
        arr.push(value);
    }
    if (value === "A-Z") {
        console.log(value)
        let arr1=[...arr];
        arr1.sort();
        arr1.reverse();
        insertEl.innerHTML = '';
        for (let i = 0; i < arr1.length; i++) {
            let html = `<div id="div${i + 1}" class="checked">
          <input id="check${i + 1}"class="check" type="checkbox">
          <span id="text${i + 1}" class="text">${arr1[i]}</span>
          <input id="input${i + 1}"class="eInput" type="text">
          <img class="edit" id="e${count}" src="icons8-edit.svg" alt="">
          <img class="delete" id="d${count}"src="icons8-delete.svg" alt="">
       </div>`;
            insertEl.insertAdjacentHTML("afterbegin", html);
        }
    }
    else if (value === "Z-A") {
        
        let arr1=[...arr];
        arr1.sort();
        insertEl.innerHTML = '';
        for (let i = 0; i < arr1.length; i++) {
            let html = `<div id="div${i + 1}" class="checked">
          <input id="check${i + 1}"class="check" type="checkbox">
          <span id="text${i + 1}" class="text">${arr1[i]}</span>
          <input id="input${i + 1}"class="eInput" type="text">
          <img class="edit" id="e${count}" src="icons8-edit.svg" alt="">
          <img class="delete" id="d${count}"src="icons8-delete.svg" alt="">
       </div>`;
            insertEl.insertAdjacentHTML("afterbegin", html);
        }
    }
    else if (value === 'newest') {
        let arr1=[...arr];
        insertEl.innerHTML = '';
        for (let i = arr.length - 1; i >= 0; i--) {
            let html = `<div id="div${i + 1}" class="checked">
            <input id="check${i + 1}"class="check" type="checkbox">
            <span id="text${i + 1}" class="text">${arr[i]}</span>
            <input id="input${i + 1}"class="eInput" type="text">
            <img class="edit" id="e${count}" src="icons8-edit.svg" alt="">
            <img class="delete" id="d${count}"src="icons8-delete.svg" alt="">
         </div>`;
            insertEl.insertAdjacentHTML("afterbegin", html);
        }
    }
    else if (value === 'oldest') {
        let arr1=[...arr];
        insertEl.innerHTML = '';
        for (let i = 0; i < arr1.length; i++) {
            let html = `<div id="div${i + 1}" class="checked">
            <input id="check${i + 1}"class="check" type="checkbox">
            <span id="text${i + 1}" class="text">${arr[i]}</span>
            <input id="input${i + 1}"class="eInput" type="text">
            <img class="edit" id="e${count}" src="icons8-edit.svg" alt="">
            <img class="delete" id="d${count}"src="icons8-delete.svg" alt="">
         </div>`;
            insertEl.insertAdjacentHTML("afterbegin", html);
        }
    }
    sortEl.value = 'Sort'
}
// -------------------------------------------------------------------------------------all active completed----------------------------------------------------------------------
allbtnEl.addEventListener("click", () => {
    for (let i = 1; i <= count; i++) {
        if (document.getElementById(`check${i}`)) {
            document.getElementById(`div${i}`).style.display = "block";
        }
    }
});
activebtnEl.addEventListener("click", () => {
    for (let i = 1; i <= count; i++) {
        if (document.getElementById(`check${i}`)) {
            if (document.getElementById(`check${i}`).checked) {
                document.getElementById(`div${i}`).style.display = "none";
            }
            else {
                document.getElementById(`div${i}`).style.display = "block";
            }
        }
    }
});
completebtnEl.addEventListener("click", () => {
    for (let i = 1; i <= count; i++) {
        if (document.getElementById(`check${i}`)) {
            if (document.getElementById(`check${i}`).checked) {
                document.getElementById(`div${i}`).style.display = "block";
            }
            else {
                document.getElementById(`div${i}`).style.display = "none";
            }
        }
    }
});