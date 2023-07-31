import React from "react";
import Skill from "./Skill";
import { skillContent } from "../../assets/skillContent";
import { motion } from "framer-motion";

const Skills = () => {
    const container = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
            },
        },
    };
    return (
        <motion.section
            className="wave flex justify-center items-center flex-col gap-14 w-full"
            variants={container}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            id="skills"
        >
            <div className="heading">
                <h3>skills</h3>
                <h2>Technologies I've learned</h2>
            </div>
            <div className="flex flex-wrap items-center justify-center w-full gap-10">
                {skillContent &&
                    skillContent.map((skill) => {
                        return <Skill key={skill.img} skill={skill} />;
                    })}
            </div>
        </motion.section>
    );
};

export default Skills;
