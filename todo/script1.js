let count = 0;
let sorting = 0;
//----------------------------------------------------------------define all element------------------------------------------------------------------------------------------------
let allbtnEl = document.getElementById('allbtn');
let activebtnEl = document.getElementById('activebtn');
let completebtnEl = document.getElementById('completebtn');
let addEl = document.getElementById('add');
let sortEl = document.getElementById("sort");
let searchEl = document.getElementById("search");

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

    document.getElementById("hide").style.visibility = "hidden"
    count++;
    let text = document.getElementById("todo").value;
    if (text !== '') {
        console.log(text);
        document.getElementById("todo").value = ""
        //  console.log( document.getElementById("display_main"))
        document.getElementById("display_main").innerHTML += `  <div>
    <input class="check" type="checkbox">
    <span class="text">${text}</span>
    <button>edit</button>
</div>`;
    }
    else {
        alert('not valid')
    }


}
document.addEventListener('keydown', function (e) {
    let key = e.key;
    if (key === "Enter") {
        update();
    }
})
//----------------------------------------------------------------------------------------store the data---------------------------------------------------------------------
function store() {
    let arr = [];
    for (let i = 0; i < count; i++) {
        let text = document.getElementsByClassName("text")[i].innerHTML;
        arr.push(text)
    }
    return arr;
}
//-------------------------------------------------------------------------------sort-------------------------------------------------------------------------------------------
sortEl.addEventListener('click', sort);

function sort(value) {
    if (value === 'A-Z') {
        let arr1 = store();
        document.getElementById("display_main").innerHTML = '';
        arr1.sort();
        console.log(arr1)
        for (let i = 0; i < arr1.length; i++) {
            document.getElementById("display_main").innerHTML += `  <div>
    <input class="check" type="checkbox">
    <span class="text">${arr1[i]}</span>
    <button>edit</button>
</div>`
        }
    }
    else if (value === 'Z-A') {
        let arr1 = store();
        document.getElementById('display_main').innerHTML = '';
        arr1.sort();
        arr1.reverse();
        console.log(arr1)
        for (let i = 0; i < arr1.length; i++) {
            document.getElementById("display_main").innerHTML += `  <div>
    <input class="check" type="checkbox">
    <span class="text">${arr1[i]}</span>
    <button>edit</button>
</div>`
        }
    }
    else if (value === 'newest') {
        let arr1 = store();
        document.getElementById('display_main').innerHTML = '';
        for (let i = 0; i < arr1.length; i++) {
            document.getElementById("display_main").innerHTML += `  <div>
    <input class="check" type="checkbox">
    <span class="text">${arr1[i]}</span>
    <button>edit</button>
</div>`
        }
    }
    else if (value === 'oldest') {
        let arr1 = store();
        document.getElementById('display_main').innerHTML = '';
        for (let i = arr1.length - 1; i >= 0; i--) {
            document.getElementById("display_main").innerHTML += `  <div>
    <input class="check" type="checkbox">
    <span class="text">${arr1[i]}</span>
    <button>edit</button>
</div>`
        }
    }
}

//---------------------------------------------------------------------------all ------------------------------------------------------------------------------------------------
