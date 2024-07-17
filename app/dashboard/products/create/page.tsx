"use client";

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

import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function CreateProductPage() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Button variant="outline" asChild>
          <Link href="/dashboard/products">
            <ChevronLeft />
          </Link>
        </Button>
        <h1 className="text-2xl font-semibold">New Product</h1>
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
          <CardDescription>You can add new product here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Label>Name</Label>
              <Input placeholder="Product Name" />
            </div>

            <div className="flex flex-col gap-3">
              <Label>Description</Label>
              <Textarea placeholder="Enter Product Description Here...." />
            </div>

            <div className="flex flex-col gap-3">
              <Label>Price</Label>
              <Input placeholder="$200" type="number" />
            </div>

            <div className="flex flex-col gap-3">
              <Label>Featured Product</Label>
              <Switch />
            </div>

            <div className="flex flex-col gap-3">
              <Label>Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Images</Label>
              <UploadDropzone
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  alert("Finished uploading");
                }}
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex gap-2 justify-end">
          <Button>Save Product</Button>

          <Button variant="secondary">Cancel</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
