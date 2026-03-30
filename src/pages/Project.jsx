import {
	FaCartShopping,
	FaCode,
	FaGithub,
	FaRocket,
	FaWallet,
	FaXTwitter,
} from 'react-icons/fa6'
import CommonNavLinks from './CommonNavLinks'
import { CONTACT_MAILTO } from '../constants/contact'
import budgetImg from '../assets/budget.png'
import ecommerceImg from '../assets/ecommernce.png'
import alienImg from '../assets/alien.png'
import '../css/Project.css'

const mainFeature = {
	category: 'Fintech & Data',
	title: 'Budget Tracker Pro',
	description:
		'A sophisticated financial orchestration tool built with Python and SQL, designed for high-precision personal asset management.',
	details:
		'Engineered a custom ETL pipeline for transaction processing, featuring real-time expense classification and automated monthly fiscal forecasting. Utilized Matplotlib for deep-dive data visualization of spending patterns.',
	tags: ['Python', 'PostgreSQL', 'Matplotlib', 'Auth0'],
	buttonLabel: 'Explore Case Study',
	icon: FaWallet,
	image: budgetImg,
}

const projectCards = [
	{
		category: 'E-Commerce Ecosystem',
		title: 'Nexus Commerce',
		description:
			'Full-stack digital storefront engineered for high-concurrency traffic using React.js and a Node.js microservices architecture.',
		details:
			'Implemented a resilient shopping cart state management system, full Stripe API integration for secure global payments, and a proprietary dynamic inventory tracking system for real-time stock updates.',
		tags: ['React', 'Node.js', 'Stripe API', 'MongoDB'],
		buttonLabel: 'Launch Live Site',
		icon: FaCartShopping,
		mediaTone: 'peach',
		image: ecommerceImg,
	},
	{
		category: 'Game Development',
		title: 'Alien Invasion 2D',
		description:
			'A performance-optimized 2D arcade engine developed in Python using the Pygame framework, emphasizing object-oriented design.',
		details:
			'Features complex collision detection algorithms, adaptive difficulty scaling, and a custom particle effect system. Optimized game loop architecture to maintain consistent 60FPS performance across varying hardware specifications.',
		tags: ['Python', 'Pygame', 'OOP', 'Game Physics'],
		buttonLabel: 'View Source Code',
		icon: FaRocket,
		mediaTone: 'neon',
		image: alienImg,
	},
]

function TagList({ tags }) {
	return (
		<div className="tag-list">
			{tags.map((tag) => (
				<span className="tag" key={tag}>
					{tag}
				</span>
			))}
		</div>
	)
}

function SplitProjectCard({ project }) {
	const Icon = project.icon

	return (
		<article className="split-card">
			<div className={`media-panel media-${project.mediaTone}`}>
				<img src={project.image} alt={project.title} className="media-img" />
			</div>
			<div className="project-content">
				<div className="project-head">
					<p className="category">{project.category}</p>
					<Icon className="content-icon" aria-hidden="true" />
				</div>
				<h3>{project.title}</h3>
				<p>{project.description}</p>
				<p>{project.details}</p>
				<TagList tags={project.tags} />
				{/* <button type="button" className="accent-btn">
					{project.buttonLabel}
				</button> */}
			</div>
		</article>
	)
}

export default function Project() {
	const MainIcon = mainFeature.icon

	return (
		<div className="projects-page">
			<header className="projects-nav">
				<div className="owner">
					<span className="owner-mark">&gt;_</span>
					<span>E.K Acheampong</span>
				</div>

				<CommonNavLinks className="projects-links" ariaLabel="Main" />

				<a className="hire-btn" href={CONTACT_MAILTO}>
					HIRE ME
				</a>
			</header>

			<main className="projects-main">
				<section className="intro-block">
					<p className="section-chip">Featured Showcases</p>
					<h1>
						Technical <span>Mastery.</span>
					</h1>
					<p>
						A curated collection of high-impact engineering projects ranging from fintech solutions to complex
						game engines. Focused on scalability, clean architecture, and performance.
					</p>
					<button className="ghost-btn" type="button">
						<FaGithub aria-hidden="true" />
						View GitHub
					</button>
				</section>

				<section className="feature-card">
					<div className="feature-media" aria-hidden="true">
						<div className="monitor-frame">
							<img src={mainFeature.image} alt={mainFeature.title} className="monitor-screen" />
						</div>
					</div>

					<div className="project-content">
						<div className="project-head">
							<p className="category">{mainFeature.category}</p>
							<MainIcon className="content-icon" aria-hidden="true" />
						</div>
						<h2>{mainFeature.title}</h2>
						<p>{mainFeature.description}</p>
						<p>{mainFeature.details}</p>
						<TagList tags={mainFeature.tags} />
						{/* <button type="button" className="accent-btn">
							{mainFeature.buttonLabel}
						</button> */}
					</div>
				</section>

				{projectCards.map((project) => (
					<SplitProjectCard key={project.title} project={project} />
				))}
			</main>

			<footer className="projects-footer">
				<p>© 2026 Elvis Acheampong • Built for high impact.</p>
				<div className="footer-socials" aria-label="Social links">
					<a href="https://github.com/ElvisKobi" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
						<FaGithub />
					</a>
					<a href="https://twitter.com/Nana_Quame_1" target="_blank" rel="noreferrer noopener" aria-label="X">
						<FaXTwitter />
					</a>
				</div>
			</footer>
		</div>
	)
}
