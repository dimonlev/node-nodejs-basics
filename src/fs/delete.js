import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  fs.unlink(path.join(__dirname, 'files/fileToRemove.txt'), (err) => {
    if (err) {
      throw 'file not found';
    }

    console.log("Delete File successfully.");
  })
};

await remove();
