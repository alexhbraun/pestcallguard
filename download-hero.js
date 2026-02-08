import fs from 'fs';
import https from 'https';

const url = "https://cdn.pixabay.com/photo/2017/09/27/15/43/man-2792476_1280.jpg";
const path = "public/hero-bg.jpg";

const download = (url, dest) => {
  const file = fs.createWriteStream(dest);
  const options = {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  };

  const request = https.get(url, options, (response) => {
    // Handle redirects
    if (response.statusCode === 301 || response.statusCode === 302) {
      download(response.headers.location, dest);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(`Failed to download: ${response.statusCode} ${response.statusMessage}`);
      return;
    }

    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log("Download completed successfully.");
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => {}); 
    console.error(`Error downloading file: ${err.message}`);
  });
};

download(url, path);
