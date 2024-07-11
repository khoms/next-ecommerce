import { AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row justify-between items-center pb-2">
            <CardTitle>Toal Revenue</CardTitle>
            <DollarSign className="size-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$1000.00</p>
            <p className="text-xs text-muted-foreground">
              Based on 100 Charges
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row justify-between items-center pb-2">
            <CardTitle>Total Products</CardTitle>
            <ShoppingBag className="size-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">42</p>
            <p className="text-xs text-muted-foreground">
              Total Products Created
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row justify-between items-center pb-2">
            <CardTitle>Toal Revenue</CardTitle>
            <PartyPopper className="size-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$1000.00</p>
            <p className="text-xs text-muted-foreground">
              Based on 100 Charges
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row justify-between items-center pb-2">
            <CardTitle>Toal Revenue</CardTitle>
            <User2 className="size-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">120</p>
            <p className="text-xs text-muted-foreground">
              Total User signed up
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>Recent transaction from store</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent sales</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex size-9">
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm   font-medium">Khom Khoms</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>
          </CardContent>

          <CardContent className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex size-9">
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm  font-medium">Khom Khoms</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>
          </CardContent>

          <CardContent className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex size-9">
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm  font-medium">Khom Khoms</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>
          </CardContent>

          <CardContent className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex size-9">
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm  font-medium">Khom Khoms</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
