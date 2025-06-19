'use client'
import React, { useState } from 'react';

type ExperienceItem = {
    logo: string;
    date: string;
    company: string;
    role: string;
    points: string[];
};

const experiences: ExperienceItem[] = [
    {
        logo: '/logos/itt.png',
        date: 'Apr 2023 - Jul 2023',
        company: 'In Time Tec',
        role: 'Senior Software Engineer',
        points: ['Led backend service refactoring for performance boost'],
    },
    {
        logo: '/logos/maximil.png',
        date: 'Oct 2021 - Apr 2023',
        company: 'Maximil Labs',
        role: 'Senior Software Developer',
        points: ['Developed scalable React apps for enterprise clients'],
    },
    {
        logo: '/logos/oracle.png',
        date: 'Sep 2019 - Sep 2021',
        company: 'Oracle Solution Services (India)',
        role: 'Staff Consultant',
        points: ['Worked on Oracle Cloud ERP integrations'],
    },
    {
        logo: '/logos/asm.png',
        date: 'Oct 2017 - Aug 2019',
        company: 'ASM Enterprise Solutions',
        role: 'Associate Consultant',
        points: ['Supported SAP business processes for clients'],
    },
];

// Fallback logo component
const LogoWithFallback = ({ src, alt }: { src: string; alt: string }) => {
    const [error, setError] = useState(false);

    return error ? (
        <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
            {alt
                .split(' ')
                .map((word) => word[0])
                .join('')
                .toUpperCase()
                .slice(0, 2)}
        </div>
    ) : (
        <img
            src={src}
            alt={alt}
            className="w-10 h-10 object-contain rounded-full shrink-0 bg-white p-1"
            onError={() => setError(true)}
        />
    );
};

export default function ExperienceTimeline() {
    return (
        <div className="max-w-3xl mx-auto space-y-6 p-4 border rounded-lg bg-zinc-900 text-white">
            <div className="relative border-l border-gray-600 pl-6">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="relative flex items-start space-x-4 mb-6">
                        {/* Dot + logo wrapper */}
                        <div className="absolute -left-[1.35rem] top-1">
                            <LogoWithFallback src={exp.logo} alt={exp.company} />
                        </div>

                        {/* Content */}
                        <div>
                            <div className="text-sm text-zinc-400">{exp.date}</div>
                            <div className="font-semibold text-lg">{exp.company}</div>
                            <div className="text-sm text-zinc-300 italic">{exp.role}</div>
                            <ul className="mt-2 list-disc list-inside text-zinc-200 space-y-1">
                                {exp.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
