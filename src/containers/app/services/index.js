import React from 'react'

export default function Services() {
  return (
    <div>
      <div className="dark:bg-gray-900">
        <section className="mx-auto container pt-28">
          <div className="flex justify-center items-center flex-col">
            {/* <div className="lg:text-4xl md:text-5xl text-3xl font-black leading-10 text-center mt-8 text-gray-800 dark:text-white">
              <h1>Our Services</h1>
            </div> */}
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-sky-300">
                  SERVICES
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-800 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="ace59d72-08d5-4850-b9e4-d9d0b86c0525"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#ace59d72-08d5-4850-b9e4-d9d0b86c0525)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative text-gray-900"> Businesses</span>
                </span>{' '}
                We Provide.
              </h2>
              <p className="text-base text-gray-900 md:text-lg">
                Let help you with your finances. 
              </p>
            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <svg className width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 13.3333H32L28 8L24 13.3333ZM24 18.6667H32L28 24L24 18.6667Z" fill="#C7D2FE" />
                    <path d="M1.33333 0H9.33333V32H1.33333C0.979711 32 0.640572 31.8595 0.390523 31.6095C0.140475 31.3594 0 31.0203 0 30.6667V1.33333C0 0.979711 0.140475 0.640572 0.390523 0.390523C0.640572 0.140475 0.979711 0 1.33333 0Z" fill="#818CF8" />
                    <path d="M12 0H20C20.3536 0 20.6928 0.140475 20.9428 0.390523C21.1929 0.640572 21.3333 0.979711 21.3333 1.33333V30.6667C21.3333 31.0203 21.1929 31.3594 20.9428 31.6095C20.6928 31.8595 20.3536 32 20 32H12V0Z" fill="#6366F1" />
                  </svg>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>Forex Majors & Minor</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-base text-center ">
                  <p>Experts trade on the forex market. Foreign exchange or forex is the world's largest financial market, larger than the stock market, with a volume of about $6.6 trillion, according to the 2019 Triennial Central Bank Survey of FX and OTC derivatives market.</p>
                </div>
              </div>
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.33325 1.33337H30.6666L26.6666 9.33337H1.33325L5.33325 1.33337Z" fill="#818CF8" />
                    <path d="M5.33325 12H30.6666L26.6666 20H1.33325L5.33325 12Z" fill="#6366F1" />
                    <path d="M5.33325 22.6667H30.6666L26.6666 30.6667H1.33325L5.33325 22.6667Z" fill="#C7D2FE" />
                  </svg>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>INDICES</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-base text-center">
                  <p>There are approximately 5,000 US indexes. Experts at World Class Forex trade the 3 most followed indexes. The S&P 500, Dow Jones Industrial Average (Dow30) which is also know as the US30, and Nasdaq Composit.</p>
                </div>
              </div>
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.6667 8.00004V2.66671C30.6667 2.31309 30.5262 1.97395 30.2762 1.7239C30.0261 1.47385 29.687 1.33337 29.3334 1.33337H2.66671C2.31309 1.33337 1.97395 1.47385 1.7239 1.7239C1.47385 1.97395 1.33337 2.31309 1.33337 2.66671V8.00004H30.6667Z" fill="#6366F1" />
                    <path d="M1.33337 10.6667V29.3334C1.33337 29.687 1.47385 30.0262 1.7239 30.2762C1.97395 30.5263 2.31309 30.6667 2.66671 30.6667H9.33337V10.6667H1.33337Z" fill="#C7D2FE" />
                    <path d="M12 30.6667H29.3333C29.687 30.6667 30.0261 30.5263 30.2761 30.2762C30.5262 30.0262 30.6667 29.687 30.6667 29.3334V10.6667H12V30.6667Z" fill="#818CF8" />
                  </svg>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>SYNTHETIC INDICES</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-base text-center">
                  <p>These are unique indices that mimic real-world market movements, but with a twist in the sense that they're not affected by real-world events. Volatility, step index, crash, boom, range break, jump indices.</p>
                </div>
              </div>
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.0001 32H16.0001C15.6465 32 15.3073 31.8595 15.0573 31.6095C14.8072 31.3594 14.6667 31.0203 14.6667 30.6667V28C14.6667 27.6464 14.8072 27.3073 15.0573 27.0572C15.3073 26.8072 15.6465 26.6667 16.0001 26.6667H28.0001C28.3537 26.6667 28.6928 26.8072 28.9429 27.0572C29.1929 27.3073 29.3334 27.6464 29.3334 28V30.6667C29.3334 31.0203 29.1929 31.3594 28.9429 31.6095C28.6928 31.8595 28.3537 32 28.0001 32Z" fill="#C7D2FE" />
                    <path d="M28.0001 0H4.00008C3.64646 0 3.30732 0.140475 3.05727 0.390523C2.80722 0.640572 2.66675 0.979711 2.66675 1.33333V4C2.66675 4.35362 2.80722 4.69276 3.05727 4.94281C3.30732 5.19286 3.64646 5.33333 4.00008 5.33333H28.0001C28.3537 5.33333 28.6928 5.19286 28.9429 4.94281C29.1929 4.69276 29.3334 4.35362 29.3334 4V1.33333C29.3334 0.979711 29.1929 0.640572 28.9429 0.390523C28.6928 0.140475 28.3537 0 28.0001 0Z" fill="#6366F1" />
                    <path d="M28.0001 8H4.00008C3.64646 8 3.30732 8.14047 3.05727 8.39052C2.80722 8.64057 2.66675 8.97971 2.66675 9.33333V22.6667C2.66675 23.0203 2.80722 23.3594 3.05727 23.6095C3.30732 23.8595 3.64646 24 4.00008 24H28.0001C28.3537 24 28.6928 23.8595 28.9429 23.6095C29.1929 23.3594 29.3334 23.0203 29.3334 22.6667V9.33333C29.3334 8.97971 29.1929 8.64057 28.9429 8.39052C28.6928 8.14047 28.3537 8 28.0001 8Z" fill="#818CF8" />
                  </svg>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>GOLD (XAUUSD)</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-base text-center">
                  <p>This is one of the traded metals. It is traded alongside EURUSD, XAUCHF, GBPSGD, EURCAD due to their higher positive correlations.</p>
                </div>
              </div>
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.66658 1.33331H2.66659C2.31296 1.33331 1.97382 1.47379 1.72378 1.72384C1.47373 1.97388 1.33325 2.31302 1.33325 2.66665V29.3333C1.33325 29.6869 1.47373 30.0261 1.72378 30.2761C1.97382 30.5262 2.31296 30.6666 2.66659 30.6666H6.66658V1.33331Z" fill="#C7D2FE" />
                    <path
                      d="M9.33325 30.6666H22.6666V1.33331H9.33325V30.6666ZM15.9999 25.3333C15.6463 25.3333 15.3072 25.1928 15.0571 24.9428C14.8071 24.6927 14.6666 24.3536 14.6666 24C14.6666 23.6464 14.8071 23.3072 15.0571 23.0572C15.3072 22.8071 15.6463 22.6666 15.9999 22.6666C16.3535 22.6666 16.6927 22.8071 16.9427 23.0572C17.1928 23.3072 17.3333 23.6464 17.3333 24C17.3333 24.3536 17.1928 24.6927 16.9427 24.9428C16.6927 25.1928 16.3535 25.3333 15.9999 25.3333ZM15.9999 6.66665C16.3535 6.66665 16.6927 6.80712 16.9427 7.05717C17.1928 7.30722 17.3333 7.64636 17.3333 7.99998C17.3333 8.3536 17.1928 8.69274 16.9427 8.94279C16.6927 9.19284 16.3535 9.33331 15.9999 9.33331C15.6463 9.33331 15.3072 9.19284 15.0571 8.94279C14.8071 8.69274 14.6666 8.3536 14.6666 7.99998C14.6666 7.64636 14.8071 7.30722 15.0571 7.05717C15.3072 6.80712 15.6463 6.66665 15.9999 6.66665ZM15.9999 14.6666C16.3535 14.6666 16.6927 14.8071 16.9427 15.0572C17.1928 15.3072 17.3333 15.6464 17.3333 16C17.3333 16.3536 17.1928 16.6927 16.9427 16.9428C16.6927 17.1928 16.3535 17.3333 15.9999 17.3333C15.6463 17.3333 15.3072 17.1928 15.0571 16.9428C14.8071 16.6927 14.6666 16.3536 14.6666 16C14.6666 15.6464 14.8071 15.3072 15.0571 15.0572C15.3072 14.8071 15.6463 14.6666 15.9999 14.6666Z"
                      fill="#818CF8"
                    />
                    <path d="M29.3333 1.33331H25.3333V30.6666H29.3333C29.6869 30.6666 30.026 30.5262 30.2761 30.2761C30.5261 30.0261 30.6666 29.6869 30.6666 29.3333V2.66665C30.6666 2.31302 30.5261 1.97388 30.2761 1.72384C30.026 1.47379 29.6869 1.33331 29.3333 1.33331Z" fill="#6366F1" />
                  </svg>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>BINANCE PRO</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-base text-center">
                  <p>Our experts arbitrage on Binance P2P to generate profits every hour. This is a risk free platform that allows traders sell and buy among themselves and also help them axchange/swap their coins for other preferable coins.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
