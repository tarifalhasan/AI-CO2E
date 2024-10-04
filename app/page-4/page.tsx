"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  Ship_Type: z.string(),
  length: z.string(),
  breadth: z.string(),
  draught: z.string(),
  year_built: z.string(),
  gross_tonnage: z.string(),
  summer_deadweight: z.string(),
  maximum_speed: z.string(),
  average_speed: z.string(),
});

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";

const ShipParticulars = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Ship_Type: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="container pt-10 pb-16  grid grid-cols-12 gap-y-10 xl:gap-x-10">
      <div className="col-span-12 xl:col-span-3">
        <div
          className=" min-h-[694px] gap-y-10 bg-[#ECEFF1] flex flex-col justify-between p-4  "
          style={{
            boxShadow: "0px 8px 30px 0px rgba(9, 33, 57, 0.20)",
          }}
        >
          <div className="space-y-2">
            <h4 className="text-lg font-bold">Service</h4>
            <ul className="flex flex-col pt-4 gap-y-2">
              <li>
                <Link className="flex items-center gap-x-2" href={"/page-4"}>
                  <Image
                    width={30}
                    height={32}
                    src={"/images/icons1.svg"}
                    alt="Emission using IMO"
                  />
                  <span className="text-base text-[#1F263E]">
                    Emission using IMO
                  </span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-x-2" href={"/page-6"}>
                  <Image
                    width={28}
                    height={28}
                    src={"/images/icons2.svg"}
                    alt="Emission using Ship Details"
                  />
                  <span className="text-base text-[#1F263E]">
                    Emission using Ship Details
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <Button>Upload a CSV</Button>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-9 grid gap-10 lg:grid-cols-12">
        <div className="space-y-2 col-span-12  flex flex-col gap-y-3 lg:col-span-4 ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-4"
            >
              <FormField
                control={form.control}
                name="Ship_Type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Ship_Type <span className="text-red-600">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ship-1">Ship 1</SelectItem>
                        <SelectItem value="ship-2">Ship 2</SelectItem>
                        <SelectItem value="ship-3">Ship 3</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="length"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Length <span className="text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="In meters" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="breadth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Breadth <span className="text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="In meters" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="draught"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Draught <span className="text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="In meters" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="year_built"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Year Built<span className="text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Year (e.g. 2003) " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gross_tonnage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Gross tonnage <span className="text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="In Tonnes " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="summer_deadweight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Summer Deadweight<span className="text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="In Tonnes" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maximum_speed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Maximum Speed <span className="text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="In Knots" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="average_speed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Average Speed <span className="text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="In Knots" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>

        <div className="col-span-12 lg:col-span-8 ">
          <div className="grid  gap-10">
            <Card>
              <CardContent className="pt-4 gap-y-5 flex flex-col items-center">
                <div>
                  <Button className="w-full">Estimate TE</Button>
                </div>
                <div>
                  <p className="text-justify font-sans text-base text-black leading-[162%]">
                    The Energy Efficiency Design Index for International
                    Shipping (EIV / EEDI) is a metric that quantifies a
                    vessel&apos;s carbon emissions per unit of transport work,
                    typically measured in grams of CO₂ per tonne-nautical mile.
                    EIV serves as a standardized measure to evaluate the energy
                    efficiency of ships, playing a critical role in promoting
                    sustainable maritime operations and reducing environmental
                    impact.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 gap-y-5 flex flex-col items-center">
                <div>
                  <Button className="w-full">Estimate FC</Button>
                </div>
                <div>
                  <p className="text-justify font-sans text-base text-black leading-[162%]">
                    Fuel consumption (FC) measured in metric tonnes (m tonnes)
                    refers to the quantity of fuel used by a vessel, typically
                    expressed in metric tonnes, providing a standardized measure
                    to evaluate fuel usage over a given period or distance. This
                    metric is crucial for assessing the operational efficiency
                    and environmental impact of maritime transport.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 gap-y-5 flex flex-col items-center">
                <div>
                  <Button className="w-full">Estimate CO</Button>
                </div>
                <div>
                  <p className="text-justify font-sans text-base text-black leading-[162%]">
                    Carbon emissions (CE) measured in metric tonnes (m tonnes)
                    refer to the total amount of carbon dioxide (CO₂) released
                    into the atmosphere as a result of fuel combustion or other
                    industrial processes, quantified in units of metric tonnes
                    for standardization and comparative analysis, essential for
                    assessing environmental impact and regulatory compliance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipParticulars;
