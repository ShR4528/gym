// onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
// >
// {/* HEADER */}
// <div '>
//   <HText> More Than Just Gym. </HText>
//  
//   </motion.div>
// {/* BENEFITS */}
// <div
//   className='mt-5 items-center justify-between gap-8 md:flex'
//   initial='hidden'
//   whileInView='visible'
//   viewport={{ once: true, amount: 0.5 }}
//   variants={container}
// >
//   {benefits.map((benefit: BenefitType) => (
//     <Benefit
//       key={benefit.title}
//       icon={benefit.icon}
//       title={benefit.title}
//       description={benefit.description}
//       setSelectedPage={setSelectedPage}
//     />
//   ))}
// </div>  
// </div>