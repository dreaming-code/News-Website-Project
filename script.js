
let a=document.querySelector(".inp2");
let b=document.querySelector("#sub");
let c=document.querySelector(".op");
let d=document.querySelector("#login");
let mylink=document.getElementById("formsubbut");
b.addEventListener("click",()=>{
    let inputValue = document.getElementById("username").value; 
    document.getElementById("login").textContent = inputValue;  
c.classList.add("hide");
});

const API_KEY = "e0abd8b6082545058e09ddcc72aec150";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => {
    fetchNews2("India");
    fetchNews3("Bollywood");
});

async function fetchNews2(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData2(data.articles);
}

function bindData2(articles) {
    console.log("yes1 bind");
    const cardsContainer = document.getElementById("cards-container1");
    const newsCardTemplate = document.getElementById("template-news-card2");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard2(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard2(cardClone, article) {
    console.log("yes1 fill");
    const newsImg = cardClone.querySelector("#news-imag");
    const newsTitle = cardClone.querySelector("#news-titl");
    const newsSource = cardClone.querySelector("#news-sourc");
    const newsDesc = cardClone.querySelector("#news-des");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });

    newsSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

async function fetchNews3(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData3(data.articles);
}

function bindData3(articles) {
    console.log("yes2 bind");
    const cardsContainer = document.getElementById("cards-container10");
    const newsCardTemplate = document.getElementById("template-news-card3");

    cardsContainer.innerHTML = "";
    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard3(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard3(cardClone, article) {
    console.log("yes2 fill");
    const newsImg = cardClone.querySelector("#news-imge");
    const newsTitle = cardClone.querySelector("#news-tite");
    const newsSource = cardClone.querySelector("#news-soure");
    const newsDesc = cardClone.querySelector("#news-dec");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });

    newsSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
} 


function reload() {
    window.location.reload();
}

async function fetchNews(query) {
    let r=document.querySelector(".qwe");
    r.innerText=`${query}`;
    r.classList.remove("hide");
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });

    newsSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

let curSelectedNav = null;
function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active");
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
    const query = searchText.value;
    if (!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
});