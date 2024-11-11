import Card from "../shared/Card"
import { Link } from 'react-router-dom';


function AboutPage() {
  return (
    <Card>
        <h1>About this Project</h1>
        <p>This is a project to learn react basics</p>
        <p>Version : 2.0</p>
        <p>
            <Link to="/">Back to Home</Link>
        </p>
    </Card>
  )
}

export default AboutPage