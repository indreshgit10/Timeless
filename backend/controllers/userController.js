// import UserModel from "../models/usermodel.js";
// import bcrypt from "bcryptjs";
// import validator from "validator";

// const createToken = (id) => {
//     return jwt.sign({id}, process.env.JWT_SECRET

//     );
// };

// const loginUser = async (req,res) => {
//     res.send("login user");
// }


// const registerUser = async (req,res) => {
//       try {
//         const {name, email, password} = req.body;
//         const exists= await UserModel.findOne({email});
//         if(exists) {
//             res.status(400).json({message: "user already exists"});
//         }
//         if(!validator.isEmail(email)){
//             res.status(400).json({message: "invalid email"});
//         }
//         if(password.length < 6){
//             res.status(400).json({message: "password must be at least 6 characters"});
//         }
//         const salt = await bycrypt.genSalt(10);
//         const hashedPassword = await bycrypt.hash(password, salt);
        
//         const newUser = new UserModel({
//             name,
//             email,
//             password: hashedPassword
//         });
//         const savedUser = await newUser.save();
//         const token= createToken(savedUser._id);
//         res.status(201).json({message: "user registered successfully"});


//       }
//       catch(error) {
//        console.error(error);
//        res.status(500).json({message: "server error"});
// }
// }

// const adminlogin = async (req,res) => {
//     res.send("admin login");
// }

// export {loginUser, registerUser, adminlogin};
import UserModel from "../models/usermodel.js";
import bcrypt from "bcryptjs";
import validator from "validator";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await UserModel.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = createToken(user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = createToken(user._id);

    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};


const adminlogin = async (req, res) => {
  try{
    const { email, password } = req.body;
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign(email+password, process.env.JWT_SECRET); 
      res.json({ success: true, token });
    }
    else{
      res.status(401).json({ success: false, message: "Invalid admin credentials" });
    }
  }
  catch(error){
       res.status(500).json({ message: "Server error" });
  }
};

export { registerUser, loginUser, adminlogin };


