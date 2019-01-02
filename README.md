# Catberry Example Project

![Catberry](https://raw.githubusercontent.com/catberry/catberry/master/docs/images/logo.png)

## How to use
This is a simple web-application that works with [GitHub API](http://developer.github.com/)
and demonstrates how to build isomorphic web-application using
[Catberry Framework](https://github.com/catberry/catberry).

First of all, it is needed to install dependencies:

```
npm install -- production
```

Then to start in `debug` mode without script minification and with watching for changes:

```
npm run debug
```

To start in `release` mode:

```
npm start
```

Also, you can build a Docker image:

```bash
docker build -t catberry/catberry-example .
```

And run it as a container:

```bash
docker run -it -p 3000:3000 -e CAT_PORT='3000' catberry/catberry-example
```

## Contributing

There are a lot of ways to contribute into Catberry:

* Give it a star
* Join the [Gitter](https://gitter.im/catberry/main) room and leave a feedback or help with answering users' questions
* [Submit a bug or a feature request](https://github.com/catberry/catberry/issues)
* [Submit a PR](https://github.com/catberry/catberry/blob/8.0.0-dev/CONTRIBUTING.md)
* If you like the logo, you might want to buy a Catberry [T-Shirt](http://www.redbubble.com/people/catberryjs/works/14439373-catberry-js-framework-logo?p=t-shirt) or a [sticker](http://www.redbubble.com/people/catberryjs/works/14439373-catberry-js-framework-logo?p=sticker)

Denis Rechkunov <denis.rechkunov@gmail.com>

