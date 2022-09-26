import React from "react";
import Trade from "../assets/img/trade.png"
export default function AboutUs() {
    return (
        <div>
            <div class="py-16 bg-gradient-to-b from-sky-50 to-sky-200">
                <div class="container m-auto px-6 text-sky-900 md:px-12 xl:px-6">
                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div class="md:5/12 lg:w-5/12">
                            <img src={Trade} alt="imge" loading="lazy" width="" height="" />
                        </div>
                        <div class="md:7/12 lg:w-6/12">
                            <h2 class="text-2xl text-sky-900 font-bold md:text-4xl">About World Class</h2>
                            <p class="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                            <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                            <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                            <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
