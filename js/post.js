fetch("https://jsonplaceholder.typicode.com/posts")
.then(res=>res.json())
.then(data=>displayData(data))

function displayData(data){
    let container=document.getElementById('post-container')
    for (const post of data) { 
         div=document.createElement('div')
       div.innerHTML=`<div>
        <h4>${post.id}</h4>
        <h3>${post.title}</h3>
        <h5>${post.body}</h5>
    </div>`
    container.appendChild(div)    
    }
}
