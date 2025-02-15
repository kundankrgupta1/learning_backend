import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	categoryImage: {
		type: String,
		required: true
	},

}, { timestamps: true }, { versionKey: false });

const Category = mongoose.model("Category", categorySchema);

export default Category;
