{
  "files": [
    {
      "path": "rain-animation-site/index.html",
      "content": "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Rain Animation</title><link rel=\"stylesheet\" href=\"styles.css\"></head><body><canvas id=\"rainCanvas\"></canvas><script src=\"script.js\"></script></body></html>"
    },
    {
      "path": "rain-animation-site/styles.css",
      "content": "body, html { margin: 0; padding: 0; overflow: hidden; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background: #000; } #rainCanvas { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }"
    },
    {
      "path": "rain-animation-site/script.js",
      "content": "const canvas = document.getElementById('rainCanvas'); const ctx = canvas.getContext('2d'); canvas.width = window.innerWidth; canvas.height = window.innerHeight; window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }); class Raindrop { constructor(x, y, speed, length, opacity) { this.x = x; this.y = y; this.speed = speed; this.length = length; this.opacity = opacity; } fall() { this.y += this.speed; if (this.y > canvas.height) { this.y = 0; this.x = Math.random() * canvas.width; } } draw() { ctx.beginPath(); ctx.strokeStyle = `rgba(174,194,224,${this.opacity})`; ctx.lineWidth = 1; ctx.moveTo(this.x, this.y); ctx.lineTo(this.x, this.y + this.length); ctx.stroke(); } } const raindrops = []; for (let i = 0; i < 500; i++) { raindrops.push(new Raindrop(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 4 + 1, Math.random() * 20 + 10, Math.random() * 0.5 + 0.2)); } function animate() { ctx.clearRect(0, 0, canvas.width, canvas.height); raindrops.forEach(raindrop => { raindrop.fall(); raindrop.draw(); }); requestAnimationFrame(animate); } animate();"
    }
  ]
}
