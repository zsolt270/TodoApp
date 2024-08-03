import lightBanner from "../assets/bg-desktop-light.jpg";
import darkBanner from "../assets/bg-desktop-dark.jpg";
import lightBannerMobile from "../assets/bg-mobile-light.jpg";
import darkBannerMobile from "../assets/bg-mobile-dark.jpg";
import { useContext } from "react";
import { ThemeContext } from "../services/providers/ThemeContext";

export default function Banner() {
	const themeContext = useContext(ThemeContext);
	if (window.innerWidth > 768) {
		return (
			<>
				<img
					className='img-fluid w-100'
					src={themeContext?.isLight ? lightBanner : darkBanner}
					alt=''
				/>
			</>
		);
	} else {
		return (
			<>
				<img
					className='img-fluid w-100'
					src={themeContext?.isLight ? lightBannerMobile : darkBannerMobile}
					alt=''
				/>
			</>
		);
	}
}
