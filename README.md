# personal-portfolio-v1

## to be deployed

## Purpose:
- Research and test out ts/es and scss linting
- Document how to set up linting and JetBrains configurations
- Learn and apply typescript and scss
- Practice vue class component with typescript
- Practice CSS transitions and CSS em/rem units
- Practice responsive typography with viewport units
- Practice using Web Storage API
- Research and apply standard conventions (BEM, typescript, vue, scss)
- Create a personal website

IDE: JetBrains WebStorm Version: 2019.1

<br>

## Project Setup
```
npm install
```

##### Compiles and hot-reloads for development
```
npm run serve
```

##### Compiles and minifies for production
```
npm run build
```

##### Run your tests
```
npm run test
```

##### Lints and fixes files
```
npm run lint
```

##### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<br>

## Linting Setup (for new projects)
Following setups TS, ES, and SCSS linting

##### Install eslint via CLI (auto gens .eslintrc.js & .editorconfig)
```
$ vue add @vue/cli-plugin-eslint
```
1. Run the command above
2. Select `Airbnb` when asked `Pick an ESLint config`
3. Select `Lint on save` when asked `Pick additional lint features`

##### Install stylelint (CSS linter):
###### 1. Quick Installation - be at root dir
 ```
 $ npm i -D stylelint stylelint-config-standard stylelint-config-recess-order stylelint-scss
 
 $ touch .stylelintrc.json
 ```
 
 ###### 2. Copy and paste into `.stylelintrc.json`
  ```json
 {
   "plugins": [
     "stylelint-scss"
   ],
   "extends": [
     "stylelint-config-standard",
     "stylelint-config-recess-order"
   ],
   "rules": {
     "no-empty-source": null
   }
 }
 ``` 
  
 ######notes:
 - styelint-scss: additional linting for scss specifically
 - stylelint-config-standard: extends general css linting
 - stylelint-config-recess-order: upon `--fix` auto reorders CSS property following RECESS rule
 - `no-empty-source`: to ignore empty `<style></style>` in .vue files
 
 <br>
 
 ##### Stylelint a Directory (at root) and View Errors
 ```
 $ stylelint "src/**/*.vue"
 ```
  
 ##### Stylelint and Fix (at root)
 ```
 $ stylelint --fix "src/**/*.vue"
 ```
 
 <br>

## JetBrains IDE Linting Setup (after npm install)
##### Set `stylelint` for on the fly SCSS linting
1. `stylelint` module is installed and `.stylelintrc.json` exists (follow prior instructions)
1. Install `IntelliJ Stylelint Plugin`:
   - Preferences > Plugins
   - Go to `Marketplace` tab
   - On search bar, type `stylelint` and press enter
   - Install `IntelliJ Stylelint Plugin`
1. Enable stylelinting:
   - Preferences > Languages & Frameworks > Style Sheets > Stylelint
   - Click on `enable` box
   - Click OK

##### Set `eslint` for on the fly eslinting 
1. `eslint` module is installed and `.eslintrc.js` exists (follow prior instructions)
1. Go to: Preferences > Languages & Frameworks > JavaScript > Code Quality Tools > Eslint
1. Click on `Manual ESLint Configuration`
1. Click OK
  
<br>

## JetBrains IDE Settings to adhere to vue style guideline
##### Remove auto indenting in newlines in `<script>` and `<style>` tag:

1. Preferences > Editor > Code Style > HTML
1. Go to `Other` tabs
1. Under `Do not indent children of`: add `style` and `script`
