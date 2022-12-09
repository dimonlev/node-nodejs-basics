import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  fs.promises.rename(
    path.join(__dirname, 'files', 'wrongFilename.txt'),
    path.join(__dirname, 'files', 'properFilename.md'),
    (err) => {
      if (err) throw err;
    }
  )
};

await rename();
