import {
  Ticks,
  BTC,
  JPY,
  ETC,
  FCT,
  MONA,
  ETH,
  LSK,
  XEM,
  XLM,
  XRP,
  LTC,
  BAT,
  BCH,
  QTUM,
  IOST
} from '@/types/ticker'

type BasePair<T extends Ticks, U extends Ticks> = `${T}_${U}`

// JPY
export type BTC_JPY = BasePair<BTC, JPY>
export type ETC_JPY = BasePair<ETC, JPY>
export type FCT_JPY = BasePair<FCT, JPY>
export type MONA_JPY = BasePair<MONA, JPY>
export type ETH_JPY = BasePair<ETH, JPY>
export type LSK_JPY = BasePair<LSK, JPY>
export type XEM_JPY = BasePair<XEM, JPY>
export type XLM_JPY = BasePair<XLM, JPY>
export type XRP_JPY = BasePair<XRP, JPY>
export type LTC_JPY = BasePair<LTC, JPY>
export type BAT_JPY = BasePair<BAT, JPY>
export type BCH_JPY = BasePair<BCH, JPY>
export type QTUM_JPY = BasePair<QTUM, JPY>
export type IOST_JPY = BasePair<IOST, JPY>

// BTC
export type ETC_BTC = BasePair<ETC, BTC>
export type FCT_BTC = BasePair<FCT, BTC>
export type MONA_BTC = BasePair<MONA, BTC>
export type ETH_BTC = BasePair<ETH, BTC>
export type LSK_BTC = BasePair<LSK, BTC>
export type XEM_BTC = BasePair<XEM, BTC>
export type XLM_BTC = BasePair<XLM, BTC>
export type XRP_BTC = BasePair<XRP, BTC>
export type LTC_BTC = BasePair<LTC, BTC>
export type BAT_BTC = BasePair<BAT, BTC>
export type BCH_BTC = BasePair<BCH, BTC>
export type QTUM_BTC = BasePair<QTUM, BTC>
export type IOST_BTC = BasePair<IOST, BTC>
export type JPY_BTC = BasePair<JPY, BTC>

// ETC
export type BTC_ETC = BasePair<BTC, ETC>
export type FCT_ETC = BasePair<FCT, ETC>
export type MONA_ETC = BasePair<MONA, ETC>
export type ETH_ETC = BasePair<ETH, ETC>
export type LSK_ETC = BasePair<LSK, ETC>
export type XEM_ETC = BasePair<XEM, ETC>
export type XLM_ETC = BasePair<XLM, ETC>
export type XRP_ETC = BasePair<XRP, ETC>
export type LTC_ETC = BasePair<LTC, ETC>
export type BAT_ETC = BasePair<BAT, ETC>
export type BCH_ETC = BasePair<BCH, ETC>
export type QTUM_ETC = BasePair<QTUM, ETC>
export type IOST_ETC = BasePair<IOST, ETC>
export type JPY_ETC = BasePair<JPY, ETC>

// FCT
export type BTC_FCT = BasePair<BTC, FCT>
export type ETC_FCT = BasePair<ETC, FCT>
export type MONA_FCT = BasePair<MONA, FCT>
export type ETH_FCT = BasePair<ETH, FCT>
export type LSK_FCT = BasePair<LSK, FCT>
export type XEM_FCT = BasePair<XEM, FCT>
export type XLM_FCT = BasePair<XLM, FCT>
export type XRP_FCT = BasePair<XRP, FCT>
export type LTC_FCT = BasePair<LTC, FCT>
export type BAT_FCT = BasePair<BAT, FCT>
export type BCH_FCT = BasePair<BCH, FCT>
export type QTUM_FCT = BasePair<QTUM, FCT>
export type IOST_FCT = BasePair<IOST, FCT>
export type JPY_FCT = BasePair<JPY, FCT>

// MONA
export type BTC_MONA = BasePair<BTC, MONA>
export type ETC_MONA = BasePair<ETC, MONA>
export type FCT_MONA = BasePair<FCT, MONA>
export type ETH_MONA = BasePair<ETH, MONA>
export type LSK_MONA = BasePair<LSK, MONA>
export type XEM_MONA = BasePair<XEM, MONA>
export type XLM_MONA = BasePair<XLM, MONA>
export type XRP_MONA = BasePair<XRP, MONA>
export type LTC_MONA = BasePair<LTC, MONA>
export type BAT_MONA = BasePair<BAT, MONA>
export type BCH_MONA = BasePair<BCH, MONA>
export type QTUM_MONA = BasePair<QTUM, MONA>
export type IOST_MONA = BasePair<IOST, MONA>
export type JPY_MONA = BasePair<JPY, MONA>

