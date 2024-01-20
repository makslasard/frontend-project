import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss';
import React, {Suspense} from "react";
import {About} from "@/pages/about";
import {Shop} from "@/pages/shop";
import {useTheme} from "@/theme/useTheme";
import {classNames} from "@/helpers/classNames/classNames";

export const App: React.FC = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Toggle</button>
			<Link to={'/about'}>About</Link>
			<Link to={'/shop'}>Shop</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<About />} />
					<Route path={'/shop'} element={<Shop />} />
				</Routes>
			</Suspense>
		</div>
	)
}
