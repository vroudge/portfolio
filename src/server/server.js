import express from 'express';

import webpack from 'webpack';
import webpackConfig from '../../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';


import React from 'react';
import { RoutingContext, match } from 'react-router';
import { Provider } from 'react-redux';
import createLocation from 'history/lib/createLocation';
import { fetchComponentDataBeforeRender } from '../common/api/fetchComponentDataBeforeRender';

import configureStore from '../common/store/configureStore';
import routes from '../common/routes';
import packagejson from '../../package.json';

const app = express();

const renderFullPage = (html, initialState) => {
    return `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Full Stack Web Developer based in Tel-Aviv</title>
        <link rel="SHORTCUT ICON" href="/static/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/static/app.css">
        <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/static/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/static/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/static/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/static/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/static/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/static/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/static/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/static/apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" href="/static/favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="/static/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/static/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/static/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/static/favicon-128.png" sizes="128x128" />
        <meta name="application-name" content="js.ninja"/>
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/static/mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="/static/mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="/static/mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="/static/mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="/static/mstile-310x310.png" />
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}; 
        </script>
        <script src="/static/bundle.js"></script>
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        
          ga('create', 'UA-50717374-1', 'auto');
          ga('send', 'pageview');
        
        </script>
      </body>
    </html>
  `;
};

app.use('/static', express.static(__dirname + '/../../dist'));

app.get('/*', function (req, res) {

    const location = createLocation(req.url);

    match({ routes, location }, (err, redirectLocation, renderProps) => {

        if (err) {
            console.error(err);
            return res.status(500).end('Internal server error');
        }

        if (!renderProps)
            return res.status(404).end('Not found');

        const store = configureStore();

        const InitialView = (
            <Provider store={store}>
                {() =>
                    <RoutingContext {...renderProps} />
                }
            </Provider>
        );

        //This method waits for all render component promises to resolve before returning to browser
        fetchComponentDataBeforeRender(store.dispatch, renderProps.components, renderProps.params)
            .then(html => {
                const componentHTML = React.renderToString(InitialView);
                const initialState = store.getState();
                res.status(200).end(renderFullPage(componentHTML, initialState))
            })
            .catch(err => {
                console.log(err)
                res.end(renderFullPage("", {}))
            });

    });

});

const server = app.listen(process.env.PORT || 8081, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
