import React from "react";
const Banner = () => {
    return (
        <div className=" bg-slate-800">
            <hr className="my-12 border-gray-200 dark:border-gray-700" />
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                    <svg className=" text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 32 32">
                        <path d="M31.516 19.869c-2.136 8.579-10.819 13.787-19.385 11.652-8.568-2.12-13.787-10.824-11.647-19.381 2.131-8.577 10.819-13.796 19.38-11.661 8.573 2.141 13.792 10.819 11.652 19.396zM23.052 13.719c0.317-2.12-1.303-3.265-3.521-4.036l0.72-2.871-1.756-0.443-0.697 2.813c-0.459-0.12-0.937-0.224-1.417-0.333l0.699-2.839-1.761-0.437-0.719 2.885c-0.38-0.089-0.749-0.177-1.12-0.265l-2.416-0.605-0.469 1.881c0 0 1.303 0.296 1.271 0.312 0.715 0.183 0.844 0.645 0.824 1.021l-1.969 7.895c-0.099 0.22-0.323 0.543-0.817 0.417 0.016 0.025-1.281-0.317-1.281-0.317l-0.88 2.009 2.281 0.568 1.239 0.323-0.724 2.923 1.761 0.432 0.724-2.891c0.479 0.136 0.937 0.255 1.395 0.365l-0.676 2.869 1.76 0.443 0.724-2.921c2.989 0.567 5.24 0.343 6.188-2.365 0.76-2.183-0.043-3.437-1.62-4.26 1.135-0.261 2-1.016 2.239-2.573zM19.036 19.349c-0.536 2.187-4.208 1-5.4 0.703l0.963-3.864c1.193 0.307 5.005 0.895 4.437 3.161zM19.584 13.693c-0.496 1.989-3.548 0.984-4.543 0.733l0.876-3.52c0.989 0.239 4.181 0.697 3.667 2.781z" />
                    </svg>
                </div>

                <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                    <svg className=" text-blue-500 fill-current" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 320 512">
                        <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                    </svg>
                </div>

                <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                    <svg role="img" className=" text-red-500 fill-current" width="52" height="52" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Vodafone</title>
                        <path d="M12 0A12 12 0 0 0 0 12A12 12 0 0 0 12 24A12 12 0 0 0 24 12A12 12 0 0 0 12 0M16.25 1.12C16.57 1.12 16.9 1.15 17.11 1.22C14.94 1.67 13.21 3.69 13.22 6C13.22 6.05 13.22 6.11 13.23 6.17C16.87 7.06 18.5 9.25 18.5 12.28C18.54 15.31 16.14 18.64 12.09 18.65C8.82 18.66 5.41 15.86 5.39 11.37C5.38 8.4 7 5.54 9.04 3.85C11.04 2.19 13.77 1.13 16.25 1.12Z" />
                    </svg>
                </div>

                <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/MTN_Logo.svg" width="52" height="52" alt="mtn" />
                </div>

                <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
                    <svg role="img" className=" text-yellow-500 fill-current" width="52" height="52" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Binance</title>
                        <path d="M16.624 13.9202l2.7175 2.7154-7.353 7.353-7.353-7.352 2.7175-2.7164 4.6355 4.6595 4.6356-4.6595zm4.6366-4.6366L24 12l-2.7154 2.7164L18.5682 12l2.6924-2.7164zm-9.272.001l2.7163 2.6914-2.7164 2.7174v-.001L9.2721 12l2.7164-2.7154zm-9.2722-.001L5.4088 12l-2.6914 2.6924L0 12l2.7164-2.7164zM11.9885.0115l7.353 7.329-2.7174 2.7154-4.6356-4.6356-4.6355 4.6595-2.7174-2.7154 7.353-7.353z" />
                    </svg>
                </div>
            </div>
            <hr className="my-12 border-gray-200 dark:border-gray-700" />
        </div>
    );
};
export default Banner;
