import { create } from "zustand";

export const docTypes = {
  reglament: { title: "Регламент", value: 0 },
  instruction: { title: "Инструкция", value: 1 },
  order: { title: "Распоряжение", value: 2 },
} as const;

export type DocTypeKey = keyof typeof docTypes;

interface UIState {
  description: string;
  documentName: string;
  isSidebarOpen: boolean;
  documentType: DocTypeKey;
  setDocumentType: (type: DocTypeKey) => void;
  setDescription: (value: string) => void;
  setDocumentName: (value: string) => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: false,
  description: "",
  documentName: "",
  documentType: "reglament",
  setDocumentType: (value) => set({ documentType: value }),
  setDescription: (value) => set({ description: value }),
  setDocumentName: (value) => set({ documentName: value }),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),
}));
