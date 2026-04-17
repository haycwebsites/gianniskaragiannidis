/* eslint-disable react-refresh/only-export-components -- useHomePageUi is the public API alongside HomePageUiProvider */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type HomePageUi = {
  searchOpen: boolean;
  sidebarOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
};

const HomePageUiContext = createContext<HomePageUi | null>(null);

export function HomePageUiProvider({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);
  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  useEffect(() => {
    if (!searchOpen && !sidebarOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [searchOpen, sidebarOpen]);

  const value = useMemo(
    () => ({
      searchOpen,
      sidebarOpen,
      openSearch,
      closeSearch,
      openSidebar,
      closeSidebar,
    }),
    [
      searchOpen,
      sidebarOpen,
      openSearch,
      closeSearch,
      openSidebar,
      closeSidebar,
    ]
  );

  return (
    <HomePageUiContext.Provider value={value}>
      {children}
    </HomePageUiContext.Provider>
  );
}

export function useHomePageUi(): HomePageUi | null {
  return useContext(HomePageUiContext);
}
