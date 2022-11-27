import React from "react";
import { ButtonBase } from "../../../UI/buttonBase/buttonBase";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./burger.m.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleMenu } from "@/store/reducers/toggleSlice";

const Burger = () => {
	const { openedMenu } = useSelector((state) => state.toggleReducer);
	const dispatch = useDispatch();

	const handleOpen = () => dispatch(toggleMenu(!openedMenu));

	return (
		<ButtonBase className={styles.burger} onClick={handleOpen}>
			{openedMenu ? <FiX /> : <FiMenu />}
		</ButtonBase>
	);
};
export default Burger;
