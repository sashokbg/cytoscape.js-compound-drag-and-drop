/* eslint-disable no-unused-vars */

module.exports = {
  grabbedNode: node => true, // filter function to specify which nodes are valid to grab and drop into other nodes
  dropTarget: (dropTarget, grabbedNode) => true, // filter function to specify which parent nodes are valid drop targets
  dropSibling: (dropSibling, grabbedNode) => true, // filter function to specify which orphan nodes are valid drop siblings
  newParentNode: (grabbedNode, dropSibling) => ({}), // specifies element json for parent nodes added by dropping an orphan node on another orphan (a drop sibling)
  allowOrphanedParents: false, // keep parent nodes when last child is removed. Useful in combination with newParentNode callback
  includeLabels: true, // consider labels when detecting if one node is over another. See cytoscape eles.boundingBox()
  overThreshold: 10, // make dragging over a drop target easier by expanding the hit area by this amount on all sides
  outThreshold: 10 // make dragging out of a drop target a bit harder by expanding the hit area by this amount on all sides
};
