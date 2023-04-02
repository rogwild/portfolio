const mediaPopulate = `*`;

const buttonPopulate = {
  media: {
    populate: mediaPopulate,
  },
  additionalMedia: {
    populate: mediaPopulate,
  },
};

const buttonArrayPopulate = {
  buttons: {
    populate: buttonPopulate,
  },
};

const logotypePopulate = {
  media: {
    populate: mediaPopulate,
  },
  additionalMedia: {
    populate: mediaPopulate,
  },
};

const featurePopulate = {
  media: {
    populate: mediaPopulate,
  },
  additionalMedia: {
    populate: mediaPopulate,
  },
};

const tierPopulate = {
  features: {
    populate: featurePopulate,
  },
  currency: {
    populate: `*`,
  },
};

const slidePopulate = {
  media: {
    populate: mediaPopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};

const sliderPopulate = {
  slides: {
    populate: slidePopulate,
  },
};

const inputPopulate = {
  options: {
    populate: `*`,
  },
};

const formPopulate = {
  inputs: {
    populate: inputPopulate,
  },
  button: {
    populate: buttonPopulate,
  },
};

const faqPopulate = `*`;

export const metaPopulate = {
  favicon: {
    populate: mediaPopulate,
  },
};

export const publicPageLayoutPopulate = {};

export const footerPopulate = {
  logotype: {
    populate: logotypePopulate,
  },
  social_networks_buttons: {
    populate: buttonArrayPopulate,
  },
  policies_buttons: {
    populate: buttonArrayPopulate,
  },
  buttons_arrays: {
    populate: buttonArrayPopulate,
  },
};

export const topbarPopulate = {
  buttons: {
    populate: buttonPopulate,
  },
};

export const navbarPopulate = {
  logotype: {
    populate: logotypePopulate,
  },
  buttons: {
    populate: {
      buttons: {
        populate: buttonPopulate,
      },
      buttons_arrays: {
        populate: buttonArrayPopulate,
      },
    },
  },
  additional_buttons: {
    populate: buttonPopulate,
  },
  cta_buttons: {
    populate: buttonPopulate,
  },
  profile_buttons: {
    populate: buttonPopulate,
  },
  topbar: {
    populate: {
      buttons: {
        populate: buttonPopulate,
      },
    },
  },
};

export const pageBlocksPopulate = {
  page_blocks: {
    populate: {
      buttons: { populate: buttonPopulate },
      background: { populate: mediaPopulate },
      buttons_arrays: {
        populate: buttonArrayPopulate,
      },
      media: { populate: mediaPopulate },
      tiers: {
        populate: tierPopulate,
      },
      features: { populate: featurePopulate },
      faqs: { populate: faqPopulate },
      logotype: { populate: logotypePopulate },
      slider: {
        populate: sliderPopulate,
      },
      form: {
        populate: formPopulate,
      },
    },
  },
};

export const modalPopulate = {
  ...pageBlocksPopulate,
};

export const reviewsPopulate = {
  media: {
    populate: mediaPopulate,
  },
  additional_media: {
    populate: mediaPopulate,
  },
};

export const currenciesPopulate = {};

export const publicPageAdditonalModels = [
  {
    key: `publicPageLayout`,
    model: `public-page-layout`,
    populate: publicPageLayoutPopulate,
  },
  {
    key: `meta`,
    model: `meta`,
    populate: metaPopulate,
  },
  {
    key: `publicPageTopbar`,
    model: `public-page-topbar`,
    populate: topbarPopulate,
  },
  {
    key: `publicPageNavbar`,
    model: `public-page-navbar`,
    populate: navbarPopulate,
  },
  {
    key: `publicPageFooter`,
    model: `public-page-footer`,
    populate: footerPopulate,
  },
];
