import { Server } from "http";
import app from "./app";
import config from "./app/config";

let server:Server;
export function main() {
    try {
        console.log(config.port);
    server=app.listen(config.port, () => {
        console.log(`Server running on port ${config.port}`);
    })
    } catch (error) {
        console.log(error);
    }  
}
main()