CREATE TABLE Document
{
    documentId VARCHAR(512) NOT NULL PRIMARY KEY,

    signature VARCHAR(512) NOT NULL,
    privateKey VARCHAR(256), 
    publicKey VARCHAR(256) NOT NULL,

    title VARCHAR(64) NOT NULL,

    createdAt INT NOT NULL,
    updatedAt INT NOT NULL,
}

CREATE TABLE DocumentOwners
{
    documentId VARCHAR(512) NOT NULL,
    ownerId VARCHAR(512) NOT NULL,
}

CREATE TABLE DocumentContent
{
    documentId VARCHAR(512) NOT NULL,
    content VARCHAR(1024) NOT NULL,

    type INT NOT NULL,
    number INT NOT NULL, 
}

CREATE TABLE DocumentComment
{
    docCommentId VARCHAR(512) NOT NULL PRIMARY KEY,
    documentId VARCHAR(512) NOT NULL,

    createdAt INT NOT NULL,
    updatedAt INT NOT NULL,
}
