// https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.md

// Tがlengthプロパティを持っている場合、配列なので、その値をinferでLにセットしてlengthを返す
type Length<T> = T extends {length: infer L} ? L : never
  
// Tが何かの配列である場合、Tのlengthを返す
type Length2<T> = T extends any[] ? T["length"] : never

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length2<spaceX> // expected 5