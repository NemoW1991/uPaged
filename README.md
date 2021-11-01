# <h1 align="center">uPaged</h1>

**Introduction**:

Based on mockup image, recreate a page that shows available jobs and jobs that you have been invited to.

**Demo**: 


Table of Contents
-----------------
- [About](#about)
  - [Requirement](#Requirement)
  - [Build With](#build-with)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Contact Me](#contact-me)

About
-------------

### Requirement

Must:
- Use React for the front end framework
- Use Node.JS for the back end framework
- Use the listed style guide below for colors and fonts to supplement the front end design
- Be able to click between at least two (2x) weeks to pull fresh data that is relevant to the displayed date

Not Least:
- Use Redux for state management
- Use SCSS modules
- Clear comments (hint: don’t go overboard) to explain your code

### Build with

* [React, Redux, TypeScript, Scss, Node, Express]

  -  [Backend(node,express)](./backend)

  -  [Frontend(React,Redux)](./frontend)

Project Structure
-----------------
    .
    ├── frontend                    
    │   ├── public                       
    │   ├── src 
    |   |    ├── assets                   
    │   |    ├── components             
    │   |    ├── lib                     
    │   |    ├── store                    
    │   |    ├── style                    
    │   |    ├── views                    
    │   |    ├── App.css                 
    │   |    ├── App.js                  
    │   |    ├── global.d.ts              
    │   |    └── index.js              
    |   |
    │   ├── package.json                
    │   ├── package-lock.json            
    │   └── tsconfig.json                
    |   
    ├── backend                    
    │   ├── src 
    |   |    ├── controller               
    │   |    ├── datastore              
    │   |    ├── routes                 
    │   |    ├── util                    
    │   |    └── index.js               
    |   |
    │   ├── package.json                
    │   └── package-lock.json            
    └── README.md

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/NemoW1991/uPaged.git

# Change directory
cd uPaged
```
For Frontend

```bash
# Change directory
cd frontend

In the frontend directory, you can run:

# Install dependencies
npm install
yarn add

# Then simply start the app
npm start
yarn start

# Also simply test the app
npm test
yarn test

# Also simply build the app
npm run build
yarn build
```

For Backend

```bash
# Change directory
cd Backend

In the backend directory, you can run:

# Install dependencies
npm install
yarn add

# Then simply start the app
node src/index.js
```

Contact Me :smile:
------------------

E_mail: lya.hwang.au@gmail.com

Program Link: https://github.com/NemoW1991/uPaged.git
      