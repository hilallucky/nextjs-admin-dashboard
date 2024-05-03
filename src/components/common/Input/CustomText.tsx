"use client";

import React, { FC, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    label?: string | null,
    data?: string | null,
    error?: string | null,
    required: boolean
}

const CustomText = ({
    name,
    label,
    data,
    error,
    required,
    ...props
}: Props) => {
    return (
        <div>
            <label htmlFor={name} className={`mb-3 block text-sm font-medium text-black dark:text-white ${error ? 'text-error' : ''}`}>{label}</label>
            <input className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${error ? 'input-error' : ''}`}
                name={name}
                required={required}
                value={data || ''}
                {...props}
            />
            <span className="text-sm text-red-500 ">{error}</span>
        </div>
    )
}

export default CustomText