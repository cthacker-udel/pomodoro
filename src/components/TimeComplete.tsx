import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast } from 'react-bootstrap';


export const TimeComplete = (): JSX.Element =>
	<Toast>
		<Toast.Header>
			<strong>Time Complete!</strong>
		</Toast.Header>
		<Toast.Body>
			Your timer has finished!
		</Toast.Body>
	</Toast>;
