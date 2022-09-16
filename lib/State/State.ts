export interface State {
  requestReview(): State;
  approve(): State;
};

export class Draft implements State {
  requestReview(): State {
      return new PendingReview();
  }

  approve(): State {
    return this;
  }
};

export class PendingReview implements State {
  requestReview(): State {
      return this;
  }

  approve(): State {
    return new Published();
  }
};

export class Published implements State {
  requestReview(): State {
      return this;
  }

  approve(): State {
      return this;
  }
};


export class Post {
  status: State = new Draft();
  content: string = "";

  addText(text: string) {
    this.content = text;
    this.status = this.status.requestReview();
  }

  approve() {
    this.status = this.status.approve();
  }
}
