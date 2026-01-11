// import { useState, useMemo } from 'react';
// import BaseNode from './BaseNode';

// export default function TextNode({ data }) {
//   const [text, setText] = useState(data?.text || '');

//   // Extract variables like {{variable}}
//   const variables = useMemo(() => {
//     const regex = /{{\s*([a-zA-Z0-9_]+)\s*}}/g;
//     const found = new Set();
//     let match;

//     while ((match = regex.exec(text)) !== null) {
//       found.add(match[1]);
//     }

//     return Array.from(found);
//   }, [text]);

//   return (
//     <BaseNode
//       title="Text"
//       type="text"
//       inputs={variables}
//       outputs={['out']}
//     >
//       <textarea
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Enter text using {{variables}}"
//         style={{
//           width: '100%',
//           minHeight: 60,
//           resize: 'vertical',
//           fontSize: 12
//         }}
//       />

//       {variables.length > 0 && (
//         <div style={{ marginTop: 6, color: '#555', fontSize: 11 }}>
//           Inputs: {variables.join(', ')}
//         </div>
//       )}
//     </BaseNode>
//   );
// }

import { useState, useMemo } from 'react';
import BaseNode from './BaseNode';

export default function TextNode({ data }) {
  const [text, setText] = useState(data?.text || '');

  const variables = useMemo(() => {
    const regex = /{{\s*([a-zA-Z0-9_]+)\s*}}/g;
    const found = new Set();
    let match;

    while ((match = regex.exec(text)) !== null) {
      found.add(match[1]);
    }

    return Array.from(found);
  }, [text]);

  return (
    <BaseNode
      type="text"
      defaultLabel="Text0"
      inputs={variables}
      outputs={['out']}
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text using {{variables}}"
        style={{
          width: '100%',
          minHeight: 60,
          resize: 'vertical',
          fontSize: 12
        }}
      />
    </BaseNode>
  );
}
