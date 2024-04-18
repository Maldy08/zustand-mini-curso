import { create } from "zustand";
import { persist } from "zustand/middleware";


interface PersonState {
    firstName: string;
    lastName: string;
}


interface Actions {
    setFirstName: (name: string) => void;
    setLastName: (name: string) => void;
}


export const usePersonStore = create<PersonState & Actions>()(
    persist
        ((set) => ({
            firstName: "John",
            lastName: "Doe",
            setFirstName: (name: string) => set({ firstName: name }),
            setLastName: (name: string) => set({ lastName: name }),
        }),
            { name: "person-storage" })
);