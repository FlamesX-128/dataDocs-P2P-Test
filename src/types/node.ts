import { excludeObjectProperties } from '../tools/mod.js'
import { Signature } from './mod.js'

interface INode {
    _signature: Signature
    _id: string

    username: string
    avatarUrl: string

    createdAt: number
    updatedAt: number
}

class Node implements INode {
    public readonly _signature: Signature
    public readonly _id: string

    public readonly username: string
    public readonly avatarUrl: string

    public readonly createdAt: number
    public readonly updatedAt: number

    constructor(content: INode) {
        this._signature = Signature.from(content._signature)
        this._id = content._id

        this.username = content.username
        this.avatarUrl = content.avatarUrl

        this.createdAt = content.createdAt
        this.updatedAt = content.updatedAt
    }

    public static from(content: INode | string) {
        if (typeof content === 'string') {
            return new Node(JSON.parse(content))
        }

        if (typeof content === 'object') {
            return new Node(content)
        }

        throw new Error('Invalid content')
    }

    public toString = (): string => JSON.stringify(
        excludeObjectProperties.call(this, 'privateKey')
    )

}

export type { INode }
export { Node }
