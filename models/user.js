const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    // required: true,
  },
  mobile: {
    type: String,
  },
  city: {
    type: String,
  },
  district: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  qualification: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  admin: {
    type: String,
    default: "null", // null , mandal , city , district , state
  },
  bsm_member: {
    type: Boolean,
    default: false,
  },
  aoi: [String],

  mandals: [{
    mandal_id: mongoose.Schema.Types.ObjectId,
    name: String,
    role : String
  }],


});

UserSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
  next();
});

UserSchema.pre("remove", async function (next) {
  const user = this;
  await Member.deleteMany({ user_id: user._id });
  next();
});

module.exports = mongoose.model("user", UserSchema);
