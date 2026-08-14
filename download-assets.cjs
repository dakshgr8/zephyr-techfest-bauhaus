const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

function downloadFile(url, dest) {
  return new Promise((resolve) => {
    try {
      const client = url.startsWith("https") ? https : http;
      const req = client.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          if (res.headers.location) {
            return downloadFile(res.headers.location, dest).then(resolve);
          }
        }
        if (res.statusCode !== 200) {
          console.warn(`[WARN] HTTP ${res.statusCode} for ${url}`);
          return resolve(false);
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve(true);
        });
      });
      req.on("error", (err) => {
        console.warn(`[WARN] Network error for ${url}:`, err.message);
        resolve(false);
      });
      req.setTimeout(10000, () => {
        req.destroy();
        resolve(false);
      });
    } catch (e) {
      console.warn(`[WARN] Exception for ${url}:`, e.message);
      resolve(false);
    }
  });
}

async function main() {
  const publicDir = path.join(__dirname, "public");
  fs.mkdirSync(publicDir, { recursive: true });

  console.log("1. Downloading Logos...");
  await downloadFile("https://www.zephyr-techfest.dev/images%20(4).jpeg", path.join(publicDir, "zephyr-logo.jpeg"));
  await downloadFile("https://www.zephyr-techfest.dev/TSDW.png", path.join(publicDir, "TSDW.png"));
  await downloadFile("https://www.zephyr-techfest.dev/favicon.jpeg", path.join(publicDir, "favicon.jpeg"));

  console.log("2. Downloading Sponsors (1 to 20)...");
  for (let i = 1; i <= 20; i++) {
    const filename = `spon${i}.webp`;
    await downloadFile(`https://www.zephyr-techfest.dev/${filename}`, path.join(publicDir, filename));
  }

  console.log("3. Downloading Events (1 to 67)...");
  for (let i = 1; i <= 67; i++) {
    const filename = `event${i}.webp`;
    await downloadFile(`https://www.zephyr-techfest.dev/${filename}`, path.join(publicDir, filename));
  }

  // Also check events-data.json for any github raw URLs
  if (fs.existsSync("/home/daksh/events-data.json")) {
    const events = JSON.parse(fs.readFileSync("/home/daksh/events-data.json", "utf8"));
    for (const evt of events) {
      if (evt.image && evt.image.startsWith("http")) {
        const ext = path.extname(evt.image.split("?")[0]) || ".jpg";
        const localName = `event-custom-${evt.id}${ext}`;
        const dest = path.join(publicDir, localName);
        const ok = await downloadFile(evt.image, dest);
        if (ok) {
          evt.localImage = `/${localName}`;
        }
      } else if (evt.image) {
        evt.localImage = evt.image;
      }
    }
    fs.writeFileSync(path.join(__dirname, "src", "events-data.json"), JSON.stringify(events, null, 2));
    console.log("Saved updated events-data.json into src/!");
  }

  console.log("Asset download process completed!");
}

main().catch(console.error);
