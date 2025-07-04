// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { motion } from "framer-motion";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const info = [
//   {
//     icon: <FaPhoneAlt />,
//     titel: "Phone",
//     description: "+92 3112338841",
//   },
//   {
//     icon: <FaEnvelope />,
//     titel: "Email",
//     description: "ammad0598@gmail.com",
//   },
//   {
//     icon: <FaMapMarkerAlt />,
//     titel: "Address",
//     description: "Mominabad Orangi Town Karachi",
//   },
// ];

// const Contact = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
//       }}
//       className="py-6"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row gap-[30px]">
//           {/* form  */}
//           <div className="xl:w-[54%] order-2 xl:order-none">
//             <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" action="https://formsubmit.co/ammad0598@gmail.com" method="POST">
//               <h3 className="text-4xl text-accent">{`Let's`} Work Together</h3>
//               <p className="text-white/60">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Suscipit incidunt odio vero.
//               </p>
//               {/* input  */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <Input type="firstname" placeholder="First Name" />
//                 <Input type="lastname" placeholder="Last Name" />
//                 <Input type="email" placeholder="Email Address" />
//                 <Input type="phone" placeholder="Phone Number" />
//               </div>
//               {/* select  */}
//               <Select>
//                 <SelectTrigger className="w-full">
//                   <SelectValue placeholder="Select A Service" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     <SelectLabel>Select A Service</SelectLabel>
//                     <SelectItem value="est">Web Development</SelectItem>
//                     <SelectItem value="cst">Phyton</SelectItem>
//                     <SelectItem value="mst">App Development</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//               {/* textarea  */}
//               <Textarea
//                 className="h-[200px]"
//                 placeholder="Type your massage here."
//               />
//               {/* btn  */}
//               <Button size="md" className="max-w-40" type="submit">
//                 Send Massage
//               </Button>
//             </form>
//           </div>
//           {/* info  */}
//           <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
//             <ul className="flex flex-col gap-10">
//               {info.map((item, index) => {
//                 return (
//                   <li key={index} className="flex items-center gap-6">
//                     <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
//                       <div className="text-[28px]">{item.icon}</div>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-white/60">{item.titel}</p>
//                       <h3 className="text-xl">{item.description}</h3>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Contact;

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2"; // ✅ import Swal

const info = [
  {
    icon: <FaPhoneAlt />,
    titel: "Phone",
    description: "+92 3112338841",
  },
  {
    icon: <FaEnvelope />,
    titel: "Email",
    description: "ammad0598@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    titel: "Address",
    description: "Mominabad Site Area Karachi",
  },
];

const Contact = () => {
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.first_name.value;
    const lastName = form.last_name.value;

    Swal.fire({
      title: "Thank You!",
      text: `Thanks ${firstName} ${lastName}, your message has been sent`,
      icon: "success",
      confirmButtonText: "Close",
    }).then(() => {
      form.submit();
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form  */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              action="https://formsubmit.co/ammad0598@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">{`Let's`} Work Together</h3>
              <p className="text-white/60">
                Fill out the form and I will get back to you via email.
              </p>

              {/* Hidden anti-bot fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://ammad-portfolio-two.vercel.app/"
              />
              <input type="text" name="_honey" style={{ display: "none" }} />

              {/* inputs  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  required
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  required
                />
              </div>

              {/* select  */}
              <select
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
                className="bg-[#1f1f23] text-white rounded-md p-3"
              >
                <option value="">Select A Service</option>
                <option value="Web Development">Web Development</option>
                <option value="Python">Python</option>
                <option value="App Development">App Development</option>
              </select>

              {/* textarea  */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
                required
              />

              {/* button  */}
              <Button size="md" className="max-w-40" type="submit">
                Send Message
              </Button>
            </form>
          </div>

          {/* info section  */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.titel}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
