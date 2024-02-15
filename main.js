const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];




// Milestone 2 - Prendendo come riferimento il layout di esempio presente
// nell'html, stampiamo i post del nostro feed.

const postList = document.querySelector("#container");

posts.forEach(currentPost=>{

    // creazione immagine del profilo
    const imgProfileEl= document.createElement("img");
    imgProfileEl.classList.add("profile-pic");

    // creazione elemento per il nome dell'autore
    const authorEl= document.createElement("div");
    authorEl.classList.add("post-meta__author");

    // creazione elemento della data della pubblicazione del post
    const dateEl = document.createElement("div");
    dateEl.classList.add("post-meta__time");

    // creazione elemento della didascalia del post
    const contentEl = document.createElement("div");
    contentEl.classList.add("post__text");

    // creazione elemento dell'immagine del post
    const postImageEl = document.createElement("img");



    for(let key in currentPost){
        if(key=="author"){
            
            // setto src dell'immagine profilo
            imgProfileEl.src = key.image;
            // inserisco il nome dell'autone del post
            authorEl.innerText = key.name;

            console.log(key.image, key.name);

        }else if(key=="created"){

            // inserisco la data nell'elemento
            dateEl.innerText = currentPost[key];
            console.log(currentPost[key]);

        }else if(key="content"){

            // inserimento della didascalia del post 
            contentEl.innerText = currentPost[key];
            console.log(currentPost[key]);

        }else if(key == "media"){

            // setto src dell'immagine del post
            postImageEl.src = currentPost[key];
            console.log(currentPost[key]);

        }
    }


    // creazione del contenitore dell'immagine del profilo
    const postMeta__iconEl = document.createElement("div");
    postMeta__iconEl.classList.add("post-meta__icon");
    postMeta__iconEl.append(imgProfileEl);


    // creazione info del post
    const postMeta__dataEl = document.createElement("div");
    postMeta__dataEl.classList.add("post-meta__data");
    postMeta__dataEl.append(authorEl, dateEl);


    // ceazione del contenitore delle info del post
    const postMetaEl = document.createElement("div");
    postMetaEl.classList.add("post-meta");
    postMetaEl.append(postMeta__iconEl,postMeta__dataEl);


    // creazione header del post
    const postHeaderEl= document.createElement("div");
    postHeaderEl.classList.add("post__header");
    postHeaderEl.append(postMetaEl);


    // creazione del box dell'immagine del post
    const postImageBoxEl = document.createElement("div");
    postImageBoxEl.classList.add("post__image");
    postImageBoxEl.append(postImageEl);



    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.append(postHeaderEl,contentEl,postImageBoxEl);

    postList.append(postEl);







});