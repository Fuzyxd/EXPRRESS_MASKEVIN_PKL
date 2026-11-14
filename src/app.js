import express from "express";
import routes from "./routes.js";
import apiCache from "apicache";
import errorHandler from "./middleware/global_error_middleware.js";

class OurFirstClass {
    app;
    port;

    constructor(port) {
        this.port = port;
        this.app = express();
        this.app.use(express.json());

        this.configureAssets();
        this.setupLibrary();
        this .setupRoutes();
            this.app.use(errorHandler);
            express.json();
            express.urlencoded();
            apiCache.middleware("5 minutes");
    }

    setupRoutes() {
        this.app.use("/api/", routes);
        // this.app.get("/*", (req, res) => {
        //     res.status(404).json({ message: "Route not found" });
        // });
    }


    configureAssets() {

    }

    setupLibrary() {
        
    }

    start() {
        this.app.listen(this.port, () => {
            console.info(`Server is running on port ${this.port}`);
        });
    }

}

export default OurFirstClass;
