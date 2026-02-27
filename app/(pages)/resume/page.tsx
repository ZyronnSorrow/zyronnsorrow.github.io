import { resumeLink } from "@/app/_data/resume";

export default function ResumePage() {
    return (
        <div className="flex flex-col items-center h-screen w-full">
            <div className="flex h-full w-full md:w-1/2">
            <iframe
                src={resumeLink}
                className="w-full p-4"
            />
            </div>
        </div>
    );
}
