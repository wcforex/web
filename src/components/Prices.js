import React from 'react'

export default function Prices() {
  return (
    <div>
        <div class="bg-gray-100">
            <div class="container m-auto px-6 py-20 md:px-12 lg:px-20">
                <div class="m-auto text-center lg:w-7/12">
                    <h2 class="text-2xl text-sky-900 font-bold md:text-4xl">A Tailus Blocks subscription gives you access to our components and more.</h2>
                </div>
                <div class="mt-12 grid items-center gap-6 md:grid-cols-2 lg:flex lg:space-x-8">
                    <div class="relative md:col-span-1 group lg:w-[32%]">
                        <div aria-hidden="true" class="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                        <div class="relative p-6 space-y-6">
                            <h3 class="text-3xl text-gray-700 font-semibold text-center">Monthly</h3>
                            <div class="relative flex justify-around">
                                <div class="flex">
                                    <span class="-ml-6 mt-2 text-3xl text-cyan-500 font-bold">$</span>
                                    <span class="text-8xl text-gray-800 font-bold leading-0">19</span>
                                </div>
                                <span class="absolute right-9 bottom-2 text-xl text-cyan-500 font-bold">/ Month</span>
                            </div>
                            <ul role="list" class="w-max space-y-4 pb-6 m-auto text-gray-600">
                                <li class="space-x-2">
                                    <span class="text-cyan-500 font-semibold">&check;</span>
                                    <span>First premium advantage</span>
                                </li>
                                <li class="space-x-2">
                                    <span class="text-cyan-500 font-semibold">&check;</span>
                                    <span>Second premium advantage</span>
                                </li>
                                <li class="space-x-2">
                                    <span class="text-cyan-500 font-semibold">&check;</span>
                                    <span>Third advantage</span>
                                </li>
                            </ul>
                            <button type="submit" title="Submit" class="block w-full py-3 px-6 text-center rounded-xl transition bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:bg-sky-500">
                                <span class="text-white font-semibold">
                                    Start plan
                                </span>
                            </button>
                        </div>
                    </div>

                    <div class="relative row-start-1 group md:col-span-2 lg:w-[36%]">
                        <div aria-hidden="true" class="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                        <div class="relative p-6 space-y-6">
                            <h3 class="text-3xl text-gray-700 font-semibold text-center">Annual</h3>
                            <div class="overflow-hidden">
                                <div class="-mr-20 flex items-end justify-center">
                                    <div class="flex">
                                        <span class="-ml-6 mt-2 text-3xl text-cyan-500 font-bold">$</span>
                                        <span class="text-8xl text-gray-800 font-bold leading-0">15</span>
                                    </div>
                                    <div class="mb-2">
                                        <span class="block text-xl font-bold">.56</span>
                                        <span class="block text-xl text-cyan-500 font-bold">/ Month</span>
                                    </div>
                                </div>
                                <div class="text-center text-2xl font-medium">
                                    <span class="text-gray-400 line-through">$234</span>
                                    <span class="text-gray-700 font-semibold">$190</span>
                                </div>
                                <span class="block uppercase text-xs text-cyan-500 text-center">BILLED YEARLY</span>
                                <span class="block w-max mt-4 m-auto px-4 py-1 rounded-full bg-gradient-to-r from-yellow-300 to-pink-300 text-sm font-medium text-yellow-900">1 Discount applied</span>
                            </div>
                            <ul role="list" class="w-max space-y-4 pb-6 m-auto text-gray-600">
                                <li class="space-x-2">
                                    <span class="text-cyan-500 font-semibold">&check;</span>
                                    <span>First premium advantage</span>
                                </li>
                                <li class="space-x-2">
                                    <span class="text-cyan-500 font-semibold">&check;</span>
                                    <span>Second premium advantage</span>
                                </li>
                                <li class="space-x-2">
                                    <span class="text-cyan-500 font-semibold">&check;</span>
                                    <span>Third advantage</span>
                                </li>
                                <li class="space-x-2">
                                    <span class="text-cyan-500 font-semibold">&check;</span>
                                    <span>Fourth organizations advantage</span>
                                </li>
                            </ul>
                            <button type="submit" title="Submit" class="block w-full py-3 px-6 text-center rounded-xl transition bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:bg-sky-500">
                                <span class="text-white font-semibold">
                                    Start plan
                                </span>
                            </button>
                        </div>
                    </div>

                    <div class="relative md:col-span-1 group lg:w-[32%]">
                        <div aria-hidden="true" class="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                        <div class="relative p-6 space-y-6">
                            <h3 class="text-3xl text-gray-700 font-semibold text-center">Free</h3>
                            <div class="relative flex justify-around">
                                <div class="flex">
                                    <span class="-ml-2 mt-2 text-3xl text-cyan-500 font-bold">$</span>
                                    <span class="text-8xl text-gray-800 font-bold leading-0">0</span>
                                </div>
                            </div>
                            <ul role="list" class="w-max space-y-4 pb-6 m-auto text-gray-600">
                                <li class="space-x-2">
                                    <span class="text-cyan-500 font-semibold">&check;</span>
                                    <span>First premium advantage</span>
                                </li>
                                <li class="space-x-2">
                                    <span class="text-cyan-500 font-semibold">&check;</span>
                                    <span>Second premium advantage</span>
                                </li>
                                <li class="space-x-2">
                                    <span class="text-cyan-500 font-semibold">&check;</span>
                                    <span>Third advantage</span>
                                </li>
                            </ul>
                            <button type="submit" title="Submit" class="block w-full py-3 px-6 text-center rounded-xl bg-cyan-100 transition hover:bg-cyan-200 active:bg-cyan-300 focus:bg-cyan-200">
                                <span class="text-cyan-700 font-semibold">
                                    Create free account
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>                         
    </div>
  )
}
