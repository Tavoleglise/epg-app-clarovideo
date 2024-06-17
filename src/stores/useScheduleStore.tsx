import create from "zustand";

interface ScheduleState {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
}

const useScheduleStore = create<ScheduleState>((set) => ({
  currentDate: new Date(),

  setCurrentDate: (currentDate: Date) =>
    set(() => ({
      currentDate,
    })),
}));

export default useScheduleStore;
