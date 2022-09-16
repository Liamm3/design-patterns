"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const lib_1 = require("./lib/");
const isDraft = (post) => post.status instanceof lib_1.Draft;
function run() {
    const post = new lib_1.Post();
    post.approve();
    if (isDraft(post)) {
        console.log("Could not approve post, because it is still a draft.");
    }
    post.addText("Some text");
    post.approve();
    console.log(post);
}
exports.run = run;
