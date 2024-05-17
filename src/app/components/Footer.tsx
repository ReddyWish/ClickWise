import { SocialMediaIcons } from "@/app/components/SocialMediaIcons";
import { Root } from "../../../dictionaries/types";
import { useState } from "react";
import { CookiesModal } from "@/app/components/CookiesModal";
import { ConditionsModal } from "@/app/components/ConditionsModal";
import { PrivacyModal } from "@/app/components/PrivacyModal";
export function Footer({ page }: Root) {
  const [cookiesModalIsOpen, setCookiesModalIsOpen] = useState(false);
  const [conditionsModalIsOpen, setConditionsModalIsOpen] = useState(false);
  const [privacyModalIsOpen, setPrivacyModalIsOpen] = useState(false);
  console.log(cookiesModalIsOpen);
  return (
    <>
      <footer className="border-t border-gray-500 p-15 flex justify-between items-center max-md:flex-col max-md:text-center mt-1 ">
        <SocialMediaIcons />
        <div>
          <div className="flex justify-center gap-2 text-[#484747]">
            <span
              className="cursor-pointer hover:text-white"
              onClick={() => setPrivacyModalIsOpen(true)}
            >
              {page.policy.privacy}
            </span>
            <span className="hidden sm:inline">·</span>
            <span
              className="cursor-pointer hover:text-white"
              onClick={() => setConditionsModalIsOpen(true)}
            >
              {page.policy.conditions}
            </span>
            <span className="hidden sm:inline">·</span>
            <span
              className="cursor-pointer hover:text-white"
              onClick={() => setCookiesModalIsOpen(true)}
            >
              {page.policy.cookies}
            </span>
          </div>
        </div>
        <div>
          <p className="font-playfair font-semibold text-2xl text-white">
            Irina Shuvatova
          </p>
          <p className="font-playfair text-md text-white">
            ©{new Date().getFullYear()} Shuvatova. All rights reserved
          </p>
        </div>
      </footer>
      {cookiesModalIsOpen && (
        <CookiesModal onClose={() => setCookiesModalIsOpen(false)} />
      )}
      {conditionsModalIsOpen && (
        <ConditionsModal onClose={() => setConditionsModalIsOpen(false)} />
      )}
      {privacyModalIsOpen && (
        <PrivacyModal onClose={() => setPrivacyModalIsOpen(false)} />
      )}
    </>
  );
}
