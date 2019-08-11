import { Entity } from './entity';
import { Story } from './story';

export class Project extends Entity {
  private _released: boolean = false;
  private _stories: Array<Story> = [];

  get released(): boolean {
    return this._released;
  }

  set released(value: boolean) {
    this._released = value;
  }

  public addStory(story: Story) {
    this._stories.push(story);
  }

  get stories(): Array<Story> {
    return this._stories;
  }

  public removeStory(story: Story) {
    let storyPosition = this._stories.indexOf(story);
    this._stories.splice(storyPosition, 1);
  }
}
