import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
<div className="container mx-auto">
<div className="grid md:grid-cols-2 grid-cols-1">
<div className="bg-[#1F2937] text-white md:px-48 px-12  py-8">
<h3 className="text-[32px]  font-bold">CONTACT US</h3>
<p className="my-3">123 ABS Street, Uni 21, Bangladesh<br></br>
+88 123456789<br></br>
Mon - Fri: 08:00 - 22:00<br></br>
Sat - Sun: 10:00 - 23:00</p>
</div>
<div className="bg-[#111827] text-white md:px-48 px-12 py-8">
<h3 className="text-[32px]  font-bold">Follow US</h3>
<p>Join us on social media</p>
<div className="flex gap-3 text-[20px] mt-4">
<FaFacebookF />
<FaInstagram />
<FaTwitter />
</div>
</div>
</div>
<div className="text-center">
<p className="text-center bg-[#151515] text-[20px] text-white p-3">Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
</div>
</div>
    
    );
};

export default Footer;