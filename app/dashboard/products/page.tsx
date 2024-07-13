import { Button } from "@/components/ui/button";
import { MoreHorizontal, PlusCircle, UserIcon } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProductsRoute() {
  return (
    <>
      <div className="flex items-center justify-end">
        <Button asChild className="flext items-center gap-x-2">
          <Link href="/dashboard/products/create">
            <PlusCircle className="size-4.5" />
            <span>Add Product</span>
          </Link>
        </Button>
      </div>

      <Card className="mt-5">
        <CardHeader className="px-7">
          <CardTitle>Products</CardTitle>
          <CardDescription>
            Manage your products and view their sales and performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-end">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <UserIcon className="size-16" />
                </TableCell>
                <TableCell>Nike Air Jordan</TableCell>
                <TableCell>$299.00</TableCell>
                <TableCell>2024-04-08</TableCell>
                <TableCell className="text-right flex gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontal className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
