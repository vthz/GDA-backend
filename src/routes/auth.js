import {
    fetchUser, loginCustomer, loginDeliveryPartner, refreshToken
} from "../controllers/auth/auth.js";
import {updateUser} from "../controllers/tracking/user.js";
import {verifyToken} from "../middleware/auth.js";
import fastify from "fastify";

export const authRoutes = async (fastify, options) => {
    fastify.post("/customer/login", loginCustomer);
    fastify.post("/delivery/login", loginDeliveryPartner);
    fastify.post("/refresh-token", refreshToken);
    fastify.get("/user", {preHandler: [verifyToken]}, fetchUser); // prehandler - verify token first then do other work
    fastify.patch("/user", {preHandler: [verifyToken]}, updateUser);
};