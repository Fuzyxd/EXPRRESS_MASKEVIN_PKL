import OurFirstClass from "./app.js";
import logger from "./utils/logger.js";
import "dotenv/config";

const port = process.env.PORT;

const OurFirstClassInstance = new OurFirstClass(port);
const server = OurFirstClassInstance.start();



process.on("SIGTERM", () => {
    logger.info("SIGTERM signal received: closing HTTP server");
    server.close(() => {
        logger.info("HTTP server closed");
    });
});
