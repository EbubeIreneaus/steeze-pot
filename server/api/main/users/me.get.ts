import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  try {
    const key = getHeader(event, "Authorization")?.split(" ")[1] as string;
    try {
      const user = jwt.verify(key, config.jwt_secret);
      return user;
    } catch (error) {
      return;
    }
  } catch (error) {
    return;
  }
});
