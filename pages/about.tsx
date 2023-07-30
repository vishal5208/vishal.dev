import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Uses() {
	return (
		<>
			<Head>
				<title>Vishal D</title>
			</Head>
			<Navbar />
			<main style={{ maxWidth: "900px" }}>
				<section id="intro">
					<h1>About</h1>
					<p>I’m a final-year CSE student at IIITV and an intern at CertiK.</p>
					<p>
						My expertise lies in
						<ul>
							<li>
								<strong>Languages → [ Go, TypeScript / JavaScript ]</strong>
							</li>
							<li>
								<strong>
									Blockchain → [ Solidity, Eth, The Graph, Ocean Protocol ]
								</strong>
							</li>
							<li>
								<strong>
									Frameworks → [ React.js, Next.js, Hooks/Redux, NodeJS ]
								</strong>
							</li>
							<li>
								<strong>Database → [ MYSQL, MongoDB NoSQL, Redis ]</strong>
							</li>
							<li>
								<strong>
									Others → [ AWS, Docker, GraphQL, Git/GitHub, CI/CD, Agile ]
								</strong>
							</li>
						</ul>
					</p>
					<p>
						Here is my{" "}
						<a
							href="https://drive.google.com/file/d/1lfwj1o-LU3fTOV6RhnBAqnp4OyeZQBM3/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
						>
							Resume
						</a>
					</p>

					<p>
						Aprart from professional things I love Anime, I have watched 200+
						shows. I love to travel and spend time with my family and friends.
						Lately got a new hobbie of looking at crypto prices.
					</p>
					<p>
						Say hi to my{" "}
						<a
							href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
							target="_blank"
							rel="noopener noreferrer"
						>
							Girlfreind
						</a>
					</p>
				</section>
				<section className="about_body"></section>
			</main>
		</>
	);
}
