let count = 0;
let sorting = 0;
//----------------------------------------------------------------define all element------------------------------------------------------------------------------------------------
let allbtnEl = document.getElementById("allbtn");
let activebtnEl = document.getElementById("activebtn");
let completebtnEl = document.getElementById("completebtn");
let addEl = document.getElementById("add");
let sortEl = document.getElementById("sort");
let searchEl = document.getElementById("search");
let selectEl = document.getElementById('select');

//-----------------------------------------------------------add color of button--------------------------------------------------------------------------------------------------
allbtnEl.addEventListener("click", () => {
  activebtnEl.style.backgroundColor = "rgba(73, 73, 232, 0.98)";
  completebtnEl.style.backgroundColor = "rgba(73, 73, 232, 0.98)";
  allbtnEl.style.backgroundColor = "white";
  let temp = store();
  for (let i = 0; i < temp.length; i++) {
    document.getElementsByClassName("checked")[i].style.display = "block";
  }
});
activebtnEl.addEventListener("click", () => {
  allbtnEl.style.backgroundColor = "rgba(73, 73, 232, 0.98)";
  activebtnEl.style.backgroundColor = "white";
  completebtnEl.style.backgroundColor = "rgba(73, 73, 232, 0.98)";
  let temp = store();
  for (let i = 0; i < temp.length; i++) {
    if (document.getElementsByClassName("check")[i].checked) {
      document.getElementsByClassName("checked")[i].style.display = "none";
    } else {
      document.getElementsByClassName("checked")[i].style.display = "block";
    }
  }
});
completebtnEl.addEventListener("click", () => {
  allbtnEl.style.backgroundColor = "rgba(73, 73, 232, 0.98)";
  activebtnEl.style.backgroundColor = "rgba(73, 73, 232, 0.98)";
  completebtnEl.style.backgroundColor = "white";
  let temp = store();
  for (let i = 0; i < temp.length; i++) {
    if (!document.getElementsByClassName("check")[i].checked) {
      document.getElementsByClassName("checked")[i].style.display = "none";
    } else {
      document.getElementsByClassName("checked")[i].style.display = "block";
    }
  }
});

//-----------------------------------------------------------------------------------add task in body part-----------------------------------------------------------------------
addEl.addEventListener("click", update);
function update() {
  document.getElementById("hide").style.visibility = "hidden";
  count++;
  let text = document.getElementById("todo").value;
  if (text !== "") {
    //console.log(text);
    document.getElementById("todo").value = "";
    document.getElementById(
      "display_main"
    ).innerHTML += `  <div class="checked">
    <input class="check" type="checkbox">
    <span class="text">${text}</span>
    <input class="eInput" type="text">
    <button id="e${count}">edit</button>
    <button id="d${count}">delete</button>
</div>`;
  } else {
    alert("not valid");
  }
  editFeature()

}
document.addEventListener("keydown", function (e) {
  let key = e.key;
  if (key === "Enter") {
    update();
  }
});
//----------------------------------------------------------------------------------------store the data---------------------------------------------------------------------
function store() {
  let arr = [];
  let length = document.getElementsByClassName('check').length;
  for (let i = 0; i < length; i++) {
    let text = document.getElementsByClassName("text")[i].innerHTML;
    arr.push(text);
  }
  return arr;
}

//-------------------------------------------------------------------------------sort-------------------------------------------------------------------------------------------
sortEl.addEventListener("click", sort);

