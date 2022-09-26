import React from 'react';

const PriceTable = () => {
    return (
        <div>

            <div className="bg-gradient-to-b from-sky-50 to-sky-200">
                <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
                    <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
                        <h2 className="text-2xl text-sky-900 font-bold md:text-4xl">Our Investment Plans</h2>
                    </div>
                    <div className="mt-12 m-auto items-center justify-center space-y-6 lg:flex lg:space-y-0 lg:space-x-6 xl:w-10/12">
                        <div className="relative z-10 group mx-auto sm:w-7/12 lg:w-4/12">
                            <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                            <div className="relative p-6 space-y-8">
                                <div className="flex items-center justify-between">
                                    <h5 className="text-xl text-gray-700 font-semibold">Supermarket</h5>
                                    <div className="relative flex justify-around">
                                        <div className="flex">
                                            <span className="text-4xl text-gray-800 font-bold leading-0">150</span>
                                            <span className=" text-xl text-sky-500 font-bold">%</span>
                                        </div>
                                    </div>
                                </div>
                                <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                                    <span className="text-lg font-semibold text-neutral-600">Terms</span>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 rounded-xl boredr border-sky-500">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">30 days</span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">$25 - 499$</span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">5% daily income</span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">150% total return</span>
                                    </li>
                                </ul>
                                <button type="submit" title="Submit" className="block w-full py-3 px-6 text-center rounded-xl transition bg-sky-600 hover:bg-sky-700 active:bg-sky-800 focus:bg-cyan-600">
                                    <span className="text-white font-semibold">
                                        Invest
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="relative z-10 group mx-auto sm:w-7/12 lg:w-4/12">
                            <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                            <div className="relative p-6 space-y-8">
                                <div className="flex items-center justify-between">
                                    <h5 className="text-xl text-gray-700 font-semibold">Real Estate</h5>
                                    <div className="relative flex justify-around">
                                        <div className="flex">
                                            <span className="text-4xl text-gray-800 font-bold leading-0">200</span>
                                            <span className=" text-xl text-sky-500 font-bold">%</span>
                                        </div>
                                    </div>
                                </div>
                                <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                                    <span className="text-lg font-semibold text-neutral-600">Terms</span>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 rounded-xl boredr border-sky-500">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">60 days</span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">$500 - $999</span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">3.33% daily income</span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">200% total return</span>
                                    </li>
                                </ul>
                                <button type="submit" title="Submit" className="block w-full py-3 px-6 text-center rounded-xl transition bg-sky-600 hover:bg-sky-700 active:bg-sky-800 focus:bg-cyan-600">
                                    <span className="text-white font-semibold">
                                        Invest
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="relative z-10 group mx-auto sm:w-7/12 lg:w-4/12">
                            <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                            <div className="relative p-6 space-y-8">
                                <div className="flex items-center justify-between">
                                    <h5 className="text-xl text-gray-700 font-semibold">Trading Hub</h5>
                                    <div className="relative flex justify-around">
                                        <div className="flex">
                                            <span className="text-4xl text-gray-800 font-bold leading-0">250</span>
                                            <span className="text-xl text-sky-500 font-bold">%</span>
                                        </div>
                                    </div>
                                </div>
                                <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                                    <span className="text-lg font-semibold text-neutral-600">Terms</span>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 rounded-xl boredr border-sky-500">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">90 days</span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">$1000 - $2000</span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">2.77% income daily</span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">250% total income</span>
                                    </li>
                                </ul>
                                <button type="submit" title="Submit" className="block w-full py-3 px-6 text-center rounded-xl transition bg-sky-600 hover:bg-sky-700 active:bg-sky-800 focus:bg-cyan-600">
                                    <span className="text-white font-semibold">
                                        Invest
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PriceTable;
