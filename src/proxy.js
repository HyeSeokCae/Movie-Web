import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function(app){
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://ql-movie-api.herokuapp.com/graphql',
            changeOrigin: true,
    )
}