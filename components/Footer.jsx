export default function Footer() {
    return (
        <div className="bg-zinc-100">
            <div className="container lg:grid lg:grid-cols-2 py-14">
                <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3">
                    <div>
                        <h2 className="pb-4 text-xl font-semibold">COMPANY</h2>
                        <div className="flex flex-col ">
                            <a className="py-1 hover:underline" href="/about">About Us</a>
                            <a className="py-1 hover:underline" href="/projects">Projects</a>
                            <a className="py-1 hover:underline" href="/gallery">Gallary</a>
                        </div>
                    </div>
                    <div>
                        <h2 className="pb-4 text-xl font-semibold">ADDRESS</h2>
                        <div className="flex flex-col text-gray-700">
                            <p>House no 43</p>
                            <p>Kumar Temple View Phase 2, behind</p>
                            <p>Gutte Anjeneta Swamy Temple Kodipalya Main Road</p>
                            <p>Kengeri, 560060</p>
                            <p>Phone: +91 95383 01496</p>
                            <a className="py-1 text-blue-600 hover:underline" href="https://goo.gl/maps/your-location-link" target="_blank" rel="noopener noreferrer">
                                View Location on Google Maps
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2 className="pb-4 text-xl font-semibold">CONNECT</h2>
                        <div className="flex flex-col ">
                            <a className="py-1 hover:underline" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a className="py-1 hover:underline" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a className="py-1 hover:underline" href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </div>
                    </div>
                </div>
                <div className="pt-4 text-center border-t-2 lg:pt-0 lg:text-left lg:border-0 lg:pl-20">
                    <p className="pb-4 text-xl font-semibold">STAY UPDATED</p>
                    <div className="relative lg:max-w-sm">
                        <input
                            className="w-full px-4 pr-20 border-2 border-gray-300 rounded-full h-14"
                            type="text"
                            placeholder="Email Address"
                        />
                        <button className="absolute h-10 px-3 text-sm text-white bg-black rounded-full top-2 right-2 hover:border-2 hover:border-black hover:bg-white hover:text-black">
                            Subscribe
                        </button>
                    </div>
                    <p className="pt-4 text-gray-500">
                        By subscribing to our newsletter, you agree to receive emails from us. Your personal data will be stored and processed in accordance with our Privacy Policy and you can unsubscribe at any time.
                    </p>
                </div>
            </div>

            {/* Copy Right */}
            <div className="py-10 bg-zinc-200">
                <div className="container text-center text-gray-500 lg:justify-between lg:flex">
                    <div className="pb-4 lg:pb-0">
                        <p>&copy;2024 Nest interior. All rights reserved</p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}
