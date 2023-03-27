import { ReactElement } from "react";

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
                        <a className="link" href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="link" href="#skills">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a className="link" href="#experience">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a className="link" href="#reviews">
                            Reviews
                        </a>
                    </li>
                    <li>
                        <a className="link" href="#interests">
                            Interests
                        </a>
                    </li>
                    <li>
                        <a className="link" href="http://stacygay.com/blog-plugin.html">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a className="link" href="https://github.com/StacyGay/stacygay_com">
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
                    <a className="btn btn-wide btn-primary" href="https://docs.google.com/document/d/14tpSMuEmwBv_Bu2qxwRcaoZXkCHA7UxAsROTRR88jxw/edit?usp=sharing">
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}