document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numCables = document.getElementById('cables').value;
    const trayWidth = document.getElementById('tray-width').value;

    // 假設每個電纜佔用的寬度為 1 寸
    const requiredWidth = numCables; // 可以根據實際需要進行計算

    document.getElementById('result').innerText = `Total width required: ${requiredWidth} inches`;
});
