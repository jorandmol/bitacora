const { Schema, default: mongoose } = require('mongoose');

const projectSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    stack: [{ name: String }],
    comments: [{
        body: String,
        date: { type: Date, default: Date.now }
    }],
    completed: { type: Boolean, default: false },
    postponed: { type: Boolean, default: false },
});

// define static functions
projectSchema.statics.getAll = function (page = 1, limit = null) {
    return mongoose.model('Project').find({ limit: limit, page: page});
};

projectSchema.statics.getById = function (id) {
    return mongoose.model('Project').findById(id);
};

projectSchema.statics.insert = function (title, description, stack) {
    return mongoose.model('Project').create({
        title: title,
        description: description,
        stack: stack
    });
};

// TODO: complete the rest of the CRUD methods and implement one for add comments

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;