// Project type for Sanity
export type ProjectContentType = {
  title: string;
  titleDescription: string;
  slug?: string;
  techStack?: string[];
  websiteLink: string;
  mainImage: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  };
  projectContent: any; // Can be replaced with a more specific type for Sanity block content
};
