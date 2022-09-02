import disableScroll from 'disable-scroll';
import { createContext, useCallback, useContext, useState } from 'react';

interface IAppContext {
  state: {
    quotOpen: boolean;
    title: any;
    dropdown: number;
    isQuot: boolean;
  };
  actions: {
    openQuote: (serviceId?: number) => void;
    closeQuote: () => void;
    openContact: () => void;
    closeContact: () => void;
  };
}

const AppContext = createContext<IAppContext>({} as IAppContext);

export function AppWrapper({ children }: { children: any }) {
  const [quotOpen, setQuotOpen] = useState(false);
  const [isQuot, setIsQuot] = useState(false);
  const [message, setMessage] = useState(
    <>
      Get <span className="font-bold"> Your Quote</span> Now!
    </>
  );
  const [dropdown, setDropdown] = useState<number>(0);

  const openQuote = useCallback(
    (serviceId: number = 1) => {
      setMessage(
        <>
          Get <span className="font-bold"> Your Quote</span> Now!
        </>
      );
      setQuotOpen(true);
      setIsQuot(true);
      disableScroll.on();
      setDropdown(serviceId);
    },
    [quotOpen]
  );

  const closeQuote = useCallback(() => {
    setQuotOpen(false);
    disableScroll.off();
    setDropdown(0);
    setIsQuot(false);
  }, [quotOpen]);

  const openContact = useCallback(() => {
    setMessage(
      <>
        <span className="font-bold"> CONTACT</span> US!
      </>
    );
    setQuotOpen(true);
    setIsQuot(false);
    disableScroll.on();
  }, [quotOpen]);

  const closeContact = useCallback(() => {
    setQuotOpen(false);
    disableScroll.off();
    setIsQuot(false);
    setDropdown(0);
  }, [quotOpen]);

  return (
    <AppContext.Provider
      value={{
        state: { quotOpen, title: message, dropdown, isQuot },
        actions: { openQuote, closeQuote, openContact, closeContact },
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
