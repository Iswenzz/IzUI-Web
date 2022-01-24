import { FC } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import { getNavbarActive } from "App/redux";

/**
 * Animate the navbar to appear differently when past the window inner height.
 * @returns
 */
const NavBarAnimation: FC<NavBarAnimationProps> = ({ isFixed, children }) =>
{
	const navbarVisible = useSelector(getNavbarActive);

	return (
		<nav>
			<AnimatePresence>
				{isFixed && navbarVisible && children}
			</AnimatePresence>
			<AnimatePresence>
				{!isFixed && navbarVisible && children}
			</AnimatePresence>
		</nav>
	);
};

type NavBarAnimationProps = {
	isFixed: boolean
};

export default NavBarAnimation;
