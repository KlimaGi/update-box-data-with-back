const keygen = require("keygenerator");
const bcrypt = require('bcrypt');
const userSchema = require('../schemas/userSchema');
const resSend = require('../modules/universalRes');

const boxes = [
  null, null, null, "number", null, null
];

module.exports = {

  register: async (req, res) => {
    const { password } = req.body;

    const hash = await bcrypt.hash(password, 15);

    const secret = keygen._();
    const newUser = new userSchema({ ...req.body, password: hash, secret });
    console.log('newUser', newUser);

    await newUser.save();

    return resSend(res, false, 'all good', null);
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const userExists = await userSchema.findOne({ email });

    if (userExists) {
      const compare = await bcrypt.compare(password, userExists.password);

      if (compare) return resSend(res, false, 'all good', { secret: userExists.secret });
    }

    return resSend(res, true, "bad credentials", null);
  },
  getData: async (req, res) => {
    return resSend(res, false, "data", boxes);
  },
  updateBox: async (req, res) => {
    const { index, user } = req.body;
    console.log('user-from-update', user);
    boxes[index] = user.email;

    return resSend(res, false, 'data', boxes);
  }

}