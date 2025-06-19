import {Tooltip, TooltipContent, TooltipTrigger,} from '@/components/ui/tooltip';
import React from 'react';

interface PropsFromParent {
    children: React.ReactNode;
    asChild?: boolean;
    value: string;
}

const TooltipWrapper: React.FC<PropsFromParent> = ({
                                                       children,
                                                       asChild = true,
                                                       value,
                                                   }) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
            <TooltipContent>
                <p>{value}</p>
            </TooltipContent>
        </Tooltip>
    );
};

export default TooltipWrapper;
