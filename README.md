<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# noneByAsync

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether all elements in a collection fail a test implemented by a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import noneByAsync from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-none-by@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/utils-async-none-by/tags). For example,

```javascript
import noneByAsync from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-none-by@v0.2.1-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-none-by@esm/index.mjs';
```

#### noneByAsync( collection, \[options,] predicate, done )

Tests whether all elements in a `collection` fail a test implemented by a `predicate` function.

```javascript
function predicate( value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        /* =>
            1000
            2500
            3000
        */

        next( null, false );
    }
}

function done( error, bool ) {
    if ( error ) {
        throw error;
    }
    console.log( bool );
    // => true
}

var arr = [ 3000, 2500, 1000 ];

noneByAsync( arr, predicate, done );
```

If a `predicate` function calls the `next` callback with a truthy test argument, the function stops processing any additional `collection` elements and returns `false` for the test result.

```javascript
function predicate( value, index, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        if ( index === 1 ) {
            return next( null, true );
        }
        next( null, false );
    }
}

function done( error, bool ) {
    if ( error ) {
        throw error;
    }
    console.log( bool );
    // => false
}

var arr = [ 3000, 2500, 1000 ];

noneByAsync( arr, predicate, done );
```

The function accepts the following `options`:

-   `limit`: the maximum number of pending invocations at any one time. Default: `infinity`.
-   `series`: `boolean` indicating whether to sequentially invoke the `predicate` function for each `collection` element. If `true`, the function sets `options.limit=1`. Default: `false`.
-   `thisArg`: the execution context for `predicate`.

By default, all elements are processed concurrently, which means that the function does **not** guarantee completion order. To process each `collection` element sequentially, set the `series` option to `true`.

```javascript
function predicate( value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        /* =>
            3000
            2500
            1000
        */

        next( null, false );
    }
}

function done( error, bool ) {
    if ( error ) {
        throw error;
    }
    console.log( bool );
    // => true
}

var arr = [ 3000, 2500, 1000 ];

var opts = {
    'series': true
};

noneByAsync( arr, opts, predicate, done );
```

To limit the maximum number of pending function invocations, set the `limit` option.

```javascript
function predicate( value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        /* =>
            2500
            3000
            1000
        */

        next( null, false );
    }
}

function done( error, bool ) {
    if ( error ) {
        throw error;
    }
    console.log( bool );
    // => true
}

var arr = [ 3000, 2500, 1000 ];

var opts = {
    'limit': 2
};

noneByAsync( arr, opts, predicate, done );
```

To set the execution context of the `predicate` function, set the `thisArg` option.

```javascript
function predicate( value, next ) {
    this.count += 1;
    setTimeout( onTimeout, value );
    function onTimeout() {
        next( null, false );
    }
}

var arr = [ 3000, 2500, 1000 ];

var context = {
    'count': 0
};

var opts = {
    'thisArg': context
};

noneByAsync( arr, opts, predicate, done );

function done( error, bool ) {
    if ( error ) {
        throw error;
    }
    console.log( bool );
    // => true

    console.log( context.count );
    // => 3
}
```

When invoked, the `predicate` function is provided a maximum of four arguments:

-   `value`: collection value.
-   `index`: collection index.
-   `collection`: the input `collection`.
-   `next`: a callback which should be called once the `predicate` function has finished processing a collection `value`.

The actual number of provided arguments depends on function `length`. If the `predicate` function accepts two arguments, the `predicate` function is provided `value` and `next`. If the `predicate` function accepts three arguments, the `predicate` function is provided `value`, `index`, and `next`. For every other `predicate` function signature, the `predicate` function is provided all four arguments.

```javascript
function predicate( value, i, collection, next ) {
    console.log( 'collection: %s. %d: %d', collection.join( ',' ), i, value );
    /* =>
        collection: 3000,2500,1000. 0: 3000
        collection: 3000,2500,1000. 1: 2500
        collection: 3000,2500,1000. 2: 1000
    */

    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        /* =>
            1000
            2500
            3000
        */

        next( null, false );
    }
}

function done( error, bool ) {
    if ( error ) {
        throw error;
    }
    console.log( bool );
    // => true
}

var arr = [ 3000, 2500, 1000 ];

noneByAsync( arr, predicate, done );
```

