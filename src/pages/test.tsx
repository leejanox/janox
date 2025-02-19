import '@css/nikepage.scss'
import AlphaFly_1 from '@assets/images/nike/ALPHAFLY_1.png'
import I_Btn from '@components/buttons/indicatorBtn'

const TestPage = () => {

  return (
    <div className="test-container">
      <img src={AlphaFly_1} alt="Nike AlphaFly 1" />
      <div className='indicator'>
        <I_Btn current={0} length={3}/>
      </div>
    </div>
  )
}

export default TestPage