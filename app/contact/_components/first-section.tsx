"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import * as z from "zod";

import { Computer, ScreenShare, Share, Smile } from "lucide-react";

import Image from "next/image";

import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";

import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  job_title: z.string(),
  company_name: z.string(),
  help: z.enum([
    "Evaluate Bird for my company",
    "Learn More",
    "Get a Quote",
    "How to use Bird",
    "Other",
  ]),
  company_size: z.enum([
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "501-1000",
    "1000+",
  ]),
  info: z.string(),
});

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  company_name: string;
  help:
    | "Evaluate Bird for my company"
    | "Learn More"
    | "Get a Quote"
    | "How to use Bird"
    | "Other";
  company_size: "1-10" | "11-50" | "51-200" | "201-500" | "501-1000" | "1000+";
  info: string;
  terms: boolean;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      help: "Learn More",
      company_size: "1-10",
      info: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
      className="md:pb-20 md:flex justify-between md:p-28 bg-[#111019] h-full"
    >
      {!submitted ? (
        <div className="md:w-1/3 font-medium px-10">
          <div className="md:text-[80px] text-[45px] pt-16 md:pt-0 leading-tight text-[#f1f0f3]">
            Contact our sales team
          </div>
          <div
            className="
                    text-2xl
                    md:text-3xl
                    py-10
                    text-[#bbb6c6]
                    font-light
                    leading-relaxed
                    "
          >
            Built for every team across your company, Bird Enterprise boosts
            productivity with upgraded security and account support. Contact us
            today to unlock:
          </div>

          <div className="flex flex-col space-y-6 pb-20">
            <div className="flex gap-6 items-center">
              <div className="bg-[#eff0ff] p-4 items-center justify-center flex rounded-full">
                <Computer className="text-4xl text-[#4b42ad]" />
              </div>
              <div className="md:text-xl text-[#eff0ff] font-light">
                Capture screen and audio on MacOS, Windows, and Chrome
              </div>
            </div>

            <div className="flex gap-6 items-center">
              <div className="bg-[#eff0ff] p-4 items-center justify-center flex rounded-full">
                <ScreenShare className="text-4xl text-[#4b42ad]" />
              </div>
              <div className="md:text-xl text-[#eff0ff] font-light">
                Enjoy easy screen recording from iOS and Android devicesr
              </div>
            </div>

            <div className="flex gap-6 items-center">
              <div className="bg-[#eff0ff] p-4 items-center justify-center flex rounded-full">
                <Share className="text-4xl text-[#4b42ad]" />
              </div>
              <div className="md:text-xl text-[#eff0ff] font-light">
                Enjoy easy screen recording from iOS and Android devicesr
              </div>
            </div>
            <div className="pt-16 text-2xl text-[#f1f0f3]">
              The world&apos;s most innovative companies use Bird
            </div>

            <div className="flex flex-col space-y-4 items-center md:items-start">
              <Image
                src="/logos/logoipsum-289.svg"
                alt="Picture of the author"
                width={500}
                height={500}
                className="
                w-40
                "
              />

              <Image
                src="/logos/logoipsum-297.svg"
                alt="Picture of the author"
                width={500}
                height={500}
                className="
                w-40
               "
              />

              <Image
                src="/logos/logoipsum-311.svg"
                alt="Picture of the author"
                width={500}
                height={500}
                className="
                w-40
               "
              />

              <Image
                src="/logos/logoipsum-265.svg"
                alt="Picture of the author"
                width={500}
                height={500}
                className="
                w-40
                "
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="
        text-4xl 
        md:text-6xl 
        my-40 
        text-[#eff0ff] 
        items-center 
        justify-center 
        text-center 
        px-10 
        mx-auto
        ">
            <div>
                {" "}
                Thank you for contacting us! We will get back to you soon.
                {" "}
                </div>
                <div className="mx-auto items-center justify-center flex py-40">
                    <Smile className=" text-[#4b42ad]" size={100} />
                    </div>
            </div>
      )}

            <Form {...form}>
                {!submitted ? (
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="
                        md:w-1/2 
                        space-y-6 
                        border 
                        p-10 
                        md:p-20
                        md:rounded-[60px]
                        bg-white
                        sm:overflow-hidden
                        h-1/2
                        "
                        >
                            <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem className="items-center justify-center space-y-4 w-full">
                                    <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                                        WORK EMAIL *
                                    </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                </FormItem>
                            )}
                            />

                        <FormField
                            control={form.control}
                            name='first_name'
                            render={({ field }) => (
                                <FormItem className="items-center justify-center space-y-4 w-full">
                                    <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                                        FIRST NAME *
                                    </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                </FormItem>
                            )}
                            />

                        <FormField
                            control={form.control}
                            name='last_name'
                            render={({ field }) => (
                                <FormItem className="items-center justify-center space-y-4 w-full">
                                    <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                                        LAST NAME *
                                    </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                </FormItem>
                            )}
                            />


                        <FormField
                            control={form.control}
                            name='job_title'
                            render={({ field }) => (
                                <FormItem className="items-center justify-center space-y-4 w-full">
                                    <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                                        JOB TITLE *
                                    </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                </FormItem>
                            )}
                            />

                        <FormField
                            control={form.control}
                            name='company_size'
                            render={({ field }) => (
                                <FormItem className="items-center justify-center space-y-4 w-full">
                                    <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                                        COMPANY SIZE *
                                    </FormLabel>
                                    <Select 
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select an option" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <div className="flex gap-4">
                                                <SelectItem value="1-10">1-10</SelectItem>
                                            </div>
                                            <SelectItem value="11-50">11-50</SelectItem>
                                            <SelectItem value="51-200">51-200</SelectItem>
                                            <SelectItem value="501-1000">501-1000</SelectItem>
                                            <SelectItem value="1000+">1000+</SelectItem>
                                         

                                        </SelectContent>

                                    </Select>
                                  
                                </FormItem>
                            )}
                            />

                <FormField
                            control={form.control}
                            name='company_name'
                            render={({ field }) => (
                                <FormItem className="items-center justify-center space-y-4 w-full">
                                    <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                                        COMPANY NAME *
                                    </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                </FormItem>
                            )}
                            />

<FormField
                            control={form.control}
                            name='help'
                            render={({ field }) => (
                                <FormItem className="items-center justify-center space-y-4 w-full">
                                    <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                                        HOW CAN OUR SALES TEAM HELP ? *
                                    </FormLabel>
                                    <Select 
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select an option" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <div className="flex gap-4">
                                                <SelectItem value="Evaluate Bird for my company">Evaluate Bird for my company</SelectItem>
                                            </div>
                                            <SelectItem value="Learn More">Learn More</SelectItem>
                                            <SelectItem value="Get a Quote">Get a Quote</SelectItem>
                                            <SelectItem value="How to use Bird">How to use Bird</SelectItem>
                                            <SelectItem value="Other">Other</SelectItem>
                                         

                                        </SelectContent>

                                    </Select>
                                  
                                </FormItem>
                            )}
                            />

                    <FormField
                            control={form.control}
                            name='info'
                            render={({ field }) => (
                                <FormItem className="items-center justify-center space-y-4 w-full">
                                    <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                                        COMPANY NAME *
                                    </FormLabel>
                                        <FormControl>
                                            <Textarea 
                                            style={{ height: "200px"}}
                                            {...field} />
                                        </FormControl>
                                </FormItem>
                            )}
                            />

                           <div className="flex gap-4 items-center">
                            <div>
                                <Checkbox className="text-[#6c6684]" />
                            </div>
                            <div className="text-md font-light text-[#6c6684] md:w-3/4 mb-1">
                                I agree to Bird&apos;s Terms of Service and Privacy Policy.

                            </div>


                           </div>

                           <div className="flex items-center gap-4">
                            <Button type="submit" className="
                            text-md
                            font-light
                            rounded-[40px]
                            border-4
                            border-indigo-400/90
                            p-6
                            bg-[#565add]
                            hover:scale-110
                            transition-all
                            duration-300
                            shadow-md
                        hover:shadow-indigo-300
                            "
                            disabled={loading}
                            onClick={() => form.handleSubmit(onSubmit)}
                            >
                                Submit Form

                            </Button>

                           </div>
                        
                      
                        </form>
                ) : (
                    <>
                    </>
                )}
            </Form>

    </div>
  );
}
