import { Link } from 'react-router-dom'
import CommonNavLinks from './CommonNavLinks'
import { CONTACT_MAILTO } from '../constants/contact'
import {
	FaCode,
	FaDatabase,
	FaGraduationCap,
	FaJava,
	FaPeopleGroup,
	FaPython,
	FaTimeline,
	FaWindows,
} from 'react-icons/fa6'
import { SiJavascript, SiTypescript, SiGit, SiDjango, SiAngular, SiDotnet } from 'react-icons/si'
import '../css/Experience.css'

const coreSkills = [
	{ name: 'Java', icon: FaJava },
	{ name: 'Python', icon: FaPython },
	{ name: 'JavaScript', icon: SiJavascript },
	{ name: 'TypeScript', icon: SiTypescript },
	{ name: 'C#', icon: FaWindows },
	{ name: 'SQL', icon: FaDatabase },
]

const frameworks = [
	{ name: '.NET', icon: SiDotnet },
	{ name: 'Django', icon: SiDjango },
	{ name: 'Angular', icon: SiAngular },
	{ name: 'Git', icon: SiGit },
]

const timeline = [
	{
		period: 'January 2023 - Present',
		title: 'Advanced Computer Science Studies',
		description:
			'Focused on algorithm design, data structures, and full-stack software engineering with practical project work.',
	},
	{
		period: 'Fall 2023',
		title: 'Project Architecture and Leadership',
		description:
			'Built and led team projects using Django and Angular while applying clean architecture and collaboration workflows.',
	},
]

const education = [
	{
		school: 'North Dakota State University',
		program: 'BS in Computer Science',
		details: 'Active student contributor focused on software systems and engineering practices.',
	},
	{
		school: 'Associate of Science / Arts',
		program: 'AS/AA Degree',
		details: 'Strong foundation in mathematics, problem-solving, and analytical thinking.',
	},
]

const leadership = [
	{
		title: 'Phi Theta Kappa',
		description: 'International honor society member recognized for academic excellence and leadership.',
	},
	{
		title: 'ACM Member',
		description: 'Active in workshops and technical events focused on software development and computing culture.',
	},
]

export default function Experience() {
	return (
		<div className="exp-page">
			<header className="exp-nav">
				<Link className="exp-brand" to="/">
					<span className="exp-brand-icon">
						<FaCode />
					</span>
					<span>E.K. Acheampong</span>
				</Link>

				<CommonNavLinks className="exp-nav-links" ariaLabel="Experience navigation" />

				<a className="exp-contact-btn" href={CONTACT_MAILTO}>
					HIRE ME
				</a>
			</header>

			<main className="exp-main">
				<section className="exp-hero" id="skills">
					<h1>
						Software Engineer &amp; <span>CS Graduate</span>
					</h1>
					<p>
						Dedicated Computer Science student focused on full-stack development, distributed systems, and modern
						software architecture.
					</p>
				</section>

				<section className="exp-section">
					<h2>
						<FaCode /> Core Tech Stack
					</h2>
					<div className="exp-skills-grid">
						{coreSkills.map((skill) => {
							const Icon = skill.icon
							return (
								<article className="exp-skill-card" key={skill.name}>
									<Icon />
									<p>{skill.name}</p>
								</article>
							)
						})}
					</div>

					<h3>Frameworks &amp; Tools</h3>
					<div className="exp-chip-row">
						{frameworks.map((tool) => {
							const Icon = tool.icon
							return (
								<span className="exp-chip" key={tool.name}>
									<Icon /> {tool.name}
								</span>
							)
						})}
					</div>
				</section>

				<section className="exp-section" id="journey">
					<h2>
						<FaTimeline /> Journey Timeline
					</h2>
					<div className="exp-timeline">
						{timeline.map((item) => (
							<article className="exp-timeline-item" key={item.title}>
								<p className="exp-period">{item.period}</p>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</article>
						))}
					</div>
				</section>

				<section className="exp-two-col">
					<div className="exp-section" id="education">
						<h2>
							<FaGraduationCap /> Education
						</h2>
						<div className="exp-list-grid">
							{education.map((item) => (
								<article className="exp-detail-card" key={item.school}>
									<h3>{item.school}</h3>
									<p className="exp-highlight">{item.program}</p>
									<p>{item.details}</p>
								</article>
							))}
						</div>
					</div>

					<div className="exp-section" id="leadership">
						<h2>
							<FaPeopleGroup /> Leadership
						</h2>
						<div className="exp-list-grid">
							{leadership.map((item) => (
								<article className="exp-detail-card" key={item.title}>
									<h3>{item.title}</h3>
									<p>{item.description}</p>
								</article>
							))}
						</div>
					</div>
				</section>
			</main>

			<footer className="exp-footer" id="footer">
				<p>© 2026 Elvis Acheampong • Built with modern tech stack</p>
			</footer>
		</div>
	)
}
