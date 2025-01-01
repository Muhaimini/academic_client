import { StoreController } from "@store";

export interface UserStore {
  user: Record<string, string>;
  setUser(params: Record<string, string>): void;
}

const invitationPageStore: StoreController<{
  userStore: UserStore;
}> = ({ set }) => {
  return {
    user: {},
    setUser: (params) => {
      set(({ userStore }) => ({
        userStore: {
          ...userStore,
          user: params,
        },
      }));
    },
  };
};

export default invitationPageStore;
