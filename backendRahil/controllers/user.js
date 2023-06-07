// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
import user from "../models/user.js";

export const signup = async (req, res) => {
  const {
    UniversityName,
    UniversityEmail,
    UniversityPassword,
    UniversityConfirmPassword,
    Branch,
    UniversityPublicKey,
    BranchPublicKey,
  } = req.body;
  // console.log(req.body);

  try {
    const existingUser = await user.findOne({ UniversityEmail });
    if (existingUser) return res.status(201).json({ message: "User already exists" });
    // if(UniversityPassword)

    console.log("before result");
    const result = await user.create({
      isApproved: false,
      UniversityName,
      UniversityEmail,
      UniversityPassword,
      Branch,
      UniversityPublicKey,
      BranchPublicKey,
    });

    // const token = jwt.sign({ email: result.email, id: result._id }, "test", {
    //   expiresIn: "1h",
    // });

    // res.status(200).json({ result, token });
    // console.log(result);
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};

export const signin = async (req, res) => {
  const {
    UniversityEmail,
    UniversityPassword
  } = req.body;
  try {
    console.log(UniversityEmail);
    const existingUser = await user.findOne({ UniversityEmail });
    if (!existingUser) return res.status(201).json({ message: "User Doesn't exists" });
    
    if(UniversityPassword != existingUser.UniversityPassword) return res.status(201).json({ message: "Password Doesnt match" });



    res.status(200).json({ result : existingUser });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }

}