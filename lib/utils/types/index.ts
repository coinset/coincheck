type Join<
  T extends string,
  U extends string,
  Separator extends string = '_'
> = `${T}${Separator}${U}`

export type { Join }
