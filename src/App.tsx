import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import profile from './assets/profile.jpg';
import './App.css'
import { SkillList } from './skills/skill-list'
import { Experience } from './experience/experience';
import { ReviewList } from './reviews/review-list';

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App flex">
            <div className="w-3/4 py-2 px-5">
                <header className="text-right my-10">
                    <h1>Hi, I'm Stacy Gay</h1>
                    <h2>and I am a Software Engineer</h2>
                </header>
            
                <div className="card w-full my-5 mx-1 bg-base-100 shadow-xl">
                    <p className="card-body text-left">
                        I have 12+ years experience in full stack software engineering focusing on highly configurable multi-tenant applications and SaaS platforms, leveraging robust server, web and mobile platforms to fulfill pressing present and future needs.
                    </p>
                </div>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">
                        <h2>Skills</h2>
                    </div>
                    <SkillList></SkillList>
                </div>
                <div className="flex flex-col w-full mt-10">
                    <div className="divider">
                        <h2>Experience</h2>
                    </div>
                    <Experience></Experience>
                </div>
                <div className="flex flex-col w-full mt-10">
                    <div className="divider">
                        <h2>Reviews</h2>
                    </div>
                    <ReviewList></ReviewList>
                </div>
            </div>
            <div className="w-1/4 py-2 px-5">
                <div id="portrait"></div>
            </div>
        </div>
    )
}

export default App
