import InstancingPipelineStage from "./InstancingPipelineStage.js";
import defined from "../../Core/defined.js";

export default function ModelSceneNode(options) {
  this._node = options.node;
  this._modelMatrix = options.modelMatrix;
  // TODO: Dynamic model matrix should be stored separately
  this._pipelineStages = [];

  this.scenePrimitives = [];

  initializeNode(this);
}

function initializeNode(node) {
  if (defined(node.instances)) {
    node._pipelineStages.push(InstancingPipelineStage);
  }
}