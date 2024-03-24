import { XMLNode } from '../xml-node';
import { BufferBuilder, ALIGNMENT } from '../buffer-builder';

export default class CodePageNode extends XMLNode {

  constructor(node: any) {
    super(node);
  }

  public open(bufferBuilder: BufferBuilder): BufferBuilder {
    const code = parseInt(this.attributes.code);
    if (!isNaN(code)) {
      return bufferBuilder.setCodePage(code);
    }
    return bufferBuilder;
  }

  public close(bufferBuilder: BufferBuilder): BufferBuilder {
    bufferBuilder.resetAlign();
    return bufferBuilder;
  }

}
