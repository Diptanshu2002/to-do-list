export default function Title(props) {
  return (
    <>
      <h1 className="title"> {props.title} </h1>
      <h2 className="subtitle"> {props.subTitle} </h2>
    </>
  );
}
