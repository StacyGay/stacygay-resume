import { ReactElement } from "react";
import { SkillList } from "./skill-list";
import { Skill } from './skill-service';

export interface SkillProps {
    skill: Skill
}

export function SkillIcon({ skill }: SkillProps): ReactElement {

    const background = skill.background 
        ? { backgroundColor: skill.background, padding: ".75em" }
        : {};

    return (
        <div className="avatar tooltip" data-tip={skill.name} >
            <div className="w-20 rounded-full"  style={background}>
                <img src={skill.icon} />
            </div>
        </div>
    );
}
