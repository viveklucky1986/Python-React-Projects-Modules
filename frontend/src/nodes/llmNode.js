import BaseNode from './BaseNode';

export default function LLMNode() {
    return (
        <BaseNode
            type="llm"
            defaultLabel="LLM0"
            inputs={['prompt']}
            outputs={['response']}
        />
    );
}
