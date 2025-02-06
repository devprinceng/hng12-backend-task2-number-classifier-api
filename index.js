const http = require("http");
const app = require("./app");
const { PORT } = process.env;

//create server
const server = http.createServer(app);

//listen server
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
