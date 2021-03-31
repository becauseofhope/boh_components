# Because of Hope Components

[![Build Status](https://travis-ci.org/becauseofhope/boh_components.svg?branch=master)](https://travis-ci.org/becauseofhope/boh_components)

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

shrug
## Build Setup

```
docker-compose run dev
```

```bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
cd dist && python -m http.server

# build for production with minification
yarn build
```
