import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {type: String, requried: true},
    image: {type: String, requried: true},
});

const Category = mongoose.model("Category", categorySchema);
export default Category;