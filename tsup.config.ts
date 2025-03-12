// NOT USED

import { copyFile } from 'node:fs/promises'
import { exec } from 'node:child_process'
import { promisify } from 'node:util'

import glob from 'tiny-glob'
import { defineConfig } from 'tsup'

const pexec = promisify(exec)

export default defineConfig({
  entry: ['src/**/*@(ts|tsx)'],
  format: ["esm"],
  dts: false,
  clean: true,
  outDir: "dist",
  target: "esnext",
  treeshake: true,
  async onSuccess () {
    try {
      await pexec('tsc --emitDeclarationOnly --declaration')
      const files = await glob('dist/**/*.d.ts')
      await Promise.all(files.map(file => copyFile(file, file.replace('.d.ts', '.d.mts')))) // or to `.d.cjs` for "type": "module" projects
    } catch (err) {
      console.error()
      console.error('Typescript compilation error:')
      console.error()
      console.error(err.stdout)
      throw err
    }
  }
});