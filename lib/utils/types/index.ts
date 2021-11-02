type Join<
  T extends string,
  U extends string,
  Separator extends string = '_'
> = `${T}${Separator}${U}`

type StrictExtract<T, U extends T> = T extends U ? T : never

export type { Join, StrictExtract }
