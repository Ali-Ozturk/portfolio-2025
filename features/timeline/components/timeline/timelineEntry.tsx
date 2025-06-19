import React from 'react';
import {format} from 'date-fns';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Separator} from "@/components/ui/separator";

const TimelineEntry = () => {
    const date = new Date('2025-07-01');
    const formatted = format(date, 'MMM yyyy');

    return (
        <div className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 relative py-3">
            {/* Timeline vertical line */}
            <div className="absolute left-[20px] top-0 bottom-0 w-px bg-zinc-700"></div>

            {/* Avatar centered with header */}
            <div className="flex items-center justify-center relative z-10">
                <div className="relative">
                    <Avatar className="w-10 h-10">
                        <AvatarImage
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IgEHb42bCBHU-gOxf3nLYVOm6KRJZSL_kA&s"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>

            {/* Header block */}
            <div className="flex flex-col">
                <p className="text-xs text-neutral-400">{formatted} - Present</p>
                <p className="font-bold text-lg">Accenture</p>
                <p className="text-sm text-neutral-400">IT Consultant</p>
            </div>

            {/* Bullet points */}
            <div className="col-start-2">
                <ul className="list-disc list-inside text-zinc-200 space-y-1 text-xs">
                    <li>Led backend service refactoring for performance boost</li>
                    <li>Led backend service refactoring for performance boost</li>
                    <li>Led backend service refactoring for performance boost</li>
                    <li>Led backend service refactoring for performance boost</li>
                </ul>
            </div>

            <div className="col-start-2">
                <Separator className={'mt-6'}/>
            </div>

        </div>
    );
};

export default TimelineEntry;