import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  if (!fs.existsSync(path.join(__dirname, 'files/fresh.txt'))) {
    fs.writeFile(path.join(__dirname, 'files/fresh.txt'), 'I am fresh and young', (err, data) => {
      if (err) {
        throw `Error: FS operation failed`;
      }
    })
  } else {
    throw 'FS operation failed'
  }

};

await create();
