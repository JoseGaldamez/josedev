import { ButtonChat } from "@/components/v2/ButtonChat";
import { Fab } from "@/components/v2/Fab";
import { Header, Footer } from "@/components/v3";
import { ContactForm } from "@/components/v4/ContactForm";
import { HeaderV4 } from "@/components/v4/Header";
import { ArrowDownCircleIcon, MailIcon, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <main className='min-h-screen bg-[#EBEBEB] text-[#253237] transition-colors duration-500'>
            <HeaderV4 />

            <ContactForm />

        </main>
    );
}