import { create } from "zustand";

type State = {
  isOpen: boolean;
};

type Action = {
  setCoverState: (isOpen: boolean) => void;
};

const useCoverStore = create<State & Action>((set) => ({
  isOpen: false,
  setCoverState: (isOpen) => set(() => ({ isOpen: !isOpen })),
}));

export default useCoverStore;
