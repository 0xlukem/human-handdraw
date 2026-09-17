#!/usr/bin/env node

import {cpSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync} from 'node:fs';
import {basename, dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const [, , rawTarget, rawName] = process.argv;

if (!rawTarget) {
  console.error('Usage: node scripts/create-project.mjs <target-directory> [project-slug]');
  process.exit(1);
}

const target = resolve(rawTarget);
const projectName = rawName ?? basename(target);

if (!/^[a-z0-9][a-z0-9-]*$/.test(projectName)) {
  console.error('Project slug must use lowercase letters, digits, and hyphens.');
  process.exit(1);
}

if (existsSync(target) && readdirSync(target).length > 0) {
  console.error(`Refusing to overwrite non-empty directory: ${target}`);
  process.exit(1);
}

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const starter = resolve(scriptDirectory, '../assets/remotion-starter');

mkdirSync(target, {recursive: true});
cpSync(starter, target, {recursive: true});

const packagePath = resolve(target, 'package.json');
const packageJson = JSON.parse(readFileSync(packagePath, 'utf8'));
packageJson.name = projectName;
writeFileSync(packagePath, `${JSON.stringify(packageJson, null, 2)}\n`);

const lockPath = resolve(target, 'package-lock.json');
if (existsSync(lockPath)) {
  const lock = JSON.parse(readFileSync(lockPath, 'utf8'));
  lock.name = projectName;
  if (lock.packages?.['']) lock.packages[''].name = projectName;
  writeFileSync(lockPath, `${JSON.stringify(lock, null, 2)}\n`);
}

console.log(`Created ${projectName} at ${target}`);
console.log('Next: npm ci, npm run check, then npm run studio');
