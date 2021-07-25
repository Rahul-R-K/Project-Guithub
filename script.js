let container = document.createElement('div');
container.setAttribute("class", "container");


let div=document.createElement('div');
div.setAttribute("id","icon")
let span1=document.createElement("span")
span1.setAttribute("class","display-4")
span1.innerHTML=`<h1>GUITHUB</h1>`
let icon =document.createElement("img")
icon.setAttribute("Class",`fa fa-github" aria-hidden="true"></i>`)
div.append(icon,span1)

let div1 = document.createElement("div");
div1.setAttribute("class","heading");
let span = document.createElement("span");
span.innerText =`Check Your Repo's By Entering Your Github Login Name: `
let input = document.createElement("input");
input.setAttribute("id","text");
let b = document.createElement("button");
b.setAttribute("onclick","repofun()")
b.innerText ="Search";
div1.append(span,input,b);

const table = document.createElement("table");
    table.className="table table-stripped";
    table.id="table";
    var thead = document.createElement('thead');

var tr = document.createElement('tr');
var th1= createtrth('th','Repo-Name');
var th2= createtrth('th','Repo-Link');
var th3= createtrth('th','Fork count');
var th4 = createtrth('th','Stars count');
tr.append(th1,th2,th3,th4);
thead.append(tr);

var tbody = document.createElement('tbody');
tbody.setAttribute('id', 'data1');
table.append(thead,tbody); 

let userEl;


async function repo(){
let resp = await fetch("https://api.github.com/users/abhisheknaiidu/repos")
let data = await resp.json()
   try{
    for(let i=0;i<data.length;i++)
    {
        var tr = document.createElement('tr');
        var td1= document.createElement('td');
        td1.innerHTML=data[i].name;
        var td2= document.createElement('td');
        td2.innerHTML=`<a href=${data[i].html_url}>${data[i].html_url}</a>`;
        var td3= document.createElement('td');
        td3.innerHTML=data[i].forks_count; 
        var td4= document.createElement('td');
        td4.innerHTML=data[i].stargazers_count; 
        tr.append(td1,td2,td3,td4);
        tbody.append(tr);
    }

    let id = data[0].owner.id; console.log(id);
     userEl = document.createElement("div");
 
    const name = data[0].owner.login;
    const userInnerHTML =`<div class="img-container">
    <img width="160px" id="image" src="https://avatars.githubusercontent.com/u/${data[0].owner.id}?v=4.png">
    </div>
    <h3 class="name"> ${name[0].toUpperCase()+name.slice(1)}</h3>`;
    

    userEl.innerHTML = userInnerHTML;
    container.append(div,div1,userEl,table);
}
catch{
    console.log(error)
}
}
repo()
document.body.append(container)
function createtrth(elementname, value=" "){
    var td=document.createElement(elementname);
    td.innerHTML=value;
    return td;
}

function repofun(){
    userEl.innerHTML ="";
    tbody.innerHTML ="";

    let userName = document.getElementById("text").value;
    console.log(userName);
    async function repo(){
        let resp = await fetch(`https://api.github.com/users/${userName}/repos`)
        let data = await resp.json()
           try{
            for(let i=0;i<data.length;i++)
            {
                var tr = document.createElement('tr');
                var td1= document.createElement('td');
                td1.innerHTML=data[i].name;
                var td2= document.createElement('td');
                td2.innerHTML=`<a href=${data[i].html_url}>${data[i].html_url}</a>`;
                var td3= document.createElement('td');
                td3.innerHTML=data[i].forks_count; 
                var td4= document.createElement('td');
                td4.innerHTML=data[i].stargazers_count; 
                tr.append(td1,td2,td3,td4);
                tbody.append(tr);
            }
        
            let id = data[0].owner.id; console.log(id);
            userEl = document.createElement("div");
            userEl.classList.add("user");
         
            const name = data[0].owner.login;
            const userInnerHTML =`<div class="img-container">
            <img width="160px" id="image" src="https://avatars.githubusercontent.com/u/${data[0].owner.id}?v=4.png">
            </div>
            <h3 class="name"> ${name[0].toUpperCase()+name.slice(1)}</h3>`;
        
            userEl.innerHTML = userInnerHTML;
            container.append(div,div1,userEl,table);
        }
        catch{
            alert('ENTER VALID NANE')
            console.log(error)
        }
        }
        repo()
         document.body.append(container)
        function createtrth(elementname, value=" "){
            var td=document.createElement(elementname);
            td.innerHTML=value;
            return td;
        }
}
