type MyAwaited<T> = T extends Promise<infer K> ? K : never 

type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string