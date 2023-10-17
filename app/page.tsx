// import React from 'react'

import { Button } from '@/components/ui/button';

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div>menuju page /products</div>
      <Button>
        <a href="/products">klik disini</a>
      </Button>
    </div>
  );
};

export default page;
