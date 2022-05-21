export default function fetchandAppendDataAttribues() {
    let DOGS = {
        100: {
            id: 101,
            name: "Hassan",
            gamesyoulove: "Fortnite"
        },
        101: {
            id: 101,
            name: "Salman",
            gamesyoulove: "Free Fire"
        }
    }

    let $dogs = $("ul.dogs");

    Object.keys(DOGS).forEach((dog_id) => {
        let dog = DOGS[dog_id];

        let $dogLi = $("<li class='dog'></li>")
        $dogLi.text(`${dog.name}--${dog.gamesyoulove}`);

        $dogLi.data("id", dog_id);

        $dogs.append($dogLi);
    })

    $("li.dog").click((e) => {
        console.log(e.target.style.color)
        if (e.target.style.color === "black") {
            e.target.style.color = "red";
        } else {
            e.target.style.color = "green";
        }

        let $target = $(e.currentTarget);

        let dogId = $target.data("id");
        let dog = DOGS[dogId];

        console.log(`dog: ${dog.name}`)
    })
}