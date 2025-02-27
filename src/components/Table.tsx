'use client';

import { useState } from 'react';

const data = [
    { state: 'AL', medianTaxRate: '0.41%', meanTaxRate: '0.40%', medianHomeValue: '$157,100', medianTaxesPaid: '$646' },
    { state: 'AK', medianTaxRate: '1.23%', meanTaxRate: '1.04%', medianHomeValue: '$282,800', medianTaxesPaid: '$3,464' },
    { state: 'AZ', medianTaxRate: '0.62%', meanTaxRate: '0.63%', medianHomeValue: '$265,600', medianTaxesPaid: '$1,648' },
    { state: 'AR', medianTaxRate: '0.62%', meanTaxRate: '0.64%', medianHomeValue: '$142,100', medianTaxesPaid: '$878' },
    { state: 'CA', medianTaxRate: '0.75%', meanTaxRate: '0.75%', medianHomeValue: '$573,200', medianTaxesPaid: '$4,200' },
    { state: 'CO', medianTaxRate: '0.51%', meanTaxRate: '0.55%', medianHomeValue: '$397,500', medianTaxesPaid: '$2,200' },
    { state: 'AL', medianTaxRate: '0.41%', meanTaxRate: '0.40%', medianHomeValue: '$157,100', medianTaxesPaid: '$646' },
    { state: 'AK', medianTaxRate: '1.23%', meanTaxRate: '1.04%', medianHomeValue: '$282,800', medianTaxesPaid: '$3,464' },
    { state: 'AZ', medianTaxRate: '0.62%', meanTaxRate: '0.63%', medianHomeValue: '$265,600', medianTaxesPaid: '$1,648' },
    { state: 'AR', medianTaxRate: '0.62%', meanTaxRate: '0.64%', medianHomeValue: '$142,100', medianTaxesPaid: '$878' },
    { state: 'CA', medianTaxRate: '0.75%', meanTaxRate: '0.75%', medianHomeValue: '$573,200', medianTaxesPaid: '$4,200' },
    { state: 'CO', medianTaxRate: '0.51%', meanTaxRate: '0.55%', medianHomeValue: '$397,500', medianTaxesPaid: '$2,200' },
];

const TaxTable = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full py-4 max-sm:text-[15px] max-w-sm overflow-auto">
            {/* Small Table Preview */}
            <div className="relative group border border-gray-300 w-full">
                <table className="min-w-full z-10">
                    <thead>
                        <tr className="bg-green-900 text-white">
                            <th className="px-4 py-2 text-center border-r-[1px]">State</th>
                            <th className="px-4 py-2 text-center border-r-[1px]">Median Effective Property Tax Rate</th>
                            <th className="px-4 py-2 text-center border-r-[1px]">Mean Effective Property Tax Rate</th>
                            <th className="px-4 py-2 text-center border-r-[1px]">Median Home Value</th>
                            <th className="px-4 py-2 text-center">Median Property Tax Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.slice(0, 3).map((row, index) => (
                            <tr key={index} className="odd:bg-green-50 even:bg-white">
                                <td className="px-4 text-center py-2 border-r-[1px]">{row.state}</td>
                                <td className="px-4 text-center py-2 border-r-[1px]">{row.medianTaxRate}</td>
                                <td className="px-4 text-center py-2 border-r-[1px]">{row.meanTaxRate}</td>
                                <td className="px-4 text-center py-2 border-r-[1px]">{row.medianHomeValue}</td>
                                <td className="px-4 text-center py-2">{row.medianTaxesPaid}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Button appears on hover */}
                <div className='opacity-0 absolute z-10 group-hover:opacity-100 top-0 right-0 left-0 bottom-0 bg-[#fff]/50 transition-all'>
                    <button
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded "
                        onClick={() => setIsOpen(true)}
                    >
                        View Full Table
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed  z-50 inset-0 bg-black bg-opacity-50 p-4 flex items-center justify-center ">
                    <div className="mx-auto w-[300px] h-[420px] bg-white p-2 rounded-lg shadow-lg relative">

                        {/* Sticky Header with Close Button */}
                        <div className="sticky top-0 bg-white z-50 flex justify-end p-2 border-b">
                            <button
                                className="bg-gray-400 text-white px-3 py-1 rounded"
                                onClick={() => setIsOpen(false)}
                            >
                                X
                            </button>
                        </div>

                        <h2 className="sm:text-lg text-xl font-bold mb-4">Property Tax Rates</h2>

                        {/* Scrollable Table */}
                        <div className="overflow-auto max-h-[320px]">
                            <table className="w-full border border-gray-300">
                                <thead className="bg-green-900 text-white sticky top-0 z-40">
                                    <tr>
                                        <th className="px-4 py-2 text-center border-r-[1px]">State</th>
                                        <th className="px-4 py-2 text-center border-r-[1px]">Median Tax Rate</th>
                                        <th className="px-4 py-2 text-center border-r-[1px]">Mean Tax Rate</th>
                                        <th className="px-4 py-2 text-centert border-r-[1px]">Median Home Value</th>
                                        <th className="px-4 py-2 text-center">Median Taxes Paid</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, index) => (
                                        <tr key={index} className="odd:bg-green-50 even:bg-white">
                                            <td className="px-4 text-center py-2 border-r-[1px]">{row.state}</td>
                                            <td className="px-4 text-center py-2 border-r-[1px]">{row.medianTaxRate}</td>
                                            <td className="px-4 text-center py-2 border-r-[1px]">{row.meanTaxRate}</td>
                                            <td className="px-4 text-center py-2 border-r-[1px]">{row.medianHomeValue}</td>
                                            <td className="px-4 text-center py-2">{row.medianTaxesPaid}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default TaxTable;
