import bcrypt from "bcryptjs";
import User from "../../models/user.model";
import dotenv from "dotenv";
import { generateToken } from "../../utils/generateToken";
import { hashPassword } from "../../utils/hashPassword";

dotenv.config();

class AuthService {
  async register(userData: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) {
    const { name, email, password, role } = userData;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await hashPassword(password);

    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();

    return user;
  }

  async login(userData: { email: string; password: string }) {
    const { email, password } = userData;

    const user = await User.findOne({ email }).populate("role");
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    return generateToken(user._id, user.role.name);
  }
}

export default AuthService;
