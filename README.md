# Portfolio Site
[![Build Status](https://travis-ci.org/funkybunch/Portfolio-Site.svg?branch=master)](https://travis-ci.org/funkybunch/Portfolio-Site)

I've been exploring various frameworks for rebuilding my portfolio.  After a good amount of research I've settled on [Moon](https://github.com/kbrsh/moon).

This repository contains two branches: `master` && `gh-pages`.  The files in each are setup as:
- `master` contains project files required to initialize the project and create new builds.  The `dist/` directory is intentionally ignored.
- `gh-pages` contains the files that would otherwise be in the `dist/` directory.  These files are mapped specifically to the `gh-pages` branch so that both development and production files can be kept in a single repo.

These branches should never be merged.  If you decide to install this project for your own use and modifications, you will need to implement your own workflow for deploying builds.

## Installation
This project uses [Moon](https://github.com/kbrsh/moon) which uses [NodeJS](https://github.com/nodejs/node).  Be sure `npm` and your version of Node are both up to date before continuing.  You can update Node by using [nvm](https://github.com/creationix/nvm).  
1. Clone the repo and simply run `npm install` inside of the directory.
2. Once installed run `npm run dev` to deploy to a local server `http://localhost:1234/`.

When packaging for production use run `npm run build` and the build will be saved in the `dist/` directory.

## License
This project is my own work for my own portfolio.  The design, graphics, and images referenced in this code are copyrighted and are **NOT** covered by the same license as the code.  By using this code you agree that you will not use any of the graphics, designs, or images contained within including but not limited to the design of the site itself.

The code is open source and released under the [**GNU General Public License v3.0**](https://github.com/funkybunch/Portfolio-Site/blob/master/LICENSE) license.