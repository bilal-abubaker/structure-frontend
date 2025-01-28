import React, { useState } from 'react';
import { createContext } from 'react';

interface MyContextType {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}
export const MyContext = createContext<MyContextType>({
  text: '',
  setText: () => {},
});
const UserProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [text, setText] = useState('hellowww');

  return (
    <MyContext.Provider value={{ text, setText }}>
      {children}
    </MyContext.Provider>
  );
};

export default UserProvider;
