const Jimp = require('jimp');

const url = "https://ik.imagekit.io/rgqefde41/ChatGPT%20Image%206%20de%20fev.%20de%202026,%2016_50_21.png";

async function main() {
  try {
    const image = await Jimp.read(url);
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    const colors = {};

    image.scan(0, 0, width, height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      const alpha = this.bitmap.data[idx + 3];

      if (alpha < 255) return; // Skip transparent

      const hex = "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1).toUpperCase();
      
      colors[hex] = (colors[hex] || 0) + 1;
    });

    const sortedColors = Object.entries(colors).sort((a, b) => b[1] - a[1]);
    
    console.log("Top Colors:");
    sortedColors.slice(0, 50).forEach(([hex, count]) => {
        // Rough heuristic to identify "Gold" or "Green"
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        
        let type = "-";
        if (g > r && g > b) type = "Green-ish";
        if (r > g && r > 150 && g > 100) type = "Gold/Yellow-ish"; 
        
        console.log(`${hex}: ${count} (${type})`);
    });

  } catch (err) {
    console.error(err);
  }
}

main();
