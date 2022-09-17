import { BlogPost } from "./lib/";

export function run() {
  const blogPostOne = new BlogPost()
    .addTitle("My first blog post")
    .addAuthor("Liam")
    .addContent("Lorem lorem, ipsum ipsum.")
    .addTag("Science")
    .addTag("Fun");
  console.log(blogPostOne);

  const blogPostTwo = new BlogPost()
    .addTitle("Yes")
    .addContent("No.");
  console.log(blogPostTwo);
}
