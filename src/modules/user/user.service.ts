import Role, { IRole } from "../../models/roles.model";
import User, { IUser } from "../../models/user.model";

class UserService {
  async getAllRoles(): Promise<IRole[]> {
    return Role.find();
  }

  async getRoleById(id: string): Promise<IRole | null> {
    return Role.findById(id);
  }

  async createRole(name: string, permissions: string[]): Promise<IRole> {
    const role = new Role({ name, permissions });
    return role.save();
  }

  async updateRole(
    id: string,
    name: string,
    permissions: string[]
  ): Promise<IRole | null> {
    return Role.findByIdAndUpdate(id, { name, permissions }, { new: true });
  }

  async deleteRole(id: string): Promise<boolean> {
    const result = await Role.findByIdAndDelete(id);
    return result !== null;
  }

  async createUser(username: string, email: string, password: string, role: IRole["_id"]): Promise<IUser> {
   
    const newUser = new User({
      username,
      email,
      password,
      role,
    });
    return await newUser.save();
  }

  async getUserById(userId: string): Promise<IUser | null> {
    return User.findById(userId).populate("role").exec();
  }

  async getAllUsers(): Promise<IUser[]> {
    return User.find().populate("role").exec();
  }

  async updateUser(userId: string, updatedData: Partial<IUser>): Promise<IUser | null> {
    return User.findByIdAndUpdate(userId, updatedData, { new: true }).populate("role").exec();
  }

  async deleteUser(userId: string): Promise<IUser | null> {
    return User.findByIdAndDelete(userId).exec();
  }

  async findUserByEmail(email: string): Promise<IUser | null> {
    return User.findOne({ email }).exec();
  }
}

export default UserService;
