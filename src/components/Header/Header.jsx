import React from "react";
import styles from "./Header.m.scss";
import Burger from "./components/burger/Burger";
import { Dropdown } from "./components/burger/dropdown/Dropdown";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../store/reducers/toggleSlice";

const Header = () => {
	const ref = useRef();
	const dispatch = useDispatch();

	React.useEffect(() => {
		const handleClickOutside = (event) => {
			const _event = event;

			if (ref.current && !_event.path.includes(ref.current)) {
				dispatch(toggleMenu(false));
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => document.removeEventListener("click", handleClickOutside);
	}, []);
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.left} ref={ref}>
					<Burger />
					<div className="logo">KINOWORLD</div>
					<Dropdown />
				</div>
			</div>
		</header>
	);
};

export default Header;
