import { excludeObjectProperties } from '../tools/mod.js'
import { Content, Signature } from './mod.js'

enum PostType {
    Banner,
    HTML,
    Image,
    KaTeX,
    Markdown,
    Mermaid,
    PlantUML,
    Text,
    Separator,
    Video,
}

interface IPost {
    // The public key is the same as the author
    _signature: Signature

    // sha256 hash of the post
    _id: string

    title: string
    content: Content[]
    comments: Comment[]

    createdAt: number
    updatedAt: number
}

class Post implements IPost {
    public readonly _signature: Signature
    public readonly _id: string

    public readonly title: string
    public readonly content: Content[]
    public readonly comments: Comment[]

    public readonly createdAt: number
    public readonly updatedAt: number

    constructor(content: IPost) {
        this._signature = Signature.from(content._signature)
        this._id = content._id

        this.title = content.title
        this.content = content.content
        this.comments = content.comments

        this.createdAt = content.createdAt
        this.updatedAt = content.updatedAt
    }

    public static from(content: IPost | string) {
        if (typeof content === 'string') {
            return new Post(JSON.parse(content))
        }

        if (typeof content === 'object') {
            return new Post(content)
        }

        throw new Error('Invalid content')
    }

    public toString = (): string => JSON.stringify(
        excludeObjectProperties.call(this, 'privateKey')
    )
}

export type { IPost }
export { Post, PostType }
