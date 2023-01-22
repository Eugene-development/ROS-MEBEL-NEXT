export default function ProductList (prop) {
    return (
        <>
            <div id="models" class="bg-gray-100">
                <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-16 ">
                    <div class="space-y-12">
                        <div class="space-y-5 text-center sm:space-y-4">
                            <h2 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                                {/* {content.mainText.titleCategory} */}HHH
                            </h2>
                            <p class="text-xl  text-gray-900">LLLLLL</p>
                        </div>
                        <div class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-3 lg:gap-10">
                            {/* {#each content.products as { name, text, img, alt }}
                                <div
                                    class="transition ease-in-out hover:scale-105 py-10 px-6 text-center rounded-lg xl:px-8 xl:text-left shadow-2xl shadow-gray-600"
                                >
                                    <div class="space-y-8 xl:space-y-10">
                                        <img class="mx-auto  rounded-md h-64 object-cover" src={img} {alt} />
                                        <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                                            <div class="font-medium text-lg leading-6 space-y-1 divide-y divide-green-300">
                                                <h3 class="py-1 text-gray-800 text-2xl">{name}</h3>
                                                <p class="py-1 text-gray-800 text-base">{text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/each} */}
                            {prop.products.map(({name, text, img}, i) => (
                                <div key={i}
                                    class="transition ease-in-out hover:scale-105 py-10 px-6 text-center rounded-lg xl:px-8 xl:text-left shadow-2xl shadow-gray-600"
                                >
                                    <div class="space-y-8 xl:space-y-10">
                                        <img class="mx-auto  rounded-md h-64 object-cover" src={img} />
                                        <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                                            <div class="font-medium text-lg leading-6 space-y-1 divide-y divide-green-300">
                                                <h3 class="py-1 text-gray-800 text-2xl">{name}</h3>
                                                <p class="py-1 text-gray-800 text-base">{text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ) )}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
