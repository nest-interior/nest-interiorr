import Image from "next/image";
import logo from "../public/logo.png";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <div className="sticky inset-x-0 top-0 z-10 bg-opacity-60 bg-zinc-100 backdrop-blur-lg">
            <div className="container flex items-center justify-between py-4">
                {/* Adjusted logo size */}
                <Image
                    src={logo}
                    alt="Logo"
                    className="w-auto h-12" // Adjust height and auto-scale width
                    priority // For optimized loading of the logo
                />
                <Navigation />
            </div>
        </div>
    );
}
