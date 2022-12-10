import path from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'node:fs';
import { Transform } from 'node:stream';
import { stdin } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const reverse = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().split('').reverse().join(''));
  },
})

const writeStream = createWriteStream(path.join(__dirname, './files/fileToWrite.txt'));

const transform = async () => {
  stdin.pipe(reverse).pipe(writeStream);
};

await transform();
