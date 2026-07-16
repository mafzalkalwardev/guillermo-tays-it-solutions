"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { business } from "@/config/business";

const baseSchema = z.object({ fullName:z.string().min(2,"Enter your full name"), email:z.email("Enter a valid email"), phone:z.string().optional(), service:z.string().min(1,"Select a service"), message:z.string().min(10,"Please provide at least 10 characters"), preferredContact:z.enum(["email","phone","text"]), requestConsent:z.literal(true,{error:"This acknowledgement is required"}), website:z.string().max(0).optional() });
type ContactData=z.infer<typeof baseSchema>;

export function ContactForm({ mode="contact" }: { mode?:"contact"|"service" }) {
  const [status,setStatus]=useState("");
  const [fallbackEmail,setFallbackEmail]=useState("");
  const {register,handleSubmit,formState:{errors,isSubmitting},reset}=useForm<ContactData>({resolver:zodResolver(baseSchema),defaultValues:{preferredContact:"email",requestConsent:undefined,website:""}});
  const onSubmit=async(data:ContactData)=>{setStatus("");setFallbackEmail("");const response=await fetch(mode==="service"?"/api/service-requests":"/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...data,kind:mode})});const result=await response.json();if(!response.ok){setStatus(result.error||"We could not submit your request. Please try again.");setFallbackEmail(result.fallbackEmail||"");return}setStatus("Your request has been received. We’ll contact you using your selected method.");reset();};
  return <form className="form-card" onSubmit={handleSubmit(onSubmit)} noValidate>
    <div className="form-grid"><div className="field"><label htmlFor={`${mode}-name`}>Full name</label><input id={`${mode}-name`} autoComplete="name" {...register("fullName")}/>{errors.fullName&&<span className="error" role="alert">{errors.fullName.message}</span>}</div><div className="field"><label htmlFor={`${mode}-email`}>Email</label><input id={`${mode}-email`} type="email" autoComplete="email" {...register("email")}/>{errors.email&&<span className="error" role="alert">{errors.email.message}</span>}</div>
    <div className="field"><label htmlFor={`${mode}-phone`}>Telephone <span>(optional)</span></label><input id={`${mode}-phone`} type="tel" autoComplete="tel" {...register("phone")}/></div><div className="field"><label htmlFor={`${mode}-service`}>Service of interest</label><select id={`${mode}-service`} {...register("service")}><option value="">Select a service</option>{business.services.map(s=><option key={s.name}>{s.name}</option>)}<option>General information</option></select>{errors.service&&<span className="error" role="alert">{errors.service.message}</span>}</div>
    {mode==="service"&&<><div className="field"><label htmlFor="preferred-date">Preferred date</label><input id="preferred-date" type="date" {...register("preferredDate" as never)}/></div><div className="field"><label htmlFor="location">Location or service area</label><input id="location" {...register("location" as never)}/></div></>}
    <div className="field full"><label htmlFor={`${mode}-message`}>{mode==="service"?"Describe your request":"Message"}</label><textarea id={`${mode}-message`} {...register("message")}/>{errors.message&&<span className="error" role="alert">{errors.message.message}</span>}</div>
    <fieldset className="fieldset"><legend>Preferred contact method</legend><div className="radio-row">{["email","phone","text"].map(v=><label className="choice" key={v}><input type="radio" value={v} {...register("preferredContact")}/><span>{v[0].toUpperCase()+v.slice(1)}</span></label>)}</div></fieldset>
    <div className="field full" aria-hidden="true" style={{position:"absolute",left:"-9999px"}}><label htmlFor={`${mode}-website`}>Website</label><input id={`${mode}-website`} tabIndex={-1} autoComplete="off" {...register("website")}/></div>
    <label className="choice field full"><input type="checkbox" {...register("requestConsent")}/><span className="choice-text">By submitting this form, I authorize {business.legalName} to contact me regarding this specific request.</span></label>{errors.requestConsent&&<span className="error field full" role="alert">{errors.requestConsent.message}</span>}
    <p className="choice-text field full">This request does not enroll you in recurring text messages. To receive customer-care SMS updates, use our separate <Link href="/sms-consent">SMS consent form</Link>.</p>
    </div>{status&&<p className="form-status" role="status">{status}{fallbackEmail&&<> <a href={`mailto:${fallbackEmail}`}>Email {fallbackEmail}</a>.</>}</p>}<button className="button" disabled={isSubmitting} type="submit">{isSubmitting?"Submitting…":mode==="service"?"Submit service request":"Send message"}</button>
  </form>;
}
