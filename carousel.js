function createCarousel(imageList){
    let current = 0;
    const imgTag = document.getElementById('carousel-image');
    const indicators = document.getElementById('carousel-indicators');

    indicators.innerHTML = '';
    imageList.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.className = 'carousel-dot' + (idx === 0 ? ' active' : '');
        dot.onclick = () => {
            current = idx;
            update();
        };
        indicators.appendChild(dot);
    });

    function update(){
        imgTag.src = imageList[current];
        document.querySelectorAll('.carousel-dot').forEach((el, idx) =>
        el.classList.toggle('active', idx === current)
        );
    }

    document.getElementById('carousel-left').onclick = function(){
        current = (current - 1 + imageList.length) % imageList.length;
        update();
    };
    document.getElementById('carousel-right').onclick = function(){
        current = (current + 1) % imageList.length;
        update();
    };

    update();
}