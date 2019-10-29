# hexo-unique-post-path

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![LICENSE][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![dependencies Status][dependencies-image]][dependencies-url]
[![devDependencies Status][devDependencies-image]][devDependencies-url]

This plug-in helps Hexo create new posts with unique auto-generated paths.


## Installation

```sh
npm install --save hexo-unique-post-path
```

## Usages

There are two ways to use this plug-in to create new posts with unique auto-generated paths.

### 1. Use `hexo new2` command
```sh
hexo new2 [layout] [title]
```

e.g.
```sh
$ hexo new2

INFO  Created: ./source/_posts/ck20kqmij0001ieyn4es62xh7.md
```

The `title` argument can be omitted and its default value is `' '`.

You can define the default value of `title` in the `_config.yml` file.

```diff
#_cofig.yml

+ unique_post_path:
+   title_default: "new post"
```

You can define the path generating algorithm in the `_config.yml` file.
```diff
#_cofig.yml

+ unique_post_path:
+   path_type: nanoid
+   size: 20
```

Available `path_type`:

path_type | length | character set |options | default | description
--- | --- | --- | --- | --- | ---
cuid (default) | 25 | `a-z0-9`, start with `c` |  |  | use [cuid()](https://github.com/ericelliott/cuid) generated string. <br>e.g. `ck2bi7fxf00013ryng5jr1rer`
cuid-slug | 7-10 | `a-z0-9` |  |  | use [cuid.slug()](https://github.com/ericelliott/cuid) generated string. <br>e.g. `xh23npi`
nanoid | 21 | `A-Za-z0-9_-` | size | 21 | use [nanoid()](https://github.com/ai/nanoid) generated string. <br>e.g. `EwUTt2eoka-oEV5kf-o0O`
nanoid-simple | 24 | `a-z0-9` | size | 24 | use [nanoid/generate](https://github.com/ai/nanoid) generated string. <br>e.g. `pfldm3gg8h9psydphotqe71d`
nanoid-lowercase | 26 | `a-z` | size | 26 | use [nanoid/generate](https://github.com/ai/nanoid) generated string. <br>e.g. `jsjxoibprplrdoitjmppotjrnm`

You can add your own path generating algorithm by define [Custom functions](#define-custom-functions).

If the layout is `page`, or if `--path, -p` or `--slug, -s` option is provided, `hexo new2` works same as `hexo new`.

### 2. Use `hexo new` command with `unique_post_path` configuration

Add `unique_post_path` options to the `_config.yml` file.
```diff
#_cofig.yml

+ unique_post_path:
+   auto: true
```

Then use `new` command as before.
```
$ hexo new "My New Post"

INFO  Created: ./source/_posts/ck20kqmij0001ieyn4es62xh7.md
```

## Define Custom Functions
Add a script file into the `scripts` folder of your hexo base directory.
e.g. scripts/my_custom_path.js

Then register a generator function.
The generator function should return a function that returns a string.
e.g.
```js
const register = require('hexo-unique-post-path').register;

register('my_custom_path', function(option) {
  let size = option.size || 8;
  let prefix = option.prefix || 'items-';
  return function(title) {
    return prefix + title.toLowerCase().replace(/[^\w]/g, '').substring(0, size);
  };
});
```

```diff
#_cofig.yml

+ unique_post_path:
+   path_type: my_custom_path
+   prefix: articles-
```
```sh
$ hexo new2 "Hello World!"
=> articles-hellowor.md
```

## License
Copyright (c) 2019 dailyrandomphoto. Licensed under the [MIT license][license-url].

[npm-url]: https://www.npmjs.com/package/hexo-unique-post-path
[travis-url]: https://travis-ci.org/dailyrandomphoto/hexo-unique-post-path
[coveralls-url]: https://coveralls.io/github/dailyrandomphoto/hexo-unique-post-path?branch=master
[license-url]: LICENSE
[dependencies-url]: https://david-dm.org/dailyrandomphoto/hexo-unique-post-path
[devDependencies-url]: https://david-dm.org/dailyrandomphoto/hexo-unique-post-path?type=dev

[npm-downloads-image]: https://img.shields.io/npm/dm/hexo-unique-post-path.svg
[npm-version-image]: https://img.shields.io/npm/v/hexo-unique-post-path.svg
[license-image]: https://img.shields.io/npm/l/hexo-unique-post-path.svg
[travis-image]: https://img.shields.io/travis/dailyrandomphoto/hexo-unique-post-path/master
[coveralls-image]: https://coveralls.io/repos/github/dailyrandomphoto/hexo-unique-post-path/badge.svg?branch=master
[dependencies-image]: https://david-dm.org/dailyrandomphoto/hexo-unique-post-path/status.svg
[devDependencies-image]: https://david-dm.org/dailyrandomphoto/hexo-unique-post-path/dev-status.svg
