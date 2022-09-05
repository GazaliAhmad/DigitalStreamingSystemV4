# Notes on install

Install Bootstrap: `npm i bootstrap@5.2.0`

Add BootStrap into Angular.json under styles:

````JSON
  "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],```


Generate components without tests: `ng generate component --skip-tests=true component-name`
````
