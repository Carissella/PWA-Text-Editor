# Progressive Web Application: Text Editor
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

 ## Table of Contents 📑

  * [Description](#description)
  * [Dependencies](#dependencies)
  * [Usage](#usage)
  * [Built With](#built-with)
  * [Screenshots](#screenshots)
  * [Contributers](#contributers)
  * [License](#license)
  * [Questions](#questions)

## Description 

This is a text editor program that runs in a web browser and does meet the requirements for being a Progressive Web App which can also be considered a PWA. As a PWA, the program is able to functionin offline and does have data persistence strategies as a fallback in the case a browser doesn't support a certain strategy.

## Dependencies  

* css-loader: 6.2.0
* html-webpack-plugin: 5.3.2
* http-server: 0.11.1
* mini-css-extract-plugin: 2.7.5
* style-loader: 3.2.1
* webpack: 5.51.1
* webpack-cli: 4.8.0
* webpack-dev-server: 4.0.0
* webpack-pwa-manifest: 4.3.0
* workbox-webpack-plugin: 6.2.4
* babel-loader: 8.2.2
* code-mirror-themes: 1.0.0
* idb: 6.1.2
You can also find more information regarding each of the dependencies in the repository package.json file.

 ## Usage 

  1. Create your own repository using the starter code by cloning the starter code repository. 
  2. In order to launch the backend code and serve the client code aswell, run npm run start from the root directory.
  3. IndexedDB will create a database store when the text editor is opened.
  4. When you enter text content and then close the DOM window, the text content is saved with the IndexedDB.
  The text content will be retrieved from the IndexedDB when the text editor is opened after closing the application.
  5. To download the application as a desktop application or icon, click the install button.
  6. When the application is opened, a registered service worker that utilizes Workbox will be present during the duration the application is open. The Pre-caching of static assets will be used.

  ## Built with

* idb - is a wrapper that surrounds the IndexedDB API and is used for storing and retrieving data.
* Webpack - is used for packing JavaScript files together and generating an HTML file, manifest file, and service worker.
* Workbox - is used to register a service worker and then pre-caching static assets upon loading of the application.


  ## Contributers 

  Starter code come from the Univeristy of Minnesota Full-Stack Flex Web Development Bootcamp.

  ## License 
  
  Copyright (c)
  [MIT](https://opensource.org/licenses/MIT)

  ## Questions 

  You can visit my Github Profile here: [Carissella](https://github.com/Carissella) 
  If you have any questions about this repository please email me at carissebarr.swe@gmail.com