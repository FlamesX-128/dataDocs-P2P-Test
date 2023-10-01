function excludeObjectProperties<T extends Object>(this: T, ...keys: string[]): T {
    return Object.entries(this).reduce((acc, [key, value]) =>
        keys.includes(key)
            ? acc
            : typeof value === 'object'
                ? { ...acc, [key]: excludeObjectProperties.call(this, ...keys) }
                : { ...acc, [key]: value }
        , {} as T
    )
}

function from<T>(ctor: ((new (...value: any) => T) | ((...value: any) => T)), ...value: any): T {
    if (ctor.constructor && ctor.constructor.name === 'Function') {
        return new (ctor as new (...value: any) => T)(...value);
    } else {
        return (ctor as (...value: any) => T)(...value);
    }
}

function toString<T>(this: T) {
    return JSON.stringify(this);
}

export { excludeObjectProperties, from, toString }
