import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import Hero from "@/components/Homepage/Hero";
import QandA from "@/components/Homepage/QandA";
import Section1 from "@/components/Homepage/Section1";
import Section2 from "@/components/Homepage/Section2";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Section1 />
      <Section2 />
      <QandA />
    </div>
  );
}
