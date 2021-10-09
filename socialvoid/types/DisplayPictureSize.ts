import TypeBase from "./TypeBase.ts";
import Document from "./Document.ts";

export default class DisplayPictureSize extends TypeBase {
  constructor(
    public width: number,
    public height: number,
    public document: Document
  ) {
    super();
  }

  static fromObject(obj: any) {
    return new this(obj.width, obj.height, Document.fromObject(obj.document));
  }
}
