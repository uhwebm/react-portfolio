import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

const contentDir = path.join(process.cwd(), "content/blog");

const prettyCodeOptions = {
  theme: "github-dark",
  keepBackground: false,
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ["word"];
  },
};

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    description: string;
    image?: string;
    unlisted?: boolean;
}

export async function getPostBySlug(slug: string): Promise<{ meta: BlogPost, content: any }> {
  if (!slug || slug === 'undefined') {
      return { 
          meta: { 
              slug: '', 
              title: 'Not Found', 
              date: '', 
              description: '' 
          }, 
          content: null 
      };
  }
  const fileName = slug + ".mdx";
  const filePath = path.join(contentDir, fileName);
  
  if (!fs.existsSync(filePath)) {
      return { 
          meta: { 
              slug: '', 
              title: 'Post Not Found', 
              date: '', 
              description: '' 
          }, 
          content: null 
      };
  }

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    description: string;
    image?: string;
    unlisted?: boolean;
  }>({
    source: fileContent,
    options: { 
        parseFrontmatter: true,
        mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
        }
    },
  });

  return {
    meta: { ...frontmatter, slug },
    content,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(contentDir)) return [];
  
  const files = fs.readdirSync(contentDir);
  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const { meta } = await getPostBySlug(slug);
      return meta;
    })
  );

  return posts.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}
