import { create } from "zustand";

import userStore from "~/store/user";
import type { UserStore } from "~/store/user";

interface StoreState {
  currentUser: UserStore;
}

const useStore = create<StoreState>((set: any) => {
  const currentUser = userStore({ set });
  return { currentUser };
});

export default useStore;
