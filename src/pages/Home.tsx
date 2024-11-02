import { Block } from '../components/Block'
import { BlockTitle } from '../components/BlockTitle'
import { Quote } from '../components/Quote'
import { Testimonials } from '../components/Testimonials'

export const Home = () => {
  return (
    <div>
      <div className='py-[100px] '>
        <BlockTitle title='¿Que es la masonería?' />
        <Block>
          <div className='text-3xl'>
            <p className='my-4 leading-10'>La masonería es una antigua organización fraternal con profundas raíces históricas que se originó en los gremios medievales de constructores. Se define como una institución filosófica, filantrópica y progresista que busca el desarrollo moral y espiritual de sus miembros a través de principios fundamentales como la libertad, igualdad y fraternidad. Opera mediante un sistema de símbolos, rituales y enseñanzas alegóricas, principalmente basados en el arte de la construcción, donde sus miembros se reúnen en logias para practicar sus rituales y trabajar en su crecimiento personal. Aunque no es una religión, tradicionalmente requiere que sus miembros crean en un Ser Supremo y se dedica a la búsqueda de la verdad, el conocimiento y el mejoramiento de la sociedad a través de obras benéficas y el desarrollo personal de sus integrantes.</p>
          </div>
        </Block>
      </div>
      <Quote title='En la unión está la fuerza, en la fe está la verdad, y en el trabajo está la virtud' />
      <div className='py-[100px] bg-slate-800 text-white'>
        <BlockTitle title='La masonería francesa' />
        <Block>
          <div className='text-3xl'>
            <p className='my-4 leading-10'>La masonería francesa, representada principalmente por el Gran Oriente de Francia (fundado en 1773), se distingue de otras corrientes masónicas por su carácter particularmente laico y liberal, habiendo eliminado en 1877 el requisito de creer en un Ser Supremo o Gran Arquitecto del Universo, lo que la diferencia de la masonería anglosajona tradicional. Se caracteriza por su fuerte compromiso con los valores republicanos, el laicismo, la justicia social y la libertad de pensamiento, teniendo un papel histórico significativo en el desarrollo de la República Francesa y sus ideales de "Liberté, Égalité, Fraternité". Esta rama de la masonería ha sido especialmente influyente en el desarrollo político y social de Francia, defendiendo activamente la separación entre Iglesia y Estado, la educación pública laica y los derechos humanos, manteniendo hasta hoy una notable presencia en la sociedad francesa y una significativa influencia en la masonería continental europea.</p>
          </div>
        </Block>
      </div>
      <div className='py-[100px] '>
       <Testimonials />
      </div>

    </div>
  )
}
