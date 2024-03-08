
"use client"
import ContactCard from "./ContactCard";
import ContactClock from "./ContactClock";
import { useState, useEffect } from "react";
const ContactPage = () => {

    // Define your variants
    const variants = [<ContactCard key={0} />, <ContactClock key={1} />];

    // State to hold the selected variant index
    const [variantIndex, setVariantIndex] = useState();

    useEffect(() => {
        // Check if config exists in Session Storage
        const configString = sessionStorage.getItem('config');

        if (configString) {
            // Parse the config JSON string
            const config = JSON.parse(configString);

            // Update the variant index based on the 'about' key in the config
            setVariantIndex(config['contact']);
        }
        else {
            setVariantIndex(0)
        }

        if (demo.spinner) {
            demo.spinner.setComplete();
        }
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    return (
        <>

            {variants[variantIndex]}
        </>
    )
}

export default ContactPage