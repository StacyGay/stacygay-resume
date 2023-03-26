import { ReactElement, useEffect, useState } from "react";
import { SkillIcon } from "./skill-icon";
import { getSkills, Skill } from "./skill-service";

export function SkillList(): ReactElement {
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        const fetchSkills = async () => {
            const result = await getSkills();
            setSkills(result);
        };

        fetchSkills()
            .catch((e) => {
                console.log('Error getting skills', e);
            });
    }, []);

    return (
        <div>
            {skills.map((s, i) => <SkillIcon skill={s} key={i}></SkillIcon>)}
        </div>
    )
}