import { ReactElement, useState } from "react";
// @ts-ignore
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

export function NavBar(): ReactElement {
    const [menuOpen, setMenuOpen] = useState(false);

    function menuClick(): void {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <div className="navbar bg-base-100 fixed top-0 left-0 z-10 lg:invisible">
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost" onClick={menuClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </div>
            <ul 
                className="menu bg-base-100 w-56 fixed top-16 z-10 left-0 lg:invisible"
                style={{
                    //display: menuOpen ? "block" : "none",
                    transformOrigin: "top left",
                    transform: menuOpen ? "none" : "scale(0)",
                    opacity: menuOpen ? 1 : 0,
                    transition: "all 0.25s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                }}
            >
                <li>
                    <AnchorLink className="link" href="#about">
                        About
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className="link" href="#skills">
                        Skills
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className="link" href="#experience">
                        Experience
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className="link" href="#reviews">
                        Reviews
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className="link" href="#interests">
                        Interests
                    </AnchorLink>
                </li>
                <li>
                    <a className="link" href="http://stacygay.com/blog-plugin.html">
                        Blog
                    </a>
                </li>
                <li>
                    <a className="link" href="https://github.com/StacyGay/stacygay-resume">
                        Source
                    </a>
                </li>
                <li>
                    <a className="link" href="./dev-chat/index.html">
                        Dev Chat Simulator
                    </a>
                </li>
                <li>
                    <a className="btn btn-primary" href="./StacyGaySoftwareEngineerResume.pdf">
                        Download Resume
                    </a>
                </li>
            </ul>
        </>
    );
}
