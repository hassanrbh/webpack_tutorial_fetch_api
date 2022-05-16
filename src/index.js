import '../src/styles.css'
import Icon from '../img/ball_bouncing.jpg'
import background from '../img/space.jpeg'

const jokes = document.querySelector("#jokes")
let baseUrl = "https://api.chucknorris.io/jokes/random"

function callApi(url) {
    return fetch(url)
        .then(res => res.json())
        .then((data) => {
            let joke = data

            let li = document.createElement("li")

            li.innerHTML = joke.value
            jokes.appendChild(li)
        });
}

// Jquery
let input = $("#text-field")

$("#submit-button").on('click', (e) => {
    e.preventDefault();

    let inputText = input.val();

    let li = document.createElement("li")
    li.innerText = inputText
    jokes.appendChild(li);
})


callApi(baseUrl)