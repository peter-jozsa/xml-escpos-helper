class DefaultTextEncoder implements TextEncoder {
  encode(input: string, encoding: string) {
    if (encoding === 'utf8' || encoding === 'utf-8') {
      return Buffer.from(input, 'utf8')
    } else {
      throw new Error(`Encoding "${encoding}" not supported`)
    }
  }
}


let encoder: TextEncoder = new DefaultTextEncoder()

export interface TextEncoder {
  encode(input: string, encoding: string): ArrayLike<number> | Buffer | ArrayBuffer | SharedArrayBuffer;
}

export const registerTextEncoder = (enc: TextEncoder) => {
  encoder = enc
}

export const getTextEncoder = (): TextEncoder | null => {
  return encoder
}
