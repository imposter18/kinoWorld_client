import { RoutesEnum } from "@/constants/routes";
import { FiFilm, FiHome, FiTv, FiHeart } from "react-icons/fi";
import { BiMovie } from "react-icons/bi";
import React from "react";
import { useEffect } from "react";
import classNames from "classnames";
import styles from "./Dropdown.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Dropdown = () => {
	const items = [
		{ icon: <FiHome />, href: RoutesEnum.Home, text: "Главная" },
		{ icon: <FiFilm />, href: RoutesEnum.Films, text: "Фильмы" },
		{ icon: <FiTv />, href: RoutesEnum.Series, text: "Сериалы" },
		{ icon: <BiMovie />, href: RoutesEnum.Cartoons, text: "Мультики" },
		{ icon: <FiHeart />, href: RoutesEnum.Favourites, text: "Избранное" },
	];
	console.log(RoutesEnum.Home);
	// const { pathname } = useLocation();
	// const { toggleMenu } = useActions();

	// useEffect(() => {
	// 	events.on("routeChangeComplete", () => toggleMenu(false));
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

	const { openedMenu } = useSelector((state) => state.toggleReducer);

	return (
		<div
			className={classNames(styles.dropdown, openedMenu && styles.dropdownOpen)}
		>
			<ul className={classNames("list-reset", styles.list)}>
				{items.map((el) => {
					// const isCurrentPage = pathname === el.href;

					return (
						<li key={el.text} className={styles.item}>
							<Link href={el.href}>
								<span
									className={classNames(
										styles.link
										// isCurrentPage && styles.linkActive
									)}
								>
									{el.icon}
									{el.text}
								</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
