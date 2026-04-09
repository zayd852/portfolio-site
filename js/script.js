window.addEventListener("load", function () {
    setTimeout(function () {
        const intro = document.getElementById("intro");
        intro.classList.add("hide");

        setTimeout(() => {
            intro.style.display = "none";

            const main = document.getElementById("main-content");
            main.style.display = "block";
            setTimeout(() => main.classList.add("show"), 50);

        }, 500);
    }, 2500);
});

// GATE PAGE ANIMATION ON PROFILE CLICK
function goToPage(page) {  // ✅ FIXED NAME
    const container = document.createElement('div');
    container.classList.add('page-gate-container');
    
    const leftGate = document.createElement('div');
    leftGate.classList.add('page-gate', 'left');

    const rightGate = document.createElement('div');
    rightGate.classList.add('page-gate', 'right');

    container.appendChild(leftGate);
    container.appendChild(rightGate);
    document.body.appendChild(container);

    setTimeout(() => {
        leftGate.classList.add('open');
        rightGate.classList.add('open');
    }, 200);

    setTimeout(() => {
        window.location.href = page;
    }, 900);
}

