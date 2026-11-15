// Headless tests. Run with: node test.js
const assert = require("assert");
const {
  ITEMS, findItem, allResources, itemsUsingResource, totalForPlan, allCategories,
} = require("./data.js");

let passed = 0;
function test(name, fn) {
  try {
    fn();
    passed++;
    console.log("PASS -", name);
  } catch (e) {
    console.error("FAIL -", name, "-", e.message);
    process.exitCode = 1;
  }
}

test("at least 25 rows with real quantities (charter floor)", () => {
  const withRealQty = ITEMS.filter(i => Array.isArray(i.cost) && i.cost.length > 0);
  assert.ok(withRealQty.length >= 25, `only ${withRealQty.length} rows with real quantities`);
});

test("item count is comfortably above 100 (buildings + decorations)", () => {
  assert.ok(ITEMS.length > 100, `only ${ITEMS.length} items`);
});

test("known-answer: Sleeping Bag costs 5 Lumber, 10 Coins (wiki.gg) and carries a version-diff note", () => {
  const i = findItem("Sleeping Bag");
  assert.ok(i);
  assert.deepStrictEqual(i.cost, [{ resource: "Lumber", qty: 5 }, { resource: "Coins", qty: 10 }]);
  assert.ok(i.conflict && i.conflict.includes("TechRaptor"));
});

test("known-answer: Grand Shelter costs 2 Wooden Planks, 2 Gold Bars, 3 Fertilizer", () => {
  const i = findItem("Grand Shelter");
  assert.ok(i);
  assert.deepStrictEqual(i.cost, [
    { resource: "Wooden Planks", qty: 2 },
    { resource: "Gold Bars", qty: 2 },
    { resource: "Fertilizer", qty: 3 },
  ]);
});

test("known-answer: Shrine costs 30 Coins only", () => {
  const i = findItem("Shrine");
  assert.ok(i);
  assert.deepStrictEqual(i.cost, [{ resource: "Coins", qty: 30 }]);
});

test("buildings with no sourced cost read 'not published', not invented", () => {
  for (const name of ["Tailor", "Leader Tent", "Drinkhouse", "Mating Tent", "Hatchery", "Drum Circle"]) {
    const i = findItem(name);
    assert.ok(i, name + " should exist");
    assert.strictEqual(i.cost, "not published");
  }
});

test("Flower Flooring and Flooring of the Old Faith cost 'None', not 'not published'", () => {
  assert.strictEqual(findItem("Flower Flooring").cost, "None");
  assert.strictEqual(findItem("Flooring of the Old Faith").cost, "None");
});

test("Paths carry 'None' cost per both sources, not invented numbers", () => {
  for (const name of ["Dirt Flooring", "Hay Flooring", "Lava Flooring", "Gold Flooring"]) {
    const i = findItem(name);
    assert.ok(i, name + " should exist");
    assert.strictEqual(i.cost, "None");
  }
});

test("known-answer conflict: Mushroom Sculpture flags the wiki.gg/TechRaptor quantity disagreement", () => {
  const i = findItem("Mushroom Sculpture");
  assert.ok(i);
  assert.deepStrictEqual(i.cost, [
    { resource: "Menticide Mushroom", qty: 35 },
    { resource: "Gold Bars", qty: 20 },
  ]);
  assert.ok(i.conflict && i.conflict.includes("28 Menticide Mushroom"));
});

test("known-answer conflict: Massive Monster Shrine flags Stone Blocks vs Stone Brick disagreement", () => {
  const i = findItem("Massive Monster Shrine");
  assert.ok(i);
  assert.ok(i.conflict && i.conflict.includes("4 Stone Brick"));
});

test("single-source trophy items (Leshy, Heket, Kallamar, Shamura) disclose TechRaptor's blank, not a zero", () => {
  for (const name of ["Leshy Trophy", "Heket Trophy", "Kallamar Trophy", "Shamura Trophy"]) {
    const i = findItem(name);
    assert.ok(i, name + " should exist");
    assert.ok(Array.isArray(i.cost) && i.cost.length > 0);
    assert.ok(i.conflict && i.conflict.includes("no cost"));
  }
});

test("allResources covers the major resource types", () => {
  const res = allResources();
  for (const r of ["Lumber", "Stone", "Coins", "Gold Bars", "Grass", "Camellia", "Bone", "Spider Silk", "Crystal Shards"]) {
    assert.ok(res.includes(r), r + " missing from allResources()");
  }
});

test("reverse lookup: itemsUsingResource('Bone') includes Bone Wall and Giant Skull", () => {
  const names = itemsUsingResource("Bone").map(x => x.name);
  assert.ok(names.includes("Bone Wall"));
  assert.ok(names.includes("Giant Skull"));
});

test("reverse lookup: itemsUsingResource returns correct qty for Bone Arch", () => {
  const entry = itemsUsingResource("Bone").find(x => x.name === "Bone Arch");
  assert.ok(entry);
  assert.strictEqual(entry.qty, 4);
});

test("totalForPlan sums two Sleeping Bags and one Shrine correctly", () => {
  const { totals, notPublished } = totalForPlan([
    { name: "Sleeping Bag", qty: 2 },
    { name: "Shrine", qty: 1 },
  ]);
  assert.strictEqual(totals["Lumber"], 10);
  assert.strictEqual(totals["Coins"], 30 + 20);
  assert.deepStrictEqual(notPublished, []);
});

test("totalForPlan reports not-published items separately instead of silently zero-ing them", () => {
  const { totals, notPublished } = totalForPlan([
    { name: "Tailor", qty: 1 },
    { name: "Shrine", qty: 1 },
  ]);
  assert.ok(notPublished.includes("Tailor"));
  assert.strictEqual(totals["Coins"], 30);
});

test("every category appears on at least one item and categories span buildings and decorations", () => {
  const cats = allCategories();
  assert.ok(cats.some(c => c.startsWith("Follower")));
  assert.ok(cats.some(c => c.startsWith("Faith")));
  assert.ok(cats.some(c => c.startsWith("Decoration")));
});

console.log(`\n${passed} tests passed (see PASS/FAIL lines above)`);
if (process.exitCode) {
  console.error("\nSOME TESTS FAILED");
} else {
  console.log("\nALL TESTS PASSED");
}
