import { useStore } from './store';

export async function submitPipeline() {
    const pipeline = useStore.getState().getPipeline();

    const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pipeline)
    });

    const result = await response.json();

    alert(
        `Pipeline Summary\n\n` +
        `Nodes: ${result.num_nodes}\n` +
        `Edges: ${result.num_edges}\n` +
        `DAG: ${result.is_dag ? 'Yes' : 'No'}`
    );
}
