const divEl = document.getElementById("div-el")
const joke = document.getElementById("joke-answer")
const btn = document.getElementById("joke-btn")
const apiURL = "https://api.api-ninjas.com/v1/chucknorris?";
const API_KEY = "2kZJGIWHZIzJA0QkpeJGlA==ETYuNmHr6UqWXpgQ"

btn.addEventListener("click", changeMeme)

const options = {
    method: "GET",
    headers: {
      "X-Api-Key": API_KEY,
    },
  };
  
async function changeMeme(){
    try {
        joke.innerHTML = "Updating..."
        btn.style.display = "none"
        const response = await fetch(apiURL, options);
        const data = await response.json();
        console.log(data)
        joke.innerHTML = data.joke
        btn.style.display = "block"
    } catch (error) {
        
    }
}