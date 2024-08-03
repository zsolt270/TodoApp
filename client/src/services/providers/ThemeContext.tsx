import React, { createContext, useState } from "react";

type themeType = {
	isLight: boolean;
	setIsLight: React.Dispatch<React.SetStateAction<boolean>>;
};

type themeContextProviderProps = {
	children: React.ReactNode;
};

export const ThemeContext = createContext<themeType | null>(null);

export const ThemeContextProvider = ({
	children,
}: themeContextProviderProps) => {
	const [isLight, setIsLight] = useState(true);

	return (
		<ThemeContext.Provider value={{ isLight, setIsLight }}>
			{children}
		</ThemeContext.Provider>
	);
};