function sort(value) {
  if (value === "A-Z") {
    let arr1 = store();
    document.getElementById("display_main").innerHTML = "";
    arr1.sort();
    console.log(arr1);
    for (let i = 0; i < arr1.length; i++) {
      document.getElementById(
        "display_main"
      ).innerHTML += `  <div  class="checked">
    <input class="check" type="checkbox">
    <span class="text">${arr1[i]}</span>
    <input class="eInput" type="text">
    <button id="e${i+1}">edit</button>
    <button id="d${i+1}">delete</button>
</div>`;
    }
  } else if (value === "Z-A") {
    let arr1 = store();
    document.getElementById("display_main").innerHTML = "";
    arr1.sort();
    arr1.reverse();
    console.log(arr1);
    for (let i = 0; i < arr1.length; i++) {
      document.getElementById(
        "display_main"
      ).innerHTML += `  <div class="checked">
    <input class="check" type="checkbox">
    <span class="text">${arr1[i]}</span>
    <input class="eInput" type="text">
    <button id="e${i+1}">edit</button>
    <button id="d${i+1}">delete</button>
</div>`;
    }
  } else if (value === "newest") {
    let arr1 = store();
    console.log(arr1);
    document.getElementById("display_main").innerHTML = "";
    for (let i = 0; i < arr1.length; i++) {
      document.getElementById(
        "display_main"
      ).innerHTML += `  <div class="checked">
    <input class="check" type="checkbox">
    <span class="text">${arr1[i]}</span>
    <input class="eInput" type="text">
    <button id="e${i+1}">edit</button>
    <button id="d${i+1}">delete</button>
</div>`;
    }
  } else if (value === "oldest") {
    let arr1 = store();
    document.getElementById("display_main").innerHTML = "";
    for (let i = arr1.length - 1; i >= 0; i--) {
      document.getElementById(
        "display_main"
      ).innerHTML += `  <div class="checked">
    <input class="check" type="checkbox">
    <span class="text">${arr1[i]}</span>
    <input class="eInput" type="text">
    <button id="e${i+1}">edit</button>
    <button id="d${i+1}">delete</button>
</div>`;
    }
  }
  editFeature();
  
}
//------------------------------------------------------------------------action ------------------------------------------------------
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
    console.log(length);
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

// ------------------------------------------------------------------search functionalites------------------------------------------------------
searchEl.addEventListener('click', search);
function search() {
  console.log(1)
  let arr = store();

  let text = document.getElementById("todo").value;
  for (let i = 0; i < arr.length; i++) {
    console.log("dev")
    if (text === arr[i]) {
      display(arr[i],i);
    }
  }
}
function display(text,ind) {
  let arr=store()
  console.log(2)

  for(let i=0;i<arr.length;i++){
    if(i!=ind){
      console.log(3)
      document.getElementsByClassName("checked")[i].style.display="none";
    }
  }

}
document.addEventListener("keydown", function (e) {
  let key = e.key;
  if (key === "Backspace"&&document.getElementById('todo').value.length==1) {
   let arr=store();
   console.log(arr)
   document.getElementById("display_main").innerHTML=""
   for(let i=0;i<arr.length;i++){
    document.getElementById("display_main").innerHTML+=`  <div class="checked">
    <input class="check" type="checkbox">
    <span class="text">${arr[i]}</span>
    <input class="eInput" type="text">
    <button id="${i}">edit</button>
    <button id="d${i}">delete</button>
    </div>`
   }
  }
});


//---------------------------------------delete ------ edit -------------features-----------------------------------------------------------
function editFeature(){
  for(let i=1;i<100;i++){
    if(document.getElementById(`e${i}`)){
      let flag=1;
      document.getElementById(`e${i}`).addEventListener('click',()=>{
        if(flag===1){
                flag=0;
                document.getElementsByClassName("eInput")[i-1].style.display = "block"
            }
            else{
                flag=1;
                let data=document.getElementsByClassName("eInput")[i-1].value;
                console.log(data)
                if(data==""){
                  alert("enter valid input");
                }
                else{
                  document.getElementsByClassName("text")[i-1].innerHTML=data;
                }
                document.getElementsByClassName("eInput")[i-1].style.display = "none"
            }
            console.log(flag)
      })
    }
  }
}
function deleteFeature(){
  for(let i=0;i<100;i++){
     if(document.getElementById(`d${i}`)){
      document.getElementById(`d${i}`.addEventListener('click',()=>{
        // document.getElementsByClassName('checked')[i].remove();
        console.log(i,'I clicked')
      }))
     }
  }
}