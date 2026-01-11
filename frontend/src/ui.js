import { submitPipeline } from './submit';

export default function UI() {
    return (
        <button onClick={submitPipeline} className="submit-btn">
            Submit
        </button>
    );
}
