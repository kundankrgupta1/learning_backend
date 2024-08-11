import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	department: {
		type: String,
		required: true
	},
	specialization: {
		type: String,
		required: true
	},
	doctorImage: {
		type: String,
		required: true
	},
	hospital: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Hospital",
		required: true
	},
	salary: {
		type: Number,
		required: true
	},
	qualification: {
		type: String,
		required: true
	},
	experience: {
		type: Number,
		required: true
	}
}, { timestamps: true }, { versionKey: false });
const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor