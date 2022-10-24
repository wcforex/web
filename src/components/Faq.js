import React, { useState } from 'react'

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center bg-sky-300 justify-center w-8 h-8 rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
              }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center">
          <a href="/" className="mb-6 sm:mx-auto">
            <div className="flex items-center justify-center w-12 h-12 font-medium text-base rounded-full bg-sky-300">
              FAQ
            </div>
          </a>
          <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Frequent</span>
              </span>{' '}
              Asked Questions
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Have some questions? Go through our frequent asked questions to find answers.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <Item title="1. What does WCFI do?">
            World Class Forex Institute is a financial trading firm that trades in financial
            markets on behalf of individual investors to attain daily interests.
          </Item>
          <Item title="2. What does WCFI trade?">
            WCFI trades on the following markets: Forex, Synthetic Indices, Cryptocurrencies, and on Binance.
          </Item>
          <Item title="3. Can i loose my capital investing with WCFI?">
            Investing on our platform is one of the safest places to invest and watch your money grow.
            In as much as trading is risky, we are trained to work with a proper risk management in all our trades.
            In this case, losing funds to the markets is highly unacceptable.
          </Item>
          <Item title="4. How fast can my money grow?">
            As professional traders, we believe in proper risk management and the compounding effect.
            We believe in small accumulation of money over a longer period of time than huge profits for a shorter period.
          </Item>
          <Item title="5. How is it different from other platforms?">
            Unlike other platforms, WCFI does not promise investors huge daily returns.
            Other platforms offer high as 100% in few weeks, but end up collapsing the firm.
          </Item>
          <Item title="6. How to make a deposit?">
            We currently accept Bitcoin and Tether USDT deposits.
            Select an investment package. Enter amount to invest, Select payment method and confirm.
            Receive the address to make deposit to.
            Deposit to the address and get your account credited and investment approved.
          </Item>
          <Item title="7. How do i withdraw from my wallet?">
            Login to your account. Click on withdrawal. Enter amount to withdraw, Select payment method and confirm.
            Withdrawals are paid on Wednesdays and Saturdays, between 6am to 8pm respectively.
          </Item>
        </div>
      </div>
    </div>
  );
};