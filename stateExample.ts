import { Draft, Post } from "./lib/"

const isDraft = (post: Post) => post.status instanceof Draft;

export function run() {
  const post = new Post();

  post.approve();

  if (isDraft(post)) {
    console.log("Could not approve post, because it is still a draft.")
  }

  post.addText("Some text");
  post.approve();

  console.log(post)
}
