// Global Scripts

import favicon from "./assets/images/favicon.png";
import faviconEmoji from "./assets/images/favicon-emoji.svg";

// Change favicon every 2 seconds between the default and the 🎉 emoji
const faviconElement = document.querySelector(
  "link[rel~='icon']"
) as HTMLLinkElement;
let currentFavicon: "favicon" | "emoji" = "favicon";
if (faviconElement) {
  setInterval(() => {
    if (currentFavicon === "favicon") {
      currentFavicon = "emoji";
      faviconElement.href = favicon.src;
    } else {
      currentFavicon = "favicon";
      faviconElement.href = faviconEmoji.src;
    }
  }, 2000);
}
