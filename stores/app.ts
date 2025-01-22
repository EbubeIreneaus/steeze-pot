import jwt from "jsonwebtoken";
import type { TypesUser } from "~/types/_user";

export const useAppStore = defineStore("app", () => {
  const user = ref<TypesUser | null>(null);
  const routeTo = ref<string | null>(null);

  return {user, routeTo}
});