#### noneByAsync.factory( \[options,] predicate )

Returns a `function` which invokes a `predicate` function once for each element in a `collection`.

```javascript
function predicate( value, next ) {
    setTimeout( onTimeout, value );
    function onTimeout() {
        console.log( value );
        next( null, false );
    }
}

function done( error, bool ) {
    if ( error ) {
        throw error;
    }
    console.log( bool );
}

var f = noneByAsync.factory( predicate );

var arr1 = [ 3000, 2500, 1000 ];

f( arr1, done );
/* e.g., =>
    1000
    2500
    3000
    true
*/

var arr2 = [ 300, 250, 100 ];

f( arr2, done );
/* e.g., =>
    100
    250
    300
    true
*/
```

The function accepts the same `options` as `noneByAsync()`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).
-   If a provided function calls the `next` callback with a truthy `error` argument, the function suspends execution and immediately calls the `done` callback for subsequent `error` handling.
-   The function does **not** support dynamic `collection` resizing.
-   The function does **not** skip `undefined` elements.
-   If provided an empty `collection`, the function calls the `done` callback with `true` as the test result.
-   **Neither** `noneByAsync` nor the function returned by the `factory` method **guarantee** asynchronous execution. To guarantee asynchrony, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

var resolve = require( 'path' ).resolve;
import readFile from 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-file@esm/index.mjs';
import noneByAsync from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-none-by@esm/index.mjs';

var files = [
    resolve( __dirname, 'package.json' ),
    resolve( __dirname, 'README.md' )
];

function done( error, bool ) {
    if ( error ) {
        throw error;
    }
    if ( bool ) {
        console.log( 'Was unable to read all files.' );
    } else {
        console.log( 'Was able to read at least one file.' );
    }
}

function predicate( file, next ) {
    var opts = {
        'encoding': 'utf8'
    };
    readFile( file, opts, onFile );

    function onFile( error ) {
        if ( error ) {
            return next( null, false );
        }
        next( null, true );
    }
}

noneByAsync( files, predicate, done );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-async/any-by`][@stdlib/utils/async/any-by]</span><span class="delimiter">: </span><span class="description">test whether at least one element in a collection passes a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils-async/every-by`][@stdlib/utils/async/every-by]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection pass a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils-async/for-each`][@stdlib/utils/async/for-each]</span><span class="delimiter">: </span><span class="description">invoke a function once for each element in a collection.</span>
-   <span class="package-name">[`@stdlib/utils-none-by`][@stdlib/utils/none-by]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection fail a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils-async/none-by-right`][@stdlib/utils/async/none-by-right]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection fail a test implemented by a predicate function, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/utils-async/some-by`][@stdlib/utils/async/some-by]</span><span class="delimiter">: </span><span class="description">test whether a collection contains `n` elements which pass a test implemented by a predicate function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-async-none-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-async-none-by

[test-image]: https://github.com/stdlib-js/utils-async-none-by/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/utils-async-none-by/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-async-none-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-async-none-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-async-none-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-async-none-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-async-none-by/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-async-none-by/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-async-none-by/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-async-none-by/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-async-none-by/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-async-none-by/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-async-none-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-async-none-by/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/utils/async/any-by]: https://github.com/stdlib-js/utils-async-any-by/tree/esm

[@stdlib/utils/async/every-by]: https://github.com/stdlib-js/utils-async-every-by/tree/esm

[@stdlib/utils/async/for-each]: https://github.com/stdlib-js/utils-async-for-each/tree/esm

[@stdlib/utils/none-by]: https://github.com/stdlib-js/utils-none-by/tree/esm

[@stdlib/utils/async/none-by-right]: https://github.com/stdlib-js/utils-async-none-by-right/tree/esm

[@stdlib/utils/async/some-by]: https://github.com/stdlib-js/utils-async-some-by/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
