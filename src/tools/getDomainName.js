export const getDomainName = (url) => {
  try {
    const hostname = new URL(url).hostname;
    let domainName = hostname.replace("www.", "").split(".")[0];
    return domainName.charAt(0).toUpperCase() + domainName.slice(1);
  } catch (error) {
    return;
  }
  //LIke Facebook
};

export const getHostname = (url) => {
  try {
    const hostname = new URL(url).hostname.split(".").slice(1).join(".");
    return hostname.charAt(0).toUpperCase() + hostname.slice(1);
  } catch (error) {
    return
  }
  //like Facebook.com
};

export const webLogoName = (url) => {
  const mapping = {
    facebook: "Fb",
    youtube: "YT",
    google: "G",
    amazon: "Am",
    twitter: "Tw",
    linkedin: "In",
  };

  try {
    const hostName = new URL(url).hostname.replace("www.", "");
    const name = hostName.split(".")[0];

    return mapping[name] || name.slice(0, 2).toUpperCase();
  } catch (error) {
    return
  }
};
