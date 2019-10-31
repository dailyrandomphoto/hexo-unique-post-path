# hexo-unique-post-path

[![NPM Version][npm-version-image]][npm-url]
[![LICENSE][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![dependencies Status][dependencies-image]][dependencies-url]
[![devDependencies Status][devDependencies-image]][devDependencies-url]

This plug-in helps Hexo create new posts with unique auto-generated paths.

Just like this.
```sh
$ hexo new2

INFO  Created: ./source/_posts/ck20kqmij0001ieyn4es62xh7.md
```


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
$ hexo new2 "Hello World!"

INFO  Created: ./source/_posts/ck2c0zo1y0001gyyn5c2ma96m.md

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
or
```diff
#_cofig.yml

+ unique_post_path:
+   path_type: date-seq
+   size: 2
+   prefix: YYYYMMDD
```

Available `path_type`:

path_type | length | character set |options | default | description
--- | --- | --- | --- | --- | ---
cuid (default) | 25 | `a-z0-9`, start with `c` |  |  | use [cuid()](https://github.com/ericelliott/cuid) generated string. <br>e.g. `ck2bi7fxf00013ryng5jr1rer`
cuid-slug | 7-10 | `a-z0-9` |  |  | use [cuid.slug()](https://github.com/ericelliott/cuid) generated string. <br>e.g. `xh23npi`
nanoid | 21 | `A-Za-z0-9_-` | size | 21 | use [nanoid()](https://github.com/ai/nanoid) generated string. <br>e.g. `EwUTt2eoka-oEV5kf-o0O`
nanoid-simple | 24 | `a-z0-9` | size | 24 | use [nanoid/generate](https://github.com/ai/nanoid) generated string. <br>e.g. `pfldm3gg8h9psydphotqe71d`
nanoid-lowercase | 26 | `a-z` | size | 26 | use [nanoid/generate](https://github.com/ai/nanoid) generated string. <br>e.g. `jsjxoibprplrdoitjmppotjrnm`
seq | 1~ | `0-9` | size<br>start | 1<br>1 | 1, 2, 3,...<br>001, 002, 003,...
prefix-seq | 1~ | `A-Za-z0-9_-` | size<br>start<br>prefix | 1<br>1<br>`<none>` | items-1, items-2, items-3,...<br>items-001, items-002, items-003,...
date-seq | 1~ | `A-Za-z0-9_-` | size<br>start<br>prefix | 2<br>1<br>YYYYMMDD | 2019102901, 2019102902, 2019103001, ...<br>2019-10-29-001, 2019-10-29-002, 2019-10-30-001,...

Sample of valid `prefix` option for `date-seq`:
```
YYYYMMDD (default)
YYYY-MM-DD-
YYMMDD-
YYYYMM
YYYY
```


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
const { register } = require('hexo-unique-post-path');

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

## Related
- [id-generators](https://github.com/dailyrandomphoto/id-generators) - API for this module.
- [Awesome Unique ID](https://github.com/grantcarthew/awesome-unique-id) - A curated list of awesome Unique ID libraries and resources.


## License
Copyright (c) 2019 dailyrandomphoto. Licensed under the [MIT license][license-url].

[npm-url]: https://www.npmjs.com/package/hexo-unique-post-path
[travis-url]: https://travis-ci.org/dailyrandomphoto/hexo-unique-post-path
[coveralls-url]: https://coveralls.io/github/dailyrandomphoto/hexo-unique-post-path?branch=master
[license-url]: LICENSE
[dependencies-url]: https://david-dm.org/dailyrandomphoto/hexo-unique-post-path
[devDependencies-url]: https://david-dm.org/dailyrandomphoto/hexo-unique-post-path?type=dev

[npm-downloads-image]: https://img.shields.io/npm/dm/hexo-unique-post-path
[npm-version-image]: https://img.shields.io/npm/v/hexo-unique-post-path
[license-image]: https://img.shields.io/npm/l/hexo-unique-post-path
[travis-image]: https://img.shields.io/travis/dailyrandomphoto/hexo-unique-post-path
[coveralls-image]: https://img.shields.io/coveralls/github/dailyrandomphoto/hexo-unique-post-path
[dependencies-image]: https://img.shields.io/david/dailyrandomphoto/hexo-unique-post-path
[devDependencies-image]: https://img.shields.io/david/dev/dailyrandomphoto/hexo-unique-post-path
