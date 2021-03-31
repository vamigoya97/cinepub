import ScreeningsLayout from 'src/layouts/ScreeningsLayout'
import ScreeningCell from 'src/components/ScreeningCell'

const ScreeningPage = ({ id }) => {
  return (
    <ScreeningsLayout>
      <ScreeningCell id={id} />
    </ScreeningsLayout>
  )
}

export default ScreeningPage
