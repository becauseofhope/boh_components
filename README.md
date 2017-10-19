# Because of Hope Components

for https://becauseofhope.org.

Components for the Because of Hope Shopify site.

With Review on Heroku.

Uses VueJS.

Uses Typescript for data models.

## Instructions for use

### Setup

1. `yarn install`
2. `yarn build`
3. On the Shopify pages where an element should be added, add custom HTML with an appropiate `div` and `id` attribute of the element to use.
4. Ensure that a `script` element of the `vendor.js` and another `script` element of a specific component `.js` file is present in that HTML with the source javascript being from a built component that `yarn build` has made. It will include everything needed to generate an element into the page. This project has two elements. 

### Development

See `package.json` and the "`dev`" script. The dev server includes a mostly complete recreation of the CSS environment of the Shopify site locally.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
