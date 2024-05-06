"use client";

import Image from 'next/image';
import React from 'react';
import { useTable } from 'react-table';

interface Props {
    columns?: Column[];
    data?: any[];
    containImage?: boolean;
    imageColumn?: number;
}

const CustomTableWithDynamicData: React.FC<Props> = ({
    columns,
    data,
    containImage,
    imageColumn,
    ...props
}) => {

    const headersName = Array.from(new Set(data?.flatMap((item) => Object.keys(item))));

    return (

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="px-4 py-6 md:px-6 xl:px-7.5">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    {props?.label?.toUpperCase()}
                </h4>
            </div>

            {/* HEADER */}
            <div className="capitalize grid grid-cols-6 border-t border-stroke px-4 py-4.5 bg-gray-2 dark:bg-meta-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                {headersName?.map((item, key) => (
                    (key + 1 !== imageColumn && containImage) &&
                    <div key={key} className="col-span-1 flex items-center">
                        <p className="px-4 py-4 font-medium text-black dark:text-white">
                            {item}
                        </p>
                    </div>
                ))}
            </div>

            {/* DATAS */}
            <div className="capitalize grid grid-cols-6 border-t border-stroke px-4 py-4.5 bg-gray-2 dark:bg-meta-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                {data?.map((item, key) => (
                    headersName?.map((header, hkey) => (
                        // key === 0 && <div key={key} className="col-span-1 flex items-center">
                            // {
                                (hkey + 1 !== imageColumn && containImage) &&
                                <p className="text-sm text-black dark:text-white">
                                    {item[header]}
                                </p>
                            // }
                            // {(key === 0)} </div>
                    ))
                ))}
            </div>




            {/* <div className="capitalize grid grid-cols-6 border-t border-stroke px-4 py-4.5 bg-gray-2 dark:bg-meta-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                {headersName?.map((item, key) => (
                    <>
                        {
                            (imageColumn && (key + 1 === imageColumn)) ??
                            (<div className="h-12.5 w-15 rounded-md">
                            <Image
                              src={product.image}
                              width={60}
                              height={50}
                              alt="Product"
                            />
                          </div>)

                            <div key={key} className="col-span-1 flex items-center">
                                <p className="px-4 py-4 font-medium text-black dark:text-white">
                                    {item}
                                </p>
                            </div>
                        }
                    </>
                ))}

            </div> */}


        </div >
    );
};

export default CustomTableWithDynamicData;