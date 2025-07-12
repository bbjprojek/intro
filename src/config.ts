export const SITE = {
  website: "https://bbjprojek.org",
  author: "The BBJProjeK Organization",
  // profile: "https://satnaing.dev/",
  desc: "A tiny placeholder for big projects",
  title: "BBJProjeK",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true, // use old fashioned way later
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Contribute",
    url: "https://git.bbjprojek.org/intro/edit/Thallium/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "UTC", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
