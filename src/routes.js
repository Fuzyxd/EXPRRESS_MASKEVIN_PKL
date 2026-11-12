import AuthRoutes from "./domains/auth/auth-routes.js";
import express from "express";

const router = express.Router();

const appRoutes = [
    { path: "/auth",
      route:AuthRoutes
    },
];

appRoutes.forEach(({ path, route }) => {
    router.use(`/v1${path}`, route);
});

export default router;
