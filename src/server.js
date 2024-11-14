const Hapi = require('@hapi/hapi');
const routes = require('./routes');
async function run(){
    const server = Hapi.server({
        host:'localhost',
        port: 9000,
    });

    server.route(routes);     


    await server.start();
    console.log('Server running on %s', server.info.uri);
}

run();
