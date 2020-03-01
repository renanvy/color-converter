# API to convert colors from RGB to Hex and Hex to RGB

Color converter is an API that can translate from RGB to hexadecimal and hexadecimal to RGB

## Installing and running

* NodeJS # https://nodejs.org/en/
* Yarn # https://classic.yarnpkg.com/en/docs/install

Clone project
```sh
git clone git@github.com:renanvy/color-converter.git
```
Install dependencies
```ssh
yarn install
```

Run server
```ssh
npm app/server.js
```

Run tests
```ssh
yarn test
```

Available endpoints
```ssh
http://localhost:3000/hexToRgb?hex=ffffff
```

```ssh
http://localhost:3000/rgbToHex?red=255&green=255&blue255
```
