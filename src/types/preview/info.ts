interface BaseTag {
  content: string;
}

interface PhoneTag extends BaseTag {
  type: "phone";
}

interface EmailTag extends BaseTag {
  type: "email";
}

interface TextTag extends BaseTag {
  type: "text";
  name?: string;
}

interface LinkTag extends BaseTag {
  type: "link";
  name?: string;
  link: string;
}

export type PersonalInfoTagType = PhoneTag | EmailTag | TextTag | LinkTag;
