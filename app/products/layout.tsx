export const metadata = {
  title: 'Products',
};

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center py-10">{children}</div>
  );
};

export default ProductLayout;
