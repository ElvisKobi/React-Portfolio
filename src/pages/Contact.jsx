import { Link } from 'react-router-dom'
import CommonNavLinks from './CommonNavLinks'
import profile from '../assets/Profile.jpg'
import resumeFile from '../assets/Resume.pdf'
import { CONTACT_EMAIL, CONTACT_MAILTO } from '../constants/contact'
import {
	FaComment,
	FaDownload,
	FaEnvelope,
	FaGithub,
	FaLinkedin,
	FaLocationDot,
	FaShareNodes,
	FaXTwitter,
} from 'react-icons/fa6'
import '../css/Contact.css'

const contactCards = [
	{
		title: 'GitHub',
		handle: '@ElvisKobi',
		icon: FaGithub,
		url: 'https://github.com/ElvisKobi',
	},
	{
		title: 'LinkedIn',
		handle: 'Professional Profile',
		icon: FaLinkedin,
		url: 'https://www.linkedin.com/in/elvis-acheampong-46509a229/',
	},
	{
		title: 'Twitter',
		handle: '@Nana_Quame_1',
		icon: FaXTwitter,
		url: 'https://twitter.com/Nana_Quame_1',
	},
	{
		title: 'Email',
		handle: CONTACT_EMAIL,
		icon: FaEnvelope,
		url: CONTACT_MAILTO,
	},
]

export default function Contact() {
	return (
		<div className="contact-page">
			<header className="contact-nav">
				<Link className="contact-brand" to="/">
					<span className="contact-brand-mark">&gt;_</span>
					<span>E.K Acheampong</span>
				</Link>

				<CommonNavLinks className="contact-nav-links" ariaLabel="Contact navigation" />

				<a className="contact-hire-btn" href={CONTACT_MAILTO}>
					HIRE ME
				</a>
			</header>

			<main className="contact-main" id="profile">
				<section className="contact-hero">
					<div className="contact-avatar-wrap">
						<div className="contact-avatar-ring" />
						<img src={profile} alt="Elvis Kobi Acheampong" className="contact-avatar" />
					</div>

					<h1>Elvis Kobi Acheampong</h1>

					<div className="contact-badges">
						<span>Problem Solver</span>
						<span>Dean's List Honoree</span>
						<span>Tech Innovator</span>
					</div>

					<p>
						Highly motivated professional recognized on the <strong>Dean's List</strong> for academic excellence.
						 Dedicated to delivering high-impact technical solutions in fast-paced environments.
					</p>

					<div className="contact-actions" id="resume">
						<a className="contact-primary" href={resumeFile} download="Elvis-Kobi-Acheampong-CV.pdf">
							<FaDownload /> Download Resume (PDF)
						</a>
						<a className="contact-secondary" href={CONTACT_MAILTO}>
							<FaComment /> Let's Talk
						</a>
					</div>
				</section>

				<section className="contact-connect" id="connect">
					<h2>Connect With Me</h2>
					<div className="contact-underline" />

					<div className="contact-grid">
						{contactCards.map((item) => {
							const Icon = item.icon
							return (
								<a className="contact-card" key={item.title} href={item.url} target="_blank" rel="noreferrer noopener">
									<div className="contact-card-icon">
										<Icon />
									</div>
									<h3>{item.title}</h3>
									<p>{item.handle}</p>
								</a>
							)
						})}
					</div>
				</section>

				<section className="contact-location">
					<div className="contact-map">
						<div className="contact-map-card">
							<FaLocationDot />
							<h3>Currently based in Fargo, ND</h3>
							<p>Available for remote work across USA</p>
						</div>
					</div>
				</section>
			</main>

			<footer className="contact-footer">
				<p>© 2026 Elvis Acheampong • Built for performance.</p>
			</footer>
		</div>
	)
}
