let allbtnEl = document.getElementById('allbtn')
let activebtnEl = document.getElementById('activebtn')
let completebtnEl = document.getElementById('completebtn')
let addEl = document.getElementById('add');
let searchEl = document.getElementById('search')
let todo = document.getElementById('todo');
let insertEl = document.getElementById('display_main');
let selectEl = document.getElementById('select');
let sortEl = document.getElementById('sort');


let arr = [];
//-------------------------------------------------------------------------------------------Adddata-----------------------------------------------
addEl.addEventListener('click', add);
let count = 0;
function add() {
    arr.push(todo.value);
    document.getElementById("hide").style.visibility = "hidden";
    todo.value = "";
    updateUI(arr);
}

todo.addEventListener("keydown", function (e) {
    let key = e.key;
    if (key === "Enter") {
        add();
    }
});
// -----------------------------------------------------------------------------------------updateuI------------------------------------------------
function updateUI(arr) {
    console.log(arr);
    insertEl.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        let html = `<div id="div${i + 1}" class="checked">
        <div class="checked1">
   <input id="check${i + 1}"class="check" type="checkbox">
   <span id="text${i + 1}" class="text">${arr[i]}</span>
   <input hidden id="textinput${i + 1}" class="text1">
   </div>
   <div class="checked2">
   <img class="edit" id="e${i + 1}" src="icons8-edit.svg" alt="">
   <img class="delete" id="d${i + 1}"src="icons8-delete.svg" alt="">
   </div>
</div>`
        insertEl.insertAdjacentHTML("afterbegin", html);
    }
    edit();
    deleteval();
}

//------------------------------------------------------------------------------------editdeletefunctionality--------------------------------------
function edit() {
    for (let i = 0; i < arr.length; i++) {
        if (document.getElementById(`e${i + 1}`)) {
            document.getElementById(`e${i + 1}`).addEventListener('click', () => {
                // if (todo.value != "") {
                //     document.getElementById(`text${i + 1}`).innerHTML = todo.value;
                //     arr[i] = todo.value;
                //     todo.value = "";
                //     i = -1;
                // }
                document.getElementById(`textinput${i+1}`).hidden=false;
               document.getElementById(`textinput${i+1}`).addEventListener('keydown',function(e){
                    if(e.key==='Enter'){
                        arr[i]=document.getElementById(`textinput${i+1}`).value;
                        document.getElementById(`textinput${i+1}`).hidden=true;
                        updateUI(arr)
                    }
               })
            })
        }
    }
}
function deleteval() {
    for (let i = 0; i < arr.length; i++) {
        if (document.getElementById(`d${i + 1}`)) {
            document.getElementById(`d${i + 1}`).addEventListener('click', () => {
                if (document.getElementById(`div${i + 1}`)) {
                    let text = "Press a button!\nEither OK or Cancel.";
                    if (confirm(text) == true) {
                        arr.splice(i, 1);
                        console.log(arr);
                        document.getElementById(`div${i + 1}`).remove();
                        i = -1;
                    }
                }
            })
        }
    }
}
//------------------------------------------------------------------------------------------action-------------------------------------------------------------------------------
selectEl.addEventListener('click', select);
function select(value) {
    let temp = [...arr];
    if (value === 'select') {
        for (let i = 0; i < temp.length; i++) {
            document.getElementsByClassName('check')[i].checked = true;
        }
    }
    else if (value === 'unselect') {
        for (let i = 0; i < temp.length; i++) {
            document.getElementsByClassName('check')[i].checked = false;
        }
    }
    else if (value === 'delete') {
        var length = arr.length;
        let temp = [];
        for (let i = 1; i <= length; i++) {
            if (document.getElementById(`check${i}`)) {
                if (document.getElementById(`check${i}`).checked) {
                    document.getElementById(`div${i}`).remove();
                    temp.push(arr[i - 1]);
                }
            }
        }
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (temp[i] === arr[j]) {
                    arr.splice(j, 1);
                    break;
                }
            }
        }
    }
    selectEl.value = 'Action'
}
// ---------------------------------------------------------------------------------------------------sort------------------------------------------------------------------------
sortEl.addEventListener('click', sort);
function sort(value, arr) {

    if (value === 'A-Z') {
        let temp = [...arr];
        temp.sort();
        temp.reverse();
        updateUI(temp);
    }
    else if (value === 'Z-A') {
        let temp = [...arr];
        temp.sort();
        updateUI(temp);
    }
    else if (value === 'oldest') {
        let temp = [...arr];
        temp.reverse();
        updateUI(temp);
    }
    else if (value === 'newest') {
        let temp = [...arr];
        updateUI(temp);
    }
}
//-------------------------------------------------------------------------------------allactivecompleted------------------------------------------
allbtnEl.addEventListener('click', () => {
    for (let i = 0; i < arr.length; i++) {
        if (document.getElementById(`check${i + 1}`)) {
            document.getElementById(`div${i + 1}`).style.display = "flex";
        }
    }
})
activebtnEl.addEventListener("click", () => {
    for (let i = 1; i <= arr.length; i++) {
        if (document.getElementById(`check${i}`)) {
            if (document.getElementById(`check${i}`).checked) {
                document.getElementById(`div${i}`).style.display = "none";
            }
            else {
                document.getElementById(`div${i}`).style.display = "flex";
            }
        }
    }
});
completebtnEl.addEventListener("click", () => {
    for (let i = 1; i <= arr.length; i++) {
        if (document.getElementById(`check${i}`)) {
            if (document.getElementById(`check${i}`).checked) {
                document.getElementById(`div${i}`).style.display = "flex";
            }
            else {
                document.getElementById(`div${i}`).style.display = "none";
            }
        }
    }
});
// ---------------------------------------------------------------------------------------search----------------------------------------------------
searchEl.addEventListener('click', search);
function search() {
    let map = new Map();
    let text = todo.value;
    for (let i = 1; i <= arr.length; i++) {
        if (document.getElementById(`text${i}`).textContent.includes(text)) {
            map.set(i, text);
        }
    }
    display(map);
}
function display(map) {
    for (let i = 1; i <= arr.length; i++) {
        if (!map.has(i)) {
            if (document.getElementById(`div${i}`)) {
                document.getElementById(`div${i}`).style.display = "none";
            }
        }
    }
}
document.addEventListener("keydown", function (e) {
    let key = e.key;
    if (key === "Backspace" && document.getElementById('todo').value.length == 1) {
        for (let i = 1; i <= arr.length; i++) {
            if (document.getElementById(`div${i}`)) {
                document.getElementById(`div${i}`).style.display = "flex";
            }
        }
    }
})
// ----------------------------------------------------------------------codecomplete---------------------------------------------------------------