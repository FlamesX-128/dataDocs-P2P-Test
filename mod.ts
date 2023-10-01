import { StandardWebSocketClient, WebSocketClient, WebSocketServer } from 'websocket'
import { Signature } from "./src/types/mod.ts";

enum MessageType {
    ResponseNodes,
    RequestNodes,

    ResponseNode,
    RequestNode,

    NodeAuth,
}

interface IMessage {
    type: MessageType
    data: null
}

class Message <T extends object> {
    public readonly type: MessageType
    public readonly data: T
    
    constructor(type: MessageType, data: T) {
        this.type = type
        this.data = data
    }
}

interface INode {
    signature: string,
    publicKey: string,
}

class Node implements INode {
    public readonly signature: string
    public readonly publicKey: string

    public readonly _ws: WebSocketClient

    constructor(ws: WebSocketClient, node: INode) {
        this.signature = node.signature
        this.publicKey = node.publicKey

        this._ws = ws
    }
}

class Application {
    private readonly externalClients: WebSocketClient[] = []
    private readonly internalClients: WebSocketClient[] = []
    private readonly server: WebSocketServer

    private readonly nodes: Map<string, Node> = new Map()

    constructor(port: number) {
        this.server = new WebSocketServer(port)

        this.server.on('connection', this.onServerConnection)
        this.server.on('error', this.onServerError)
    }

    // - - - Server - - -
    onRequestNodes(ws: WebSocketClient, node: Node, msg: IMessage) {

    }

    onRequestNode(ws: WebSocketClient, node: Node, msg: IMessage) {}

    // - - - Server - - -
    onServerConnection(ws: WebSocketClient) {
        let node: Node

        const onMessage = (message: string) => {
            const msg = JSON.parse(message) as IMessage

            switch (msg.type) {
                case MessageType.NodeAuth:


                default:
                    break
            }
        }

        ws.on('message', onMessage)
    }

    onServerError(err: unknown) { }
}
