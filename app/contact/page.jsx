export default function Contact() {
    return (
        <div className="bg-gray-50 py-16 px-8 lg:px-32">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 lg:p-16">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 lg:text-5xl">
                    Get in Touch
                </h1>
                <p className="mt-4 text-lg text-center text-gray-600">
                    We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to give feedback, feel free to reach out.
                </p>

                <div className="mt-12 space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 10h11M9 21h6m0-6h5m-5 0l2.5-2.5M12 3v1.5m0 0l2.5 2.5m-2.5-2.5L9.5 7"
                                />
                            </svg>
                        </div>
                        <p className="text-lg font-medium text-gray-700">
                            <span className="font-bold text-gray-900">Phone:</span> +91 9538301496
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16.588 3.25a4.125 4.125 0 015.737 5.738l-.378.378a8.383 8.383 0 01-.915.801c-.332.259-.668.505-1.008.74a4.207 4.207 0 01-.915.603c-1.632.847-3.642 1.312-5.909 1.312a13.207 13.207 0 01-5.273-1.047 3.375 3.375 0 01-.914-.604 4.295 4.295 0 01-1.008-.741c-.332-.261-.668-.507-.916-.801L3 9a8.383 8.383 0 01-.378-.377A4.125 4.125 0 016.6 3.25"
                                />
                            </svg>
                        </div>
                        <p className="text-lg font-medium text-gray-700">
                            <span className="font-bold text-gray-900">Email:</span> kumarabgn@nestinteriors.co
                        </p>
                    </div>

                    <div className="mt-8">
                        <form className="space-y-4">
                            <div className="flex flex-col">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-semibold text-gray-600"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-gray-600"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-semibold text-gray-600"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"
                                    placeholder="Write your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-2 text-lg font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
