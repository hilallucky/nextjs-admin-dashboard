import Image from "next/image";

interface TableProps<DataType extends { name: string }> {
    id: string;
    label: string;
    items: Array<DataType>;
    // labelExtractor: (item: DataType) => string;
    // valueExtractor: (item: DataType) => string;
}

const CustomTableWithImage = <DataType extends { name: string },>({
    id,
    label,
    items,
    // labelExtractor,
    // valueExtractor,
    ...props
}: TableProps<DataType>) => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="px-4 py-6 md:px-6 xl:px-7.5">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    {label.toUpperCase()}
                </h4>
            </div>

            {/* <div className="grid grid-cols-6 border-t bborderorder-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                {items.map((item, index) => {
                    // const itemLabel = labelExtractor(item);
                    // const itemValue = valueExtractor(item);
                    return (
                        // <option key={index} value={itemValue} className=" capitalize">
                        //     {itemLabel}
                        // </option>


                        <div className="col-span-1 flex items-center">
                            <p className="font-medium">
                                {item?.name}
                            </p>
                        </div>
                    );
                })}


            </div> */}

            {/* {productData.map((product, key) => (
                <div
                    className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
                    key={key}
                >
                    <div className="col-span-3 flex items-center">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <div className="h-12.5 w-15 rounded-md">
                                <Image
                                    src={product.image}
                                    width={60}
                                    height={50}
                                    alt="Product"
                                />
                            </div>
                            <p className="text-sm text-black dark:text-white">
                                {product.name}
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 hidden items-center sm:flex">
                        <p className="text-sm text-black dark:text-white">
                            {product.category}
                        </p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="text-sm text-black dark:text-white">
                            ${product.price}
                        </p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="text-sm text-black dark:text-white">{product.sold}</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="text-sm text-meta-3">${product.profit}</p>
                    </div>
                </div>
            ))} */}
        </div>
    );
};

export default CustomTableWithImage;
