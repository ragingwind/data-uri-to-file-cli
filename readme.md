# data-uri-to-file-cli [![Build Status](https://travis-ci.org/ragingwind/data-uri-to-file-cli.svg?branch=master)](https://travis-ci.org/ragingwind/data-uri-to-file-cli)

> Export data-uri to a file or stdout from data-uri


## Install

```
$ npm install -g data-uri-to-file-cli
```


## Usage

```sh
data-uri-to-file ./input ./output
data-uri-to-file 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvdmc+Cgo=' ./output
data-uri-to-file ./input ./output --no-ext

data-uri-to-file 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvdmc+Cgo='
//=> PD94bWwgdmVyc2lvdmc+Cgo=

data-uri-to-file 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iIAogICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIKICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICA8ZGVzYz5tZW51PC9kZXNjPgogIDxnIGlkPSJtZW51Ij48cGF0aCBkPSJNMywxOGgxOHYtMkgzVjE4eiBNMywxM2gxOHYtMkgzVjEzeiBNMyw2djJoMThWNkgzeiIvPjwvZz4KPC9zdmc+Cgo=' | base64 -D

//=>
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <desc>menu</desc>
  <g id="menu"><path d="M3,18h18v-2H3V18z M3,13h18v-2H3V13z M3,6v2h18V6H3z"/></g>
</svg>

```

### Options

--no-ext: No adding extension by mime type on output file

## License

MIT © [ragingwind](http://ragingwind.me)
