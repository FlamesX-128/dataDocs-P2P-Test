CREATE TABLE Node
{
    nodeId VARCHAR(512) NOT NULL PRIMARY KEY,

    signature VARCHAR(512) NOT NULL,
    privateKey VARCHAR(256), 
    publicKey VARCHAR(256) NOT NULL,

    username VARCHAR(32) NOT NULL,
    avatarUrl VARCHAR(128) NOT NULL,

    createdAt INT NOT NULL,
    updatedAt INT NOT NULL,
}
