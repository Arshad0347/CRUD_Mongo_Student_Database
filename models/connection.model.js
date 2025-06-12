const {default: mongoose} = require("mongoose");
const Schema = mongoose.Schema;
const studentSchema = new Schema({
fullname:{
    type: String,
},
email:{
    type: String,
},
city:{
    type: String,
},
phone:{
    type: String,
   
}
});
module.exports = mongoose.model('Student', studentSchema);