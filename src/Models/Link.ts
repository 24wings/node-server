import mongoose = require('mongoose');


var linkSchema = new mongoose.Schema({
    url: { type: String, required: true },
    header: { type: String },
    html: { type: String },
    status: { type: Number },
    ext: { type: String },
    gziped: { type: Boolean, default: false },
    createDt: { type: Date },
    watsed: { type: Boolean },
    downloaded: { type: Boolean }
})

interface Link extends mongoose.Document {
    url: string,
    status: string,
    header: string,
    html: string,
    ext: string,
    downloaded: boolean,
    gziped: boolean,
    watsed: boolean,
    createdDt: Date
}

export var linkModel = mongoose.model<Link>('Link', linkSchema);