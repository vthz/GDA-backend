import {getAllCategories} from "../controllers/product/category.js";
import {getProductByCategoryId} from "../controllers/product/product.js";
import fastify from "fastify";

export const categoryRoutes = async (fastify, options) => {
    fastify.get("/categories", getAllCategories);
}

export const productRoutes = async (fastify, options) => {
    fastify.get("/products/:categoryId", getProductByCategoryId);
}