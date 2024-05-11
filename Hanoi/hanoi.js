/** @type {HTMLCanvasElement} */
var canvas = document.getElementById('canvas');
var ca = canvas.getContext('2d');

//一个简单的闭包实现计数器, 主要是为了给各个盘子命名用
function counterfun() {
    var i = 0;
    return function () {
        i++;
        return i;
    };
}

var counter = counterfun();


var p1 = new pillar(250, 550, 'A');
var p2 = new pillar(500, 550, 'B');
var p3 = new pillar(750, 550, 'C');

let speed = 20;

var pans = [];

//移动操作记录
var operations = []; //存放移动操作记录
var current_op = null; //当前操作
var current_pan = null; //当前做移动动画的盘子
var moving = false; //是否有盘子在做移动动画
var current_op_index = 0; //指向operations的指针

var start = false;
document.getElementById('start_btn').onclick = function (e) {
    start = !start;

    var numDisks = document.getElementById('numDisks').value;

    pans = [];
    for (let i = numDisks; i > 0; i--) {
        pans.push(new pan(i * 20));
    }

    // 将新的盘子压入p1柱子顶部
    pans.forEach(function (pan) {
        p1.addPan(pan);
    });

    init();
    window.requestAnimationFrame(main);
};

//重置按钮
document.getElementById('reset_btn').onclick = function (e) {
    start = false;
    reset();
};

function changeSpeed() {
    const speedInput = document.getElementById('speed');
    speed = parseInt(speedInput.value);
    document.getElementById('labCurrentSpeed').innerHTML = '当前速度：' + speed;
}

function randomColor() {
    let color =
        'rgb(' +
        Math.floor(Math.random() * 256) +
        ',' +
        Math.floor(Math.random() * 256) +
        ',' +
        Math.floor(Math.random() * 256) +
        ')';
    return color;
}

//盘子
function pan(r) {
    this.stage = 0; //当前动画状态 0:停止, 1:上升, 2:平移, 3:下降
    this.x = 0;
    this.y = 0;
    this.color = randomColor();
    this.r = r;
    this.h = 15;
    this.name = '盘' + counter();

    this.draw = function () {
        ca.lineWidth = 2;
        ca.fillStyle = this.color;

        ca.beginPath(); // 高
        ca.moveTo(this.x - this.r, this.y);
        ca.lineTo(this.x - this.r, this.y + this.h);
        ca.moveTo(this.x + this.r, this.y);
        ca.lineTo(this.x + this.r, this.y + this.h);
        ca.stroke();

        ca.fillRect(this.x, this.y, this.r - ca.lineWidth / 2 - 0.2, this.h);
        ca.fillRect(this.x, this.y, (this.r - ca.lineWidth / 2 - 0.2) * -1, this.h);
        ca.beginPath();
        ca.ellipse(this.x, this.y + this.h - 1, this.r, this.r / 3, 0, 0, Math.PI);
        ca.fill();
        ca.stroke();

        ca.beginPath();
        ca.ellipse(this.x, this.y, this.r, this.r / 3, 0, 0, 2 * Math.PI);
        ca.fill();
        ca.strokeStyle = '#000';
        ca.stroke();
    };

    //移动到指定位置
    this.moveTo = function (x, y) {
        this.x = x;
        this.y = y;
    };

    //重置自身状体
    this.reset = function () {
        this.stage = 0;
    };

    //移动动画中更新自己位置的函数
    this.moving = function (destin, cbk = null) {
        switch (this.stage) {
            case 0:
                //停止状态下 如果是处于 moving 就跳到下一阶段, 否则直接返回
                if (!moving) {
                    return;
                } else {
                    this.stage = 1;
                }
            case 1:
                //上升阶段. y坐标不断减小, 到达最高点就进入下一阶段
                this.y -= speed;
                if (this.y <= this.h) {
                    this.y = this.h;
                    this.stage = 2;
                }
                break;
            case 2:
                //平移阶段. 移动方向为相对位置差.  如果移动方向反向 就说明平移该结束了, 进入下一阶段
                var direct = this.x < destin.x ? 1 : -1;
                this.x += direct * speed;
                var direct_2 = this.x < destin.x ? 1 : -1;
                if (direct != direct_2) {
                    this.x = destin.x;
                    this.stage = 3;
                }
                break;
            case 3:
                //下降阶段. y向到达目标柱子当前高度再加半个盘子高度就到位了. 加入到目标柱子执行回调.
                this.y += speed;
                if (this.y >= destin.y - destin.current_h - this.h / 2) {
                    destin.addPan(this);
                    this.stage = 0;
                    moving = false;
                    cbk && cbk();
                }
                break;
        }
    };
}

