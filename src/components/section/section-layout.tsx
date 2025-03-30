'use client'

const SectionLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
      {children}
    </div>
  );
};

export default  SectionLayout
