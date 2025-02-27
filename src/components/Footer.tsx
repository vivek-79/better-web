'use client'

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const sections = [
    {
        title: 'Better',
        description: 'Better is a family of companies serving all your homeownership needs.',
        items: [
            { label: 'Mortgage', description: 'Apply 100% online with expert support.' },
            { label: 'Real Estate', description: 'Connect with a local real estate agent.' },
            { label: 'Cover', description: 'Save on insurance for home, auto, life, and more.' },
            { label: 'Inspect', description: 'Get repair estimates and a 100-day guarantee.' },
            { label: 'Settlement Services', description: 'Transparent title insurance rates.' }
        ]
    },
    {
        title: 'Resources',
        items: [
            { label: 'Home affordability calculator' },
            { label: 'Mortgage calculator' },
            { label: 'Free mortgage calculator' },
            { label: 'Mortgage calculator with taxes' },
            { label: 'Mortgage calculator with PMI' },
            { label: 'Rent vs Buy calculator' },
            { label: 'HELOC payment calculator' },
            { label: 'Buy a home' },
            { label: 'Sell a home' },
            { label: 'Get home inspection' }
        ]
    },
    {
        title: 'Company',
        items: [
            { label: 'About Us' },
            { label: 'Careers' },
            { label: 'Media' },
            { label: 'Partner With Us' },
            { label: 'Learning Center' },
            { label: 'FAQs' },
            { label: 'Investor Relations' }
        ]
    },
    {
        title: 'Contact Us',
        items: [
            { label: 'Email', description: 'hello@better.com' },
            { label: 'Phone', description: '415-523-8837' },
            { label: 'FAQ' },
            { label: 'Glossary' }
        ]
    }
];

const Footer = () => {
    return (
        <footer className="bg-white text-black py-10 px-6 border-t border-gray-300">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h3 className={`text-md font-bold ${index==0 ? 'text-green-800 text-[20px] max-sm:text-[25px]':'sm:text-[13px] text-[20px] mt-6 text-[#000]/70'}`}>{section.title}</h3>
                            {section.description && <p className="text-[10px] max-sm:text-[14px] text-gray-600 mt-2">{section.description}</p>}
                            <ul className="mt-2 space-y-1 text-sm font-semibold max-sm:text-[20px]">
                                {section.items.map((item, idx) => (
                                    <li key={idx} className="hover:underline flex flex-col items-start  gap-4">
                                        
                                        <span className={`${index == 0 ? 'text-gray-300 mb-2 mt-2':'sm:text-[9px] text-[15px] text-gray-500'}`}>{index == 0 && (<span className='text-green-800 mr-1'>Better</span>)}{item.label}</span>
                                        
                                        {item.description && <span className="text-gray-500 font-normal sm:text-[9px] text-[14px]"> {item.description}</span>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className=" mt-20 pt-4 flex flex-col text-sm">
                   
                    <div className="flex gap-4 w-full">
                        <Link href="#"><FaFacebookF /></Link>
                        <Link href="#"><FaInstagram /></Link>
                        <Link href="#"><FaLinkedinIn /></Link>
                    </div>
                    <p className='mt-4 text-[9px]'>© 2025 Better Home & Finance Holding Company. All rights reserved.</p>
                    <p className='mt-4 text-[9px]'>Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access</p>
                    <p className='mt-4 text-[9px]'>Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s license numbers. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
