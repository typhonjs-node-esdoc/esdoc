[![Build Status](https://travis-ci.org/typhonjs-node-esdoc/esdoc.svg?branch=master)](https://travis-ci.org/typhonjs-node-esdoc/esdoc)
[![Coverage](https://img.shields.io/codecov/c/github/typhonjs-node-esdoc/esdoc.svg)](https://codecov.io/github/typhonjs-node-esdoc/esdoc)
[![Documentation](http://docs.typhonjs.io/typhonjs-node-esdoc/esdoc/badge.svg)](http://docs.typhonjs.io/typhonjs-node-esdoc/esdoc/)
[![Dependency Status](https://www.versioneye.com/user/projects/5750850d91bfda00363192af/badge.svg?style=flat)](https://www.versioneye.com/user/projects/5750850d91bfda00363192af)
[![Gitter](https://img.shields.io/gitter/room/typhonjs/TyphonJS.svg)](https://gitter.im/typhonjs/TyphonJS)

This has been a [proof of concept fork](https://github.com/esdoc/esdoc/issues/292) of ESDoc. At the time, June 2016, ESDoc was stagnating (and will likely do so again!). ESDoc is the sole effort of one developer / maintainer who is not exactly interested in collaborating with others though this is mainly due to his lack of being able to communicate in English (he's from Japan). I made this fork to prove how little time it would take to upgrade ESDoc. The maintainer the next day opened a [progress thread](https://github.com/esdoc/esdoc/issues/293) duplicating the major features in this proof of concept. It took him ~6 months to complete the work. 

Recently, discussion has revealed that a [permanent fork of ESDoc](https://github.com/esdoc/esdoc/issues/345) is pertinent. I will be starting with the latest official ESDoc version 0.5.x shortly and will replace this repo with the updated permanent fork Q1 2017. There will be several major differences from technical underpinnings completed before this occurs such as splitting up ESDoc into multiple repos and other structural changes to improve the architecture in addition to rolling previous TyphonJS ESDoc plugins to the core where applicable including proof of concept work which has been completed in the branches of this current repo. 

A major distinction of the upcoming fork is that there will be an open governance model applied such that collaborators will be invited to participate directly once significant PRs are submitted demonstrating an understanding of the architecture. All applicable issues and improvements will also be handled in an expedient manner. 

Please stay tuned as the future is bright. I wish the maintainer of ESDoc well and hope he continues to work on his version of the project. The new permanent fork will just move faster and further in addition to accepting best of breed efforts from the original ESDoc. 

--------

Major differences of this proof of concept fork include:
- Babylon w/ all plugins is the parser (supports all edge / ES7 code)

To include in your project add to `package.json` in devDependencies: `"esdoc": "git+https://git@github.com/typhonjs-node-esdoc/esdoc.git"`. Please note that this directly links to Github. If you want to pull in the latest version on Github just delete your `./node_modules/esdoc` directory and run `npm install` again. 

Fork maintainer: [Mike Leahy](https://github.com/typhonrt)

It should be noted that for development that Node 5+ is required to take advantage of flat packages.

# ESDoc

ESDoc is a documentation generator for JavaScript(ES6).

<img class="screen-shot" src="https://esdoc.org/image/top.png" width="500px" style="max-width: 500px; border: 1px solid rgba(0,0,0,0.1); box-shadow: 1px 1px 1px rgba(0,0,0,0.5);">

# Features
- Generates detailed documentation.
- Measures documentation coverage.
- Integrate test codes into documentation.
- Integrate manual into documentation.
- [ESDoc Hosting Service](https://doc.esdoc.org)

# Demo
- [ESDoc](https://esdoc.org/esdoc) is self-hosting &#x1F604;

# Install

```
npm install -g esdoc
esdoc -h
```

# Usage

```
esdoc -c esdoc.json
```

# Example
```
├── esdoc.json
└── src/MyClass.js
```

``src/MyClass.js``

```javascript
/**
 * this is MyClass.
 */
export default class MyClass {
  /**
   * @param {number} param this is param.
   * @return {number} this is return.
   */
  method(param){}
}
```

``esdoc.json``

```json
{
  "source": "./src",
  "destination": "./esdoc"
}
```

exec esdoc

```
esdoc -c esdoc.json
open ./esdoc/index.html
```

# Documentation
please visit [esdoc.org](https://esdoc.org) to see more documentation.

# License
MPLv2

# Original Author
[Ryo Maruyama@h13i32maru](https://twitter.com/h13i32maru)
