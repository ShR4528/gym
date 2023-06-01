import ActionButton from '@/shared/ActionButton';
import HText from '@/shared/HText';
import Benefit from '@/scenes/benefits/Benefit';
import {BenefitType,  SelectedPage } from '@/shared/types';
import {
  HomeModernIcon,
 UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
//import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

const benefits: Array<BenefitType> = [
{  icon: <HomeModernIcon className='h-6 w-6' />,
    title: 'State of the Art Facilities',
    description: 'We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.'
  },
  {  icon: <UserGroupIcon className='h-6 w-6' />,
    title: '100s of Group Classes',
    description: 'Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.'
  },
  {  icon: <AcademicCapIcon className='h-6 w-6' />,
  title: 'Expert and Pro Trainers',
  description:
    'Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.',
  }
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    transition: { staggerChildren: 0.2 }
     }
  }


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id='benefits'
      className='mx-auto 
            min-h-full
             w-5/6 py-20'>
      <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
        {/* HEADER */}
        <div className='md:my-5 md:w-3/5'>
          <HText> More Than Just Gym. </HText>
          <p className='my-5 text-sm'>
          We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
          </motion.div>
        {/* BENEFITS */}
        <div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>  
      </div>
      </motion.div>
    </section>
  )
}

export default Benefits;