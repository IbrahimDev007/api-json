const loadData=()=>
{
    const url='https://jsonplaceholder.typicode.com/todos/1'
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data))
}
const displayData=()=>
{
    const url='https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(res=>res.json())
    .then(data =>console.log(data))
}

const displayData2=()=>
{
    const url='https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(res=>res.json())
    .then(data => display(data))
}

function display(data){
    let ul=document.getElementById('ul-container');
    for (const datas of data){
    const li=document.createElement('li') ;
    li.innerText=datas.name;
     ul.appendChild(li)
    }

}
