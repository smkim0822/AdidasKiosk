function openMenu(){
    document.getElementById('menu-overlay').style.display = 'block';
    document.getElementById('side-menu').style.display = 'flex';
    document.querySelector('.menu-frame').classList.add('active');
}

function closeMenu(){
    document.getElementById('menu-overlay').style.display = 'none';
    document.getElementById('side-menu').style.display = 'none';
    document.querySelector('.menu-frame').classList.remove('active');
}

function goTo(page){
    window.location.href = page;
}

window.addEventListener("DOMContentLoaded", () => {
    // X 버튼 클릭 시 닫기
    document.getElementById('menu-close-btn').addEventListener('click', closeMenu);

    // 오버레이 클릭 시 닫기
    document.getElementById('menu-overlay').addEventListener('click', closeMenu);

    // 현재 페이지 표시
    const now = window.location.pathname;
    if (now.includes('sub3.html')){
        const charBtn = document.querySelector('.char-btn');
        if (charBtn) charBtn.classList.add('active');
    }
});