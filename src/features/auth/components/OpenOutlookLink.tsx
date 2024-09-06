import Image from "next/image";
import OpenEmailProviderLink from "./OpenEmailProviderLink";

const OpenOutlookLink = function () {
  return (
    <OpenEmailProviderLink
      providerHref="https://outlook.live.com/mail/0/inbox"
      providerIcon={
        <Image
          src="/images/png/get-started-icon-outlook.png"
          alt="Gmail icon"
          width={24}
          height={24}
        />
      }
    >
      Open Outlook
    </OpenEmailProviderLink>
  );
};

export default OpenOutlookLink;
