export class Entity {
  private _id: number;
  private _title: string;
  private _creationDate: Date;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
    this._creationDate = new Date();
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get creationDate(): Date {
    return this._creationDate;
  }
}
