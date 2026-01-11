import BaseNode from './BaseNode';

export default function InputNode() {
    return (
        <BaseNode
            type="input"
            defaultLabel="Input0"
            outputs={['out']}
            isInputNode={true}
        >
            <div
                style={{
                    width: '100%',
                    height: 24,
                    background: '#eff6ff',
                    borderRadius: 4
                }}
            />
        </BaseNode>
    );
}
