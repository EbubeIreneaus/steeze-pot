import { NotifyError, NotifySuccess } from "~/lib/notify";

export const useFavStore = defineStore("favorite", () => {
  let { user, routeTo } = useAppStore();
  const router = useRouter();

  const Favorites = ref<Set<number>>(new Set());

  function addItem(productId: number) {
    if (!user) {
      return Dialog.create({
        message:
          "cannot perform action, please login your account or register new account to continue",
        ok: "Login",
        color: 'primary',
        cancel: true,
      }).onOk(() => {
        routeTo = "";
        router.push("/auth/login");
      });
    }

    if (Favorites.value.has(productId)) {
      Favorites.value.delete(Number(productId));
      return NotifyError("Item removed from favorites 😋", "top-right");
    }

    Favorites.value.add(Number(productId));
    NotifySuccess("Item added to favorites 😋", "top-right");
  }

  return { Favorites, addItem };
});
