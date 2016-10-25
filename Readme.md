
#Requirements

(1) NodeJs et al
    node: 5.12+
    npm: 3.12+
    webpack: 1.13.2+ (npm install -g webpack@1.13.2 ) (Note V.2 is not supported with our boilerplate yet)
    babel-cli:

    beside babel-preset-es2015 with babel-preset-stage-0 plugin also more advanced ES6 features
    are supported, i.e. the object spread operator ...
    http://babeljs.io/dncs/plugins

   SASS (incl. SCSS syntax) 
    npm install -g node-sass@3.4.2 
   or
   LESS
        
(2) Git Bash (For windows user only)
    a. Create .bashrc file with Node and npm in your path
    
      #!/bin/bash
      export export PATH=$PATH:'/c/Program Files/nodejs':'/c/Users/Petzch/AppData/Roaming/npm'

b. Create .bash_profile file
    
        #-------------------------------------------------------------
        # Source global definitions (if any)
        #-------------------------------------------------------------
        #If not running interactively, don't do anything
        [ -z "$PS1" ] && return
        
        
        #-------------------------------------------------------------
        # Source global definitions (if any)
        #-------------------------------------------------------------
        
        
        if [ -f /etc/bashrc ]; then
              . /etc/bashrc   # --> Read /etc/bashrc, if present.
        fi
        
(3) Code Editor or IDE
    a. Atom (IMO better than Brackets) or
    b. IntelliJ IDEA Universal with JS support
        - For Windows: 
            1.  set Terminal to: i.e. 
                "C:\Program Files (x86)\Git\bin\sh.exe" --login -i
            2.  set Setting..Language&Tools..Javascript.. to ECMAScript 6



(4) Integrate with git
- open terminal and got to the project folder
- run:
    
     ```
     $ git init
     $ git status
     
- add .gitignore
     ```
     $ touch .gitignore

- append folder node_modules/ .idea/ .DS_Store to .gitignore
     ```
     $ echo "node_modules/" >>.gitignore
     $ echo ".idea/" >>.gitignore
     $ echo "public/.idea/" >>.gitignore
     $ echo ".DS_Store" >>.gitignore

- check status, so the ignorable folder/files should removed from the status
     ```
     $ git status
     
- make the same for the public folder
     ```
     $ touch .gitignore
     $ echo ".idea/" >>.gitignore

- add files .gitignore and all the rest with .
     ```
     $ git add .gitignore
     $ git add .
     $ git status
     
- commit all files
     ```
     $ git commit -m 'Initial commit'
     $ git status

- After new changes have been made you regulary have to add and commit the changed file. A shortcut is:
     ```
     $ git status
     $ git commit -a -m 'Modified Readme.md and app/components/Examples.jsx'
     $ git status

- For new files:
     ```
     $ git status
     $ git add .
     $ git commit -m 'Added [newfile]'
     $ git status



# SSH Key and Github (https://github.com/Sukumi)
- Check for available keys
     ```
     $ ls -al ~/.ssh

- Create Key
     ```
     $ ssh-keygen -t rsa -b 4096 -C 'ceta@protonmail.com'
     $ ls -al ~/.ssh

- check for running ssh-agent (true if pid returned)
     ```
     $ eval "$(ssh-agent -s)"

- add key to ssh-agent
     ```
     $ ssh-add ~/.ssh/id_rsa

- add public key to github (copy output from more command to github ssh key field)
     ```
     $ more ~/.ssh/id_rsa.pub

- add github.com to the ~/.ssh/known_hosts file
    ```
    $ ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts

- check ssh key with github setup properly
     ```
     $ ssh -T git@github.com

