import {
  any,
  anyNumber,
  anyString,
  arrayContaining,
  defineExpect,
  jestExtendedMatcherMap,
  jestMatcherMap,
  jestModifierMap,
  objectContaining,
  stringMatching,
  test,
} from "https://deno.land/x/unitest@v1.0.0-beta.46/mod.ts";
import { isNull, isNumber } from "https://deno.land/x/isx/mod.ts";

const expect = defineExpect({
  matcherMap: {
    ...jestMatcherMap,
    ...jestExtendedMatcherMap,

    toBeNumberOrNull: (actual: unknown) => {
      return {
        pass: isNumber(actual) || isNull(actual),
        expected: "number or null",
      };
    },
  },

  modifierMap: jestModifierMap,
});

export {
  any,
  anyNumber,
  anyString,
  arrayContaining,
  expect,
  objectContaining,
  stringMatching,
  test,
};
