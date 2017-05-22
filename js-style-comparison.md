# JavaScript Style Comparisons

JavaScript code style is typically a point of heated contention among the JavaScript community. This is a space with an enormous room for opinion as well as ego. When settling on code style conventions, it's important to find one ruleset and stick to it as much as possible. Arguments about styling only serve as noise that reduces productivity and increases frustration.

## Airbnb's JavaScript Style Guide

Airbnb maintains an open source JS style guide and an `eslint` preset that enforces its ruleset. They also maintain a similar style guide and preset for React/JSX code. By using `eslint`, developers gain the flexibility of forking and modifying the ruleset to suit their needs. This flexibility can be beneficial to teams that want to enforce their own styling rules.

https://github.com/airbnb/javascript

https://github.com/airbnb/javascript/tree/master/react

## JavaScript Standard Style / Standard JS

Standard is more of a "full package" than something like Airbnb's style guide in that it provides linting, automatic code fixing, and abstracts its own configuration away. Developers give up the luxury of configuring the ruleset for themselves in exchange for subscribing to the conventions put forth by Standard. This eliminates all bikeshedding and debate altogether, and Standard's goal is to provide a complete style package that allows developers to "just pick something". It's worth noting that Standard disallows the use of semicolons globally except in edge cases.

https://standardjs.com

https://github.com/feross/standard



