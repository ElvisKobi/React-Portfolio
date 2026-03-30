import heroImage from '../assets/Profile.jpg'
import resumeFile from '../assets/Resume.pdf'
import { FaCloud, FaCode, FaServer } from 'react-icons/fa'
import CommonNavLinks from './CommonNavLinks'
import { CONTACT_MAILTO } from '../constants/contact'

const cards = [
    {
        title: 'Backend',
        description:
            'Building scalable APIs and microservices with Node.js, Java, and Spring Boot for reliable enterprise systems.',
        accent: 'card-backend',
        icon: FaServer,
    },
    {
        title: 'Frontend',
        description:
            'Crafting clean and performant interfaces with React, TypeScript, and modern UI architecture patterns.',
        accent: 'card-frontend',
        icon: FaCode,
    },
    {
        title: 'Cloud/DevOps',
        description:
            'Deploying production-ready applications with Docker, CI/CD pipelines, and cloud-first infrastructure workflows.',
        accent: 'card-devops',
        icon: FaCloud,
    },
]

export default function Home() {
    return (
        <main className="home-page">
            <header className="top-nav">
                <a className="brand" href="#home">
                    <span className="brand-symbol">&gt;_</span>
                    <span>E.K Acheampong</span>
                </a>

                <CommonNavLinks className="menu" />

                <a className="contact-btn" href={CONTACT_MAILTO}>
                    Hire me
                </a>
            </header>

            <section className="intro" id="experience">
                <div className="pro-pic">
                    <div className="ring" />
                    <img src={heroImage} alt="Elvis Kobi Acheampong" />
                    <span className="status-dot" aria-hidden="true" />
                </div>

                <div className="userName">
                    <p className="hire-tag">Available for hire</p>
                    <h1>
                        Elvis Kobi
                        <span>Acheampong</span>
                    </h1>
                    <h2>Software Developer &amp; Full Stack Engineer</h2>
                    <p className="summary">
                        Architecting high-performance web platforms with a focus on clean system design, scalability, and user
                        experience.
                    </p>

                    <div className="actions">
                        <a className="primary" href={CONTACT_MAILTO}>
                            Get in touch
                        </a>
                        <a className="secondary" href={resumeFile} download="Elvis-Kobi-Acheampong-CV.pdf">
                            Download CV
                        </a>
                       
                    </div>
                </div>
            </section>

            <section className="cards" id="stack">
                {cards.map((card) => (
                    <article className={`card ${card.accent}`} key={card.title}>
                        <div className="card-icon" aria-hidden="true">
                            <card.icon />
                        </div>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </article>
                ))}
            </section>

            <footer className="home-footer" id="contact">
                <p className="home-footnote">© 2026 Elvis Acheampong</p>
                <nav className="home-socials" aria-label="Social links">
                    <a href="https://www.linkedin.com/in/elvis-acheampong-46509a229/" target="_blank" rel="noreferrer noopener">
                        LinkedIn
                    </a>
                    <a href="https://github.com/ElvisKobi" target="_blank" rel="noreferrer noopener">
                        GitHub
                    </a>
                    <a href="https://twitter.com/Nana_Quame_1" target="_blank" rel="noreferrer noopener">
                        Twitter
                    </a>
                </nav>
            </footer>
        </main>
    )
}

