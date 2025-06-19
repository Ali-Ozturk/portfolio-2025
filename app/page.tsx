import TimelineTabs from "@/features/timeline/components/timeline/timelineTabs";
import Introduction from "@/features/introduction/components/introduction";
import Projects from "@/features/projects/components/projects";

export default function Home() {
    return (
        <div className='container-sm h-full mx-auto p-4'>
            <Introduction/>
            <TimelineTabs/>

            {/** Projects section */}
            <h2 className="scroll-m-20 text-center text-2xl font-semibold py-8">
                Personal projects
            </h2>
            <Projects />
        </div>
    );
}
