type CourseProps = {
  title: string;
  id: string;
};

function ChoiceBar(props: CourseProps) {
  return (
    <li
      key={props.id}
      className="flex flex-row w-80 bg-gray-300 place-content-between"
    >
      <div className="bg-blue-200 p-1 m-2 w-60">{props.title}</div>
      <div className="bg-blue-800 p-1 m-2 w-20 text-center text-white">
        Buchen
      </div>
    </li>
  );
}

export default ChoiceBar;