// ETH
export type BTC_ETH = BasePair<BTC, ETH>
export type ETC_ETH = BasePair<ETC, ETH>
export type FCT_ETH = BasePair<FCT, ETH>
export type MONA_ETH = BasePair<MONA, ETH>
export type LSK_ETH = BasePair<LSK, ETH>
export type XEM_ETH = BasePair<XEM, ETH>
export type XLM_ETH = BasePair<XLM, ETH>
export type XRP_ETH = BasePair<XRP, ETH>
export type LTC_ETH = BasePair<LTC, ETH>
export type BAT_ETH = BasePair<BAT, ETH>
export type BCH_ETH = BasePair<BCH, ETH>
export type QTUM_ETH = BasePair<QTUM, ETH>
export type IOST_ETH = BasePair<IOST, ETH>
export type JPY_ETH = BasePair<JPY, ETH>

// LSK
export type BTC_LSK = BasePair<BTC, LSK>
export type ETC_LSK = BasePair<ETC, LSK>
export type FCT_LSK = BasePair<FCT, LSK>
export type MONA_LSK = BasePair<MONA, LSK>
export type ETH_LSK = BasePair<ETH, LSK>
export type XEM_LSK = BasePair<XEM, LSK>
export type XLM_LSK = BasePair<XLM, LSK>
export type XRP_LSK = BasePair<XRP, LSK>
export type LTC_LSK = BasePair<LTC, LSK>
export type BAT_LSK = BasePair<BAT, LSK>
export type BCH_LSK = BasePair<BCH, LSK>
export type QTUM_LSK = BasePair<QTUM, LSK>
export type IOST_LSK = BasePair<IOST, LSK>
export type JPY_LSK = BasePair<JPY, LSK>

// XEM
export type BTC_XEM = BasePair<BTC, XEM>
export type ETC_XEM = BasePair<ETC, XEM>
export type FCT_XEM = BasePair<FCT, XEM>
export type MONA_XEM = BasePair<MONA, XEM>
export type ETH_XEM = BasePair<ETH, XEM>
export type LSK_XEM = BasePair<LSK, XEM>
export type XLM_XEM = BasePair<XLM, XEM>
export type XRP_XEM = BasePair<XRP, XEM>
export type LTC_XEM = BasePair<LTC, XEM>
export type BAT_XEM = BasePair<BAT, XEM>
export type BCH_XEM = BasePair<BCH, XEM>
export type QTUM_XEM = BasePair<QTUM, XEM>
export type IOST_XEM = BasePair<IOST, XEM>
export type JPY_XEM = BasePair<JPY, XEM>

// XLM
export type BTC_XLM = BasePair<BTC, XLM>
export type ETC_XLM = BasePair<ETC, XLM>
export type FCT_XLM = BasePair<FCT, XLM>
export type MONA_XLM = BasePair<MONA, XLM>
export type ETH_XLM = BasePair<ETH, XLM>
export type LSK_XLM = BasePair<LSK, XLM>
export type XEM_XLM = BasePair<XEM, XLM>
export type XRP_XLM = BasePair<XRP, XLM>
export type LTC_XLM = BasePair<LTC, XLM>
export type BAT_XLM = BasePair<BAT, XLM>
export type BCH_XLM = BasePair<BCH, XLM>
export type QTUM_XLM = BasePair<QTUM, XLM>
export type IOST_XLM = BasePair<IOST, XLM>
export type JPY_XLM = BasePair<JPY, XLM>

// XRP
export type BTC_XRP = BasePair<BTC, XRP>
export type ETC_XRP = BasePair<ETC, XRP>
export type FCT_XRP = BasePair<FCT, XRP>
export type MONA_XRP = BasePair<MONA, XRP>
export type ETH_XRP = BasePair<ETH, XRP>
export type LSK_XRP = BasePair<LSK, XRP>
export type XEM_XRP = BasePair<XEM, XRP>
export type XLM_XRP = BasePair<XLM, XRP>
export type LTC_XRP = BasePair<LTC, XRP>
export type BAT_XRP = BasePair<BAT, XRP>
export type BCH_XRP = BasePair<BCH, XRP>
export type QTUM_XRP = BasePair<QTUM, XRP>
export type IOST_XRP = BasePair<IOST, XRP>
export type JPY_XRP = BasePair<JPY, XRP>

