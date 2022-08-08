# TableCheck's SPA Boilerplate

## Features

- Search for shops using the TableCheck API
- Direct link to a location search e.g.: `/en/search/shibuya`
- Shop details side panel
- Responsive

## Limitations

Due to a lack of free time to work on this project, there are a few shortcomings, including but not limited to:

- No loading animations for API requests
- Lack of polish (content disappears from side panel when clicking outside of it; area outside Panel can be interacted with, etc.)
- Lacks tests (only the useShops hook istested)

## Getting started

- Install [Node.js](https://nodejs.org/en/download/) and [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
- Fork/Clone this project
- Run `nvm use` (will use the correct Node.js version)
- Run `npm i --legacy-peer-deps` (will install the dependencies)
- Run `npm start` (will start the app in http://localhost:3000/)
