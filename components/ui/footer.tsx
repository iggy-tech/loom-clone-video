import { Facebook, Globe, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
    return ( 
    
    <div>
        <section className="md:flex flex-col md:py-10 md:justify-between">
            <div className="p-10 space-y-10 md:space-y-0 md:text-center md:flex justify-between md:px-80 md:space-x-20">
                <div>
                ©2024 Bird, Inc. All rights reserved.
                </div>
                <div>
                    <Globe className="h-6 w-6" />
                </div>
                <div>
                    Terms and Conditions
                </div>

                <div className="flex items-center justify-center space-x-2">
                    <div className="bg-black p-2 rounded-full">
                        <Twitter className="h-6 w-6 text-white" />
                    </div>
                    <div className="bg-black p-2 rounded-full">
                        <Facebook className="h-6 w-6 text-white" />
                    </div>

                    <div className="bg-black p-2 rounded-full">
                        <Instagram className="h-6 w-6 text-white" />
                    </div>

                    <div className="bg-black p-2 rounded-full">
                        <Linkedin className="h-6 w-6 text-white" />
                    </div>

                    <div className="bg-black p-2 rounded-full">
                        <Youtube className="h-6 w-6 text-white" />
                    </div>

                </div>

            </div>

        </section>

    </div> );
}
 
export default Footer;