// LTC
export type BTC_LTC = BasePair<BTC, LTC>
export type ETC_LTC = BasePair<ETC, LTC>
export type FCT_LTC = BasePair<FCT, LTC>
export type MONA_LTC = BasePair<MONA, LTC>
export type ETH_LTC = BasePair<ETH, LTC>
export type LSK_LTC = BasePair<LSK, LTC>
export type XEM_LTC = BasePair<XEM, LTC>
export type XLM_LTC = BasePair<XLM, LTC>
export type XRP_LTC = BasePair<XRP, LTC>
export type BAT_LTC = BasePair<BAT, LTC>
export type BCH_LTC = BasePair<BCH, LTC>
export type QTUM_LTC = BasePair<QTUM, LTC>
export type IOST_LTC = BasePair<IOST, LTC>
export type JPY_LTC = BasePair<JPY, LTC>

// BAT
export type BTC_BAT = BasePair<BTC, BAT>
export type ETC_BAT = BasePair<ETC, BAT>
export type FCT_BAT = BasePair<FCT, BAT>
export type MONA_BAT = BasePair<MONA, BAT>
export type ETH_BAT = BasePair<ETH, BAT>
export type LSK_BAT = BasePair<LSK, BAT>
export type XEM_BAT = BasePair<XEM, BAT>
export type XLM_BAT = BasePair<XLM, BAT>
export type XRP_BAT = BasePair<XRP, BAT>
export type LTC_BAT = BasePair<LTC, BAT>
export type BCH_BAT = BasePair<BCH, BAT>
export type QTUM_BAT = BasePair<QTUM, BAT>
export type IOST_BAT = BasePair<IOST, BAT>
export type JPY_BAT = BasePair<JPY, BAT>

// BCH
export type BTC_BCH = BasePair<BTC, BCH>
export type ETC_BCH = BasePair<ETC, BCH>
export type FCT_BCH = BasePair<FCT, BCH>
export type MONA_BCH = BasePair<MONA, BCH>
export type ETH_BCH = BasePair<ETH, BCH>
export type LSK_BCH = BasePair<LSK, BCH>
export type XEM_BCH = BasePair<XEM, BCH>
export type XLM_BCH = BasePair<XLM, BCH>
export type XRP_BCH = BasePair<XRP, BCH>
export type LTC_BCH = BasePair<LTC, BCH>
export type BAT_BCH = BasePair<BAT, BCH>
export type QTUM_BCH = BasePair<QTUM, BCH>
export type IOST_BCH = BasePair<IOST, BCH>
export type JPY_BCH = BasePair<JPY, BCH>

// QTUM
export type BTC_QTUM = BasePair<BTC, QTUM>
export type ETC_QTUM = BasePair<ETC, QTUM>
export type FCT_QTUM = BasePair<FCT, QTUM>
export type MONA_QTUM = BasePair<MONA, QTUM>
export type ETH_QTUM = BasePair<ETH, QTUM>
export type LSK_QTUM = BasePair<LSK, QTUM>
export type XEM_QTUM = BasePair<XEM, QTUM>
export type XLM_QTUM = BasePair<XLM, QTUM>
export type XRP_QTUM = BasePair<XRP, QTUM>
export type LTC_QTUM = BasePair<LTC, QTUM>
export type BAT_QTUM = BasePair<BAT, QTUM>
export type BCH_QTUM = BasePair<BCH, QTUM>
export type IOST_QTUM = BasePair<IOST, QTUM>
export type JPY_QTUM = BasePair<JPY, QTUM>

// IOST
export type BTC_IOST = BasePair<BTC, IOST>
export type ETC_IOST = BasePair<ETC, IOST>
export type FCT_IOST = BasePair<FCT, IOST>
export type MONA_IOST = BasePair<MONA, IOST>
export type ETH_IOST = BasePair<ETH, IOST>
export type LSK_IOST = BasePair<LSK, IOST>
export type XEM_IOST = BasePair<XEM, IOST>
export type XLM_IOST = BasePair<XLM, IOST>
export type XRP_IOST = BasePair<XRP, IOST>
export type LTC_IOST = BasePair<LTC, IOST>
export type BAT_IOST = BasePair<BAT, IOST>
export type BCH_IOST = BasePair<BCH, IOST>
export type QTUM_IOST = BasePair<QTUM, IOST>
export type JPY_IOST = BasePair<JPY, IOST>

