import { BlogPost } from "./lib";

export function run() {
  const blogPostOne = new BlogPost()
    .addTitle("My first blog post")
    .addAuthor("Liam")
    .addContent("Lorem lorem, ipsum ipsum.")
    .addTag("Science")
    .addTag("Fun");
  const blogPostTwo = new BlogPost();

  console.log(blogPostOne);
  console.log(blogPostTwo);
}
