import React from "react";
import { Source_Serif_4 } from "next/font/google";

const sourceSerif = Source_Serif_4({ subsets: ["latin"] });

const ProjectText = () => {
  return (
    <div>
      <div className={` flex flex-col gap-2 text-lg text-gray-900`}>
        <h1 className='text-2xl font-bold'>What is Lorem Ipsum?</h1>
        <p className={`leading-relaxed ${sourceSerif.className}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>{" "}
      <div className='mt-20 flex flex-col gap-2 text-lg'>
        <h1 className='text-2xl font-bold'>Where does it come from?</h1>
        <p className={`leading-relaxed ${sourceSerif.className}`}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of
          Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
          the theory of ethics, very popular during the Renaissance. The first
          line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes
          from a line in section 1.10.32.
        </p>
      </div>
    </div>
  );
};

export default ProjectText;
