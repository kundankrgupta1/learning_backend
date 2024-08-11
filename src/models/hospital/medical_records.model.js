import mongoose from "mongoose";

const medicalRecordsSchema = new mongoose.Schema({
	patient: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Patient",
		required: true
	},
	diagnosedWith: {
		type: String,
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
		required: true
	},
	address: {
		type: String,
		required: true
	},
	hospital: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Hospital",
		required: true
	},
	prescription: {
		type: String,
		required: true
	},
	medicines: {
		type: [String],
		required: true
	},
	notes: {
		type: String,
		required: true
	},
	status: {
		type: String,
		required: true
	},

}, { timestamps: true }, { versionKey: false });

const MedicalRecords = mongoose.model("MedicalRecords", medicalRecordsSchema);

export default MedicalRecords;
