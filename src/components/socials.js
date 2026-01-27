"use client";
import { Linkedin, Mail, MessageCircle, Github } from "lucide-react";
import XLogo from "./icons/XLogo";
import socialsData from "./socialsData";

const iconMap = {
  Linkedin,
  X: XLogo,
  Mail,
  MessageCircle,
  Github,
};

function Socials() {
  const socials = socialsData.slice(0);
  return (
    <div className="flex w-full justify-between items-center">
      {socials.map((social) => {
        const IconComponent = iconMap[social.iconName];
        return (
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 transition-all"
            key={social.title}
            aria-label={social.title}
          >
            {IconComponent && <IconComponent size={24} strokeWidth={1.5} />}
          </a>
        );
      })}
    </div>
  );
}

export default Socials;
