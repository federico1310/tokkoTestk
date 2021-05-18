import React from 'react';
import styles from '../styles/Sidebar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {

	const router = useRouter();

	return(
		<aside className={styles.sidebarColorTokko + " sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5"}>
			<div>
				<p className="text-gray-50 text-2xl font-black">Panel de Brokers</p>
				<p className="text-gray-50 text-1xl font-black">Bienes Raíces</p>
			</div>

			<nav className="mt-5 list-none">
				<li className={router.pathname === "/" || router.pathname === "/nuevobroker" ? "border-b-2 border-white " + styles.pbActivo + " pt-2 px-4 text-white" : "py-2 px-4"}>
					<Link href="/">
						<a className={router.pathname === "/" || router.pathname === "/nuevobroker" ? "text-white block" : styles.textColor + " block"}>
							Brokers
						</a>
					</Link>
				</li>
				<li className={router.pathname === "/propiedades" || router.pathname === "/nuevapropiedad" ? "border-b-2 border-white " + styles.pbActivo + " pt-2 px-4 text-white" : "py-2 px-4"}>
					<Link href="/propiedades">
						<a className={router.pathname === "/propiedades" || router.pathname === "/nuevapropiedad" ? "text-white block" : styles.textColor + " block"}>
							Propiedades
						</a>
					</Link>
				</li>
			</nav>
		</aside>
	);
}

export default Sidebar;