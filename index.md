<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Web Photo Editor</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Web Photo Editor</h1>
    
    <input type="file" id="upload" accept="image/*">
    <canvas id="canvas"></canvas>
    
    <div class="controls">
        <label>Brightness:</label>
        <input type="range" id="brightness" min="0" max="200" value="100">
        
        <label>Contrast:</label>
        <input type="range" id="contrast" min="0" max="200" value="100">
        
        <label>Grayscale:</label>
        <input type="range" id="grayscale" min="0" max="100" value="0">
    </div>

    <button id="download">Download Image</button>

    <script src="script.js"></script>
</body>
</html>
