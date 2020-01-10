const mobileBtnEl = document.querySelector(".mobile-toggle-btn");
const navEl = document.querySelector(".nav");
const mobileI = document.querySelector(".mobile-toggle-btn i");

// mobileI.addEventListener("click", (evt)=> console.log(evt.target));

const btnAboutReadMore = document.querySelector(".btn--about-read-more");

/*MOBILE MENU NAVIGATION*/
mobileBtnEl.addEventListener("click", function (evt) {
    evt.stopPropagation();

    const $target = evt.currentTarget;
    if ($target.dataset.toggled === "false") {
        navEl.style.height = navEl.scrollHeight + "px"; // change height
        $target.dataset.toggled = "true"; // change data
    } else {
        navEl.style.height = "0"; // change height
        $target.dataset.toggled = "false";// change data
    }

});


// }, );

/*Read more btn mechanism*/
btnAboutReadMore.addEventListener("click", (evt) => {
    const $target = evt.target;

    $target.previousElementSibling.classList.toggle("hidden-text");

    if (Array.from($target.previousElementSibling.classList).includes("hidden-text") === false) {
        $target.innerHTML = "Show less"
    } else {
        $target.innerHTML = "Read more"
    }
});