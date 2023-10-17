// import React from 'react'
import AddProduct from './addProduct';
// import { PrismaClient } from '@prisma/client';
import prisma from '../db';
import DeleteProduct from './deleteProduct';
import EditProduct from './editProduct';

// const prisma = new PrismaClient();

const getProducts = async () => {
  const response = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      brandId: true,
      brandRelationKey: true,
    },
  });

  return response;
};

const getBrands = async () => {
  const response = await prisma.brand.findMany();
  return response;
};

const Product = async () => {
  // const products = await getProducts();
  // const brands = await getBrands();

  //alternative
  const [products, brands] = await Promise.all([getProducts(), getBrands()]);

  return (
    <div className=" ">
      <div className=" pb-10">
        <AddProduct propsBrands={brands} />
      </div>

      <table className="table-fixed w-full max-w-7xl rounded-lg bg-gray-100">
        <thead className="border-b-2 border-gray-500 bg-gray-400 ">
          <tr className="text-center ">
            <th>No</th>
            <th>Product Name </th>
            <th>Price</th>
            <th>Brand</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* <hr className='w-full bg-none' /> */}
        <tbody>
          {products.map((product, index) => (
            <tr className="text-center" key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.brandRelationKey.name}</td>
              <td>
                <EditProduct propsProducts={product} propsBrands={brands} />
                <DeleteProduct propsProducts={product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
