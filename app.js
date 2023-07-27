const intxt = document.getElementById("inp");
const bt =  document.querySelector(".btn");
const lst =  document.querySelector(".ullist");
const h1para =  document.querySelector("h1");


bt.addEventListener('click' , ()=>{
    const tdval =intxt.value;
    if(tdval==="") {
        alert("please Enter Some Text");
        return ;
    } 

    const li =  document.createElement('li');
    li.addEventListener('click',()=>{
        li.remove();
    })
    li.innerText = tdval;
    lst.append(li);

    localStorage.setItem(li.innerText , 0);
    
})

h1para.addEventListener('click', ()=>{
    localStorage.clear();
    lst.innerHTML = '';
})


for(let a in localStorage){
    if(localStorage.getItem(a)!==null){
        const newli = document.createElement('li');
        newli.innerText = a;
        lst.append(newli);

        newli.addEventListener('click',()=>{
            localStorage.removeItem(newli.innerText);
            newli.remove();
        })
    }
}
