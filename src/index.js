import '../src/styles.css'
import Icon from '../img/ball_bouncing.jpg'
import background from '../img/space.jpeg'


let register_button = $("#register")
let submit_button = $(".toggleSubmit")
let all_alis = document.querySelectorAll("li");
let $listItems = $("li");

submit_button.on("click", (e) => {
    e.preventDefault();
    $(".toggleSubmit").css({
        "transition": "opacity 1s ease-in-out",
        "opacity": "0.5",
        "transform": "rotate(-360deg)",
    });
    $(".toggleSubmit").toggleClass("toggleWait");
    $(".toggleWait").css({
        "transition": "opacity 1s ease-in-out",
        "opacity": "1",
        "transform": "rotate(-360deg)",
    });
    if (register_button.val() === "") {
        $("ul").append(
            "<p>Error To click The Button , you can't man :) ❌</p>"
        ).css({
            "list-style": "none",
            "margin": "20px",
            "color": "#15EBC6",
            "transition": "all 0.5s ease-in-out"
        });
    } else if (register_button.val() === "lasers") {
        register_button.val("Make me some money").css({
            'color': 'blue',
        });
    } else {
        $("ul").append(
            `<p>Your Compliation => ${register_button.val()}</p>`
        ).attr("style", `list-style: none;
                        margin: 20px;
                        color: ${new Colors().hex_color};
                        transition: all 0.5s ease-in-out`);
        $("#register").val('');
    }
})

function InsertCollThings() {
    let i = 0;

    const coolThings = [
        "racecars",
        "lasers",
        "aeroplanes"
    ];

    window.setInterval(() => {
        console.log("Conntected To The Nav Component")
        let $nav = $(".nav");
        if ($nav.children().length == 10) {
            console.log("Deleting All the $nav Components")
            $nav.children().remove();
        }

        console.log("Creating " + $nav.children().length)
        let $li = $("<li></li>");
        $li.text(coolThings[i]);

        $nav.append(li);
        let max = 3; // the max is point to the size of the array
        i = (i + 1) % max;
    }, 1000);
}

window.setInterval(() => {
    $listItems.addClass("color");

    let $color = $(".color")

    $color.css({
        "color": new Colors().hex_color,
        "transition": "color 1s ease-in-out"
    });

    register_button.css({
        "background": new Colors().hex_color,
        "transition": "background 1s ease-in-out"
    });
}, 1000);

class Colors {
    constructor() {
        this.hex_numbers = "0123456789abcdef"
        this.hex_color = "";

        this.generate_random_colors();
    }

    generate_random_colors() {
        let hex = "#";

        for (let i = 0; i < 6; i++) {
            hex += this.hex_numbers[Math.floor(Math.random() * this.hex_numbers.length)];
        }
        return this.hex_color = hex;
    }
}

function randomDotsMovingAround() {
    window.setInterval(() => {
        const $coolInputs = $("input"); // call all the inputs

        // unselect any item.
        $coolInputs.prop("checked", false);

        // randomly samples a number 0...3.
        const i = Math.floor(3 * Math.random());

        // Indexing takes us out of jQuery world!
        const coolInput = $coolInputs[i];
        // We can **wrap** an HTMLElement to create a jQuery object with one
        // item; the wrapped element.
        const $coolInput = $(coolInput);
        $coolInput.prop("checked", true);
    }, 400);
}

let $happy_form = $("#cool-things-happends");
let all_things_happend = []
console.log(all_things_happend)

$happy_form.on("submit", (event) => {
    event.preventDefault();

    let $input = $("#cool-thing");
    let input_val = $input.val();
    all_things_happend.push(input_val);
    console.log(all_things_happend)

    $("#coll-thing").val("");
    let $li = $("<li></li>");
    $li.text(input_val);
    $("#coll-things").append($li);
})

// let input_val = $input.val();
// let curr_d = new Date().getMinutes();
// all_things_happend[curr_d] = [];
// all_things_happend[curr_d].push(input_val);

// if (!all_things_happend[curr_d].includes(input_val)) {
//     all_things_happend[curr_d].push(input_val);
// }
// console.log(all_things_happend)