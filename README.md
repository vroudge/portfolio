# Portfolio Redux App

## Development Installation

In the project's directory, run the following commands:

```
$ make install
$ make start
```

Then Visit

```
http://localhost:8081
```

## Releasing to Production

You must have a `.elasticbeanstalk` directory in the project directory containing the `config.yml` for AWS.

```
$ make build
$ make deploy
```

Then Visit wherever you've deployed!

## Credit

App template was based on [Lanyon Theme](https://github.com/poole/lanyon) by [mdo](https://github.com/mdo)
