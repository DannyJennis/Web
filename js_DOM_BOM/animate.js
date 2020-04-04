// 动画原理
        // 获得盒子当前位置加上一个移动距离
        // 利用定时器不断重复这个操作
        // 加一个结束定时器的条件
        // 注意此元素需要添加定位，才能使用element.style.left

        // 简单封装函数
        function animate(obj, targer,callback) { 
            obj.timer = setInterval(function () {
                // 步长值写到定时器里面
                // 把我们步长值改成整数，不要出现小数
                // var step = Math.ceil((targer - obj.offsetLeft) / 10);
                var step = (targer - obj.offsetLeft) / 10;
                //大于零取大  小于零取小
               step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if (obj.offsetLeft == targer) {
                    // 停止动画  本质是停止定时器
                    clearInterval(obj.timer);
                    if (callback) {
                        //回调函数
                        callback();
                    }
                }
                // 把每次加一换成一个步长值，步长值慢慢变小  步长公式：（目标值-现在的位置）/10
                obj.style.left = obj.offsetLeft + step + 'px';
            }, 100);
        }
        //var div = document.querySelector('div');
        var span = document.querySelector('span');
        var btn500 = document.querySelector('.btn500');
        var btn1000 = document.querySelector('.btn1000');

        // 调用函数
        btn500.addEventListener('click', function () {
           // animate(div, 500);
            animate(span, 500);
        })
        btn1000.addEventListener('click', function () {
           // animate(div, 1000);
            animate(span, 1000,function(){
                span.style.backgroundColor = 'red';
            });
        })

// 匀速动画就是盒子的位置加上固定的值
// 缓动动画就是盒子当前的位置加变化的值