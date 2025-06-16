let timeout;

function resetTimer() {
    clearTimeout(timeout);
    timeout = setTimeout(() =>{
        window.location.href = "landing.html";
    }, 60000);
}

resetTimer();

document.addEventListener("click", resetTimer);