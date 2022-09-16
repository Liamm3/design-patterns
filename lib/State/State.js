"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = exports.Published = exports.PendingReview = exports.Draft = void 0;
;
class Draft {
    requestReview() {
        return new PendingReview();
    }
    approve() {
        return this;
    }
}
exports.Draft = Draft;
;
class PendingReview {
    requestReview() {
        return this;
    }
    approve() {
        return new Published();
    }
}
exports.PendingReview = PendingReview;
;
class Published {
    requestReview() {
        return this;
    }
    approve() {
        return this;
    }
}
exports.Published = Published;
;
class Post {
    constructor() {
        this.status = new Draft();
        this.content = "";
    }
    addText(text) {
        this.content = text;
        this.status = this.status.requestReview();
    }
    approve() {
        this.status = this.status.approve();
    }
}
exports.Post = Post;
