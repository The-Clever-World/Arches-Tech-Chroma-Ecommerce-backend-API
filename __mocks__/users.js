import { hashSync } from "bcrypt";

export default [
  {
    name: "Soumava Banerjee",
    email: "soumava.rivu@gmail.com",
    // that's not my true password btw
    password: hashSync("frost1234", 10),
    isAdmin: true,
    gender: "male",
    mobileNumber: "8763236654",
  },
  {
    name: "Frost Byte",
    email: "frost.byte@xyz.com",
    password: hashSync("frost1234", 10),
    gender: "female",
    mobileNumber: "9767235654",
  },
  {
    name: "test",
    email: "test.email@gmail.com",
    password: hashSync("frost1234", 10),
    gender: "transgender",
    mobileNumber: "6763436158",
  },
  {
    name: "Shubham",
    email: "shubham.email@gmail.com",
    password: hashSync("frost1234", 10),
    isAdmin: true,
    gender: "Prefer not to say",
    mobileNumber: "8566236557",
  },
];