- Create a new repo on github via web interface or command line
     ```
     $ git remote add orrigin git@github.com/sukumi/react-weather.comit
     $ git push -u origin master

#Do

(1) npm install

(2) webpack

(3) node server.js

(4) go to: localhost:3000

#Components in Use
(1) Express: Node web development framework for the server

(2) Webpack
    a. webpack@1.13.2

(3) Babel
    a.
    b.
    c.
    d.
    
(4) ReactJS
    a. react.js
    b. react-dom.js
    c. react-router.js
    
    npm install --save 
    
(5) CSS Specifics
    a. webpack: css-loader@0.23.1
    b. webpack: script-loader@0.6.1
    c. webpack: style-loader@0.13.0
    d. webpack: sass-loader@3.1.2
    e. node-sass@3.4.2
    f. foundation-sites@6.2.0
    g. jquery@2.2.1
    
    npm install --save-dev css-loader@0.23.1 script-loader@0.6.1 style-loader@0.13.0 jquery@2.2.1 foundation-sites@6.2.0
    npm install --save-dev node-sass@3.4.2 sass-loader@3.1.2 
    
#Babel ES2015 + latest ES6 features like ...

(1) Install the cli and the presets
npm install --save-dev babel-cli babel-preset-es2015 babel-preset-stage-0

(2) Make a .babelrc (config file) with the preset
echo { "presets": ["es2015", "stage-0"] } > .babelrc
Windows: echo { "presets": ["es2015", "stage-0"] } > .babelrc

(3) Create a file to run on
echo 'console.log([1, 2, 3].map(n => n + 1));' > index.js
Windows: console.log([1, 2, 3].map(n =^> n + 1)); > index.js

(4) Run it
./node_modules/.bin/babel-node index.js

#Styles with CSS
The major 3rd party library players are [Bootstrap][3] and [Foundation][4]
We use Foundations because its supports
    - Riight-Left
    - Pricing Tables
    - Units: em instead of px (pixels)

#Environemnt
##Javascript
[MDN JavaScript][2]
[Exploring ES6][3]
####Promises
[Promises 1][4]
[Promises 2][5]
[Promises 3][6]
[Promises 4][7]

##Node and NPM
[Nodejs][20]

##Package Manager and Task Runner
[NPM][30]
[Webpack][31]
[Bower][32]
[Grunt][33]

##Compiler and Transpiler
[Babel][40]
[Babel Plugins&Presets][41]

#Frameworks
##React
[React][1010]
[React Docs][1011]
[React-Router][1015]
[react-rocks][1021]
[react-select][1022]

##Axios
[Axios][1050]
[Axios Docs][1051]
[How-to-use-axios-as-your-http-client][1052]

#CSS
##Foundation
[CSS w3s][2001]

##Libraries
[Bootstrap][2100]
[Foundation][2101]
[Bootstrap-vs-Foundation 1][2102]
[Bootstrap-vs-Foundation 2][2103]
[Bootstrap-vs-Foundation 3][2104]

##Preprocessors
####SASS (incl. SCSS syntax)
[SASS][2210]
####LESS
[LESS][2220]
####Other
[Stylus][2230]
[CSS-Crush][2240]
[Myth][2250]
[Rework][2260]
####Webpack and Loading Styles
[webpack-loading-styles][2270]

#Markdown
[Quick Reference][1]

#Accessible Rich Internet Applications (ARIA)
[MDN Reference][5001]

#Developer APIs
[Six essential javascript libraries][4000]
[50 most useful apis for developers][4001]
[OpenWeatherMap][4002]

[1]: https://en.support.wordpress.com/markdown-quick-reference/
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[3]: http://exploringjs.com/es6/
[4]: http://exploringjs.com/es6/ch_promises.html
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
[6]: https://www.npmjs.com/package/promise
[7]: https://howtonode.org/promises

[20]: https://nodejs.org/en/
[30]: https://docs.npmjs.com/
[31]: https://webpack.github.io/docs/
[32]: https://bower.io/
[33]: http://gruntjs.com/

[40]: https://babeljs.io/
[41]: http://babeljs.io/docs/plugins/

[1010]: https://facebook.github.io/react/
[1011]: https://facebook.github.io/react/docs
[1015]: https://github.com/ReactTraining/react-router
[1021]: https://react.rocks/tag/Dropdown
[1022]: https://jedwatson.github.io/react-select/

[1050]: https://github.com/mzabriskie/axios
[1051]: https://docs.omniref.com/js/npm/axios/0.5.1
[1052]: http://codeheaven.io/how-to-use-axios-as-your-http-client/

[2001]: http://www.w3schools.com/css/

[2100]: http://getbootstrap.com/
[2101]: http://foundation.zurb.com/docs
[2102]: https://www.vermilion.com/responsive-comparison/
[2103]: http://blog.teamtreehouse.com/use-bootstrap-or-foundation
[2104]: https://www.keycdn.com/blog/bootstrap-vs-foundation/

[2210]: http://sass-lang.com/
[2220]: http://lesscss.org/
[2230]: http://stylus-lang.com/
[2240]: http://the-echoplex.net/csscrush/
[2250]: http://www.myth.io/
[2260]: https://github.com/reworkcss/rework
[2270]: http://survivejs.com/webpack/loading-assets/loading-styles/

[4000]: http://jamesknelson.com/six-essential-javascript-libraries/
[4001]: http://www.computersciencezone.org/50-most-useful-apis-for-developers/

[4002]: http://openweathermap.org/

[5001]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA

