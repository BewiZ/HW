let od = document.querySelector('div');
let flag = false;
od.addEventListener('mousedown', (e) => {
    flag = true;
    let x = e.offsetX;
    let y = e.offsetY;
    document.addEventListener('mousemove', (e) => {
        let dl = e.clientX - x;
        let dt = e.clientY - y;

        let _h = window.innerHeight - od.offsetHeight;
        let _w = window.innerWidth - od.offsetWidth;
        dt = Math.min(Math.max(0, dt), _h);
        dl = Math.min(Math.max(0, dl), _w);

        if (flag) {
            od.style.left = dl + 'px';
            od.style.top = dt + 'px';
        }

    });
});

od.addEventListener('mouseup', (e) => {
    flag = false;
})