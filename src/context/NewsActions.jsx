export const getData = async(topic) =>{
    console.log()
    const responce = await fetch('https://newsapi.org/v2/everything?q=ujjain&from=2023-06-31&sortBy=publishedAt&apiKey=d389881215a14da389d6ec78bd78d557')
    const data = await responce.json();
    return data.articles
}

