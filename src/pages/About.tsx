import { BlockTitle } from '../components/BlockTitle'
import { Block } from '../components/Block'
import { TwoBlocks } from '../components/TwoBlocks'
import marianne from '../assets/img/marianne.jpg'

export const About = () => {
  return (
    <div>
      <div className='py-[100px] '>
        <BlockTitle title='G:.O:.D:.C:.' />
        <TwoBlocks>
          <div className='flex-1'>
            <img src={marianne} alt="marianne" />
          </div>
          <div className='text-3xl flex-1'>
            <p className='my-4 leading-10'>El Gran Oriente de Colombia, fundado en 1989 en Bogotá, representa una de las instituciones masónicas más significativas del país, Operando bajo el Rito Frances, esta organización se fundamenta en principios esenciales como la libertad de pensamiento, la tolerancia, la fraternidad y la búsqueda continua del conocimiento. A lo largo de su historia, ha dejado una huella indeleble en la sociedad colombiana a través de sus obras sociales, contribuciones culturales y labor educativa. En la actualidad, mantiene una presencia activa en la sociedad, adaptando sus métodos a los tiempos modernos mientras preserva sus tradiciones centenarias, y continúa su misión de promover el desarrollo personal y espiritual de sus miembros, así como su compromiso con la labor filantrópica, manteniendo relaciones fraternales con grandes logias de otros países y operando en Bogotá.</p>
          </div>
        </TwoBlocks>
      </div>
      <div className='py-[100px] bg-slate-800 text-white'>
        <BlockTitle title='Nuestros principios' />
        <Block>
          <div className='flex-col'>
            <div className='mb-[100px]'>
              <h3 className='md:text-4xl xl:text-5xl'>FUNDAMENTOS FILOSÓFICOS</h3>
              <p className='text-3xl my-4 leading-10'>La masonería francesa se distingue por su fuerte compromiso con la libertad absoluta de conciencia y el secularismo (laïcité), principios que han sido fundamentales en su desarrollo histórico y filosófico. Esta tradición masónica ha establecido un enfoque único que no requiere la creencia en un Ser Supremo, diferenciándose así de otras corrientes masónicas. Su base filosófica se centra en el racionalismo, el humanismo y la búsqueda constante del conocimiento, promoviendo una aproximación científica y crítica al entendimiento del mundo y la sociedad.</p>
            </div>
            <div className='mb-[100px]'>
              <h3 className='md:text-4xl xl:text-5xl'>ESTRUCTURA Y MÉTODO DE TRABAJO</h3>
              <p className='text-3xl my-4 leading-10'>El método de trabajo de la masonería francesa se caracteriza por su aproximación sistemática al desarrollo personal y colectivo, utilizando el simbolismo y la reflexión filosófica como herramientas fundamentales. Sus logias acogen tanto a hombres como mujeres, reflejando su compromiso con la igualdad y la inclusión. El trabajo en logia se desarrolla a través del debate constructivo y la búsqueda colectiva de la verdad, empleando rituales y símbolos como medios para transmitir enseñanzas morales y filosóficas, siempre bajo la perspectiva del pensamiento libre y el análisis racional.</p>
            </div>
            <div>
              <h3 className='md:text-4xl xl:text-5xl'>COMPROMISO SOCIAL Y OBJETIVOS</h3>
              <p className='text-3xl my-4 leading-10'>El compromiso social constituye un pilar fundamental en la masonería francesa, manifestándose a través de su activa participación en debates públicos y la defensa de causas progresistas. Sus objetivos se centran en el perfeccionamiento individual de sus miembros, pero siempre con la vista puesta en la mejora de la sociedad en su conjunto. La promoción de los valores republicanos, la defensa de la democracia y los derechos humanos, así como la búsqueda de la justicia social, son aspectos centrales de su misión. En el ámbito internacional, mantiene una red de cooperación con otras obediencias masónicas, trabajando por la paz mundial y el intercambio cultural, mientras preserva su distintiva identidad laica y progresista.</p>
            </div>
          </div>
        </Block>
      </div>
      <div className='py-[100px] '>
        <BlockTitle title="Donde nos ubicamos" />
        <Block>
          <div className='text-2xl text-center'>
            <p className='my-4 leading-10'>Cra 8a #17-22 Centro de Bogota. - Telefono: 2222222</p>
          </div>
        </Block>
      </div>
    </div>
  )
}
