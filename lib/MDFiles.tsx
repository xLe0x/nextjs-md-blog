import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { MDContent } from "@/types";

// get all md files and return thier slug (name)
const mdsFolder = path.join(process.cwd(), "md");

export const getMDFiles = (): MDContent[] => {
  // getting the md folder

  // getting md files
  const mdFiles = fs.readdirSync(mdsFolder);

  // return only md files if another files exists in that md folder
  const onlyMDFiles = mdFiles.filter((file) => file.endsWith(".md"));

  // loop through all md files
  const files = onlyMDFiles.map((mdfile) => {
    // reading every file content
    const fileContent = fs.readFileSync(`${mdsFolder}/${mdfile}`, "utf-8");
    // parse it as matter
    const matterContent = matter(fileContent);
    // returning the matter content data
    return {
      title: matterContent.data.title,
      date: matterContent.data.date,
      subtitle: matterContent.data.subtitle,
      id: mdfile.replace(".md", ""),
    };
  });
  return files;
};

export function getMDFile(id: string) {
  const file = `${mdsFolder}/${id}.md`;
  const fileContent = fs.readFileSync(file, "utf-8");
  const matterContent = matter(fileContent);
  return matterContent;
}
