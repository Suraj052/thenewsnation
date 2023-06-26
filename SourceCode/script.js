console.log("WEBSITE JS");

const healthUrls = [
  "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
];


const politicsUrls = [
  "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9saXRpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9saXRpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9saXRpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9saXRpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
];

const environmentUrls = [
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVudmlyb25tZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW52aXJvbm1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1473876637954-4b493d59fd97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGVudmlyb25tZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1501067486956-e9a0bd9c2b46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGVudmlyb25tZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
];


const businessUrls = [
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVudmlyb25tZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW52aXJvbm1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1473876637954-4b493d59fd97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGVudmlyb25tZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1501067486956-e9a0bd9c2b46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGVudmlyb25tZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
];




const randomUrls =[
  "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9saXRpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9saXRpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9saXRpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9saXRpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
];


window.addEventListener('load', fetchData('Health',healthUrls));



function fetchData(queryP, imageList) {
    
    const apiKey = 'pub_251692723e132509fe11aae512ad2c0582e1e';
    
    const endpoint = 'https://newsdata.io/api/1/news?';
  
    const requestUrl = `${endpoint}apikey=${apiKey}&country=in&language=en&category=${queryP}`;
    
    fetch(requestUrl)
      .then(response => response.json())
      .then(data => {
        console.log("binding started");
        bindData(data.results,imageList)
        console.log("binding ended");
        // You can perform additional operations with the data here
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }

  function searchData(queryP, imageList) {
    
    const apiKey = 'pub_251692723e132509fe11aae512ad2c0582e1e';
    
    const endpoint = 'https://newsdata.io/api/1/news?';
  
    const requestUrl = `${endpoint}apikey=${apiKey}&q=${queryP}&country=in&language=en`;
    
    fetch(requestUrl)
      .then(response => response.json())
      .then(data => {
        console.log("search started");
        bindData(data.results,imageList)
        console.log("search ended");
        // You can perform additional operations with the data here
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }  
  

function bindData(results,imageList) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    results.forEach((result) => {
        let imagedata = result.image_url;
        if (!result.image_url) {
          imagedata = imageList[Math.floor(Math.random() * imageList.length)];
        };
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, result,imagedata);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, result,imagedata) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = imagedata;
    newsTitle.innerHTML = result.title;
    newsDesc.innerHTML = result.description;

    newsSource.innerHTML = result.pubDate;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(result.link, "_blank");
    });
}

let curSelectedNav = null;

const stringMap = new Map();

stringMap.set("Health", healthUrls);
stringMap.set("Politics", politicsUrls);
stringMap.set("Environment", environmentUrls);
stringMap.set("Business", businessUrls);



function onNavItemClick(id) {
    fetchData(id,stringMap.get(id));
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("selected");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("selected");
    navItem.classList.add("selected");
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
    const query = searchText.value;
    if (!query) return;
    searchData(query,randomUrls);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
});


