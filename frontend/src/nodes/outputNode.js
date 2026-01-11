import BaseNode from './BaseNode';

export default function OutputNode() {
    return (
        <BaseNode
            type="output"
            defaultLabel="Output0"
            inputs={['in']}
        >
            <div
                style={{
                    width: '100%',
                    height: 24,
                    background: '#fff7ed',
                    borderRadius: 4
                }}
            />
        </BaseNode>
    );
}
