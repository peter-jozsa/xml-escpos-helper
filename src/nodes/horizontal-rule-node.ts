import { XMLNode } from '../xml-node';
import { BufferBuilder } from '../buffer-builder';
import TextNode from './text-node';

export default class TextLineNode extends XMLNode {
  public open(bufferBuilder: BufferBuilder): BufferBuilder {
    return bufferBuilder.startUnderline().printText(` `.repeat(48)).breakLine();
  }

  public close(bufferBuilder: BufferBuilder): BufferBuilder {
    bufferBuilder.endUnderline();
    return bufferBuilder;
  }
}
