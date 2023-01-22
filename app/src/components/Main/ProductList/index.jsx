export default function ProductList (prop) {
    return (
        <>
            <div id="models" className="bg-gray-100">
                <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-16 ">
                    <div className="space-y-12">
                        {/* <div className="space-y-5 text-center sm:space-y-4">
                            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                                HHH
                            </h2>
                            <p className="text-xl  text-gray-900">LLLLLL</p>
                        </div> */}
                        <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-3 lg:gap-10">
                            {/* {#each content.products as { name, text, img, alt }}
                                <div
                                    className="transition ease-in-out hover:scale-105 py-10 px-6 text-center rounded-lg xl:px-8 xl:text-left shadow-2xl shadow-gray-600"
                                >
                                    <div className="space-y-8 xl:space-y-10">
                                        <img className="mx-auto  rounded-md h-64 object-cover" src={img} {alt} />
                                        <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                                            <div className="font-medium text-lg leading-6 space-y-1 divide-y divide-green-300">
                                                <h3 className="py-1 text-gray-800 text-2xl">{name}</h3>
                                                <p className="py-1 text-gray-800 text-base">{text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/each} */}
                            {prop.products.map(({name, text, img}, i) => (
                                <div key={i}
                                    className="transition ease-in-out hover:scale-105 py-10 px-6 text-center rounded-lg xl:px-8 xl:text-left shadow-2xl shadow-gray-600"
                                >
                                    <div className="space-y-8 xl:space-y-10">
                                        <img className="mx-auto  rounded-md h-64 object-cover" src={img} />
                                        <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                                            <div className="font-medium text-lg leading-6 space-y-1 divide-y divide-green-300">
                                                <h3 className="py-1 text-gray-800 text-2xl">{name}</h3>
                                                <p className="py-1 text-gray-800 text-base">{text}</p>
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
