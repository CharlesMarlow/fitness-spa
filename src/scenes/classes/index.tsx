import { motion } from 'framer-motion';
import { SelectedPage } from '@/shared/types';
import Image1 from '@/assets/image1.png';
import Image2 from '@/assets/image2.png';
import Image3 from '@/assets/image3.png';
import Image4 from '@/assets/image4.png';
import Image5 from '@/assets/image5.png';
import Image6 from '@/assets/image6.png';
import HeaderText from '@/shared/HeaderText';
import { ClassType } from '@/shared/types';
import Class from './Class';
import { useTranslation } from 'react-i18next';

type ClassesProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Classes = ({ setSelectedPage }: ClassesProps) => {
  const { t } = useTranslation();
  const classes: Array<ClassType> = [
    {
      name: t('classes.heading1'),
      description: t('common.fillerShort'),
      image: Image1,
    },
    {
      name: t('classes.heading2'),
      image: Image2,
    },
    {
      name: t('classes.heading3'),
      description: t('common.fillerShort'),
      image: Image3,
    },
    {
      name: t('classes.heading4'),
      description: t('common.fillerShort'),
      image: Image4,
    },
    {
      name: t('classes.heading5'),
      description: t('common.fillerShort'),
      image: Image5,
    },
    {
      name: t('classes.heading6'),
      description: t('common.fillerShort'),
      image: Image6,
    },
  ];

  return (
    <section id="classes" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Classes)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HeaderText>{t('classes.title')}</HeaderText>
            <p className="py-5">{t('common.filler')}</p>
          </div>
        </motion.div>
        <div className="mt-10 h-[22.063rem] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[175rem] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Classes;
