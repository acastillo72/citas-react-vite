
const Error = ({mensaje}) => {
  return (
    <div
      className="bg-red-600 text-white p-3 uppercase font-bold mb-3 text-center">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
