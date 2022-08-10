import React from "react";
export default function AboutUs() {
    return (
        <>
            <div className="2xl:mx-auto 2xl:container  xl:px-20 md:px-6 px-4 py-12">
                <div className="lg:flex items-stretch justify-between">
                    <div className="xl:w-1/2 lg:w-7/12">
                        <p className="lg:text-5xl text-3xl font-bold leading-10 text-gray-800">Why choose us</p>
                        <p className="text-base leading-6 text-gray-600 mt-4 lg:w-7/12 w-full">Whether article spirits new her covered hastily sitting her. Money witty books nor son add</p>
                        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-14">
                            <div className="flex items-center">
                                <div className="w-16 h-16 relative">
                                    <div className="absolute bottom-0 right-0 bg-indigo-50 rounded-md w-16 h-16 -mb-4 -mr-2" />
                                    <div className="relative z-20 text-white bottom-0 left-0 bg-indigo-700 rounded-md w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                        <svg width={26} height={25} viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.5994 2.90375C6.73079 2.77373 6.83382 2.61789 6.90199 2.44607C6.97016 2.27425 7.00198 2.09016 6.99547 1.90543C6.98895 1.72069 6.94423 1.53931 6.86412 1.37272C6.78401 1.20613 6.67026 1.05794 6.53003 0.9375C5.82434 0.335233 4.92778 0.00300971 4.00003 0L3.79565 0.00562477H3.76565C1.65003 0.134375 2.82116e-05 1.97187 0.00440321 4.1875C0.00440321 5.375 0.504403 6.00375 0.899403 6.50688C1.01024 6.64753 1.1492 6.76354 1.30739 6.84748C1.46558 6.93141 1.63954 6.98145 1.81815 6.99438C1.8344 6.99438 1.8619 6.9975 1.94315 6.9975C2.10382 6.99726 2.26278 6.96453 2.41046 6.90127C2.55815 6.838 2.69151 6.74552 2.80253 6.62938L6.5994 2.90375ZM22.2369 0.00687504L22.0325 0.000625134H22C21.0714 0.00304289 20.1739 0.335303 19.4675 0.938125C19.3275 1.05856 19.2139 1.20667 19.1339 1.37315C19.0539 1.53963 19.0093 1.72086 19.0028 1.90544C18.9962 2.09002 19.028 2.27395 19.0961 2.44566C19.1641 2.61736 19.267 2.77312 19.3982 2.90312L23.1963 6.63125C23.3075 6.74781 23.4413 6.84059 23.5894 6.90397C23.7376 6.96735 23.897 7.00002 24.0582 7C24.1382 7 24.1657 7 24.1832 6.99687C24.3617 6.98386 24.5355 6.93379 24.6936 6.84985C24.8517 6.76592 24.9905 6.64996 25.1013 6.50937C25.4988 6.00625 25.9938 5.37937 25.9963 4.19C26 1.97187 24.35 0.134375 22.2369 0.00687504Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M13.0046 2C6.94215 2 2.00465 6.93437 2.00465 13C2.0025 15.5717 2.90545 18.0622 4.55527 20.035L2.29777 22.2931C2.20271 22.3855 2.12695 22.4958 2.07491 22.6178C2.02288 22.7397 1.99559 22.8707 1.99465 23.0033C1.99371 23.1358 2.01914 23.2672 2.06944 23.3898C2.11975 23.5125 2.19393 23.6239 2.28768 23.7176C2.38143 23.8113 2.49287 23.8854 2.61553 23.9357C2.73819 23.9859 2.86961 24.0113 3.00216 24.0103C3.13471 24.0093 3.26573 23.982 3.38762 23.9299C3.50951 23.8778 3.61982 23.802 3.71215 23.7069L5.96965 21.4494C7.94351 23.0973 10.4333 24.0001 13.0046 24.0001C15.576 24.0001 18.0658 23.0973 20.0396 21.4494L22.2978 23.7069C22.3901 23.802 22.5004 23.8778 22.6223 23.9299C22.7442 23.982 22.8752 24.0093 23.0078 24.0103C23.1403 24.0113 23.2717 23.9859 23.3944 23.9357C23.5171 23.8854 23.6285 23.8113 23.7222 23.7176C23.816 23.6239 23.8902 23.5125 23.9405 23.3898C23.9908 23.2672 24.0162 23.1358 24.0153 23.0033C24.0143 22.8707 23.987 22.7397 23.935 22.6178C23.883 22.4958 23.8072 22.3855 23.7122 22.2931L21.454 20.035C23.1041 18.0624 24.0071 15.5718 24.0047 13C24.0047 6.9375 19.0703 2 13.0046 2ZM14.0047 13C14.0047 13.2652 13.8993 13.5196 13.7118 13.7071C13.5242 13.8946 13.2699 14 13.0046 14H8.00465C7.73943 14 7.48508 13.8946 7.29754 13.7071C7.11001 13.5196 7.00465 13.2652 7.00465 13C7.00465 12.7348 7.11001 12.4804 7.29754 12.2929C7.48508 12.1054 7.73943 12 8.00465 12H12.0046V6C12.0046 5.73478 12.11 5.48043 12.2975 5.29289C12.4851 5.10536 12.7394 5 13.0046 5C13.2699 5 13.5242 5.10536 13.7118 5.29289C13.8993 5.48043 14.0047 5.73478 14.0047 6V13Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex items-start flex-col ml-6 pt-8">
                                    <h2 className="text-base font-semibold leading-4 text-gray-800">Time Prompt</h2>
                                    <p className=" text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-16 h-16 relative">
                                    <div className="absolute bottom-0 right-0 bg-indigo-50 rounded-md w-16 h-16 -mb-4 -mr-2" />
                                    <div className="relative z-20 text-white bottom-0 left-0 bg-indigo-700 rounded-md w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                        <svg width={26} height={28} viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17.7901 2.03625C16.5739 0.723125 14.8751 0 13.0001 0C11.1151 0 9.41074 0.71875 8.20011 2.02375C6.97636 3.34312 6.38011 5.13625 6.52011 7.0725C6.79761 10.8925 9.70449 14 13.0001 14C16.2957 14 19.1976 10.8931 19.4795 7.07375C19.6214 5.155 19.0214 3.36563 17.7901 2.03625ZM24.0001 28H2.00011C1.71215 28.0037 1.42698 27.9433 1.16534 27.8229C0.903702 27.7026 0.672178 27.5254 0.487613 27.3044C0.0813633 26.8188 -0.0823867 26.1556 0.0388633 25.485C0.566363 22.5588 2.21261 20.1006 4.80011 18.375C7.09886 16.8431 10.0107 16 13.0001 16C15.9895 16 18.9014 16.8438 21.2001 18.375C23.7876 20.1 25.4339 22.5581 25.9614 25.4844C26.0826 26.155 25.9189 26.8181 25.5126 27.3037C25.3281 27.5249 25.0966 27.7022 24.835 27.8226C24.5733 27.9431 24.2881 28.0037 24.0001 28Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex items-start flex-col ml-6 pt-8">
                                    <h2 className="text-base font-semibold leading-4 text-gray-800">User Friendly</h2>
                                    <p className=" text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-16 h-16 relative">
                                    <div className="absolute bottom-0 right-0 bg-indigo-50 rounded-md w-16 h-16 -mb-4 -mr-2" />
                                    <div className="relative z-20 text-white bottom-0 left-0 bg-indigo-700 rounded-md w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                        <svg width={20} height={30} viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 28H8.00003C7.73481 28 7.48046 28.1054 7.29292 28.2929C7.10539 28.4804 7.00003 28.7348 7.00003 29C7.00003 29.2652 7.10539 29.5196 7.29292 29.7071C7.48046 29.8946 7.73481 30 8.00003 30H12C12.2652 30 12.5196 29.8946 12.7071 29.7071C12.8947 29.5196 13 29.2652 13 29C13 28.7348 12.8947 28.4804 12.7071 28.2929C12.5196 28.1054 12.2652 28 12 28ZM13 25H7.00003C6.73481 25 6.48046 25.1054 6.29292 25.2929C6.10539 25.4804 6.00003 25.7348 6.00003 26C6.00003 26.2652 6.10539 26.5196 6.29292 26.7071C6.48046 26.8946 6.73481 27 7.00003 27H13C13.2652 27 13.5196 26.8946 13.7071 26.7071C13.8947 26.5196 14 26.2652 14 26C14 25.7348 13.8947 25.4804 13.7071 25.2929C13.5196 25.1054 13.2652 25 13 25ZM17.0888 2.91812C15.2094 1.03625 12.6919 -2.17722e-06 10 -2.17722e-06C8.68593 -0.00313433 7.38416 0.253385 6.16949 0.754823C4.95482 1.25626 3.85119 1.99274 2.92198 2.92195C1.99277 3.85116 1.25629 4.95479 0.754854 6.16946C0.253416 7.38413 -0.00310381 8.6859 2.83404e-05 10C2.83404e-05 12.9137 1.1169 15.6394 3.06253 17.4775L3.33503 17.7331C4.46065 18.7856 6.00003 20.2275 6.00003 21.5V23C6.00003 23.2652 6.10539 23.5196 6.29292 23.7071C6.48046 23.8946 6.73481 24 7.00003 24H8.50003C8.63264 24 8.75982 23.9473 8.85358 23.8535C8.94735 23.7598 9.00003 23.6326 9.00003 23.5V16.1762C9.00006 16.0751 8.96944 15.9764 8.9122 15.893C8.85495 15.8097 8.77379 15.7456 8.6794 15.7094C8.10196 15.4738 7.55339 15.1729 7.0444 14.8125C6.93002 14.7395 6.83171 14.6439 6.75544 14.5316C6.67918 14.4194 6.62656 14.2928 6.6008 14.1595C6.57503 14.0263 6.57666 13.8892 6.60558 13.7566C6.63449 13.624 6.6901 13.4987 6.769 13.3883C6.84791 13.2779 6.94846 13.1847 7.06454 13.1143C7.18062 13.044 7.3098 12.9981 7.44421 12.9793C7.57861 12.9605 7.71543 12.9693 7.84634 13.0051C7.97725 13.0409 8.0995 13.1029 8.20565 13.1875C8.66815 13.515 9.55878 14 10 14C10.4413 14 11.3319 13.5137 11.7957 13.1875C12.0116 13.0517 12.2712 13.0036 12.5215 13.053C12.7717 13.1024 12.9936 13.2455 13.1418 13.4531C13.29 13.6607 13.3532 13.9171 13.3186 14.1698C13.284 14.4225 13.1542 14.6524 12.9557 14.8125C12.4466 15.1722 11.898 15.4725 11.3207 15.7075C11.2263 15.7438 11.1451 15.8078 11.0879 15.8912C11.0306 15.9745 11 16.0733 11 16.1744V23.5C11 23.6326 11.0527 23.7598 11.1465 23.8535C11.2402 23.9473 11.3674 24 11.5 24H13C13.2652 24 13.5196 23.8946 13.7071 23.7071C13.8947 23.5196 14 23.2652 14 23V21.5C14 20.2575 15.5225 18.8169 16.6344 17.7644L16.9413 17.4731C18.9425 15.5625 20 12.9756 20 10C20.0067 8.68578 19.7528 7.38327 19.2531 6.16773C18.7534 4.95219 18.0178 3.84772 17.0888 2.91812Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex items-start flex-col ml-6 pt-8">
                                    <h2 className="text-base font-semibold leading-4 text-gray-800">Creative Ideas</h2>
                                    <p className=" text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-16 h-16 relative">
                                    <div className="absolute bottom-0 right-0 bg-indigo-50 rounded-md w-16 h-16 -mb-4 -mr-2" />
                                    <div className="relative z-20 text-white bottom-0 left-0 bg-indigo-700 rounded-md w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M29 5H25.2437C25.1774 5 25.1139 4.97366 25.067 4.92678C25.0201 4.87989 24.9937 4.8163 24.9937 4.75V3.995C24.9924 3.46543 24.7811 2.95801 24.4062 2.58402C24.0313 2.21003 23.5233 2 22.9937 2L9.00688 2.01625C8.47785 2.01724 7.97077 2.22779 7.59663 2.60181C7.22249 2.97583 7.01178 3.48285 7.01062 4.01188V4.75C7.01062 4.8163 6.98429 4.87989 6.9374 4.92678C6.89052 4.97366 6.82693 5 6.76062 5H3C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6V7C2 10.4081 3.875 14.0281 6.7825 14.8344C6.86847 14.8583 6.94625 14.9053 7.0074 14.9703C7.06855 15.0353 7.11073 15.1158 7.12937 15.2031C7.49 16.8837 8.59937 18.4844 10.3425 19.8037C11.6494 20.7931 13.2081 21.5225 14.6094 21.8337C14.7202 21.8586 14.8192 21.9204 14.8902 22.009C14.9612 22.0976 14.9999 22.2077 15 22.3213V27.75C15 27.8163 14.9737 27.8799 14.9268 27.9268C14.8799 27.9737 14.8163 28 14.75 28H11.0281C10.49 28 10.0281 28.4138 10.0013 28.9519C9.99474 29.0871 10.0157 29.2222 10.063 29.3491C10.1102 29.4759 10.1828 29.5919 10.2761 29.6898C10.3695 29.7878 10.4818 29.8659 10.6063 29.9192C10.7307 29.9725 10.8646 30 11 30H20.9719C21.51 30 21.9719 29.5862 21.9988 29.0481C22.0053 28.9129 21.9843 28.7778 21.937 28.6509C21.8898 28.5241 21.8172 28.4081 21.7239 28.3102C21.6305 28.2122 21.5182 28.1341 21.3937 28.0808C21.2693 28.0275 21.1354 28 21 28H17.25C17.1837 28 17.1201 27.9737 17.0732 27.9268C17.0263 27.8799 17 27.8163 17 27.75V22.3213C17.0001 22.2077 17.0388 22.0976 17.1098 22.009C17.1808 21.9204 17.2798 21.8586 17.3906 21.8337C18.7919 21.5212 20.3506 20.7931 21.6575 19.8037C23.4006 18.4844 24.51 16.8837 24.8706 15.2031C24.8893 15.1158 24.9314 15.0353 24.9926 14.9703C25.0537 14.9053 25.1315 14.8583 25.2175 14.8344C28.125 14.0281 30 10.4081 30 7V6C30 5.73478 29.8946 5.48043 29.7071 5.29289C29.5196 5.10536 29.2652 5 29 5ZM7 12.3888C6.99985 12.4326 6.98818 12.4756 6.96618 12.5134C6.94417 12.5513 6.9126 12.5828 6.87462 12.6046C6.83664 12.6264 6.79359 12.6379 6.74978 12.6379C6.70597 12.6378 6.66294 12.6263 6.625 12.6044C5.98375 12.2225 5.51562 11.6438 5.24125 11.2362C4.49688 10.1306 4.05375 8.69438 4.00437 7.25938C4.00311 7.22576 4.00865 7.19224 4.02065 7.16082C4.03264 7.1294 4.05086 7.10072 4.0742 7.07651C4.09754 7.05229 4.12553 7.03303 4.15649 7.01989C4.18745 7.00674 4.22074 6.99998 4.25437 7H6.75437C6.82068 7 6.88427 7.02634 6.93115 7.07322C6.97804 7.12011 7.00437 7.1837 7.00437 7.25C7.00313 8.96562 7 10.9294 7 12.3888ZM26.7581 11.2362C26.4837 11.6438 26.0163 12.2225 25.375 12.6044C25.337 12.6263 25.2939 12.6379 25.2501 12.6379C25.2062 12.6379 25.1631 12.6264 25.1251 12.6044C25.0871 12.5825 25.0556 12.551 25.0336 12.513C25.0116 12.4751 25 12.432 25 12.3881C25 10.7313 25 8.84875 24.9969 7.25C24.9969 7.1837 25.0232 7.12011 25.0701 7.07322C25.117 7.02634 25.1806 7 25.2469 7H27.7469C27.7805 6.99998 27.8138 7.00674 27.8448 7.01989C27.8757 7.03303 27.9037 7.05229 27.9271 7.07651C27.9504 7.10072 27.9686 7.1294 27.9806 7.16082C27.9926 7.19224 27.9981 7.22576 27.9969 7.25938C27.9475 8.69438 27.5031 10.1306 26.7588 11.2362H26.7581Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex items-start flex-col ml-6 pt-8">
                                    <h2 className="text-base font-semibold leading-4 text-gray-800">Achievments</h2>
                                    <p className=" text-base leading-6 mt-2 text-gray-600">Whether article spirits new her covered.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/5 w-full lg:mt-0 mt-6">
                        <img src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png" alt="ongoing meeting" className="w-full obejct-fit object-center object-fill h-full" />
                    </div>
                </div>
            </div>
        </>
    );
}
