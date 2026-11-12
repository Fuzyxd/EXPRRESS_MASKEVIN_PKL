import BaseRoutes from "../../base_classes/base_routes.js";

class AuthRoutes extends BaseRoutes {
    routes() {
        this.router.post("/register", (req, res) => {
            res.status(201).json({ message: "User registered successfully" });
        });

        
    }
}

export default new AuthRoutes().router;