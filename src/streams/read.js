import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function logChunks(readable) {
  for await (const chunk of readable) {
    process.stdout.write(chunk);
  }
}

const read = async () => {
  const stream = createReadStream(path.join(__dirname, './files/fileToRead.txt'))
  logChunks(stream);
};

await read();
