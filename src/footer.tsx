import { ReactElement } from "react";

export function Footer(): ReactElement {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <a className="link font-bold mx-2" href="mailto:stacygay@gmail.com">
                stacygay@gmail.com
            </a>
            <div className="inline invisible lg:visible">|</div>
            <a className="link mx-2" href="tel:843-997-1308">(843) 997-1308</a>
            <div className="inline invisible lg:visible">|</div>
            <span className="mx-2">2018 Catskill ct. Apex, NC 27523</span>
            <div className="inline invisible lg:visible">|</div>
            <a className="link mx-2" href="./StacyGaySoftwareEngineerResume.pdf">
                Get my resume
            </a>
        </footer>
    );
}