import path from 'path';
import { fileURLToPath } from 'url';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const unzip = createUnzip();
const source = createReadStream(path.join(__dirname, 'files', 'archive.gz'));
const destination = createWriteStream(path.join(__dirname, 'files', 'fileToUnzip.txt'));

const decompress = async () => {
  pipeline(source, unzip, destination, (error) => {
    if (error) {
      console.error('An error occurred:', error);
      process.exitCode = 1;
    }
  });
};

await decompress();
