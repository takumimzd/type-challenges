type Arr = ['1', '2', '3']

type TupleToUnion<A> = A extends Array<infer items> ? items : never
type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'