//柱子
function pillar(x, y, lab) {
    this.x = x;
    this.y = y;
    this.current_h = 0;
    this.pans = [];
    this.lab = lab;

    this.draw = function () {

        ca.lineWidth = 5;
        ca.beginPath();
        ca.moveTo(this.x, this.y);
        ca.lineTo(this.x, this.y - 400);
        ca.stroke();

        ca.textAlign = 'center';
        ca.font = '25px console';
        ca.fillText(this.lab, this.x, this.y + 25);
    };

    this.addPan = function (pan) {
        pan.x = this.x;
        pan.y = this.y - this.current_h - pan.h / 2;
        this.pans.push(pan);
        this.current_h += pan.h;
    };

    this.popPan = function () {
        if (this.pans.length <= 0) return null;
        var pan = this.pans.pop();
        this.current_h -= pan.h;
        return pan;
    };
}

//绘制所有对象
function draw() {
    var drawable = [p1, p2, p3];
    drawable.forEach(function (item) {
        item.draw();
    });
    pans.forEach(function (pan) {
        pan.draw();
    });
}

function move(n, source, destin, temp) {
    if (source <= 0) {
        return;
    }
    if (source == 1) {
        movePan(n.popPan(), destin);
        operations.push([n, destin]);
    } else {
        move(n, source - 1, temp, destin);
        movePan(n.popPan(), destin);
        operations.push([n, destin]);
        move(temp, source - 1, destin, n);
    }
}

//盘子移动到目标柱子
function movePan(pan, destin) {
    destin.addPan(pan);
    return;
}

//盘子移动动画执行完的回调
function moveCallbk() {
    current_op = null;
    current_pan = null;
    moving = false;
    current_op_index++;
}

//更新位置
function update() {
    if (moving && current_pan != null) {
        //如果有盘子处于运动中. 就继续更新其位置
        current_pan.moving(current_op[1], moveCallbk);
    } else {
        //所有盘子都已经移动完毕就直接返回
        if (current_op_index >= operations.length) {
            start = false;
            return;
        } else {
            //否则就把当前操作取出来,执行
            moving = true;
            current_op = operations[current_op_index];
            current_pan = current_op[0].popPan();
            if (current_pan != null) {
                current_pan.moving(current_op[1], moveCallbk);
            }
        }
    }
}

//重置所有对象状态
function reset() {
    while (p1.popPan()) { }
    while (p2.popPan()) { }
    while (p3.popPan()) { }

    moving = false;
    //重置
    pans.forEach(function (pan) {
        pan.reset();
        p1.addPan(pan);
    });
    //当前操作指针指向头部
    current_op_index = 0;
}

//初始化.
function init() {
    //盘子都加入到A柱上
    pans.forEach(function (pan) {
        p1.addPan(pan);
    });

    //执行递归主函数, 记录所有的移动操作
    move(p1, p1.pans.length, p2, p3);

    //重置
    reset();
}

function main() {
    if (start) {
        update();
    }
    ca.clearRect(0, 0, 1000, 600);
    draw();
    window.requestAnimationFrame(main);
}