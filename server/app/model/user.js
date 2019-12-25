module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
  __v: { type: Number, select: false },

    name: { type: String , required:true  },
  },{ timestamps: true });
  return mongoose.model('User', UserSchema);
}