// import React from 'react'
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import Product from './page';

type Product = {
  id: number;
  name: string;
  price: number;
  brandId: number;
};

const DeleteProduct = ({ propsProducts }: { propsProducts: Product }) => {
  const router = useRouter();

  const handleDelete = async (productId: number) => {
    await axios.delete(`/api/products/${productId}`);
    router.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Product</DialogTitle>
          {/* <DialogDescription></DialogDescription> */}
        </DialogHeader>
        <div className="flex items-center space-x-2">
          Are sure to delete {propsProducts.name}?
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button className="bg-gray-600 text-gray-50">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={() => {
                handleDelete(propsProducts.id);
              }}
            >
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteProduct;
