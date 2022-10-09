import create from "zustand";
import { persist } from "zustand/middleware";

const userState = persist(
    (set) => ({
        user: null,
        isLoggedIn: false,
        token: null,
        refreshToken: null,
        invested: null,
        profit: null,
        deposit: null,
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
        setInvested: (invested) => {
            // console.log({invested})
            set(() => ({ invested }));
        },
        setProfit: (profit) => {
            // console.log({profit})
            set(() => ({ profit }));
        },
        setDeposit: (deposit) => {
            // console.log({deposit})
            set(() => ({ deposit }));
        },
        logOut: () => set({ user: null, token: null, refreshToken: null, isLoggedIn: false, invested: null, profit: null }),
    }),
    { name: "user-setting" }
);

export const useUserState = create(userState);