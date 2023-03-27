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
        <div className="my-4">
            <div className="flex flex-wrap justify-between w-full">
                {
                    skills
                        .filter((skill) => skill.icon)
                        .map((s, i) => <SkillIcon skill={s} key={i}></SkillIcon>)
                }
            </div>
            <div className="mt-8 mx-4 lg:mx-auto w-fit">
                <ul className="list-disc text-left">
                    {
                        skills
                            .filter((s) => s.text)
                            .map((s, i) => 
                                <li key={i} className="hover:scale-110 hover:translate-x-7">
                                    {s.text}
                                </li>
                            )
                    }
                </ul>
            </div>
        </div>
    )
}