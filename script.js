const upload = document.getElementById('upload');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const brightness = document.getElementById('brightness');
const contrast = document.getElementById('contrast');
const grayscale = document.getElementById('grayscale');
const download = document.getElementById('download');

let img = new Image();

upload.addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        img.src = e.target.result;
    };
    
    reader.readAsDataURL(file);
});

img.onload = function() {
    canvas.width = img.width / 2;
    canvas.height = img.height / 2;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

function applyFilters() {
    ctx.filter = `
        brightness(${brightness.value}%)
        contrast(${contrast.value}%)
        grayscale(${grayscale.value}%)
    `;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

brightness.addEventListener('input', applyFilters);
contrast.addEventListener('input', applyFilters);
grayscale.addEventListener('input', applyFilters);

download.addEventListener('click', function() {
    const link = document.createElement('a');
    link.download = 'edited-image.png';
    link.href = canvas.toDataURL();
    link.click();
});
