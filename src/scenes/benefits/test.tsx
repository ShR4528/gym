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
  className='mt-5 items-center justify-between gap-8 md:flex'
  initial='hidden'
  whileInView='visible'
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