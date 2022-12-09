import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  if (fs.existsSync(path.join(__dirname, `/files`))) {
    fs.readdir(`${__dirname}/files`, (err, files) => {
      if (err) {
        console.error(err);
      }
      for (const file of files) {
        console.log(file);
      }
    })
  } else {
    throw 'directory files not found'
  }
}

await list();