export type Pairs =
  | BTC_JPY
  | ETC_JPY
  | FCT_JPY
  | MONA_JPY
  | ETH_JPY
  | LSK_JPY
  | XEM_JPY
  | XLM_JPY
  | XRP_JPY
  | LTC_JPY
  | BAT_JPY
  | BCH_JPY
  | QTUM_JPY
  | IOST_JPY
  | ETC_BTC
  | FCT_BTC
  | MONA_BTC
  | ETH_BTC
  | LSK_BTC
  | XEM_BTC
  | XLM_BTC
  | XRP_BTC
  | LTC_BTC
  | BAT_BTC
  | BCH_BTC
  | QTUM_BTC
  | IOST_BTC
  | JPY_BTC
  | BTC_ETC
  | FCT_ETC
  | MONA_ETC
  | ETH_ETC
  | LSK_ETC
  | XEM_ETC
  | XLM_ETC
  | XRP_ETC
  | LTC_ETC
  | BAT_ETC
  | BCH_ETC
  | QTUM_ETC
  | IOST_ETC
  | JPY_ETC
  | BTC_FCT
  | ETC_FCT
  | MONA_FCT
  | ETH_FCT
  | LSK_FCT
  | XEM_FCT
  | XLM_FCT
  | XRP_FCT
  | LTC_FCT
  | BAT_FCT
  | BCH_FCT
  | QTUM_FCT
  | IOST_FCT
  | JPY_FCT
  | BTC_MONA
  | ETC_MONA
  | FCT_MONA
  | ETH_MONA
  | LSK_MONA
  | XEM_MONA
  | XLM_MONA
  | XRP_MONA
  | LTC_MONA
  | BAT_MONA
  | BCH_MONA
  | QTUM_MONA
  | IOST_MONA
  | JPY_MONA
  | BTC_ETH
  | ETC_ETH
  | FCT_ETH
  | MONA_ETH
  | LSK_ETH
  | XEM_ETH
  | XLM_ETH
  | XRP_ETH
  | LTC_ETH
  | BAT_ETH
  | BCH_ETH
  | QTUM_ETH
  | IOST_ETH
  | JPY_ETH
  | BTC_LSK
  | ETC_LSK
  | FCT_LSK
  | MONA_LSK
  | ETH_LSK
  | XEM_LSK
  | XLM_LSK
  | XRP_LSK
  | LTC_LSK
  | BAT_LSK
  | BCH_LSK
  | QTUM_LSK
  | IOST_LSK
  | JPY_LSK
  | BTC_XEM
  | ETC_XEM
  | FCT_XEM
  | MONA_XEM
  | ETH_XEM
  | LSK_XEM
  | XLM_XEM
  | XRP_XEM
  | LTC_XEM
  | BAT_XEM
  | BCH_XEM
  | QTUM_XEM
  | IOST_XEM
  | JPY_XEM
  | BTC_XLM
  | ETC_XLM
  | FCT_XLM
  | MONA_XLM
  | ETH_XLM
  | LSK_XLM
  | XEM_XLM
  | XRP_XLM
  | LTC_XLM
  | BAT_XLM
  | BCH_XLM
  | QTUM_XLM
  | IOST_XLM
  | JPY_XLM
  | BTC_XRP
  | ETC_XRP
  | FCT_XRP
  | MONA_XRP
  | ETH_XRP
  | LSK_XRP
  | XEM_XRP
  | XLM_XRP
  | LTC_XRP
  | BAT_XRP
  | BCH_XRP
  | QTUM_XRP
  | IOST_XRP
  | JPY_XRP
  | BTC_LTC
  | ETC_LTC
  | FCT_LTC
  | MONA_LTC
  | ETH_LTC
  | LSK_LTC
  | XEM_LTC
  | XLM_LTC
  | XRP_LTC
  | BAT_LTC
  | BCH_LTC
  | QTUM_LTC
  | IOST_LTC
  | JPY_LTC
  | BTC_BAT
  | ETC_BAT
  | FCT_BAT
  | MONA_BAT
  | ETH_BAT
  | LSK_BAT
  | XEM_BAT
  | XLM_BAT
  | XRP_BAT
  | LTC_BAT
  | BCH_BAT
  | QTUM_BAT
  | IOST_BAT
  | JPY_BAT
  | BTC_BCH
  | ETC_BCH
  | FCT_BCH
  | MONA_BCH
  | ETH_BCH
  | LSK_BCH
  | XEM_BCH
  | XLM_BCH
  | XRP_BCH
  | LTC_BCH
  | BAT_BCH
  | QTUM_BCH
  | IOST_BCH
  | JPY_BCH
  | BTC_QTUM
  | ETC_QTUM
  | FCT_QTUM
  | MONA_QTUM
  | ETH_QTUM
  | LSK_QTUM
  | XEM_QTUM
  | XLM_QTUM
  | XRP_QTUM
  | LTC_QTUM
  | BAT_QTUM
  | BCH_QTUM
  | IOST_QTUM
  | JPY_QTUM
  | BTC_IOST
  | ETC_IOST
  | FCT_IOST
  | MONA_IOST
  | ETH_IOST
  | LSK_IOST
  | XEM_IOST
  | XLM_IOST
  | XRP_IOST
  | LTC_IOST
  | BAT_IOST
  | BCH_IOST
  | QTUM_IOST
  | JPY_IOST
