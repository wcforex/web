import create from "zustand";
import { persist } from "zustand/middleware";

const userState = persist(
    (set) => ({
        user: null,
        isLoggedIn: false,
        token: null,
        refreshToken: null,
        setUser: (user) => {
            // console.log({ user });
            set(() => ({ user, isLoggedIn: true }));
        },
        setToken: (token) => {
            // console.log({token})
            set(() => ({ token }));
        },
        setRefreshToken: (refreshToken) => {
            // console.log({refreshToken})
            set(() => ({ refreshToken }));
        },
        logOut: () => set({ user: null, token: null, refreshToken: null, isLoggedIn: false }),
    }),
    { name: "user-setting" }
);

export const useUserState = create(userState);