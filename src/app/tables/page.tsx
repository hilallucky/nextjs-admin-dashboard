import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CustomTableWithImage from "@/components/common/Table/CustomTableWithImage";

import nextConfig from "@/../next.config";
import { Product } from "@/types/product";
import { useState } from "react";
import CustomTableWithDynamicData from "@/components/common/Table/CustomTableWithDynamicData";
import DataTable from "@/components/common/Table/CustomTableWithDynamicDataTwo";

const imagePath = `${nextConfig.basePath}/images/product/`;

const productData: Product[] = [
    {
        image: `${imagePath}product-01.png`,
        name: "Apple Watch Series 7",
        category: "Electronics",
        price: 296,
        sold: 22,
        profit: 45,
    },
    {
        image: `${imagePath}product-02.png`,
        name: "Macbook Pro M1",
        category: "Electronics",
        price: 546,
        sold: 12,
        profit: 125,
    },
    {
        image: `${imagePath}product-03.png`,
        name: "Dell Inspiron 15",
        category: "Electronics",
        price: 443,
        sold: 64,
        profit: 247,
    },
    {
        image: `${imagePath}product-04.png`,
        name: "HP Probook 450",
        category: "Electronics",
        price: 499,
        sold: 72,
        profit: 103,
    },
];


const columns = [
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Age',
        accessor: 'age',
    },
    {
        Header: 'City',
        accessor: 'city',
    },
];

const data = [
    {
        name: 'John Doe',
        age: 28,
        city: 'New York',
    },
    {
        name: 'Jane Doe',
        age: 26,
        city: 'Los Angeles',
    },
    {
        name: 'Bob Smith',
        age: 34,
        city: 'Chicago',
    },
];

export const metadata: Metadata = {
    title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
    description:
        "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const TablesPage = () => {
    // const [selectedProductId, setSelectedProductId] = useState('');
    // const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    return (
        <DefaultLayout>
            <Breadcrumb pageName="Tables" />

            <div className="flex flex-col gap-10">
                <TableOne />
                <TableTwo />
                <CustomTableWithImage
                    id="product"
                    label="Product Data"
                    items={productData}
                // labelExtractor={({ name }) => name}
                // valueExtractor={({ id }) => id}
                />

                <CustomTableWithDynamicData
                    data={productData}
                    containImage={true}
                    imageColumn={1}
                    label="product data"
                />

                <DataTable
                    data={productData}
                    resourceTitle="brands"
                    label="product data"
                />
                {/* Other components or content here */}


                <TableThree />
            </div>
        </DefaultLayout>
    );
};

export default TablesPage;
