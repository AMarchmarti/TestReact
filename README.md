# TestReact
Technical test with **React** and **Typescript** using **Vite**.

## Vite
Vite is a frontend tool. It is very useful to create a project structure that can be used with React, among others, and in a very fast way, as you don't need to configure anything and it takes advantage of the ES6 module system (ESModules) so it can be served dynamically as needed by the browser.

## Init Proyect
First of all when downloading the project we would have to make use of
~~~
npm install
~~~ 
in order to install the project dependencies.

We can then launch the project using the command:
~~~
npm run dev 
~~~
We would then launch the project locally and any changes would be seen live.

## Prettier
Podemos ver en el package.json hay otros comandos:
~~~
npm run prettier:fix
~~~
Que sirve para estandarizar  el código según unas reglas que podemos ver en el archivo ***Prettierrc***

## Improvements
Possible improvements we could make to the project is using **react-testing-library** to add tests to have a coverage of the project.

Another improvement would be to add an **eslint** configuration to have a clean code with some rules added by us.

Add **hooks** to have automation before committing the changes and uploading them to the branch where we work. Use of *pre-commit* to apply the eslint and *pre-push* to pass the tests before uploading the changes.

I would like to mention that this project is uploaded to Netlify with automatic update once you update master, so we can have a direct display of our code.
