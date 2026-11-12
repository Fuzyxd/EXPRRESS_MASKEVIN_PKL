import express from "express";
import routes from "./routes.js";

class OurFirstClass {
    app;
    port;

    constructor(port) {
        this.port = port;
        this.app = express();
        this.app.use(express.json());
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
        this.setupRoutes();
        this.app.listen(this.port, () => {
            console.info(`Server is running on port ${this.port}`);
        });
    }

}

const ourFirstClassInstance = new OurFirstClass(3000);

ourFirstClassInstance.start();
