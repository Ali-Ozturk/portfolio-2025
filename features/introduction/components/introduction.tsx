import React from 'react';
import {Button} from "@/components/ui/button";
import {FileUp, Github, Linkedin, Mail} from "lucide-react";
import TooltipWrapper from "@/components/tooltipWrapper";

const Introduction = () => {
    return (
        <div>
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
                Alihan Øztürk
            </h2>
            <p className="text-neutral-400">Software Engineer</p>

            <div className='flex gap-2'>
                <Button variant={"outline"}>
                    <span className={'px-2 flex items-center gap-2'}> <FileUp/> Resume</span>
                </Button>

                <TooltipWrapper value={"LinkedIn"} asChild={true}>
                    <Button variant='ghost'>
                        <Linkedin/>
                    </Button>
                </TooltipWrapper>

                <TooltipWrapper value={"Github"} asChild={true}>
                    <Button variant='ghost'>
                        <Github/>
                    </Button>
                </TooltipWrapper>

                <TooltipWrapper value={"E-mail"} asChild={true}>
                    <Button variant='ghost'>
                        <Mail/>
                    </Button>
                </TooltipWrapper>
            </div>

        </div>
    );
};

export default Introduction;