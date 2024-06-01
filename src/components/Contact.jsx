import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from '../utils/motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name] : value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     // Check for empty fields
    if(!form.name){
      toast.error("Please enter your name!");
      return
    }
    else if(!form.email){
      toast.error("Please enter your email!");
      return
    }
    else if(!form.message){
      toast.error("Please enter your message!");
      return
    }   

    setLoading(true);

    emailjs.send(
      "service_9ddzn4g",
      "template_pu039kk",
      {
        from_name: form.name,
        to_name:"PawanRaje",
        from_email:form.email,
        to_email:"Pawanrajkadam@gmail.com",
        message:form.message,
      },
      "V1M6M5rtr1mKbujTV",
    )
    .then(()=>{
      setLoading(false);
      toast.success("Thank You. I will get back to you as soon as possible.");
      setForm({
        name:'',
        email:'',
        message:'',
      })
    }, (error)=>{
      setLoading(false);
      console.log(error);
      toast.error("Something went wrong!");
    })
  };

  return (
    <div 
    className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
     <ToastContainer />
     <motion.div
     variants={slideIn("left", "tween", 0.2, 1)}
     className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
     >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>

      <form ref={formRef}
      onSubmit={handleSubmit}
      className='mt-12 flex flex-col gap-8'
      >
       <label className='flex flex-col'>
         <span className='text-white font-medium mb-4'>Your Name</span>
         <input 
         type="text"
         name='name'
         value={form.name}
         onChange={handleChange}
         placeholder="What's your name?"
         className='bg-tertiary py-4 px-6 placeholder:text-secondory text-white rounded-lh outline-none border-none'
         />
       </label>

       <label className='flex flex-col'>
         <span className='text-white font-medium mb-4'>Your email</span>
         <input 
         type="email"
         name='email'
         value={form.email}
         onChange={handleChange}
         placeholder="What's your email?"
         className='bg-tertiary py-4 px-6 placeholder:text-secondory text-white rounded-lh outline-none border-none'
         />
       </label>

       <label className='flex flex-col'>
         <span className='text-white font-medium mb-4'>Your message</span>
         <textarea
         rows="7" 
         type="text"
         name='message'
         value={form.message}
         onChange={handleChange}
         placeholder="What do you want to say?"
         className='bg-tertiary py-4 px-6 placeholder:text-secondory text-white rounded-lh outline-none border-none'
         />
       </label>

       <button className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-empty shadow-primary' type='submit'>
        {loading ? "Sending..." : "Send"}
       </button>
      </form>
     </motion.div>

     <motion.div 
     variants={slideIn("right", "tween", 0.2, 1)}
     className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
     >
      <EarthCanvas/>
     </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")