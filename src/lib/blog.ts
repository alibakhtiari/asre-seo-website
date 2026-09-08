export interface TocItem {
  title: string;
  id: string;
  level: number;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface ParsedSections {
  content: string;
  keyTakeaways: string[];
  faqs: Faq[];
}

export function parseSections(raw: string): ParsedSections {
  let content = raw;
  const kt = content.match(/## \u0646\u06a9\u0627\u062a \u06a9\u0644\u06cc\u062f\u06cc\n\n(.*?)\n\n##/s);
  const keyTakeaways = kt
    ? kt[1]
        .split("\n")
        .filter((line) => line.startsWith("- "))
        .map((line) => line.substring(2).trim())
    : [];
  if (kt) {
    content = content.replace(/## \u0646\u06a9\u0627\u062a \u06a9\u0644\u06cc\u062f\u06cc\n\n.*?\n\n##/s, "##");
  }
  const faqs: Faq[] = [];
  const fm = content.match(/## \u0633\u0648\u0627\u0644\u0627\u062a \u0645\u062a\u062f\u0627\u0648\u0644\n\n(.*?)(?:\n##|$)/s);
  if (fm) {
    const faqContent = fm[1];
    const faqRegex = /### (.+?)\n(.+?)(?=\n###|\n##|$)/gs;
    let m: RegExpExecArray | null;
    while ((m = faqRegex.exec(faqContent)) !== null) {
      faqs.push({ question: m[1].trim(), answer: m[2].trim() });
    }
    content = content.replace(/## \u0633\u0648\u0627\u0644\u0627\u062a \u0645\u062a\u062f\u0627\u0648\u0644\n\n.*$/s, "");
  }
  return { content, keyTakeaways, faqs };
}
