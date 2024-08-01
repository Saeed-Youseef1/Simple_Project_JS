document.addEventListener("DOMContentLoaded", function(event) {
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
const toggle = document.getElementById(toggleId),
nav = document.getElementById(navId),
bodypd = document.getElementById(bodyId),
headerpd = document.getElementById(headerId)

if(toggle && nav && bodypd && headerpd){
toggle.addEventListener('click', ()=>{
nav.classList.toggle('show')
toggle.classList.toggle('bx-x')
bodypd.classList.toggle('body-pd')
headerpd.classList.toggle('body-pd')
})
}
}
showNavbar('header-toggle','nav-bar','body-pd','header')
});



// fetch all users 


function getUsers() {
  return new Promise((resolve,reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) =>
      {
        if(!response.ok)
          throw new Error('Network response was not ok');

        return response.json();
      }
    )
    .then((users) => {
      let userDiv = document.getElementById('users');
      users.forEach((user,index) => {
        let userLink = document.createElement('a');
        userLink.href = "#";
        userLink.className = "nav_link ";
        userLink.style.display = "flex";
        userLink.style.alignItems = "center";
        userLink.style.textDecoration = "none";
        userLink.onclick = () => getPostsById(user.id); 

        let userIcon = document.createElement('i');
        userIcon.className = "bx bx-user nav_icon";
        userIcon.style.fontSize = "30px";
        userLink.appendChild(userIcon);

        let userNameSpan = document.createElement('span');
        userNameSpan.className = "nav_name";

        let userName = document.createElement('h3');
        userName.style.fontSize = "14px";
        userName.style.margin = "0";
        userName.textContent = user.name;

        let userEmail = document.createElement('p');
        userEmail.style.fontSize = "12px";
        userEmail.style.margin = "0";
        userEmail.textContent = user.email;

        userNameSpan.appendChild(userName);
        userNameSpan.appendChild(userEmail);
        userLink.appendChild(userNameSpan);

        userDiv.appendChild(userLink);
        resolve();
      });
    })
    .catch((error) => console.error('Error fetching users:', error));
  })
}

function getPostsById(userId) {
  let postsDiv = document.getElementById('posts');
  postsDiv.innerHTML = '';
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) =>
      {
        if(!response.ok)
          throw new Error('Network response was not ok');

        return response.json();
      }
    )
    .then((posts) => {
      posts.forEach((post, index) => {
        let postDiv = document.createElement('div'); 
        postDiv.id = "post";

        let postTitle = document.createElement('h3');
        postTitle.textContent = post.title;

        let postBody = document.createElement('p'); 
        postBody.textContent = post.body;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postBody);

        postsDiv.appendChild(postDiv); 
      });
    })
    .catch((error) => console.error('Error fetching posts:', error));
}

function getPosts() {
  let postsDiv = document.getElementById('posts');
  postsDiv.innerHTML='';
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) =>
      {
        if(!response.ok)
          throw new Error('Network response was not ok');

        return response.json();
      }
    )
    .then((posts) => {
      
      posts.forEach((post, index) => {
        let postDiv = document.createElement('div'); 
        postDiv.id = "post";

        let postTitle = document.createElement('h3');
        postTitle.textContent = post.title;

        let postBody = document.createElement('p'); 
        postBody.textContent = post.body;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postBody);

        postsDiv.appendChild(postDiv); 
      });
    })
    .catch((error) => console.error('Error fetching posts:', error));
}


function userActive() {
  let links = document.querySelectorAll('.nav_link');
  links.forEach(link => {
    link.addEventListener('click', function() {
      links.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

getUsers().then(()=> {
  getPosts();
  userActive();
})









