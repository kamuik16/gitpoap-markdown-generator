const DisplayError = (props) => {
  return (
    <div className='flex flex-col items-center border border-gray-300 rounded-lg p-4 mt-4'>
      <p className='text-red-500'>{props.errorValue}</p>
    </div>
  );
};

export default DisplayError;
