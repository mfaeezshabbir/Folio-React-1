import React from "react";
import { RiTimerFlashFill } from "react-icons/ri";

interface Event {
    id: number;
    date: string;
    title: string;
    description: string;
}

interface TimelineProps {
    events: Event[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
    return (
        <div className="container mx-auto px-4">
            <div className="relative wrap overflow-hidden">
                <div className="bg-pri absolute h-full w-1"></div>
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="mb-8 flex flex-col items-center w-full space-y-3">
                        <div className="w-full flex items-center">
                            <div className="w-24 flex items-center">
                                <div className="w-1/2 h-1 bg-gradient-to-r from-pri to-sec"></div>
                                <div className="p-1 rounded-full bg-sec flex justify-center items-center">
                                    <RiTimerFlashFill className={`h-6 w-6 text-txt hover:text-bg`} />
                                </div>
                            </div>
                            <div className="z-20 flex items-center justify-between space-x-3 w-60 shadow-xl rounded-full">
                                <h1 className="font-semibold text-lg text-txt whitespace-nowrap">
                                    {event.date}
                                </h1>
                                <div className="border-0 h-1 bg-gradient-to-r from-sec to-pri w-full hidden lg:block"></div>
                            </div>
                        </div>
                        <div className="w-3/4 ">
                            <div className="flex flex-col justify-center items-start rounded-xl shadow-3xl shadow-pri px-6 py-4 border-2 border-bor ">
                                <h3 className="mb-3 font-bold text-primary">{event.title}</h3>
                                <p className="text-bor">{event.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
