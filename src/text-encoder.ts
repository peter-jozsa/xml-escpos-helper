class DefaultTextEncoder implements TextEncoder {
  encodingExists(encoding: string): boolean {
    return encoding === 'utf8' || encoding === 'utf-8'
  }

  encode(input: string, encoding: string): Uint8Array {
    if (encoding === 'utf8' || encoding === 'utf-8') {
      return Buffer.from(input, 'utf8')
    } else {
      throw new Error(`Encoding "${encoding}" not supported`)
    }
  }
}


let encoder: TextEncoder = new DefaultTextEncoder()

export interface TextEncoder {
  encodingExists(encoding: string): boolean;
  encode(input: string, encoding: string): Uint8Array;
}

export const registerTextEncoder = (enc: TextEncoder) => {
  encoder = enc
}

export const getTextEncoder = (): TextEncoder | null => {
  return encoder
}
