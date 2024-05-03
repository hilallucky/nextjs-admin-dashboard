"use client";

import React, { SVGProps, useCallback, useState } from 'react'

interface Props<DataType> {
    label: string;
    items: Array<DataType>;
    value: string;
    labelExtractor: (item: DataType) => string;
    valueExtractor: (item: DataType) => string;
    onValueChange: (value: string, selectedItem: DataType) => void;
    icon?: SVGProps<SVGSVGElement>;
}

const CustomSelect = <DataType,>({
    label,
    items,
    value,
    onValueChange,
    labelExtractor,
    valueExtractor,
    icon,
    ...props
}: Props<DataType>) => {

    const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

    const handleOnValueChange = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            const {
                target: { value: selectedValue }
            } = event;
            const item = items.find((i) => valueExtractor(i) == selectedValue);
            if (!item) return; // item cannot be undefined  
            onValueChange(selectedValue, item!);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps  
        [items]
    );

    return (
        // <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className='flex flex-col gap-5.5 p-6.5'>

            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                <span>{label}</span>
            </label>

            <div className="relative z-20 bg-white dark:bg-form-input">
                <span className="absolute left-4 top-1/2 z-30 -translate-y-1/2">
                    {icon}
                </span>
                <select
                    value={value}
                    onChange={handleOnValueChange}
                    // className=" w-full max-w=md rounded-md border border-gray-100 px-4 py-2"
                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-12 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary;`}
                >
                    <option key="" value="" disabled className="text-body dark:text-bodydark">
                        Select {label}
                    </option>
                    {items.map((item, index) => {
                        const itemLabel = labelExtractor(item);
                        const itemValue = valueExtractor(item);
                        return (
                            <option key={index} value={itemValue} className=" capitalize">
                                {itemLabel}
                            </option>
                        );
                    })}
                </select>

                <span className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.8">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                fill="#637381"
                            ></path>
                        </g>
                    </svg>
                </span>
            </div>
        </div>
        // </div>
    );
};

CustomSelect.displayName = 'CustomSelect';

export default CustomSelect