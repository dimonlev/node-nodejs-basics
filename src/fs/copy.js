import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  if (fs.existsSync(path.join(__dirname, `/files`))) {
    fs.promises.mkdir('files_copy', (err, data) => {
      if (err) {
        throw 'directory exists'
      }
    });

    fs.readdir(`${__dirname}/files`, (err, files) => {
      console.log(files)
      if (err) {
        console.error(err);
      }

      files.forEach(async file => {
        await fs.promises.copyFile(
          path.join(__dirname, `/files/${file}`),
          path.join(__dirname, `/files_copy/${file}`)
        )
      })
    })
  } else {
    throw 'directory files not found'
  }
}
await copy();
