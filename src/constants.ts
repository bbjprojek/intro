import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitLab from "@/assets/icons/IconGitLab.svg";
import IconSpotify from "@/assets/icons/IconSpotify.svg";
// import IconXasPos from "@/assets/icons/IconXasPos.svg";
import IconMadrazo from "@/assets/icons/IconMadrazo.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitLab",
    href: "https://git.bbjprojek.org",
    linkTitle: `BBJProjeK GitLab`,
    icon: IconGitLab, //fixme
  },
  {
    name: "Mail",
    href: "https://mail.bbjprojek.org/",
    linkTitle: `${SITE.title} Mail`,
    icon: IconMail,
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/user/314s6xcauoqa3e5xs2vgjcimvdsa",
    linkTitle: `${SITE.title} on Spotify`,
    icon: IconSpotify,
  },
  {
    name: "Telegram",
    href: "https://t.me/bbj_auth",
    linkTitle: `${SITE.title} on Telegram`,
    icon: IconTelegram,
  },
  //   name: "XasPos",
  //   href: "https://bbjprojek.org/xaspos/",
  //   linkTitle: `XasPos Messenger`,
  //   icon: IconXasPos, //fixme
  // },
  {
    name: "Madrazo",
    href: "https://opengeofiction.net/#map=17/-7.99539/169.74671",
    linkTitle: `Starred at Rabbau`,
    icon: IconMadrazo,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `Share this post on Pinterest`,
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
