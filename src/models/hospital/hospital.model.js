import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	location: {
		type: String,
		required: true
	},
	contact: {
		type: Number,
		required: true
	},
	hospitalImage: {
		type: String,
		required: true
	},
	speciality: [
		{
			type: String,
			required: true
		}
	]
}, { timestamps: true }, { versionKey: false });

const Hospital = mongoose.model("Hospital", hospitalSchema);

export default Hospital;
