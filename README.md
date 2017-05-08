# turf node example

This is an example of how to use Turf for a scripting task with node. This
technique lets you process bigger amounts of data than you could in a browser,
and have node read and write files.

## Installation

If you have `node` installed, you also have a command called `npm` installed:
this is what you use to download extra software for `node`. This project has
some preset requirements, which are stored in [package.json](package.json),
so if you open a terminal in the same folder as this project and run the command

```sh
$ npm install
```

Then the `npm` command with automatically find, download, and install `turf`
to this directory.

Next, you should open `index.js`, either locally or
[on GitHub](index.js), read through the code comments to understand what it does.

When you feel comfortable with your understanding of the process, run it:

```sh
$ node index.js
```