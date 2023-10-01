import { PostType } from './mod.js'

interface IContent<T extends PostType = any> {
    type: T
    data: T extends PostType.Separator
        ? undefined
        : string
}

class Content<T extends PostType = any> implements IContent<T> {
    public readonly type: T
    public readonly data: T extends PostType.Separator
        ? undefined
        : string

    constructor(content: IContent<T>) {
        this.type = content.type
        this.data = content.data
    }

    public static from(content: IContent | string) {
        if (typeof content === 'string') {
            return new Content(JSON.parse(content))
        }

        if (typeof content === 'object') {
            return new Content(content)
        }

        throw new Error('Invalid content')
    }

    public toString = (): string => JSON.stringify(
        this
    )
}

export type { IContent }
export { Content }
