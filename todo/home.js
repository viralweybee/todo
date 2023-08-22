    let count=0;
    let sorting=0;
    //----------------------------------------------------------------define all element-------------------------------------------------------
    let allbtnEl=document.getElementById('allbtn');
    let activebtnEl=document.getElementById('activebtn');
    let completebtnEl=document.getElementById('completebtn');
    let addEl=document.getElementById('add');
    let sortEl=document.getElementById("sort");
    let searchEl= document.getElementById("search");

    //-----------------------------------------------------------add color of button----------------------------------------------------------
    allbtnEl.addEventListener('click',()=>{
        activebtnEl.style.backgroundColor="rgba(73, 73, 232, 0.98)";
        completebtnEl.style.backgroundColor="rgba(73, 73, 232, 0.98)";
        allbtnEl.style.backgroundColor="white";
    })
    activebtnEl.addEventListener('click',()=>{
        allbtnEl.style.backgroundColor="rgba(73, 73, 232, 0.98)"
        activebtnEl.style.backgroundColor="white"
        completebtnEl.style.backgroundColor="rgba(73, 73, 232, 0.98)"
    })
    completebtnEl.addEventListener('click',()=>{
        allbtnEl.style.backgroundColor="rgba(73, 73, 232, 0.98)";
        activebtnEl.style.backgroundColor="rgba(73, 73, 232, 0.98)";
        completebtnEl.style.backgroundColor="white"
    })


    //--------------------------------------------------------------add task in body part------------------------------------------------
    addEl.addEventListener("click", update);
    function update() {
        document.getElementById("hide").style.visibility="hidden"
      count++;
      let text = document.getElementById("todo").value;
      console.log(text);
      document.getElementById("todo").value=""
      //  console.log( document.getElementById("display_main"))
      document.getElementById("display_main").innerHTML += `<form>  
        <input type="checkbox" name="" id="">
        <p style="display: inline;" class="text">${text}</p>
            <button style="display: inline;">submit</button>
    </form>`;
    }
   //-------------------------------------------------sorting functionalities----------------------------------------------------------------
   sortEl.addEventListener("click", sort);
    function sort(value){
        let arr=[];
        for(let i=0;i<count;i++){  
            let text=document.getElementsByClassName("text")[i].innerHTML;
            arr.push(text)
        }
        document.getElementById("display_main").innerHTML=""
        console.log(value)
        if(value=="Z-A"){
            arr.sort();
            for(let i=0;i<count;i++){
                document.getElementById("display_main").innerHTML+=`<form>  
                <input type="checkbox" name="" id="">
               
                <p style="display: inline;" class="text">${arr[i]}</p>
                    <button style="display: inline;">submit</button>
            </form>`
               }
        }
        else if(value=="A-Z"){
            arr.sort();
            arr.reverse()
            for(let i=0;i<count;i++){
                document.getElementById("display_main").innerHTML+=`<form>  
                <input type="checkbox" name="" id="">
               
                <p style="display: inline;" class="text">${arr[i]}</p>
                    <button style="display: inline;">submit</button>
            </form>`
               }
        }
        else if(value=="newest"){
            for(let i=0;i<count;i++){
                document.getElementById("display_main").innerHTML+=`<form>  
                <input type="checkbox" name="" id="">
               
                <p style="display: inline;" class="text">${arr[i]}</p>
                    <button style="display: inline;">submit</button>
            </form>`
               }
        }
        else{
            for(let i=count-1;i>=0;i--){
                document.getElementById("display_main").innerHTML+=`<form>  
                <input type="checkbox" name="" id="">
               
                <p style="display: inline;" class="text">${arr[i]}</p>
                    <button style="display: inline;">submit</button>
            </form>`
               }
        }
    }
    //-----------------------------------------------------------------------searching task -----------------------------------------------------
    searchEl.addEventListener("click",search);
    function search(){
        console.log("aa")
        let data=document.getElementById("todo").value;
        let arr=[];
        for(let i=0;i<count;i++){
            let text=document.getElementsByClassName("text")[i].innerHTML;
            arr.push(text)
        }
        console.log(arr)
        const result=arr.filter(fill);
        function fill(match){
            return match.startsWith(data);
        }
        let size=result.length;
        document.getElementById("display_main").innerHTML=""
        for(let i=0;i<size;i++){
            document.getElementById("display_main").innerHTML+=`<form>  
            <input type="checkbox" name="" id="">
           
            <p style="display: inline;" class="text">${result[i]}</p>
                <button style="display: inline;">submit</button>
        </form>`
           }
           count=size;
    }
// 
