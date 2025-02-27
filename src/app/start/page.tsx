import Image from 'next/image';
import { MdCall } from 'react-icons/md';

export default function Start() {
    return (
        <div className="min-h-screen mx-auto max-w-3xl flex flex-col items-center px-4 md:px-0">
           
           
            <div className='w-full mt-6 flex flex-row justify-between items-center'>
                <div>
                    <Image src="/better-mortgage-logo.svg" alt='logo' width={90} height={50} className='clip-half ' />
                    <Image src="/better-mortgage-logo.svg" alt='logo' width={80} height={50} className='clip-half1 -ml-[34px] ' />
                </div>
                <div className='flex gap-2 items-center'>
                    <span className='bg-green-200 p-1 rounded-full'><MdCall /></span>
                    <p className='text-[9px] hidden md:block '>Need help? Call (345) 456846</p>
                </div>
            </div>
            {/* Profile Image */}
            <div className="relative w-full h-8   ">
               
                <Image  src="/human.webp" width={32} height={32} alt="Betsy" className='w-8 h-8 z-50 rounded-full border-2 border-gray-300 mx-auto object-cover' />
            
                <hr className='absolute h-[3px] bg-gray-300 w-full top-1/2 -z-10 rounded-full' />
            </div>

            {/* Greeting Section */}
            <h1 className="text-2xl font-semibold mt-4">Hi, I&apos;m Betsy!</h1>
            <p className="text-lg text-gray-700">What can I help you with?</p>

            {/* Options */}
            <div className="mt-6 space-y-3 w-full max-w-md">
                {['Buying a home', 'Refinance my mortgage', 'Get cash from my home'].map((text, index) => (
                    <button
                        key={index}
                        className="flex items-center space-x-3 w-full py-3 px-4 border rounded-md shadow-sm hover:bg-gray-100 transition"
                    >
                        <span className="text-green-700">🏠</span>
                        <span className="text-gray-800 font-medium">{text}</span>
                    </button>
                ))}
            </div>

            {/* Statistics */}
            <div className="mt-8 flex space-x-8 text-center">
                <div>
                    <p className="text-2xl font-semibold">$100B</p>
                    <p className="text-sm text-gray-600">home loans funded entirely online</p>
                </div>
                <div>
                    <p className="text-2xl font-semibold">400K</p>
                    <p className="text-sm text-gray-600">Customers who chose a Better Mortgage</p>
                </div>
            </div>

            {/* Unlock Benefits */}
            <div className="mt-8 bg-gray-100 p-6 rounded-lg text-sm text-gray-700 max-w-md text-center">
                <p className="mb-2">After a few questions, you&apos;ll unlock:</p>
                <ul className="space-y-1">
                    <li>💡 Custom mortgage rates
                    </li>
                    <li>🌟 Exclusive offers</li>
                    <li>📈 A personalized dashboard</li>
                </ul>
            </div>
        </div>
    );
}
