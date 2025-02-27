import Image from "next/image";


const TestimonialsSection = () => {
    return (
        <section className="text-center py-16">
            <div className="container mx-auto ">
                <div className="w-full flex gap-6 flex-col-reverse px-4 sm:flex-row items-center justify-between">
                    <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
                        <Image
                        width={200}
                        height={500}
                            src="/still-quote-Arian.webp"
                            alt="Testimonial"
                            className="rounded-lg shadow-lg mx-auto max-sm:w-[95%]"
                        />
                        <div className="flex justify-center space-x-2 mt-4 text-[9px] max-sm:hidden">
                            <button className="px-4 py-2 border rounded-full text-black/60">Arlan</button>
                            <button className="px-4 py-2 border rounded-full text-black/60">Amanda</button>
                            <button className="px-4 py-2 border rounded-full text-black/60">Paul</button>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 text-left">
                        <h1 className="text-[35px] sm:text-4xl font-bold mb-4 text-black">Find out why <br/>we’re better.</h1>
                        <div className="flex flex-col items-start">
                            <button className="max-sm:w-full bg-green-900 text-[9px] max-sm:text-sm text-white px-6 py-3 rounded-full shadow-md hover:bg-green-800">
                                See all our stories
                            </button>
                            <p className="max-sm:w-full max-sm:text-sm mt-2 text-gray-600 text-center text-[9px]"><span className="text-black font-semibold mr-2">⭐ Trustpilot</span> Excellent 4.4 out of 5</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
