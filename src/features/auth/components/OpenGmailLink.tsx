import Image from "next/image";
import OpenEmailProviderLink from "./OpenEmailProviderLink";

const OpenGmailLink = function () {
  return (
    <OpenEmailProviderLink
      providerHref="https://mail.google.com/mail/u/0"
      providerIcon={
        <Image
          src="/images/png/get-started-icon-gmail.png"
          alt="Gmail icon"
          width={21}
          height={21}
        />
      }
    >
      Open Gmail
    </OpenEmailProviderLink>
  );
};

export default OpenGmailLink;
