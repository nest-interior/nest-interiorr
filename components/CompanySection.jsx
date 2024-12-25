import { FaPaintRoller, FaToolbox, FaLightbulb, FaCouch } from "react-icons/fa";

export default function CompanySection() {
    return (
        <div className="py-12 bg-zinc-100">
            <p className="py-4 text-lg font-medium text-center text-gray-500">
                Expertise in Interior Design & Related Services
            </p>
            <div className="container grid grid-cols-2 gap-8 lg:grid-cols-4 justify-items-center">
                <div className="flex flex-col items-center gap-4 text-center">
                    <FaPaintRoller className="text-6xl text-gray-600" />
                    <p className="text-lg font-medium text-gray-700">Painting</p>
                </div>
                <div className="flex flex-col items-center gap-4 text-center">
                    <FaToolbox className="text-6xl text-gray-600" />
                    <p className="text-lg font-medium text-gray-700">Plumbing</p>
                </div>
                <div className="flex flex-col items-center gap-4 text-center">
                    <FaLightbulb className="text-6xl text-gray-600" />
                    <p className="text-lg font-medium text-gray-700">Electrical Work</p>
                </div>
                <div className="flex flex-col items-center gap-4 text-center">
                    <FaCouch className="text-6xl text-gray-600" />
                    <p className="text-lg font-medium text-gray-700">Furniture</p>
                </div>
            </div>
        </div>
    );
}
