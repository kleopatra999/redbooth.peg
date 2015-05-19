# Redbooth.peg

```
 ██▀███ ▓█████▓█████▄ ▄▄▄▄   ▒█████  ▒█████ ▄▄▄█████▓██░ ██       ██▓███ ▓█████  ▄████ 
▓██ ▒ ██▓█   ▀▒██▀ ██▓█████▄▒██▒  ██▒██▒  ██▓  ██▒ ▓▓██░ ██▒     ▓██░  ██▓█   ▀ ██▒ ▀█▒
▓██ ░▄█ ▒███  ░██   █▒██▒ ▄█▒██░  ██▒██░  ██▒ ▓██░ ▒▒██▀▀██░     ▓██░ ██▓▒███  ▒██░▄▄▄░
▒██▀▀█▄ ▒▓█  ▄░▓█▄   ▒██░█▀ ▒██   ██▒██   ██░ ▓██▓ ░░▓█ ░██      ▒██▄█▓▒ ▒▓█  ▄░▓█  ██▓
░██▓ ▒██░▒████░▒████▓░▓█  ▀█░ ████▓▒░ ████▓▒░ ▒██▒ ░░▓█▒░██▓ ██▓ ▒██▒ ░  ░▒████░▒▓███▀▒
░ ▒▓ ░▒▓░░ ▒░ ░▒▒▓  ▒░▒▓███▀░ ▒░▒░▒░░ ▒░▒░▒░  ▒ ░░   ▒ ░░▒░▒ ▒▓▒ ▒▓▒░ ░  ░░ ▒░ ░░▒   ▒ 
  ░▒ ░ ▒░░ ░  ░░ ▒  ▒▒░▒   ░  ░ ▒ ▒░  ░ ▒ ▒░    ░    ▒ ░▒░ ░ ░▒  ░▒ ░     ░ ░  ░ ░   ░ 
  ░░   ░   ░   ░ ░  ░ ░    ░░ ░ ░ ▒ ░ ░ ░ ▒   ░      ░  ░░ ░ ░   ░░         ░  ░ ░   ░ 
   ░       ░  ░  ░    ░         ░ ░     ░ ░          ░  ░  ░  ░             ░  ░     ░ 
               ░           ░                                  ░                        
```

This is an initial proof of concept to build a PEG parser for Redbooth content.
The idea is to keep adding more grammar so we can easily build a lightweight Markdown parser
that combines properly with emojis, links and other Redbooth artifacts.

## Usage

Install `pegjs`:

```
npm install -g pegjs
```

Then generate the parser from the `.peg` file:

```
pegjs redbooth.peg
```

Require the parser in your program and enjoy!

```
var redbooth = require('./redbooth.js');

assert(redbooth.parse(':trollface:').length === 1);
assert(redbooth.parse('*hello* there').length === 3);
```

## Scope

The scope of the project is to support:

  - Markdown bold
  - Markdown italics
  - Markdown pre
  - Markdown links
  - Markdown images
  - Markdown strike
  - Named emojis
  - Native emojis
  - Redbooth urls
  - Redbooth mentions
  - oEmbed urls

Stretch goals:

  - Markdown code blocks
  - Markdown lists (simple)
  - Markdown headers

This have to be achieved on the frontend and without being vulnerable to XSS.

## Inspiration

There are really few PEG.js implementations of Markdown but this is one of the best:

https://github.com/shamansir/mdown-parse-pegjs
