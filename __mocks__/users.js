import { hashSync } from "bcrypt";

export default [
  {
    name: "Soumava Banerjee",
    email: "soumava.rivu@gmail.com",
    // that's not my true password btw
    password: hashSync("frost1234", 10),
    isAdmin: true,
  },
  {
    name: "Frost Byte",
    email: "frost.byte@xyz.com",
    password: hashSync("frost1234", 10),
  },
  {
    name: "test",
    email: "test.email@gmail.com",
    password: hashSync("frost1234", 10),
  },
  {
    name: "Shubham",
    email: "shubham.email@gmail.com",
    password: hashSync("frost1234", 10),
  },
];
