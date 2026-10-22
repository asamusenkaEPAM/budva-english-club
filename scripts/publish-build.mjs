import { copyFile, cp, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, '..');
const buildDirectory = path.join(repositoryRoot, 'dist');
const publishedDirectories = ['assets', 'data', 'images', 'en', 'ru', 'me', 'tr', 'de'];
const publishedFiles = ['index.html', 'robots.txt', 'sitemap.xml'];

for (const directory of publishedDirectories) {
  const destination = path.join(repositoryRoot, directory);
  await rm(destination, { force: true, recursive: true });
  await cp(path.join(buildDirectory, directory), destination, { recursive: true });
}

for (const file of publishedFiles) {
  await copyFile(path.join(buildDirectory, file), path.join(repositoryRoot, file));
}

console.log('Published the production build to the repository root.');
