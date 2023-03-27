import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import profile from './assets/profile.jpg';
import './App.css'
import { SkillList } from './skills/skill-list'
import { Experience } from './experience/experience';
import { ReviewList } from './reviews/review-list';
import { SideBar } from './side-bar';

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App lg:flex py-4 lg:px-4 lg:px-2">
            <div className="lg:w-3/4 py-2 px-5">
                <header className="lg:text-right my-10">
                    <h1>Hi, I'm Stacy Gay</h1>
                    <h2>and I am a Software Engineer</h2>
                </header>
            
                <section id="about" className="flex flex-col w-full mt-24 border-opacity-50">
                    <div className="divider">
                        <h2>About</h2>
                    </div>
                    <div className="card w-full my-8 mx-1 bg-base-100 shadow-xl">
                        <p className="card-body text-left">
                            I have 12+ years experience in full stack software engineering focusing on highly configurable multi-tenant applications and SaaS platforms, leveraging robust server, web and mobile platforms to fulfill pressing present and future needs.
                        </p>
                    </div>
                </section>
                <section id="skills" className="flex flex-col w-full border-opacity-50">
                    <div className="divider">
                        <h2>Skills</h2>
                    </div>
                    <SkillList></SkillList>
                </section>
                <section id="experience" className="flex flex-col w-full mt-10">
                    <div className="divider">
                        <h2>Experience</h2>
                    </div>
                    <Experience></Experience>
                </section>
                <section id="reviews" className="flex flex-col w-full mt-10">
                    <div className="divider">
                        <h2>Reviews</h2>
                    </div>
                    <ReviewList></ReviewList>
                </section>
                <section id="interests" className="my-16">
                    <div className="divider mt-16">
                        <h2>Interests</h2>
                    </div>
                    <p className="my-16 text-left">
                        In my off time I enjoy biking, walking and exploring nature trails with my family, 
                        teaching my sons game programming in scratch and Unity. 
                        I'm always down for a good boardgame or cardgame. 
                        When I have time to myself I enjoy tinkering with music production. 
                        I like using guitar and piano to paint swelling ambient soundscapes. 
                        I'm a sucker for sci-fi and horror flicks and games. 
                        I do enjoy some gaming, especially flight and space sims. 
                        When I retire I'm probably going to be that weird old guy with a sim pit 
                        built in the back of a winnebago playing Hendrix's Star Spangled Banner on the roof at sunrise.
                    </p>
                </section>
            </div>
            <SideBar></SideBar>
        </div>
    )
}

export default App
