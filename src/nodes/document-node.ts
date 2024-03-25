import { XMLNode } from '../xml-node';
import { BufferBuilder } from '../buffer-builder';

export default class DocumentNode extends XMLNode {

  constructor(node: any) {
    super(node);
  }

  public open(bufferBuilder: BufferBuilder): BufferBuilder {
    if (this.attributes.reverse)
      bufferBuilder.startReverseMode();

    const codePage = this.attributes["code-page"] && parseInt(this.attributes["code-page"]);
    if (typeof codePage === 'number' && !isNaN(codePage)) {
      bufferBuilder.setCodePage(codePage);
    }

    const textEncoding = this.attributes["text-encoding"];
    if (textEncoding) {
      bufferBuilder.setOptions({ textEncoding });
    }

    return bufferBuilder;
  }

  public close(bufferBuilder: BufferBuilder): BufferBuilder {
    bufferBuilder.endReverseMode();
    return bufferBuilder;
  }
}
