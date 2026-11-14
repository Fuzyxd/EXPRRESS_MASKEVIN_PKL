import BaseRoutes from "../../base_classes/base_routes.js";
import validateCredentials from "../../middleware/validate_credential_middleware.js";
import { registerSchema } from "./auth-schema.js";
import AuthController from "./auth_controller.js";
import tryCatch from "../../middleware/tryCatcher.js";

class AuthRoutes extends BaseRoutes {
    routes() {
        
        this.router.post("/register", [
            validateCredentials(registerSchema),
            tryCatch(AuthController.register),
        ]);
    }
}

export default new AuthRoutes().router;

