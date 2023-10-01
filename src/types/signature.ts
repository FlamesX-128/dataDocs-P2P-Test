import { excludeObjectProperties } from "../tools/mod.js"

interface ISignature {
    data: string
    privateKey?: string
    publicKey: string
}

class Signature implements ISignature {
    public readonly privateKey?: string

    public readonly data: string
    public readonly publicKey: string

    constructor(content: ISignature) {
        this.data = content.data
        this.privateKey = content.privateKey
        this.publicKey = content.publicKey
    }

    public static from(content: ISignature | string) {
        if (typeof content === 'string') {
            return new Signature(JSON.parse(content))
        }

        if (typeof content === 'object') {
            return new Signature(content)
        }

        throw new Error('Invalid content')
    }

    public toString = (): string => JSON.stringify(
        excludeObjectProperties.call(this, 'privateKey')
    )
}

export type { ISignature }
export { Signature }
