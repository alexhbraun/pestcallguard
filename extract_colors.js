import { Jimp } from 'jimp';

const url = "https://ik.imagekit.io/rgqefde41/ChatGPT%20Image%206%20de%20fev.%20de%202026,%2016_50_21.png";

async function main() {
  try {
    console.log("Analyzing image...");
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
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        
        let type = "-";
        // Heuristic for Gold/Yellow: High Red & Green, low Blue
        if (r > 180 && g > 150 && b < 100) type = "GOLD CANDIDATE";
        if (g > 100 && g > r && g > b) type = "GREEN CANDIDATE";
        
        console.log(`${hex}: ${count} (${type})`);
    });

  } catch (err) {
    console.error("Error:", err);
    // Fallback: try default import if named failed
    try {
        const JimpDefault = (await import('jimp')).default;
        if (JimpDefault && JimpDefault.read) {
             console.log("Retrying with default export...");
             // ... duplicate logic or just fail to let me know
        }
    } catch (e) {}
  }
}

main();
