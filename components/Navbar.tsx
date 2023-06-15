import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Layout() {
	const router = useRouter();

	return (
		<nav>
			<Link href="/" className="nav__name">
				Vishal
			</Link>
			<ul>
				<li>
					<Link
						href="/"
						className={router.pathname == "/" ? "nav__link--active" : ""}
					>
						HOME
					</Link>
				</li>

				<li>
					<Link
						href="/projects"
						className={
							router.pathname == "/projects" ? "nav__link--active" : ""
						}
					>
						PROJECTS
					</Link>
				</li>

				<li>
					<Link
						href="/contact"
						className={router.pathname == "/uses" ? "nav__link--active" : ""}
					>
						CONTACT
					</Link>
				</li>
			</ul>
		</nav>
	);
}
