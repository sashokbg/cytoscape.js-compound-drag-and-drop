Feature: Drag and Drop Compound Nodes

  Background:
    Given I have opened the cytoscape canvas

  Rule: A node can be dragged over another node to form a compound node
    Example: Drag a node over a sibling nodes
      Given I have the following nodes
        | Node | Parent |
        | a    |        |
        | b    |        |
      When I drag node "a" over node "b"
      Then Node "b" becomes a compound node
      And Node "a" becomes a child of node "b"

    Example: Drag a node over a node that is already a parent
      Given I have the following nodes
        | Node | Parent |
        | a    |        |
        | b    | a      |
        | c    |        |
      When I drag node "c" over node "a"
      And Node "c" becomes a child of node "a"
