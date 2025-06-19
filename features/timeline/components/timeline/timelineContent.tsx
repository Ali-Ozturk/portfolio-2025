import React from 'react';
import TimelineEntry from "@/features/timeline/components/timeline/timelineEntry";
import ExperienceTimeline from "@/features/timeline/components/timeline/test";

const TimelineContent = () => {
    return (
        <div className={'border-2 rounded-lg px-5'}>
            <TimelineEntry />
            <TimelineEntry />
            <TimelineEntry />

            {/** <ExperienceTimeline /> */}
        </div>
    );
};

export default TimelineContent;