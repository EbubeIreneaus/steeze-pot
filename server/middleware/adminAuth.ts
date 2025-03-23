import jwt from "jsonwebtoken";

export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const path = event.path;
  if (path.startsWith("/api/admin")) {
    if (path.endsWith("/login")) {
      return;
    }
    try {
      const Authorization = getHeader(event, "Authorization")?.split(' ')[1] as string;
      const token = jwt.verify(
        Authorization,
        config.jwt_secret
      ) as any as { admin: boolean };
      if (token.admin) {
        event.context.user = token;
        return;
      }

      return createError({
        statusCode: 400,
        statusMessage: "unauthorise admin",
        message: "you are not authorise to perform this action",
      });
    } catch (error: any) {
      return createError({
        statusCode: 400,
        statusMessage: "unauthorise error",
        message: error.message,
      });
    }
  }

  return;
});
