import { MagnifyingGlassPlus } from 'phosphor-react';

export function CreateAdBanner() {
  return (
    <div className='mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden'>
      <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
        <div>
          <strong className='text-2xl text-white font-black block'>Didn't find your duo?</strong>
          <span className='text-zinc-400 block'>Post an ad to find new players!</span>
        </div>
        <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3'>
          <MagnifyingGlassPlus size='24' />
          Post ad
        </button>
      </div>
    </div>
  );
}