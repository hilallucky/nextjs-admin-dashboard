"use client";

import React, { FC, InputHTMLAttributes } from 'react'

const Statuses = {
    default: 'w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary',
    active: 'w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white',
    disable: 'w-full rounded-lg border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black border-stroke'
};

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    label?: string | null,
    placeholder?: string | undefined,
    data?: string | null,
    error?: string | null,
    required: boolean,
    disabled?: boolean,
    status?: string | undefined
}

const CustomTextArea = ({
    name,
    label,
    placeholder,
    data,
    error,
    required,
    disabled,
    status,
    ...props
}: Props) => {
    return (
        <div>
            {/* <!-- Textarea Fields --> */}
            <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                    <label htmlFor={name} className="mb-3 block text-sm font-medium text-black dark:text-white">
                        {label}
                    </label>
                    <textarea
                        rows={6}
                        placeholder={placeholder}
                        disabled={disabled}
                        value={data || ''}
                        className={disabled ? Statuses.disable : status === 'active' ? Statuses.active : Statuses.default}
                    ></textarea>
                </div>
            </div>
        </div >
    )
}

export default CustomTextArea