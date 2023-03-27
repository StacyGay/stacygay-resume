import { ReactElement } from "react";
// @ts-ignore
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

export function SideBar(): ReactElement {
    return (
        <div className="lg:w-1/4 py-2 px-5 text-right relative">
            <div className="sidebard-content fixed">
                <div id="portrait" className="m-auto"></div>
                {/* <img src={profile} className="mask mask-squircle greyscale-img" /> */}
                <div className="mt-8">
                    <a className="link font-bold" href="mailto:stacygay@gmail.com">
                        stacygay@gmail.com
                    </a>
                    <br />
                    <a className="link" href="tel:843-997-1308">(843) 997-1308</a>
                    <br />
                    2018 Catskill ct. 
                    <br />
                    Apex, NC 27523
                </div>
                <ul className="my-8 text-xl">
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
                </ul>
                <div>
                    <a className="btn btn-wide btn-primary" href="./StacyGaySoftwareEngineerResume.pdf">
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}