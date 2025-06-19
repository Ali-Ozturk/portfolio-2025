import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import TimelineContent from "@/features/timeline/components/timeline/timelineContent";

const TimelineTabs = () => {
    return (
        <Tabs defaultValue="work">
            <TabsList className={'w-full'}>
                <TabsTrigger value="work">Work</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="work">
                <TimelineContent />
            </TabsContent>
            <TabsContent value="education">Change your password here.</TabsContent>
        </Tabs>
    );
};

export default TimelineTabs;