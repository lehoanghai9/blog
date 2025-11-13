import { NextResponse, type NextRequest } from "next/server";

import { config } from "@/config";
import { source } from "@/lib/source";

export const revalidate = false;

const generateLLMsText = (tree: typeof source.pageTree) => {
  const introduction = [
    "# Personal Blog \n",
    "Welcome to my personal blog where I write about the things I'm passionate about.\n",
    "This blog features:",
    "- **Technical Deep Dives:** In-depth explorations of complex topics with interactive examples.",
    "- **Interactive Playgrounds:** Hands-on code examples and visualizations.",
    "- **Detailed Walkthroughs:** Step-by-step guides to help you understand and explore further.",
  ];

  const generateTreeText = (
    items: any[],
    level: number = 2
  ): string[] => {
    const result: string[] = [];

    for (const item of items) {
      // Convert name to string if it's a ReactNode
      const name = typeof item.name === "string" ? item.name : String(item.name || "");
      
      if (item.type === "folder") {
        // Generate heading based on level (## for level 2, ### for level 3, etc.)
        const heading = "\n" + "#".repeat(level) + " " + name + "\n";
        result.push(heading);

        // Recursively process children if they exist
        if (item.children && item.children.length > 0) {
          result.push(...generateTreeText(item.children, level + 1));
        }
      }

      if (item.type === "page") {
        result.push(
          `- [${name}](${config.appUrl}${item.url || ""}): ${item.description || ""}`
        );
      }
    }

    return result;
  };

  // pageTree is an object with language keys, we need to iterate over all languages
  const allTreeText: string[] = [];
  for (const lang in tree) {
    const langTree = tree[lang as keyof typeof tree];
    if (langTree && langTree.children) {
      allTreeText.push(...generateTreeText(langTree.children));
    }
  }
  
  const treeText = allTreeText;

  return [...introduction, ...treeText].join("\n");
};

export async function GET(_req: NextRequest) {
  const text = generateLLMsText(source.pageTree);

  return new NextResponse(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });

  // return new NextResponse(page.data.content, {
  //   headers: {
  //     "Content-Type": "text/markdown; charset=utf-8",
  //   },
  // });
}

export function generateStaticParams() {
  return source.generateParams();
}
