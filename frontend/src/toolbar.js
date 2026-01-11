import { useStore } from './store';

export default function Toolbar() {
    const setNodes = useStore(state => state.setNodes);

    function addNode(type) {
        setNodes(nodes => {
            const index = nodes.length;

            return [
                ...nodes,
                {
                    id: `${type}-${index + 1}`,
                    type,
                    position: {
                        x: 100 + index * 220,
                        y: 120
                    },
                    data: {
                        text: ''
                    }
                }
            ];
        });
    }

    return (
        <div
            style={{
                position: 'absolute',
                top: 10,
                left: 10,
                zIndex: 1000,
                background: '#ffffff',
                padding: '8px 10px',
                border: '1px solid #ccc',
                borderRadius: 4,
                boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                display: 'flex',
                gap: 6
            }}
        >
            <button onClick={() => addNode('input')}>Input</button>
            <button onClick={() => addNode('text')}>Text</button>
            <button onClick={() => addNode('llm')}>LLM</button>
            <button onClick={() => addNode('output')}>Output</button>
        </div>
    );
}
