import ScreeningsLayout from 'src/layouts/ScreeningsLayout'
import EditScreeningCell from 'src/components/EditScreeningCell'

const EditScreeningPage = ({ id }) => {
  return (
    <ScreeningsLayout>
      <EditScreeningCell id={id} />
    </ScreeningsLayout>
  )
}

export default EditScreeningPage
