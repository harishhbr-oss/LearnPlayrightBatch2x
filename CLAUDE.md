# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

Personal JavaScript learning sandbox. Each file is a standalone script demonstrating one concept (variables, hoisting, operators, conditionals, etc.). Despite the repo name, there is no Playwright code here yet — only plain Node.js JavaScript.

## Running scripts

There is no `package.json`, no build step, and no test framework. Run any file directly with Node:

```bash
node chapter_04_JavascriptConcepts/09_hoistinginFunction.js
```

## Structure conventions

- Files are grouped into `chapter_NN_Topic/` directories that mirror the learning sequence.
- File names are prefixed with a running two-digit index (e.g. `05_`, `06_`, ...) that continues across chapters — when adding a new file, continue the sequence rather than restarting at `01_` per chapter.
- Files are self-contained demos: they typically `console.log` results rather than exporting anything. Don't introduce module structure, shared utilities, or refactors across files — each script is meant to stand alone as a teaching example.

## Editing guidance

- Preserve intentionally "broken" or surprising code (e.g. accessing a `var` before declaration to show hoisting). These are pedagogical, not bugs to fix.
- Keep examples minimal and focused on the single concept named in the filename.
