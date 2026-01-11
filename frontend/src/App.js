import React, { useCallback } from 'react';
import ReactFlow, {
    addEdge,
    Background,
    Controls,
    applyNodeChanges,
    applyEdgeChanges
} from 'reactflow';
import 'reactflow/dist/style.css';

import { useStore } from './store';

import InputNode from './nodes/inputNode';
import OutputNode from './nodes/outputNode';
import LLMNode from './nodes/llmNode';
import TextNode from './nodes/textNode';

import Toolbar from './toolbar';
import UI from './ui';

const nodeTypes = {
    input: InputNode,
    output: OutputNode,
    llm: LLMNode,
    text: TextNode
};

export default function App() {
    const nodes = useStore(state => state.nodes);
    const edges = useStore(state => state.edges);
    const setNodes = useStore(state => state.setNodes);
    const setEdges = useStore(state => state.setEdges);
    const deleteNodesById = useStore(state => state.deleteNodesById);
    const clearAll = useStore(state => state.clearAll);

    const onNodesChange = useCallback(
        (changes) => {
            setNodes((nds) => applyNodeChanges(changes, nds));
        },
        [setNodes]
    );

    const onEdgesChange = useCallback(
        (changes) => {
            setEdges((eds) => applyEdgeChanges(changes, eds));
        },
        [setEdges]
    );

    const onConnect = useCallback(
        (params) => {
            setEdges((eds) => addEdge(params, eds));
        },
        [setEdges]
    );

    // const onKeyDown = useCallback(
    //     (event) => {
    //         // Delete selected nodes
    //         if (event.key === 'Delete' || event.key === 'Backspace') {
    //             const selectedIds = nodes
    //                 .filter(n => n.selected)
    //                 .map(n => n.id);

    //             if (selectedIds.length > 0) {
    //                 deleteNodesById(selectedIds);
    //             }
    //         }

    //         // Ctrl+A → select all
    //         if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'a') {
    //             event.preventDefault();
    //             setNodes(nodes.map(n => ({ ...n, selected: true })));
    //         }

    //         // Ctrl+Shift+A → clear everything (optional safety)
    //         if (
    //             (event.ctrlKey || event.metaKey) &&
    //             event.shiftKey &&
    //             event.key.toLowerCase() === 'a'
    //         ) {
    //             event.preventDefault();
    //             clearAll();
    //         }
    //     },
    //     [nodes, deleteNodesById, setNodes, clearAll]
    // );

    const onKeyDown = useCallback(
        (event) => {
            const tag = event.target.tagName;

            // 🚫 Do NOT handle delete when typing in inputs/textareas
            if (tag === 'INPUT' || tag === 'TEXTAREA') {
                return;
            }

            // Delete selected nodes
            if (event.key === 'Delete' || event.key === 'Backspace') {
                const selectedIds = nodes
                    .filter(n => n.selected)
                    .map(n => n.id);

                if (selectedIds.length > 0) {
                    deleteNodesById(selectedIds);
                }
            }

            // Ctrl / Cmd + A → select all
            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'a') {
                event.preventDefault();
                setNodes(nodes.map(n => ({ ...n, selected: true })));
            }
        },
        [nodes, deleteNodesById, setNodes]
    );

    return (
        <div
            style={{ height: '100vh', width: '100vw' }}
            onKeyDown={onKeyDown}
            tabIndex={0} // 👈 REQUIRED so div receives keyboard events
        >
            <Toolbar />
            <UI />

            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
                multiSelectionKeyCode="Shift"
                selectionKeyCode={null} // normal click selects
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
}
