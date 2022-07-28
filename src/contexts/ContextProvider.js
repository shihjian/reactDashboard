// 目的，讓多元件吃到或控制狀態，將uesContext封裝

import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// 將index.js 包起來 將App下的原件全部吃到或控制狀態({children})
// 數據提供者
export const ContextProvider = ({ children }) => {
  // 側邊選單控制
  const [activeMenu, setActiveMenu] = useState(true);
  // 控制navBar 元件顯示
  const [isClicked, setIsClicked] = useState(initialState);
  const handleClick = (clicked) => {
    // 不使用...initialState資料會被覆蓋掉，用clicked(判斷是誰)傳過來的key來改值
    setIsClicked({ ...initialState, [clicked]: true });
  };

  // 判斷media
  const [screenSize, setScreenSize] = useState(undefined);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
