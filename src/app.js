const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Conexion exitosa.')
    res.end()
});

server.listen(3000, () => {
    console.log('Servidor a la espera de conexiones...');
})