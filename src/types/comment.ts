import { excludeObjectProperties } from '../tools/mod.js'
import { Content, Signature } from './mod.js'

interface IComment {
    // The public key is the same as the author
    _signature: Signature

    // sha256 hash of the post
    _id: string

    authorId: string
    content: Content[]

    createdAt: number
    updatedAt: number
}

class Comment {
    public readonly _signature: Signature
    public readonly _id: string

    public readonly authorId: string
    public readonly content: Content[]

    public readonly createdAt: number
    public readonly updatedAt: number

    constructor(content: IComment) {
        this._signature = Signature.from(content._signature)
        this._id = content._id

        this.authorId = content.authorId
        this.content = content.content

        this.createdAt = content.createdAt
        this.updatedAt = content.updatedAt
    }

    public static from(content: IComment | string) {
        if (typeof content === 'string') {
            return new Comment(JSON.parse(content))
        }

        if (typeof content === 'object') {
            return new Comment(content)
        }

        throw new Error('Invalid content')
    }

    public toString = (): string => JSON.stringify(
        excludeObjectProperties.call(this, 'privateKey')
    )
}

export type { IComment }
export { Comment }
