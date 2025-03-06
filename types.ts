import { Document } from "@contentful/rich-text-types";

export type ProjectContentType = {
  title: string;
  titleDescription: string;
  slug?: string;
  techStack?: string[];
  websiteLink: string;
  mainImage: {
    sys: {
      id: string;
      type: "Link";
      linkType: "Asset";
    };
  };
  projectContent: Document;
};
