import { NextResponse } from 'next/server';
import prisma from '../../../db';
import type { Product } from '@prisma/client';

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const productDelete = await prisma.product.delete({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(productDelete, { status: 200 });
};

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body: Product = await request.json();

  const productEdit = await prisma.product.update({
    where: {
      id: Number(params.id),
    },
    data: {
      name: body.name,
      price: body.price,
      brandId: body.brandId,
    },
  });

  return NextResponse.json(productEdit, { status: 200 });
};
