'use client';
import Cards from '@/components/Cards';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import {useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDownLong } from 'react-icons/fa6';

interface HomePriceSliderProps {
    value: number;
    onChange: (value: number) => void;
}
export default function MortgageCalculator() {


   

    const [AddDetail,setaddDetail]= useState(false)
    const { control, watch, setValue } = useForm({
        defaultValues: {
            zip:758969,
            homePrice: 626900,
            downPayment: 125380,
            interestRate: 6.5,
            loanLength: 30,
            propertyTaxes: 311,
            insurance: 341,
            hoaFees: 202,
            water: 25,
            gas: 25,
            internet: 50,
            includeUtilities: false,
            ownerInsurance:300,
            monthlyPayment:50000
        },
    });

    const values = watch();
    const loanAmount = values.homePrice - values.downPayment;
    const monthlyInterest = values.interestRate / 100 / 12;
    const numPayments = values.loanLength * 12;
    const principalInterest =
        loanAmount && monthlyInterest && numPayments
            ? (loanAmount * monthlyInterest) /
            (1 - Math.pow(1 + monthlyInterest, -numPayments))
            : 0;

    const utilitiesTotal = values.water + values.gas + values.internet;
    const monthlyPayment =
        principalInterest +
        values.propertyTaxes +
        values.insurance +
        values.hoaFees +
        (values.includeUtilities ? utilitiesTotal : 0);

    const [showUtilities, setShowUtilities] = useState(true);

    const min = 50000;
    const max = 1000000;
    const percentage = ((values.monthlyPayment - min) / (max - min)) * 100;

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue("monthlyPayment", Number(e.target.value));
        setValue("homePrice", Number(e.target.value)*4)
    };

    return (
        <main className=" bg-[#F0F7F1] w-full overflow-x-hidden  ">
            <NavBar/>
            <div className='w-fullmax-w-3xl bg-[#F0F7F1] sm:px-6 px-2 pt-20 '>
                <div className=" mx-auto max-w-3xl text-black">
                    <h1 className="text-2xl font-bold">Mortgage Calculator</h1>
                    <p className='text-gray-400 text-[9px] mt-4'>Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.</p>
                    <div className='flex  w-full items-center justify-between mt-4'>
                        <div className='w-1/3'>
                            <Controller name="homePrice" control={control} render={({ field }) => (
                                <div className='flex flex-col  w-[]'>
                                    <label className="text-[9px]">
                                        Home Price

                                    </label>
                                    <div className='flex py-2 w-[140px] text-2xl bg-white pl-2 mt-4 rounded-md border-[2px] border-black'>
                                        <span className='font-bold'>$</span><input {...field} type="number" className="outline-none  bg-transparent font-bold " />
                                    </div>
                                </div>
                            )} />

                        </div>

                            {/* Add detail */}

                            {AddDetail && (
                            <div className="pb-12 z-50 fixed bottom-0 right-0 left-0 sm:hidden flex-col gap-4 mt-4 justify-between items-center bg-white pt-6">
                                <div className='px-4 z-50 w-full mt-4 mb-4 flex justify-end'>
                                    <button onClick={()=>setaddDetail(false)} className=' bg-gray-400 text-white text-[20px] px-4 py-1 font-semibold rounded-md'>X</button>
                                </div>
                                <div className='flex px-4 flex-col w-full gap-4 justify-between items-center'>
                                    <div className='max-sm:self-start w-full'>
                                        <Controller name="zip" control={control} render={({ field }) => (
                                            <div className=' border-[1px] border-black p-2 w-full flex flex-col rounded-md bg-[#fff]'>
                                                <label className="sm:text-[8px] max-sm:text-gray-500">
                                                    Zip code
                                                </label>
                                                <div className='flex'>
                                                    <input {...field} type="number" className="outline-none sm:text-[8px] max-sm:font-semibold max-sm:text-[22px]" />
                                                </div>

                                            </div>
                                        )} />
                                    </div>
                                    <div className='max-sm:self-start w-full'>
                                        <Controller name="downPayment" control={control} render={({ field }) => (
                                            <div className=' border-[1px] border-black p-2 w-full flex flex-col rounded-md bg-[#fff]'>
                                                <label className="sm:text-[8px] max-sm:text-gray-500">
                                                    Down Payment
                                                </label>
                                                <div className='flex'>
                                                    <span className='sm:text-[8px] max-sm:font-semibold max-sm:text-[22px]'>$</span>
                                                    <input {...field} type="number" className="outline-none sm:text-[8px] max-sm:font-semibold max-sm:text-[22px]" />
                                                </div>

                                            </div>
                                        )} />
                                    </div>
                                </div>
                                <div className='flex flex-col w-full px-4 mt-2 gap-4 justify-between items-center'>
                                    <div className='max-sm:self-start w-full'>
                                        <Controller name="interestRate" control={control} render={({ field }) => (
                                            <div className=' border-[1px] border-black p-2 w-full flex flex-col rounded-md bg-[#fff]'>
                                                <label className="sm:text-[8px] max-sm:text-gray-500">
                                                    Interest rate
                                                </label>
                                                <div className='flex'>
                                                    <span className='sm:text-[8px] max-sm:font-semibold max-sm:text-[22px]'>$</span>
                                                    <input {...field} type="number" className="outline-none sm:text-[8px] max-sm:font-semibold max-sm:text-[22px]" />
                                                </div>

                                            </div>
                                        )} />
                                    </div>
                                    <div className='max-sm:self-start w-full'>
                                        <Controller name="loanLength" control={control} render={({ field }) => (
                                            <div className=' border-[1px] border-black p-2 w-full flex flex-col rounded-md bg-[#fff]'>
                                                <label className="sm:text-[8px] max-sm:text-gray-500">
                                                    Length of loan
                                                </label>
                                                <div className='flex'>
                                                    <span className='sm:text-[8px] max-sm:font-semibold max-sm:text-[22px]'>$</span>
                                                    <input {...field} type="number" className="outline-none sm:text-[8px] max-sm:font-semibold max-sm:text-[22px]" />
                                                </div>

                                            </div>
                                        )} />
                                    </div>
                                </div>

                                <div className='px-4 w-full mt-20'>
                                    <button onClick={() => setaddDetail(false)} className='py-5 w-full  bg-green-700 text-white text-[20px] font-semibold rounded-md'>Get approaved</button>
                                </div>
                            </div>

                           
                            )}
                        <div className='w-1/3'>
                            <p className='text-black text-[9px]'>Monthly payment</p>
                            <p className='mt-4 text-2xl font-semibold'>${values.monthlyPayment}/mo</p>
                        </div>
                        <div >
                            <button className='py-2 hidden sm:block px-4 bg-green-800 text-white text-[9px] font-semibold rounded-md'>Get approaved</button>
                        </div>
                    </div>
                    <div className="relative w-full h-6 flex items-center mt-4">
                        {/* Background Track */}
                        <div className="w-full h-[2px] bg-gray-300 relative">
                            {/* Progress Bar */}
                            <div className="absolute h-full bg-black" style={{ width: `${percentage}%` }}></div>
                        </div>

                        {/* Thumb */}
                        <div
                            className="absolute w-4 h-4 bg-black rounded-full top-1/2 transform -translate-y-1/2"
                            style={{ left: `calc(${percentage}% - 8px)` }}
                        ></div>

                        {/* Hidden Input */}
                        <input
                            type="range"
                            min={min}
                            max={max}
                            value={values.monthlyPayment}
                            onChange={handleSliderChange}
                            className="absolute w-full opacity-0 cursor-pointer"
                        />
                    </div>
                    <div >
                        <button className='py-4 w-full block mt-4 sm:hidden px-4 bg-green-800 text-white text-[16px] font-semibold rounded-md'>Get approaved</button>
                    </div>
                    <div >
                        <button onClick={()=>setaddDetail(true)} className='py-4 w-full block mt-4 sm:hidden px-4 text-gray-600 border-[1px] border-[#000]/70 text-[16px] font-semibold rounded-md'>+ Add Details</button>
                    </div>
                    <div className="pb-12 hidden sm:flex flex-row gap-4 mt-4 justify-between items-center">
                        <div className='flex flex-col max-sm:w-1/2 sm:flex-row gap-4 justify-between items-center'>
                            <div className='max-sm:self-start w-full'>
                                <Controller name="zip" control={control} render={({ field }) => (
                                    <div className=' border-[1px] border-black p-2 w-full flex flex-col rounded-md bg-[#fff]'>
                                        <label className="text-[8px]">
                                            Zip code
                                        </label>
                                        <input {...field} type="number" className="outline-none text-[8px]" />

                                    </div>
                                )} />
                            </div>
                            <div className='max-sm:self-start w-full'>
                                <Controller name="downPayment" control={control} render={({ field }) => (
                                    <div className=' border-[1px] border-black p-2 w-full flex flex-col rounded-md bg-[#fff]'>
                                        <label className="text-[8px]">
                                            Down Payment
                                        </label>
                                        <input {...field} type="number" className="outline-none text-[8px]" />

                                    </div>
                                )} />
                            </div>
                        </div>
                        <div className='flex flex-col max-sm:w-1/2 sm:flex-row gap-4 justify-between items-center'>
                            <div className='max-sm:self-start w-full'>
                                <Controller name="interestRate" control={control} render={({ field }) => (
                                    <div className=' border-[1px] border-black p-2 w-full flex flex-col rounded-md bg-[#fff]'>
                                        <label className="text-[8px]">
                                            Interest rate
                                        </label>
                                        <input {...field} type="number" className="outline-none text-[8px]" />

                                    </div>
                                )} />
                            </div>
                            <div className='max-sm:self-start w-full'>
                                <Controller name="loanLength" control={control} render={({ field }) => (
                                    <div className=' border-[1px] border-black p-2 w-full flex flex-col rounded-md bg-[#fff]'>
                                        <label className="text-[8px]">
                                            Length of loan
                                        </label>
                                        <input {...field} type="number" className="outline-none text-[8px]" />

                                    </div>
                                )} />
                            </div>
                        </div>
                    </div>
                    



                    
                </div>
                
            </div>
            <section className='w-full bg-[#FFFDFA]  text-black px-4'>
                <div className='max-w-3xl mx-auto flex flex-col justify-between sm:flex-row gap-8'>

                    <div className='sm:w-1/2 w-full'>
                        <h2 className="sm:text-[9px] text-[20px] mt-6">Monthly Payment breeakdown <br /><span className='sm:mt-4 mt-6 sm:text-xl text-4xl font-semibold'>${Number(monthlyPayment || 0).toFixed(2)}/mo</span></h2>

                        <div className="relative sm:h-10 h-16 rounded-lg overflow-hidden mt-4 flex">
                            <div className="h-full bg-green-800 rounded-full" style={{ width: `${monthlyPayment ? (principalInterest / monthlyPayment) * 100 : 0}%` }}></div>
                            <div className="h-full bg-purple-500 rounded-full" style={{ width: `${monthlyPayment ? (values.propertyTaxes / monthlyPayment) * 100 : 0}%` }}></div>
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: `${monthlyPayment ? (values.insurance / monthlyPayment) * 100 : 0}%` }}></div>
                            <div className="h-full bg-orange-400 rounded-full" style={{ width: `${monthlyPayment ? (values.hoaFees / monthlyPayment) * 100 : 0}%` }}></div>
                        </div>
                    </div>

                    <div className='flex flex-col sm:w-1/2 w-full'>


                        <div className="mt-4 flex flex-col gap-4 sm:text-[9px]">
                            <Controller name="interestRate" control={control} render={({ field }) => (
                                <div className='flex  justify-between'>
                                    <label className='flex items-center h-full sm:text-[9px]'>
                                        <span className='w-1 h-full mr-1 bg-green-800'></span>
                                        Principle & interest

                                    </label>
                                    <div className='flex w-1/3 py-2'>
                                        <span>$</span><input {...field} type="number" className="outline-none  bg-transparent" />
                                    </div>
                                </div>
                            )} />
                            <Controller name="propertyTaxes" control={control} render={({ field }) => (
                                <div className=' flex  justify-between'>
                                    <label className='flex  items-center h-full sm:text-[9px]'>
                                        <span className='w-1 h-full mr-1 bg-green-400'></span>
                                        Property taxes

                                    </label>
                                    <div className='w-1/3 py-2 rounded-md border-2 hover:border-black self-end flex  h-full items-center justify-center gap-1 bg-white px-2'>
                                        <p>$</p>
                                        <input type="number" placeholder='100' className="outline-none w-full sm:text-[9px]" />
                                    </div>
                                </div>
                            )} />
                            <Controller name="ownerInsurance" control={control} render={({ field }) => (
                                <div className=' flex  justify-between'>
                                    <label className='flex  items-center h-full sm:text-[9px]'>
                                        <span className='w-1 h-full mr-1 bg-blue-400'></span>
                                        Homeowners insurance

                                    </label>
                                    <div className='w-1/3 py-2 rounded-md border-2 hover:border-black self-end flex  h-full items-center justify-center gap-1 bg-white px-2'>
                                        <p>$</p>
                                        <input type="number" placeholder='100' className="outline-none w-full sm:text-[9px]" />
                                    </div>
                                </div>
                            )} />
                            {/* hoaFees */}
                            <Controller name="hoaFees" control={control} render={({ field }) => (
                                <div className=' flex  justify-between'>
                                    <label className='flex  items-center h-full sm:text-[9px]'>
                                        <span className='w-1 h-full mr-1 bg-yellow-400'></span>
                                        HOA fees

                                    </label>
                                    <div className='w-1/3 py-2 rounded-md border-2 hover:border-black self-end flex  h-full items-center justify-center gap-1 bg-white px-2'>
                                        <p>$</p>
                                        <input type="number" placeholder='100' className="outline-none w-full sm:text-[9px]" />
                                    </div>
                                </div>
                            )} />
                            <div className=' flex  justify-between'>
                                <label className='flex  items-center h-full sm:text-[9px]'>
                                    <span className='w-1 h-full mr-1 bg-red-400'></span>
                                    HOA fees

                                </label>
                                <div className='w-1/3 self-end flex h-full items-center justify-center gap-1  px-2'>
                                    <input type="number" placeholder='100' className="outline-none w-full sm:text-[9px] bg-transparent" />
                                    <button className=" text-[10px]" onClick={() => setShowUtilities(!showUtilities)}>
                                        {showUtilities ? <FaArrowUp /> : <FaArrowDownLong />}
                                    </button>
                                </div>
                            </div>
                        </div>


                        {showUtilities && (
                            <div className="mt-4 flex flex-col gap-4 ml-2">
                                <Controller name="water" control={control} render={({ field }) => (
                                    <div className=' flex  justify-between sm:text-[9px]'>
                                        <label className='flex  items-center h-full sm:text-[9px]'>
                                            Water/sewer

                                        </label>
                                        <div className='w-1/3 py-2 rounded-md border-2 hover:border-black self-end flex  h-full items-center justify-center gap-1 bg-white px-2'>
                                            <p>$</p>
                                            <input type="number" placeholder='100' className="outline-none w-full sm:text-[9px]" />
                                        </div>
                                    </div>
                                )} />
                                <Controller name="gas" control={control} render={({ field }) => (
                                    <div className=' flex  justify-between sm:text-[9px]'>
                                        <label className='flex  items-center h-full sm:text-[9px]'>
                                            Gas

                                        </label>
                                        <div className='w-1/3 py-2 rounded-md border-2 hover:border-black self-end flex  h-full items-center justify-center gap-1 bg-white px-2'>
                                            <p>$</p>
                                            <input type="number" placeholder='100' className="outline-none w-full sm:text-[9px]" />
                                        </div>
                                    </div>
                                )} />
                                <Controller name="internet" control={control} render={({ field }) => (
                                    <div className=' flex  justify-between sm:text-[9px]'>
                                        <label className='flex  items-center h-full sm:text-[9px]'>
                                            Internate

                                        </label>
                                        <div className='w-1/3 py-2 rounded-md border-2 hover:border-black self-end flex  h-full items-center justify-center gap-1 bg-white px-2'>
                                            <p>$</p>
                                            <input type="number" placeholder='100' className="outline-none w-full sm:text-[9px]" />
                                        </div>
                                    </div>
                                )} />
                                <Controller name="includeUtilities" control={control} render={({ field }) => (
                                    <div className=' flex self-start gap-1  justify-between sm:text-[9px]'>


                                        <input checked={field.value} onChange={(e) => setValue('includeUtilities', e.target.checked)} type="checkbox" placeholder='100' className="outline-none  sm:text-[9px]" />

                                        <label className='flex  items-center h-full sm:text-[9px]'>
                                            Include utilities in payment

                                        </label>

                                    </div>
                                )} />
                            </div>
                        )}

                    </div>
                   
                </div>
                <hr className='w-full max-w-3xl mx-auto h-[1px] bg-gray-400 mt-10' />
                <section className='mt-6 max-w-3xl mx-auto bg-transparent flex flex-col justify-center'>
                    <div>
                        <h2 className='font-semibold max-sm:text-[23px] text-[#000]/70'>How does a mortgage calculator help me?</h2>
                        <p className='sm:text-[9px]  text-gray-500 mt-6 text-left'>When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.</p>
                    </div>

                    <hr className='w-full h-[0.5px] bg-gray-400 mt-10 mb-6' />
                    <div>
                        <h2 className='font-semibold max-sm:text-[23px] text-[#000]/70'>How much monthly mortgage payment can I afford?</h2>
                        <p className='sm:text-[9px] text-gray-500 mt-6 text-left'>Lenders determine how much you can afford on a monthly housing payment by calculating your debt-to-income ratio (DTI). The maximum DTI you can have in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included.</p>
                        <p className='sm:text-[9px] text-gray-500 mt-2 text-left'>Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It’s most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.</p>
                    </div>

                    <div className=' w-full py-2'>

                        <div className='mx-auto w-full max-w-sm  text-gray-500'>
                            <p className='sm:text-[9px] text-gray-500 mt-2 mb-2 center'>Formula for calculating your debt-to-income (DTI) ratio:</p>
                            <Image src="/dti-formula.jpg" alt='dti-formula' height={50} width={300} className='w-full max-w-[430px] mx-auto' />
                            <p className='sm:text-[9px] text-gray-500 mt-2 mb-2 text-left'>Here’s an example of what calculating your DTI might look like:</p>
                            <Image src="/dti-example.jpg" alt='dti-example' height={50} width={200} className='w-full max-w-[430px] h-[280px]' />
                        </div>
                    </div>

                    <div>
                        <h2 className='font-semibold max-sm:text-[23px] mt-4 text-[#000]/70'>How to calculate monthly mortgage payments?</h2>
                        <p className='sm:text-[9px] text-gray-500 mt-6 text-left'>Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it’s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.</p>
                    </div>
                    <hr className='w-full h-[0.5px] bg-gray-400 mt-10 mb-6' />
                    <div>
                        <h2 className='font-semibold max-sm:text-[23px] text-[#000]/70'>Formula for calculating monthly mortgage payments</h2>
                        <p className='sm:text-[9px] text-gray-500 mt-2 text-left'>The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here’s the formula for calculating principal and interest yourself:</p>
                    </div>

                    <div className='w-full py-2'>

                        <div className='mx-auto w-full max-w-sm  text-gray-500'>
                    
                            <Image src="/monthly-formula.jpg" alt='dti-formula' height={50} width={300} className='w-full max-w-[430px] ' />
                            <p className='sm:text-[9px] mt-2'>Where:</p>
                            <ul className='ml-6 sm:text-[9px] py-1 list-disc'>
                                <li><strong>M</strong> is monthly mortgage payments</li>
                                <li><strong>P</strong> is the principal loan amount (the amount you borrow)</li>
                                <li><strong>r</strong> is the monthly interest rate<br/>
                                    (annual interest rate divided by 12 and expressed as a decimal)<br />
                                    For example:<br />
                                    if the annual interest rate is 5%,<br />
                                    the monthly rate would be 0.05/12 = .00417, or .417%<br />
                                </li>
                                <li>
                                    <strong>n</strong> is the total number of payments in months<br />
                                    For example:<br />
                                    for a 30-year loan, n = 30×12 = 360 months<br />
                                </li>
                            </ul>
                            <p className='sm:text-[9px] py-2'>Here’s a simple example:</p>
                            <Image src="/monthly-example.jpg" alt='dti-example' height={50} width={200} className='w-full max-w-sm' />
                        </div>
                        <p className='text-gray-500 sm:text-[9px] mt-4'>This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you’ll still need to add on taxes, insurance, utilities, and HOA fees if applicable.</p>
                        <hr className='w-full h-[0.5px] bg-gray-400 mt-8 mb-6' />

                        <div>
                            <h2 className='font-semibold max-sm:text-[23px] leading-7 text-[#000]/70 text-sm'>How to use this mortgage calculator?</h2>
                            <div className='sm:text-[9px] text-gray-500 mt-2 text-left flex flex-col gap-2'>
                                <p className='mt-1'>Play around with different home prices, locations, down payments, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.</p>
                                <p>Increasing your down payment and decreasing your interest rate and mortgage term length will make your monthly payment go down. Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount that’s less than 20% of the home price, private mortgage insurance (PMI) costs will be added to your monthly mortgage payment. As the costs of utilities can vary from county to county, we’ve included a utilities estimate that you can break down by service. If you’re thinking about buying a condo or into a community with a Homeowners Association (HOA), you can add HOA fees.</p>
                                <p>The only amounts we haven’t included are the money you’ll need to save for annual home maintenance/repairs or the costs of home improvements. To see how much home you can afford including these costs, take a look at the Better home affordability calculator.</p>
                                <p>Fun fact: Property tax rates are extremely localized, so two homes of roughly the same size and quality on either side of a municipal border could have very different tax rates. Buying in an area with a lower property tax rate may make it easier for you to afford a higher-priced home.</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h2 className='font-semibold leading-7 max-sm:text-[23px] text-[#000]/70 text-sm'>Do you know your property tax rate?</h2>
                            <div className='sm:text-[9px] text-gray-500 mt-2 text-left flex flex-col gap-2'>
                                <p className='mt-1'>While exact property tax rates vary by county, it can be helpful to look at taxes on the state level to get an idea for taxes in your state. Here’s a helpful chart from Forbes breaking down the Census Bureau’s 2021 American Community Survey 5-year estimate:</p>
                                
                            </div>
                           
                        </div>
                        
                    </div>
                   
                    <div className='text-[9px] w-full max-w-sm'>
                        {/* <TaxTable /> */}
                    </div>

                    <hr className='w-full h-[0.5px] bg-gray-400 mt-6 mb-6' />
                    <section className='flex flex-col'>
                        <h2 className='font-semibold max-sm:text-[23px] text-[#000]/70 '>How is Better’s mortgage calculator different?</h2>

                        <div>
                            <h3 className='sub mt-6'>This mortgage calculator shows your payments with taxes and insurance</h3>
                            <p className='small mt-2'>The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.</p>
                            <p className='small mt-2'>Your lender will usually require you to have homeowners insurance while you're settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that's been damaged or destroyed.</p>
                            <p className='small mt-2'>Here's an interesting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. However, to ensure your home is protected against damages caused by fires, lightning strikes, and natural disasters that are common in your area, it is highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator.</p>
                        </div>
                        <div>
                            <h3 className='sub mt-6'>This mortgage calculator shows your mortgage costs with PMI</h3>
                            <p className='small mt-2'>The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.</p>
                            <p className='small mt-2'>Your lender will usually require you to have homeowners insurance while you're settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that's been damaged or destroyed.</p>
                            <p className='small mt-2'>Here's an interesting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. However, to ensure your home is protected against damages caused by fires, lightning strikes, and natural disasters that are common in your area, it is highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator.</p>
                        </div>
                        <div>
                            <h3 className='sub mt-6'>This mortgage calculator shows your mortgage costs with PMI</h3>
                            <p className='small mt-2'>The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.</p>
                            <p className='small mt-2'>Your lender will usually require you to have homeowners insurance while you're settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that's been damaged or destroyed.</p>

                        </div>

                        <hr className='w-full h-[0.5px] bg-gray-400 mt-6 mb-6' />
                        <div>
                            <h3 className='font-semibold text-[#000]/70'>How much home can I afford?</h3>
                            <p className='small mt-6'>The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.</p>


                        </div>
                        <hr className='w-full h-[0.5px] bg-gray-400 mt-6 mb-6' />
                        <div>
                            <h3 className='font-semibold text-[#000]/70'>Next steps to buying a house</h3>
                            <p className='small mt-6'>There are 8 steps to buying a house and by using this calculator you’ve completed step 2 (calculating your home affordability) and maybe even step 1 (getting your finances in order).</p>
                            <p className='small mt-2'>The next step is getting pre-approved. A mortgage pre-approval with Better Mortgage takes as little as 3-minutes and doesn’t impact your credit score. It’s a free, no-commitment way to see how much home you can buy, the mortgages you qualify for, and the range of interest rates you’ll be offered.</p>
                            <p className='small mt-2'>If you’re ready to buy a home now, our definitive home buying checklist can walk you through everything you need to know to get the home you want. With your Better Mortgage pre-approval letter in hand, you’ll be able to show sellers and real estate agents that you mean business—giving you an edge over homebuyers that don’t have this kind of proof that they’re financially ready to purchase. And by working with an agent from Better Real Estate and funding with Better Mortgage, you’ll save $2,000 on closing costs, and save up to $8,200 on average over the life of your loan.**</p>
                        </div>

                        <hr className='w-full h-[0.5px] bg-gray-400 mt-6 mb-6' />

                        <div>
                            <h3 className='font-semibold text-[#000]/70'>More resources</h3>

                        </div>

                        <Cards />

                        <div>
                            <p className='sm:text-[7px] text-[12px] text-gray-500 mt-6'>*See  <span className='text-[#4da871d2]'>Better Real Estate discount terms and conditions.</span><br />

                                **The average lifetime savings estimate is based on a comparison of the Freddie Mac Primary Mortgage Market Survey’s (PMMS) 30-year fixed-rate mortgage product with Better Mortgage’s own offered rate for a comparable mortgage product between Jan ‘20 - Dec ‘20. PMMS is based on conventional, conforming fully-amortizing home purchase loans for borrowers with a loan-to-value of 80 percent and with excellent credit. Better Mortgage’s offered rate is based on pricing output for a 30-year fixed-rate mortgage product with a 30-day lock period for a single-family, owner-occupied residential property and a borrower with excellent (760 FICO) credit and a loan-to-value ratio of 80 percent. Individual savings could vary based on current market rates, property type, loan amount, loan-to-value, credit score, debt-to-income ratio and other variables.</p>

                        </div>
                    </section>
                </section>
                    

                    

                
                </section>
            
        </main>
    );
}