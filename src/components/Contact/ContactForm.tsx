"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema } from "./Contact";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import emailjs from "emailjs-com";
const ContactForm =  () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit =async (data:any) => {
    try{
      // Send email using emailjs
    const response = await emailjs.send(
      "service_j1ewfgt",
      "template_ie6sgif",
      data,
      "nvIOX9X-aZ6UMz2_1"
    );
    if(response.status === 200){
      alert("Message sent successfully!");
      reset();
    }
  }
  catch (error) {
    alert(`message sent failed`);
    console.error(error);
  };
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-10">
      <div>
        <label htmlFor="name" ><p className="font-[Poppins] font-medium text-base mb-4 mt-5">Your Name</p></label>
        <Input id="name" {...register("name")} placeholder="Abc" />
        {errors.name?.message && <p className="text-red-600">{errors.name.message as string}</p>}
      </div>
      <div>
        <label htmlFor="email"><p className="font-[Poppins] font-medium text-base mb-4 mt-5">Email address</p></label>
        <Input id="email" {...register("email")} placeholder="Abc@def.com" />
        {errors.email?.message && <p className="text-red-600">{errors.email.message as string}</p>}
      </div>
      <div>
        <label htmlFor="subject"><p className="font-[Poppins] font-medium text-base mb-4 mt-5">Subject</p></label>
        <Input id="subject" {...register("subject")} placeholder="This is an optional" />
        {errors.subject?.message && <p className="text-red-600">{errors.subject.message as string}</p>}
      </div>
      <div>
        <label htmlFor="message"><p className="font-[Poppins] font-medium text-base mb-4 mt-5">Message</p></label>
        <textarea id="message" {...register("message")} className="block border-[1px] border-solid rounded-sm p-2 w-[190px] md:w-[413px] " rows={5} placeholder={"Hi! i’d like to ask about"}/>
        {errors.message?.message && <p className="text-red-600">{errors.message.message as string}</p>}
      </div>
      <Button type="submit" className="bg-[#029FAE] hover:bg-[#F0F2F3] hover:text-black py-5 px-10 font-[Poppins] mt-5">Submit</Button>
    </form>
  );
}

export default ContactForm