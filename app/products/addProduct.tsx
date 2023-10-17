'use client';

import { useState, SyntheticEvent } from 'react';
import type { Brand } from '@prisma/client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '../../src/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AddProduct = ({ propsBrands }: { propsBrands: Brand[] }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  // const [name,setName] = useState('')

  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post('/api/products', {
      name: name,
      price: Number(price),
      brandId: Number(brand),
    });

    setName('');
    setPrice('');
    setBrand('');

    router.refresh();
  };

  

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gray-600 text-gray-50">Add Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>Create your product here</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="md:flex mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                htmlFor="my-textfield"
              >
                GPU Brand
              </label>
            </div>
            <div className="md:w-2/3">
              <label htmlFor=""></label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                name=""
                id=""
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option value="">Select a GPU Brand</option>
                {propsBrands.map((brand) => (
                  <option value={brand.id} key={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
              <p className="py-2 text-sm text-gray-600">
                Select your product GPU brand for easy searching by buyers.
              </p>
            </div>
          </div>
          <div className="md:flex mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                htmlFor="my-textfield"
              >
                Product Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                placeholder="Product Name"
                required
              />
              <p className="py-2 text-sm text-gray-600">
                Write your product name for easy searching by buyers.
              </p>
            </div>
          </div>

          <div className="md:flex mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                htmlFor="my-textfield"
              >
                Product Price
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2"
                placeholder="Rp. -"
                required
              />
              <p className="py-2 text-sm text-gray-600">
                Input the price of your product without using periods. For
                example, 1000 instead of 1.000.
              </p>
            </div>
          </div>

          <DialogFooter>
            <DialogClose>
              <div className="md:flex flex-row md:items-center">
                {/* <div className="md:w-1/3">aaa</div> */}
                {/* <div className="md:w-2/3 flex justify-end"> */}
                {/* button */}
                <button type="submit">
                  <a
                    href="#_"
                    className="relative inline-flex items-center justify-end px-6 py-3 overflow-hidden font-medium transition-all bg-gray-500 rounded-xl group"
                  >
                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gray-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-gray-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                      Add Product
                    </span>
                  </a>
                </button>
                {/* button */}
                {/* </div> */}
              </div>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
