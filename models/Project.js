const { Schema, default: mongoose } = require('mongoose');

const projectSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    stack: [{ name: String }],
    comments: [{
        body: { type: String, required: true},
        date: { type: Date, default: Date.now }
    }],
    completed: { type: Boolean, default: false },
    postponed: { type: Boolean, default: false },
});

// define static functions
projectSchema.statics.getAll = function (page = 1, limit = null) {
    return mongoose.model('Project').find({ limit: limit, page: page});
}

projectSchema.statics.getById = function (id) {
    return mongoose.model('Project').findById(id);
}

projectSchema.statics.insert = function (title, description, stack) {
    return mongoose.model('Project').create({
        title: title,
        description: description,
        stack: stack
    });
}

projectSchema.statics.edit = function (id, title, description, stack) {
    return mongoose.model('Project').findByIdAndUpdate(id, {
        title: title,
        description: description,
        stack: stack
    }, { returnDocument: 'after'});
}

projectSchema.statics.delete = function(id) {
    return mongoose.model('Project').findByIdAndDelete(id);
}

// define instance methods
// check if this function can be called succesfully in the controller method
projectSchema.methods.addComment = function(body) {
    this.comments = [...this.comments, { body: body }];
    return this.save();
}

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;