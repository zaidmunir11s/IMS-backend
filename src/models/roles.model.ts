import mongoose, { Document, Schema } from "mongoose";

export interface IRole extends Document {
  name: string;
  permissions: string[];
}

const RoleSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      enum: ["Admin", "Manager", "User"],
    },
  },
  { timestamps: true }
);

const Role = mongoose.model<IRole>("Role", RoleSchema);

export default Role;
