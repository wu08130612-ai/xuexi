// 1. 获取 DOM 元素 (Grab the Hook)
const boxElement = document.getElementById('myBox');

// 2. 定义交互逻辑 (Define Logic)
function toggleState() {
    // 切换 class，而不是直接修改 style 属性，这是最佳实践
    // contains: 检查是否有该类; add/remove: 添加或删除
    boxElement.classList.toggle('active'); 
    
    // 修改文字内容
    if (boxElement.classList.contains('active')) {
        boxElement.textContent = "我变红了！";
    } else {
        boxElement.textContent = "点我变身";
    }
}

// 3. 监听事件 (Listen for Events)
// 当用户点击 (click) 时，执行 toggleState 函数
boxElement.addEventListener('click', toggleState);