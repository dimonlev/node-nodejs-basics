import path from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const stream = createWriteStream(path.join(__dirname, './files/fileToWrite.txt'));
  process.stdin.pipe(stream);
  process.stdin.resume();
};

await write();
