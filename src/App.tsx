import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import profile from './assets/profile.jpg';
import './App.css'
import { SkillList } from './skills/skill-list'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <div id="portrait" className="float-right"></div>
            <h1>Hi, I'm Stacy Gay</h1>
            <h2>and I am a Software Engineer</h2>
            {/* <div className="rounded-lg soft-edges">
                <img className="" src={profile}></img>
            </div> */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <p className="card-body text-left">
                    I have 12+ years experience in full stack software engineering focusing on highly configurable multi-tenant applications and SaaS platforms, leveraging robust server, web and mobile platforms to fulfill pressing present and future needs.
                </p>
            </div>
            <button className="btn btn-primary mt-10">Here's my button</button>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">
                    <h2>Skills</h2>
                </div>
                <SkillList></SkillList>
            </div>
        </div>
    )
}

export default App
