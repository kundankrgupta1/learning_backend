import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema({
	productID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Product",
		required: true
	},
	quantity: {
		type: Number,
		required: true
	}
});


const orderSchema = new mongoose.Schema({
	orderPrice: {
		type: Number,
		required: true
	},
	customer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	orderItems: {
		type: [orderItemsSchema],
		required: true
	},
	address: {
		type: String,
		required: true
	},
	status: {
		type: String,
		required: true,
		enum: ["pending", "shipped", "delivered"],
		default: "pending"
	}
}, { timestamps: true }, { versionKey: false });

const Order = mongoose.model("Order", orderSchema);

export default Order;