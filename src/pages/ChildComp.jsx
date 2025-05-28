const ChildComp = ({ title, desc, isActive, onToggle }) => {
  const handleClick = () => {
    onToggle();
  };

  return (
    <div className="border-gray-100 flex flex-col m-4 bg-gray-100 shadow px-3 py-4">
      <div className="p-2 flex justify-between items-center">
        <span className="font-bold">{title}</span>
        <button
          className="px-4 py-2 bg-blue-800 text-white font-medium"
          onClick={handleClick}
        >
          {isActive ? "hide" : "show"}
        </button>
      </div>
      {isActive && <div className="p-4 border-t-1">{desc}</div>}
    </div>
  );
};

export default ChildComp;
