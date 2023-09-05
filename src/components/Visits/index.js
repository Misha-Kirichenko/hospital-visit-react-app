import useMetaData from "../../hooks/useMetaData";

const Visits = ({ metaData }) => {
  useMetaData(metaData);
  return (
    <>
      <div>Visits</div>
    </>
  );
};

export default Visits;
