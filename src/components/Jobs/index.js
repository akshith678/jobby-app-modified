import Header from '../Header'
import EmployeeDetailsSection from '../EmployeeDetailsSection'
import JobItemDetails from '../JobItemDetails'

import './index.css'

const jobs = () => (
  <>
    <Header />
    <div className="job-section">
      <EmployeeDetailsSection />
      <JobItemDetails />
    </div>
  </>
)

export default jobs
