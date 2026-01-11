import { create } from 'zustand';

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],

  setNodes: (updater) =>
    set((state) => ({
      nodes: typeof updater === 'function'
        ? updater(state.nodes)
        : updater
    })),

  setEdges: (updater) =>
    set((state) => ({
      edges: typeof updater === 'function'
        ? updater(state.edges)
        : updater
    })),

  deleteNodesById: (ids) =>
    set((state) => ({
      nodes: state.nodes.filter(n => !ids.includes(n.id)),
      edges: state.edges.filter(
        e => !ids.includes(e.source) && !ids.includes(e.target)
      )
    })),

  clearAll: () =>
    set({
      nodes: [],
      edges: []
    }),

  getPipeline() {
    return {
      nodes: get().nodes,
      edges: get().edges
    };
  }
}));
