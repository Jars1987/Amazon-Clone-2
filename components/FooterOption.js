function FooterOption({ name1, name2 }) {
  return (
    <div className='group cursor-pointer mx-10'>
      <p className='text-[11px] font-medium text-gray-300 group-hover:underline group-hover:decoration-white'>
        {name1}
      </p>
      <p className='text-[11px] text-gray-400 group-hover:underline group-hover:decoration-gray-300'>
        {name2}
      </p>
    </div>
  );
}

export default FooterOption;
