import AuthService from "./auth_service.js";

class AuthController {
    async register(req, res) {
        let data = req.body;

        const massage = await AuthService.register(data);

        return res.status(201).json({
            code: 201,
            status: "success",
            message: "User registered successfully",
            data: massage,
            error: null,
        });
    }
} 

export default new AuthController();