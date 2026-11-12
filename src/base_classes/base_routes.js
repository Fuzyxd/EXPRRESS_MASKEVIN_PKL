import { Router } from "express";  

class BaseRoutes {
    router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        throw new Error("Method 'routes()' must be implemented in the subclass.");
    }

}
export default BaseRoutes;