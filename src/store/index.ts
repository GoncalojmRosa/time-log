import { log } from "console";
import set from "date-fns/set";
import { create } from "zustand";

type ILog = {
  note: string;
  hour: number;
  date: Date;
};

interface LogState {
  log: ILog;
  setLog: (log: ILog) => void;
  setDate: (date: Date) => void;
}

export const useLogStore = create<LogState>()((set) => ({
  log: {
    note: "",
    hour: 0,
    date: new Date(),
  },
  setDate: (date: Date) => set((state) => ({ log: { ...state.log, date } })),
  setLog: (log: ILog) => set((state) => ({ log: { ...state.log, ...log } })),
}));
