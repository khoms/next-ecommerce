import ProductCard from "@/app/components/storefront/ProductCard";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";

async function getData(productCategory: string) {
  switch (productCategory) {
    case "all": {
      const data = await prisma.product.findMany({
        where: { status: "published" },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return { title: "All Products", data: data };
    }
    case "men": {
      const data = await prisma.product.findMany({
        where: { status: "published", category: "men" },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return { title: "Men's Products", data: data };
    }
    case "women": {
      const data = await prisma.product.findMany({
        where: { status: "published", category: "women" },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return { title: "Women's Products", data: data };
    }
    default: {
      return notFound();
    }
  }
}

export async function Products({ params }: { params: { name: string } }) {
  const { data, title } = await getData(params.name);

  return (
    <section>
      <h1 className="font-semibold text-3xl my-5">{title}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
