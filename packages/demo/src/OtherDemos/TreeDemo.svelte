<script lang="ts">
    import '../../../../dist/tree.wc.js';
    import '../../../../dist/node.wc.js';
    import '../../../../dist/node-draggable.wc.js';
    let collapsable=false;
  </script>

<div>
    <jp-tree title="First Root not collapsable" {collapsable}>
      <jp-node>Apple</jp-node>
      <jp-node-draggable>Banana draggable</jp-node-draggable>
      <jp-node>Fruit Loops</jp-node>
    </jp-tree>
    <jp-tree title="Second Root">
      <jp-tree title="Inner Root">
        <jp-node-draggable>Broccoli draggable</jp-node-draggable>
        <jp-node>Brussels sprouts</jp-node>
      </jp-tree>
      <jp-node>Tomato</jp-node>
    </jp-tree>
  </div>