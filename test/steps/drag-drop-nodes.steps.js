const cucumber = require("@cucumber/cucumber");
const Given = cucumber.Given;
const When = cucumber.When;
const Then = cucumber.Then;
const path = require("path");
const {getNodeCoordinates, centerCanvas, isCompound, getParentOf, createNode} = require("../helpers/cytoscape.helper");
const {expect} = require("chai");

Given(/^I have opened the cytoscape canvas$/, async function () {
  await this.page.goto('file://' + path.resolve(`./test/test-beds/canvas.html`));
});

Given("I have the following nodes", async function (dataTable) {
  for (const obj of dataTable.hashes()) {
    await createNode(this.page, obj.Node, obj.Parent);
  }

});

When(/^I drag node "([^"]*)" over node "([^"]*)"$/, async function (firstNode, secondNode) {
  const page = this.page;
  let firstNodeCoordinates = await getNodeCoordinates(page, firstNode);
  let secondNodeCoordinates = await getNodeCoordinates(page, secondNode);

  await page.mouse.move(firstNodeCoordinates.x, firstNodeCoordinates.y);
  await page.mouse.down();
  await page.mouse.move(secondNodeCoordinates.x, secondNodeCoordinates.y, {steps: 24});
  await page.mouse.up();

  await centerCanvas(page);
});

Then(/^Node "([^"]*)" becomes a compound node$/, async function (nodeId) {
  let result = await isCompound(this.page, nodeId);
  expect(result).to.eq(true);
});

Then(/^Node "([^"]*)" becomes a child of node "([^"]*)"$/, async function (childNodeId, expectedParent) {
  let parent = await getParentOf(this.page, childNodeId);
  expect(parent).to.eq(expectedParent);
});
