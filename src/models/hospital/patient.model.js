import mongoose from "mongoose";

const patientRecordsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	diagnosedWith: {
		tyep: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	weight: {
		type: Number,
		required: true
	},
	height: {
		type: Number,
		required: true
	},
	patientImage: {
		type: String,
		required: true
	},
	bloodGroup: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true,
		enum: ["male", "female", "other"]
	},
	address: {
		type: String,
		required: true
	},
	hosipital: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Hospital",
		required: true
	}
}, { timestamps: true }, { versionKey: false });

const Patient = mongoose.model("Patient", patientRecordsSchema);

export default Patient;
