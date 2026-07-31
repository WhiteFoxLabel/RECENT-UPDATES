const apiKey = "855898a136bf4dbc9449a5427f92d5aa";
const apiUrl = "https://newsapi.org/v2/top-headlines";

const fetchNews = (category = "general") => {
  fetch(`${apiUrl}?category=${category}&apiKey=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      const articles = data.articles;
      displayNews(articles);
    })
    .catch((error) => {
      console.error("Error fetching news:", error);
    });
};

const displayNews = (articles) => {
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = ""; // Clear existing articles
  
  articles.forEach((article) => {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");

    articleElement.innerHTML = `
      <img src="${article.urlToImage || 'https://via.placeholder.com/300x180'}" alt="${article.title}">
      <div class="article-content">
        <h2>${article.title}</h2>
        <p>${article.description || "No description available."}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      </div>
    `;
    
    newsContainer.appendChild(articleElement);
  });
};

// Load general news by default
fetchNews();