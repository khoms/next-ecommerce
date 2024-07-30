"use client";

import { createProduct, editProduct } from "@/app/actions";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { categories } from "@/lib/categories";

import { ChevronLeft, XIcon } from "lucide-react";
import Link from "next/link";
import { SubmitButton } from "../SubmitButtons";
import { parseWithZod } from "@conform-to/zod";
import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { productSchema } from "@/lib/zodSchemas";
import { useState } from "react";
import Image from "next/image";
import { $Enums } from "@prisma/client";

interface iAppProps {
  data: {
    id: string;
    name: string;
    description: string;
    status: $Enums.ProductStatus;
    price: number;
    images: string[];
    category: $Enums.Category;
    isFeatured: boolean;
  };
}

export function EditForm({ data }: iAppProps) {
  const [lastResult, action] = useFormState(editProduct, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  const [images, setImages] = useState<string[]>(data.images);

  const handleDelete = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <input type="hidden" name="productId" value={data.id} />
      <div className="flex items-center gap-4">
        <Button variant="outline" asChild>
          <Link href="/dashboard/products">
            <ChevronLeft />
          </Link>
        </Button>
        <h1 className="text-2xl font-semibold">Edit Product</h1>
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>You can edit existing product here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Label>Name</Label>
              <Input
                placeholder="Product Name"
                key={fields.name.key}
                name={fields.name.name}
                defaultValue={data.name}
              />
              <p className="text-red-400">{fields.name.errors}</p>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Description</Label>
              <Textarea
                placeholder="Enter Product Description Here...."
                key={fields.description.key}
                name={fields.description.name}
                defaultValue={data.description}
              />
              <p className="text-red-400">{fields.description.errors}</p>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Price</Label>
              <Input
                placeholder="$200"
                type="number"
                key={fields.price.key}
                name={fields.price.name}
                defaultValue={data.price}
              />
              <p className="text-red-400">{fields.price.errors}</p>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Featured Product</Label>
              <Switch
                key={fields.isFeatured.key}
                name={fields.isFeatured.name}
                checked={data.isFeatured}
              />
              <p className="text-red-400">{fields.isFeatured.errors}</p>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Status</Label>
              <Select
                key={fields.status.key}
                name={fields.status.name}
                defaultValue={data.status}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-red-400">{fields.status.errors}</p>
            </div>

            {/* Categories */}

            <div className="flex flex-col gap-3">
              <Label>Category</Label>
              <Select
                key={fields.category.key}
                name={fields.category.name}
                defaultValue={data.category}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => {
                    return (
                      <SelectItem key={category.id} value={category.name}>
                        {category.title}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <p className="text-red-400">{fields.category.errors}</p>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Images</Label>
              <input
                type="hidden"
                value={images}
                key={fields.images.key}
                name={fields.images.name}
                defaultValue={data.images as any}
              />
              {images.length > 0 ? (
                <div className="flex gap-5">
                  {images.map((img, index) => {
                    return (
                      <div className="relative w-[100px] h-[100px]">
                        <Image
                          height={100}
                          width={100}
                          src={img}
                          alt="Product Image"
                        />
                        <XIcon
                          className="absolute -top-3 -right-3 bg-red-400 p-1 text-white rounded-lg object-cover"
                          onClick={() => handleDelete(index)}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <UploadDropzone
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    setImages(res.map((r) => r.url));
                  }}
                  onUploadError={() => {
                    alert("Something went wrong");
                  }}
                />
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex gap-2 justify-end">
          <SubmitButton text="Update Product" />

          <Button variant="secondary">Cancel</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
