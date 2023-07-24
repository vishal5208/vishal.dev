import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects = () => {
	return (
		<>
			<Head>
				<title>Projects | Vishal D</title>
			</Head>
			<Navbar />
			<main
				style={{
					paddingBottom: "300px",
				}}
			>
				<section>
					<div className="sec_title">
						<h2>PROJECTS</h2>
						<p>Some of the projects I worked on in the past</p>
					</div>
				</section>

				<section className="projects_list">
					{projectList.map((ele, ind) => {
						return (
							<div className="projects_list-item" key={ind}>
								<div className="project_top">
									{/* <div className="css-0"> */}
									<button
										type="button"
										className="project_icon_open"
										aria-label="Open github link"
									>
										<a
											href={ele.githubLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											<svg
												stroke="currentColor"
												fill="currentColor"
												stroke-width="0"
												viewBox="0 0 512 512"
												// size="30"
												aria-hidden="true"
												focusable="false"
												height="30"
												width="30"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 
                            26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
												></path>
											</svg>
										</a>
									</button>
									<button
										type="button"
										className="project_icon_open"
										aria-label="Open website"
									>
										<a
											href={ele.link}
											target="_blank"
											// rel="noopener noreferrer"
										>
											<svg
												stroke="currentColor"
												fill="currentColor"
												stroke-width="0"
												viewBox="0 0 512 512"
												// size="30"
												aria-hidden="true"
												focusable="false"
												height="30"
												width="30"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"></path>
											</svg>
										</a>
									</button>
									{/* </div> */}
								</div>
								<p className="project_title">{ele.name}</p>
								<p className="project_desc">{ele.description}</p>
								<div className="project_last">
									<p className="project_last_text">{ele.language}</p>
								</div>
							</div>
						);
					})}
				</section>
			</main>
			<section></section>
			<Footer />
		</>
	);
};

export default Projects;

const projectList = [
	{
		name: "ShwanSuraksha",
		description:
			"Developed and implemented a cutting-edge smart contract solution for pet dog insurance, leveraging Ethereum and Polygon networks to streamline policy management, automate claims processing, and ensure secure transactions.",
		language: "Solidity | React | IPFS",
		link: "https://shwansuraksha1.on.fleek.co/",
		githubLink: "https://github.com/vishal5208/UpdatedShwanSuraksha",
	},
	{
		name: "CosmeticX",
		description:
			" Developed end-to-end traceability system for cosmetics, ensuring transparency from production to customer. Reduced costs, resolved disputes efficiently, and empowered retailers to provide customers with detailed product information.",
		language: "Solidity | React",

		link: "https://cosmeticx.on.fleek.co/",
		githubLink: "https://github.com/vishal5208/CosmeticX",
	},
];

// export async function getStaticProps() {
//   let projectList = [];
//   try {
//     const url1 = `https://api.github.com/users/amanraj1608/repos`;
//     const url2 = `https://api.github.com/users/bakaotaku/repos`;
//     const url3 = `https://api.github.com/users/only-2/repos`;
//     const url4 = `https://api.github.com/users/amanraj1608/repos?page=2`;

//     const val = process.env.TOKEN;

//     console.log(val);
//     if(val) {
//       const headers = {
//         Authorization: `token ${val}`
//       }
//       const res1 = await fetch(url1, {
//         "method": "GET",
//         "headers": headers
//       })
//       const n1 = await res1.json();
//       const res2 = await fetch(url2, {
//         "method": "GET",
//         "headers": headers
//       })
//       let n2 = await res2.json();
//       const res3 = await fetch(url3, {
//         "method": "GET",
//         "headers": headers
//       })
//       const n3 = await res3.json();
//       const res4 = await fetch(url4, {
//         "method": "GET",
//         "headers": headers
//       })
//       const n4 = await res4.json();
//       projectList = [...n1, ...n2, ...n3, ...n4];
//     }
//     else {
//       const res1 = await fetch(url1)
//       const n1 = await res1.json();
//       const res2 = await fetch(url2)
//       let n2 = await res2.json();
//       const res3 = await fetch(url3)
//       const n3 = await res3.json();
//       const res4 = await fetch(url4)
//       const n4 = await res4.json();
//       projectList = [...n1, ...n2, ...n3, ...n4];
//     }
//     console.log(projectList);
//   } catch {
//     console.log("Token not found");
//   }

//   projectList.sort((a, b) => (a.stargazers_count < b.stargazers_count) ? 1 : ((b.stargazers_count < a.stargazers_count) ? -1 : 0));
//   projectList = projectList.filter((e) => e.fork == false)
//   return {
//     props: {
//       projectList,
//     },
//   }
// }
