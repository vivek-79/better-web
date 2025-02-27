import Image from 'next/image';


const timelineData = [
    { year: 2014, event: "After Vishal Garg first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all." },
    { year: 2015, event: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!)." },
    { year: 2016, event: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors." },
    { year: 2017, event: "Better expands into the real estate market with Better Real Estate." },
    { year: 2018, event: "Better Mortgage partners with Ally Bank to build Ally powered by Better." },
    { year: 2019, event: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers." },
    { year: 2021, event: "Better acquires Trussle — The UK most innovative online mortgage broker." },
    { year: 2022, event: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online." },
    { year: 2023, event: "Better Mortgage launches One Day Mortgage: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days." },
    { year: 2024, event: "Newly added event based on uploaded file..." },
    { year: 'Today', event: "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.", buttonText: 'Get Started' },
];
export default function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">


            {/* Main Section */}

            <section className="bg-[#f9f8f6] w-full pt-72 px-6 text-center">
                <h2 className="text-green-700 text-sm font-semibold">Our mission</h2>
                <h1 className="text-2xl font-semibold max-w-3xl mx-auto mt-4">
                    We&apos;re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
                </h1>

                <div className="mt-80 mb-6 flex flex-col sm:flex-row items-center max-w-5xl mx-auto gap-10">
                    {/* Text Section */}
                    <div className="md:w-1/2 text-left">
                        <h3 className="text-lg font-semibold">The status quo is broken</h3>
                        <p className="text-gray-600 mt-4 max-w-[270px] text-[9px]">
                            The traditional processes around homeownership are opaque and stressful. Fees aren&apos;t transparent and some are simply
                            outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It&apos;s a system set up
                            to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
                        </p>
                        <button className="mt-6 px-4 py-2 bg-green-800 text-white font-medium text-[9px] rounded hover:bg-green-800 transition">
                            Read Vishal’s story
                        </button>
                    </div>

                    {/* Video Section */}
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative">
                            <img
                                src="/vishal.jpg"
                                alt="Vishal Garg"
                                className="w-full max-w-[250px] h-[200px] object-cover rounded-lg shadow-lg"
                            />
                            <button className="absolute inset-0 flex items-center justify-center">
                                <svg
                                    className="w-12 h-12 text-white bg-black bg-opacity-50 rounded-full p-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-4.576 2.622A1 1 0 019 12.87V9.132a1 1 0 011.576-.832l4.576 2.622a1 1 0 010 1.736z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Timeline Section */}
            <section className="w-full bg-green-800 text-white p-6 text-center">
                <h2 className="text-2xl font-bold">How we're changing things</h2>
                <p className="text-sm mt-2">
                    Homeownership is tough and full of uncertainty. We&apos;re using technology to make it faster and more efficient.
                </p>
            </section>
            <div className="max-w-4xl mx-auto p-4">
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold">Backed by</h2>
                    <div className="flex justify-center items-center space-x-4 mt-4">
                        <Image src="/ally.webp" alt="SoftBank" className="h-8" width={100} height={32} />
                        <Image src="/soft.webp" alt="Ally" className="h-8" width={100} height={32} />
                        <Image src="/citi.webp" alt="Citi" className="h-8" width={100} height={32} />
                        <Image src="/ping.webp" alt="Goldman Sachs" className="h-8" width={100} height={32} />
                    </div>
                </div>

                <h2 className="text-center text-2xl font-bold mb-6">Company Timeline</h2>
                <div className="max-w-5xl mx-auto p-4">
                    
                    <div className="relative flex flex-col items-center">
                        {timelineData.map((item, index) => (
                            <div key={index} className="relative flex flex-col items-center w-full my-6">
                                <div className="flex items-center justify-center py-2 px-6 bg-[#017848] text-white font-bold rounded-full">
                                    {item.year}
                                </div>
                                <div className={`relative flex flex-col px-2 md:px-10 py-4 md:py-10 text-black/50 bg-[#DFE0DC] rounded-md shadow-md w-1/2 text-left mt-2 ${index % 2 === 0 ? 'self-start -ml-4' : 'self-end -mr-4'}`}>
                                    <p>{item.event}</p>

                                    {item?.buttonText && (
                                        <button className=" mx-auto mt-4 py-2 px-6 bg-[#017848] text-white font-bold rounded-full">
                                            {item.buttonText}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div className="absolute rounded-full w-1 -z-10 bg-gray-200 top-8 bottom-0 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}