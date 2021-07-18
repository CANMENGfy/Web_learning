//当页面内容完全加载完成会立即触发该事件，很多时候我们要对页面中的某一个元素进行操作，通常代码存放在该事件中
window.onload = function() {
    // 1、给关闭按钮绑定鼠标点击事件
    document.getElementById('J_closeBtn').onclick = function() {
        // 2、将广告隐藏
        document.getElementById('J_ad').style.display = 'none';
    }
}