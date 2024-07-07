"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { BedDoubleIcon, CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";

export const formSchema = z.object({
  location: z.string().min(2).max(50),
  dates: z.object({
    from: z.date(),
    to: z.date(),
  }),
  adults: z
    .string()
    .min(1, {
      message: "Please select at least 1 adult",
    })
    .max(12, { message: "Max 12 adults Occupancy" }),
  children: z.string().min(0).max(12, {
    message: "Max 12 children Occupancy",
  }),
  rooms: z.string().min(1, {
    message: "Please select at least 1 room",
  }),
});

function SearchForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      dates: {
        from: undefined,
        to: undefined,
      },
      adults: "1",
      children: "0",
      rooms: "1",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const url = `https://www.booking.com/searchresults.html?ss=${
      values.location
    }&group_adults=${values.adults}&group_children=${
      values.children
    }&no_rooms=${values.rooms}&checkin=${values.dates.from.getFullYear()}-${
      values.dates.from.getMonth() + 1
    }-${values.dates.from.getDate()}&checkout=${values.dates.to.getFullYear()}-${
      values.dates.to.getMonth() + 1
    }-${values.dates.to.getDate()}`;

    router.push(`/search?url=${encodeURIComponent(url)}`);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-lg ring-2 bg-white ring-yellow-500 py-1 px-2"
      >
        <div className="grid  w-full lg:max-w-sm items-center gap-1.5">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormMessage />

                <FormControl>
                  <Input
                    className="placeholder:text-black"
                    placeholder="Location"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="grid w-full lg:max-w-sm flex-1 items-center gap-1.5">
          <FormField
            control={form.control}
            name="dates"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormMessage />

                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        id="date"
                        name="dates"
                        variant={"outline"}
                        className={cn(
                          "w-full lg:w-[300px] justify-start text-left font-normal",
                          !field.value.from && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-3 h-4 w-4 opacity-80" />
                        {field.value?.from ? (
                          field.value?.to ? (
                            <>
                              {format(field.value?.from, "LLL dd, y")} -{" "}
                              {format(field.value?.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(field.value?.from, "LLL dd, y")
                          )
                        ) : (
                          <span className="text-black">Select your dates</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      selected={field.value}
                      defaultMonth={field.value.from}
                      onSelect={field.onChange}
                      numberOfMonths={2}
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-center items-center space-x-2">
          <FormField
            control={form.control}
            name="adults"
            render={({ field }) => (
              <FormItem className="flex   justify-center items-center space-x-2  pb-2 ">
                <FormLabel className="text-black -mb-2">Adults</FormLabel>
                <FormMessage />
                <FormControl className="min-w-20 ">
                  <Input type="number" placeholder="Children" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="children"
            render={({ field }) => (
              <FormItem className="flex   justify-center items-center space-x-2  pb-2 ">
                <FormLabel className="-mb-2 text-black">Children</FormLabel>
                <FormMessage />
                <FormControl className="min-w-20">
                  <Input type="number" placeholder="Children" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rooms"
            render={({ field }) => (
              <FormItem className="flex   justify-center items-center space-x-2  pb-2 ">
                <FormLabel className="text-black -mb-2">Rooms</FormLabel>
                <FormMessage />
                <FormControl className="min-w-20">
                  <Input type="number" placeholder="Children" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="">
            <Button type="submit" className="bg-blue-500 ">
              Search
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default SearchForm;
