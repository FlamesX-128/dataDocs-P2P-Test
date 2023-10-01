import { excludeObjectProperties } from "../tools/mod.ts"

interface ISignature {
    hash: string
    privateKey?: string
    publicKey: string
}

class Signature implements ISignature {
    public readonly hash: string
    public readonly privateKey?: string
    public readonly publicKey: string

    constructor(content: ISignature) {
        this.hash = content.hash
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
