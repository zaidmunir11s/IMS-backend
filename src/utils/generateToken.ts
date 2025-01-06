import jwt from "jsonwebtoken";

export function generateToken(userId: string, role: string) {
  const token = jwt.sign({ userId, role }, process.env.JWT_SECRET as string, {
    expiresIn: "1h",
  });
  return token;
}
