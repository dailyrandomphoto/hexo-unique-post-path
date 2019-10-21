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

You can define the default value of `title` via `unique_post_path` options in the `_config.yml` file.

```
#_cofig.yml

unique_post_path:
  title_default: "new post"
```

### 2. Use `hexo new` command with `unique_post_path` configuration

Add `unique_post_path` options to the `_config.yml` file.
```
#_cofig.yml

unique_post_path:
  auto: true
```

Then use `new` command as before.
```
$ hexo new "My New Post"

INFO  Created: ./source/_posts/ck20kqmij0001ieyn4es62xh7.md
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
