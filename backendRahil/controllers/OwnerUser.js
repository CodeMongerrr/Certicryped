// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
import Owner from "../models/Owner.js";

export const signup = async (req, res) => {
  const {
    OwnerName,
    OwnerEmail,
    OwnerPassword,
    OwnerConfirmPassword,
    OwnerPublicKey,
  } = req.body;
  // console.log(req.body);
  console.log("inside the backend function")
  try {
    const existingOwner = await Owner.findOne({ OwnerEmail });
    if (existingOwner)
      return res.status(201).json({ message: "Owner already exists" });
    // if(OwnerPassword)

    console.log("before result");
    const result = await Owner.create({
      OwnerName,
      OwnerEmail,
      OwnerPassword,
      OwnerPublicKey,
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
  const { OwnerEmail, OwnerPassword } = req.body;
  try {
    console.log(OwnerEmail);
    const existingOwner = await Owner.findOne({ OwnerEmail });
    if (!existingOwner)
      return res.status(201).json({ message: "Owner Doesn't exists" });

    if (OwnerPassword != existingOwner.OwnerPassword)
      return res.status(201).json({ message: "Password Doesnt match" });

    res.status(200).json({ result: existingOwner });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};
