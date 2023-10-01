// @deno-types="npm:@types/node-forge"
import forge from 'node-forge'

const publicKey = 'LS0tLS1CRUdJTiBSU0EgUFVCTElDIEtFWS0tLS0tCk1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBenA4aDYzQ2ErWnhWVGs4RWk5Y3MKOTZlYVhsQ25KMW9icGcxWi9FanFyWTN5VDFkeGtEVHFjR29OYjVnV3ZnOEdvT1dUdXEwVUxyWlhqWm9ZUFV0Swp1T21CTFpOTjVOVFoyc0ZCam8rb2RWdk90alhvSFo3NjdwU1dOMmpqZnJiWFp6eFE2L1RCZEVJR3lObm0vcjgwCkdoL0xqT0VUcWgyU1dMMjVXMkZ3emgyY0RjR21oVWJsdHRJNVFWcU9MVEh0WERGaE1pVGQzaW5YdFo4Zk03U3IKdFpnUzUycVlXOFYweUdMTE1YNmJwU1ZFeWQ2bmZidStRMkZHSklSY3ZLQkVmaEdQY3ptVEJjL1RsVmNJRCtBaAo1dWQwVHhiYmpwUHVVQ3JWdFlkWU9SUnFGTEdrZVR4YXZOQUg2UGI0THN5REFOYUxYa0w0VnlnZlFNNDlJQmR3CnZ3SURBUUFCCi0tLS0tRU5EIFJTQSBQVUJMSUMgS0VZLS0tLS0K';

/** 
 * @returns {string}
 */
function RSAEncryption() {
    const publicKeyObject = forge.pki.publicKeyFromPem(
        forge.util.decode64(publicKey)
    );

    const result = publicKeyObject.encrypt(
        'abc', 'RSA-OAEP',
        {
            md: forge.md.sha256.create()
        }
    );

    return forge.util.encode64(result);
}

console.log(
    RSAEncryption()
)
