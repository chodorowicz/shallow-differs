import { shallowDiffers } from "../index";

const a = {
  property1: true,
};

const b = {
  property2: true,
}

const compareA = {
  a,
  b,
}

const compareB = {
  a,
  b: a,
}

const compareC = {
  a,
  b,
}


test("it returns true only when the compared properties are equal", () => {
  expect(shallowDiffers(compareA, compareB)).toBe(true);
  expect(shallowDiffers(compareA, compareC)).toBe(false);
  expect(shallowDiffers(compareA, compareB, ["b"])).toBe(false);
  expect(shallowDiffers(compareA, compareB, ["a"])).toBe(true);
});
