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