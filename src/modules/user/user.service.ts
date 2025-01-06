import Role, { IRole } from "../../models/roles.model";

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
}

export default UserService;
