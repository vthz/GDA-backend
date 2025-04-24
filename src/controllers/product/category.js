import Category from "../../models/category.js";

export const getAllCategories = async (req, reply) => {
    try{
        const categories = await Category.find();
        return reply.send(categories)
    }catch(error){
        console.log(error);
        return reply.status(500).send({message: "Internal Server Error", error});
    }
}