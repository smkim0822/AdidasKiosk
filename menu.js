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
    if (now.includes('sub1.html')){
        const introBtn = document.querySelector('.intro-btn');
        console.log('introBtn: ', introBtn);
        if (introBtn){
            introBtn.classList.add('active');
            console.log('active 붙임');
        }
        else{
            console.log('introBtn 못찾음');
        }
    }
    if (now.includes('sub2.html')){
        const ruleBtn = document.querySelector('.rule-btn');
        if (ruleBtn) ruleBtn.classList.add('active');
    }
    if (now.includes('sub3.html')){
        const charBtn = document.querySelector('.char-btn');
        if (charBtn) charBtn.classList.add('active');
    }
    if (now.includes('sub4.html')){
        const shoeBtn = document.querySelector('.shoe-btn');
        if (shoeBtn) shoeBtn.classList.add('active');
    }
    if (now.includes('sub4-1.html')){
        const subShoe1Btn = document.querySelector('.subshoe1-btn');
        if (subShoe1Btn) subShoe1Btn.classList.add('active');
    }
    if (now.includes('sub4-2.html')){
        const subShoe2Btn = document.querySelector('.subshoe2-btn');
        if (subShoe2Btn) subShoe2Btn.classList.add('active');
    }
    if (now.includes('sub4-3.html')){
        const subShoe3Btn = document.querySelector('.subshoe3-btn');
        if (subShoe3Btn) subShoe3Btn.classList.add('active');
    }
    if (now.includes('sub5.html')){
        const reserveBtn = document.querySelector('.reserve-btn');
        if (reserveBtn) reserveBtn.classList.add('active');
    }
});